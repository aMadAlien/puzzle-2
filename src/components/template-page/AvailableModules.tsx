import { moduleRegistry, ModuleSlug } from "../../config/moduleRegistry";

export default function AvailableModules({
  onAdd, hideLayers
}: {
  hideLayers: boolean,
  onAdd: (slug: ModuleSlug) => void;
}) {
  return (
    <div className={`
      min-w-0 flex-1 overflow-y-auto transition-all duration-500
      grid-rows-[min-content] content-start
      ${hideLayers ? "grid grid-cols-3" : "grid grid-cols-2"}
      gap-3 pr-2 pb-[80px]
    `}>
      {Object.entries(moduleRegistry).map(
        ([slug, module]) => (
          <button
            key={slug + module.name}
            type="button"
            onClick={() => onAdd(slug as ModuleSlug)}
            className="
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
            {/* <span>{module.name}</span> */}
            {module.icon}
          </button>
        )
      )}
    </div>
  );
}