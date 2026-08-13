import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SelectedModule } from "../../types/module.types";
import { moduleRegistry, ModuleSlug } from "../../config/moduleRegistry";

export default function SortableCard({
  id,
  data,
  index,
}: {
  id: string;
  index: number;
  data: SelectedModule;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const config = moduleRegistry[data.slug as ModuleSlug];

  return (
    <button
      key={data.id}
      type="button"
      className={`
              test-card shrink-0 cursor-grab active:cursor-grabbing
            `}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="text-xs text-gray-500">
        {index + 1}
      </div>

      <div className="text-white">
        {config?.name}
      </div>
    </button>
  );
}