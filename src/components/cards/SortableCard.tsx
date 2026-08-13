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

  function showDeleteConfigmModal() { }
  function activateModule() { }

  return (
    <div className="relative test-card group">

        <div className="absolute top-[10px] left-[7px] text-black text-xs text-gray-500">
          {index + 1}.
        </div>


      <div
        className="
          absolute top-[7px] right-[7px]
          flex gap-2
          opacity-0 scale-95 translate-y-[-3px]
          pointer-events-none
          transition-all duration-200
          group-hover:opacity-100
          group-hover:scale-100
          group-hover:translate-y-0
          group-hover:pointer-events-auto
        "
      >
        <button
          className="bg-gray-900 rounded-full w-[24px] h-[24px] text-gray-700 font-bold flex justify-center items-center"
          type="button"
          onClick={showDeleteConfigmModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="14" height="14" viewBox="0 0 40 40"><path fill="currentColor" d="M21.499 19.994L32.755 8.727a1.064 1.064 0 0 0-.001-1.502c-.398-.396-1.099-.398-1.501.002L20 18.494L8.743 7.224c-.4-.395-1.101-.393-1.499.002a1.05 1.05 0 0 0-.309.751c0 .284.11.55.309.747L18.5 19.993L7.245 31.263a1.064 1.064 0 0 0 .003 1.503c.193.191.466.301.748.301h.006c.283-.001.556-.112.745-.305L20 21.495l11.257 11.27c.199.198.465.308.747.308a1.06 1.06 0 0 0 1.061-1.061c0-.283-.11-.55-.31-.747z"></path></svg>
        </button>
        <button
          className="bg-gray-900 rounded-full w-[24px] h-[24px] text-gray-700 font-bold flex justify-center items-center"
          type="button"
          onClick={activateModule}
        >
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"></path></svg>
        </button>
      </div>

      <button
        key={data.id}
        type="button"
        className={`
          shrink-0 cursor-grab active:cursor-grabbing
          flex items-center justify-center w-full h-full
        `}
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >

        <div className="">
          {/* {config?.name} */}
          {config.icon}
        </div>
      </button>
    </div>
  );
}