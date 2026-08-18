import { ReactNode, useMemo } from "react";
import { moduleRegistry } from "../../config/moduleRegistry";
import { useSavedModules } from "../../context/SavedModulesContext";
import { ModuleRegistry, ModuleSlug, ModuleType, RulesData } from "../../types/module.types";
import { FormConfig } from "../../types/form.types";


interface ModulesGridProps {
  hideLayers: boolean;
  modulesList: ModuleRegistry;
  onAdd: (slug: ModuleSlug) => void;
}

export default function ModulesGrid({
  onAdd, modulesList, hideLayers
}: ModulesGridProps) {

  const { savedModules, toggleModule } = useSavedModules();

  function isSavedModule(id: string) {
    return savedModules.includes(id);
  }

  return (
    <div className={`
          min-w-0 flex-1 overflow-y-auto transition-all duration-500
          grid-rows-[min-content] content-start h-full
          max-md:grid-cols-3
          ${hideLayers ? "grid grid-cols-3" : "grid grid-cols-2"}
          gap-3 p-2 md:pr-2 pb-[80px]
        `}>
      {Object.entries(modulesList).map(
        ([slug, module]) => (
          <div
            key={slug + module.name}
            className="group relative max-md:h-[140px]"
          >
            {/* Верхня кнопка */}
            <button
              type="button"
              className={`
                    absolute
                    left-0
                    top-0
                    z-1
    
                    max-md:visible
                    max-md:opacity-100
                    bg-gray-800
                    px-2 md:px-4 py-1 md:py-2
                    text-white
                    rounded-br-lg
    
                    transition-all duration-200
    
                    ${isSavedModule(module.id)
                  ? "visible opacity-100"
                  : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
                }
                  `}
              onClick={() => toggleModule(module.id)}
            >
              <svg className="max-md:w-[14px]"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="18" height="18" viewBox="0 0 14 14">
                <path fill={isSavedModule(module.id) ? "currentColor" : "none"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"></path>
              </svg>
            </button>

            {/* Основна кнопка */}
            <button
              type="button"
              onClick={() => onAdd(slug as ModuleSlug)}
              className="
                    w-full
                    test-card
                    flex items-center justify-center
                    rounded-lg
                    border border-gray-700
                    bg-gray-800
                    px-4 py-3
                    text-left
                    text-white
                    transition
                    hover:bg-gray-700
                    
                  "
            >
              <div className="flex items-center justify-center w-1/2 md:w-full h-full">
                {module.icon}
              </div>
            </button>
          </div>
        )
      )}
    </div>
  );
}
