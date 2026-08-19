import { ModuleRegistryItem, ModuleSlug, SelectedModule } from "../../types/module.types"
import ScreenWrapper from "../ScreenWrapper"

export default function RenderModule({ selectedModule, module, selectedModules, selectedId, setSelectedId }: {
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
        <div className="flex items-center justify-center h-full text-white text-base text-center w-[300px] mx-auto">
          Оберіть модуль зі списку, щоб переглянути його
        </div>
      )}
    </div>
  )
}
