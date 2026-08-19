import { useState } from "react"
import axios from 'axios';
import ScreenWrapper from '../components/ScreenWrapper'
import SortableCardsBlock from "../components/template-page/SortableCardsBlock";
import { ModuleEditor } from "../editor/ModuleEditor";
import { Module, ModuleData, ModuleRegistry, ModuleRegistryItem, ModuleSlug, SelectedModule } from "../types/module.types";
import { moduleRegistry } from '../config/moduleRegistry';
import AvailableModules from '../components/template-page/AvailableModules.tsx';
import SavedModules from '../components/template-page/SavedModules.tsx';
import Switcher from "../elements/Switcher.tsx";
import ConfirmModal from "../components/ui/ConfirmModal";
import TabsSwitcher from "../elements/TabsSwitcher.tsx";

type ModuleMode = 'list' | 'edit' | 'saved';

export default function TemplatesCreatePage() {
  const [moduleMode, setModuleMode] = useState<ModuleMode>('list');
  const [hideLayers, setHideLayers] = useState<boolean>(false);
  const [selectedModules, setSelectedModules] =
    useState<SelectedModule[]>([]);
  const [selectedId, setSelectedId] =
    useState<string | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const selectedModule =
    selectedModules.find(
      module => module.id === selectedId
    );

  const handleSaveTemplate = async () => {
    const endpoint = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/templates';

    setIsSaving(true);

    try {
      const payload = {
        modules: selectedModules.map(({ id, slug, name, data }) => ({
          id,
          slug,
          name,
          data,
        })),
      };

      await axios.post(endpoint, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Template saved successfully');
    } catch (error) {
      console.error('Failed to save template:', error);
      window.alert('Не вдалося зберегти шаблон. Перевірте, чи запущено backend на адресу ' + endpoint);
    } finally {
      setIsSaving(false);
    }
  };

  const addModule = (slug: ModuleSlug) => {
    const config = moduleRegistry[slug];

    if (!config) return

    const newModule: SelectedModule = {
      // id: crypto.randomUUID(),
      id: Date.now().toString(),
      slug,
      name: config.name,
      data: config.createData(),
      icon: config.icon,
    };

    setSelectedModules(prev => [...prev, newModule]);
    setSelectedId(newModule.id);
  };

  const confirmRemoveModule = () => {
    if (!deleteTargetId) return;

    if (selectedId === deleteTargetId) {
      setSelectedId(null);
    }

    setSelectedModules(prev => prev.filter(i => i.id !== deleteTargetId));
    setDeleteTargetId(null);
    setModuleMode('list');
  };

  const removeModule = (id: string) => {
    setDeleteTargetId(id);
  };

  const selectModule = (id: string) => {
    setSelectedId(id);
    setModuleMode('edit');

  }

  const updateModule = (
    id: string,
    data: ModuleData
  ) => {
    setSelectedModules(prev =>
      prev.map(module =>
        module.id === id
          ? {
            ...module,
            data,
          }
          : module
      )
    );
  };

  const module = moduleRegistry[selectedModule?.slug as ModuleSlug];


  const isMobile = window.innerWidth <= 768;
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="h-screen w-screen overflow-hidden bg-[#1d1d1d]">
        <ConfirmModal
          isOpen={deleteTargetId !== null}
          title="Видалити модуль?"
          message="Ця дія видалить обраний модуль із списку. Відновлення не буде доступне."
          confirmText="Видалити"
          cancelText="Скасувати"
          onConfirm={confirmRemoveModule}
          onCancel={() => setDeleteTargetId(null)}
        />

        {/* блок для рендеру модуля */}
        <RenderModule
          selectedId={selectedId}
          selectedModule={selectedModule}
          selectedModules={selectedModules}
          setSelectedId={setSelectedId}
          module={module}
        />

        <div
          className={`
            fixed bottom-[124px] left-0 w-full bg-gray-800 z-[10]
            transition-transform duration-700 ease-in-out pt-2
            h-[calc(100dvh-150px)]
            ${isOpen
              ? "translate-y-[0px]"
              : "translate-y-[calc(100%-20px)]"
            }
          `}
        >
          {/* кнопка для згортання/розгортання списку модулів */}
          <button
            type="button"
            onClick={() => setIsOpen(prev => !prev)}
            className="absolute top-[-20px] right-0 h-[20px] w-[50px] flex items-center justify-center rounded-t-lg bg-gray-800"
          >
            <svg
              className={`
                transition-transform duration-300
                ${isOpen ? "-rotate-90" : "rotate-90"}
              `}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"></path>
            </svg>
          </button>

          {/* світчер для блоків вибір/редагування модуля */}
          <div className="pl-2">
            <TabsSwitcher
              tabs={[
                {
                  id: "list", content: (
                    <svg
                      className={moduleMode === 'list' ? 'active' : ''}
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17.423 22.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM5 19V5zm.616 1q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v8.325q-.238-.102-.479-.181q-.24-.08-.521-.14V5.615q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h6.808q0 .256.026.508t.088.492zm3.049-3.683q.22-.221.22-.549t-.222-.548t-.549-.22t-.548.222t-.22.549t.222.547t.549.22t.548-.221m0-3.77q.22-.22.22-.548t-.222-.548t-.549-.22t-.548.221t-.22.55t.222.547t.549.22t.548-.221m0-3.77q.22-.221.22-.548t-.222-.548t-.549-.22t-.548.221t-.22.549t.222.548t.549.22t.548-.221m2.527 3.721h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zm0 7.54h2.004q.143-.287.318-.528q.175-.24.382-.473h-2.704z"></path></svg>
                  )
                },
                {
                  id: "edit", content: (
                    <svg
                      className={moduleMode === 'edit' ? 'active' : ''}
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"></path></svg>
                  )
                },
                {
                  id: "saved", content: (
                    <svg
                      className={moduleMode === 'saved' ? 'active' : ''}
                      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"></path></svg>
                  )
                },
              ]}
              activeTab={moduleMode}
              onChange={e => setModuleMode(e as ModuleMode)}
            />
          </div>



          {/* список доступних модулів */}
          <div className="h-[calc(100dvh-140px-20px-70px)] overflow-auto">
            {/* блок для редагування модуля */}
            {
              moduleMode === 'edit' &&
              (!selectedModule ? <div className="text-white text-sm mx-7">Оберіть модуль зі списку, який потрібно відредагувати</div>
                :
                <div className="min-w-0 flex-1 overflow-y-auto pb-[70px]">
                  <ModuleEditor
                    module={selectedModule}
                    onChange={updateModule}
                  />
                </div>)
            }
            {/* блок для вибору модуля */}
            {
              moduleMode === 'list' &&
              <AvailableModules hideLayers={hideLayers} onAdd={addModule} />
            }

            {/* блок збережених модулів */}
            {
              moduleMode === 'saved' &&
              <SavedModules onAdd={addModule} hideLayers={hideLayers} />
            }
          </div>
        </div>


        <div className="fixed bottom-0 left-0 w-full h-[140px] bg-gray-900 p-3 pb-0 z-[12]">
          {/* список обраних модулів */}
          <SortableCardsBlock
            data={selectedModules}
            setData={setSelectedModules}
            hideLayers={hideLayers}
            removeModule={removeModule}
            selectModule={selectModule}
            selectedId={selectedId}
            align="horizontal"
          />
        </div>

      </div>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1d1d1d]">
      <ConfirmModal
        isOpen={deleteTargetId !== null}
        title="Видалити модуль?"
        message="Ця дія видалить обраний модуль із списку. Відновлення не буде доступне."
        confirmText="Видалити"
        cancelText="Скасувати"
        onConfirm={confirmRemoveModule}
        onCancel={() => setDeleteTargetId(null)}
      />

      <div className="flex flex-col gap-3 p-4">
        <div className="fixed top-4 right-4 z-[100]">
          <button
            type="button"
            onClick={handleSaveTemplate}
            disabled={isSaving || selectedModules.length === 0}
            className="rounded-lg bg-[#7c3aed] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#6d28d9] disabled:cursor-not-allowed disabled:bg-[#4c4c4c] disabled:text-[#a3a3a3]"
          >
            {isSaving ? 'Збереження...' : 'Зберегти шаблон'}
          </button>
        </div>

        <div className="flex gap-2">

          <div className="overflow-hidden mr-0 h-[calc(100dvh-16px*2)] max-w-[50vw] w-full">
            {/* світчер для блоків вибір/редагування модуля */}
            <div className="flex justify-between gap-4">
              <TabsSwitcher
                tabs={[
                  {
                    id: "list", content: (
                      <svg
                        className={moduleMode === 'list' ? 'active' : ''}
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17.423 22.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM5 19V5zm.616 1q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v8.325q-.238-.102-.479-.181q-.24-.08-.521-.14V5.615q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192h6.808q0 .256.026.508t.088.492zm3.049-3.683q.22-.221.22-.549t-.222-.548t-.549-.22t-.548.222t-.22.549t.222.547t.549.22t.548-.221m0-3.77q.22-.22.22-.548t-.222-.548t-.549-.22t-.548.221t-.22.55t.222.547t.549.22t.548-.221m0-3.77q.22-.221.22-.548t-.222-.548t-.549-.22t-.548.221t-.22.549t.222.548t.549.22t.548-.221m2.527 3.721h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zm0 7.54h2.004q.143-.287.318-.528q.175-.24.382-.473h-2.704z"></path></svg>
                    )
                  },
                  {
                    id: "edit", content: (
                      <svg
                        className={moduleMode === 'edit' ? 'active' : ''}
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"></path></svg>
                    )
                  },
                  {
                    id: "saved", content: (
                      <svg
                        className={moduleMode === 'saved' ? 'active' : ''}
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 14 14"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"></path></svg>
                    )
                  },
                ]}
                activeTab={moduleMode}
                onChange={e => setModuleMode(e as ModuleMode)}
              />

              <Switcher
                isActive={!hideLayers}
                onClick={() => setHideLayers(prev => !prev)}
              >
                <svg
                  className={hideLayers ? '' : 'active'}
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 256 256"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"><path d="M 16,80 127.94695,15.974538"></path><path d="m 16,80 112,64"></path><path d="m 16,176 112,64"></path><path d="M 128,16 240,80"></path><path d="M 128,144 240,80"></path><path d="M 128,240 240,176"></path><path d="m 16,128 112,64"></path><path d="M 128,192 239.94695,128.0019"></path><path d="M 16,128 58.031909,104.01298"></path><path d="M 16,176 58.032661,151.99127"></path><path d="m 239.94694,128.00191 -41.9796,-23.98708"></path><path d="M 240,176 197.96608,151.99056"></path></g></svg>
                <svg
                  className={hideLayers ? 'active' : ''}
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m.5 17l2.308 1.364m1.778 1.05L11.5 23.5l11-6.5m-22-3l4.194 2.478"></path><path d="M6.471 17.529L11.5 20.5l11-6.5m-22-3l6.079 3.592"></path><path d="M8.357 15.643L11.5 17.5l11-6.5m-12.257 2.757l1.257.743l11-6.5l-11-6.5L.5 8l7.965 4.707M.5 23.5L22.75 1.25"></path></g></svg>
              </Switcher>
            </div>

            <div className="flex gap-2 h-full">
              {/* блок для редагування модуля */}
              {
                moduleMode === 'edit' &&
                (!selectedModule ? <div className="text-white text-sm mx-7">Оберіть модуль зі списку, який потрібно відредагувати</div>
                  :
                  <div className="min-w-0 flex-1 overflow-y-auto pb-[70px]">
                    <ModuleEditor
                      module={selectedModule}
                      onChange={updateModule}
                    />
                  </div>)
              }
              {/* блок для вибору модуля */}
              {
                moduleMode === 'list' &&
                <AvailableModules hideLayers={hideLayers} onAdd={addModule} />
              }

              {/* блок збережених модулів */}
              {
                moduleMode === 'saved' &&
                <SavedModules onAdd={addModule} hideLayers={hideLayers} />
              }

              {/* список обраних модулів */}
              <SortableCardsBlock
                data={selectedModules}
                setData={setSelectedModules}
                hideLayers={hideLayers}
                removeModule={removeModule}
                selectModule={selectModule}
                selectedId={selectedId}
              />
            </div>
          </div>

          {/* блок для рендеру модуля */}
          <RenderModule
            selectedId={selectedId}
            selectedModule={selectedModule}
            selectedModules={selectedModules}
            setSelectedId={setSelectedId}
            module={module}
          />

        </div>
      </div>
    </div>
  )
}


function RenderModule({ selectedModule, module, selectedModules, selectedId, setSelectedId }: {
  module: ModuleRegistryItem<ModuleSlug> | undefined
  selectedModule?: SelectedModule
  selectedModules: SelectedModule[]
  selectedId: string | null
  setSelectedId: (arg: string) => void
}) {
  return (
    <div className="rounded-lg bg-[#181818] h-[calc(100dvh-140px)] md:h-[calc(100dvh-16px*2)] md:max-w-[50vw] w-full">
      {selectedModule && module ? (
        <ScreenWrapper
          data={selectedModule.data.components}
          onNextStep={() => {
            // Якщо потрібно переходити на наступний модуль
            const currentIndex = selectedModules.findIndex(m => m.id === selectedId);
            if (currentIndex < selectedModules.length - 1) {
              setSelectedId(selectedModules[currentIndex + 1].id);
            }
          }}
          Step={module.component}
        />
      ) : (
        <div className="flex items-center justify-center h-full text-white text-sm text-center">
          Оберіть модуль зі списку, щоб переглянути його
        </div>
      )}
    </div>
  )
}