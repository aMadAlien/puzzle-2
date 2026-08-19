import { ModuleMode } from "../../pages/TemplatesCreatePage"
import { ModuleData, ModuleSlug, SelectedModule } from "../../types/module.types"
import { ModuleEditor } from "../../editor/ModuleEditor"
import AvailableModules from "../../components/template-page/AvailableModules"
import SavedModules from "../../components/template-page/SavedModules"

interface MenuBlockType {
  moduleMode: ModuleMode
  selectedModule?: SelectedModule
  updateModule: (id: string, data: ModuleData) => void
  hideLayers: boolean
  addModule: (slug: ModuleSlug) => void
}


export default function MenuBlock({
  moduleMode,
  selectedModule,
  hideLayers,
  addModule,
  updateModule
}: MenuBlockType) {
  return (
    <>
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
    </>
  )
}