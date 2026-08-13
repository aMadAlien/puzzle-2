import { DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { Dispatch, SetStateAction } from "react";
import SortableCard from '../../components/cards/SortableCard';
import { SelectedModule } from "../../types/module.types";

export default function SortableCardsBlock({ data, hideLayers, selectModule, removeModule, setData }: {
  hideLayers: boolean,
  data: SelectedModule[],
  removeModule: (id: string) => void,
  selectModule: (id: string) => void,
  setData: Dispatch<SetStateAction<SelectedModule[]>>
}) {
  return (
    <DndContext
      onDragEnd={({ active, over }) => {
        if (!over || active.id === over.id) return;

        setData((items) => {
          const oldIndex = items.findIndex(item => item.id === active.id);
          const newIndex = items.findIndex(item => item.id === over.id);

          return arrayMove(items, oldIndex, newIndex);
        });
      }}
    >
      <SortableContext items={data.map(item => item.id)}>
        <div
          className={`
            bg-gray-900 pb-[80px] overflow-y-auto
            transition-all duration-500
            ${hideLayers
              ? "w-0 p-0 opacity-0"
              : "w-1/3 p-3 opacity-100"
            }
          `}
        >
          {
            data.length ?
              <div className="flex flex-col gap-4 ">
                {data.map((item, index) => (
                  <SortableCard
                    key={item.id}
                    id={item.id}
                    index={index}
                    data={item}
                    removeModule={removeModule}
                    selectModule={selectModule}
                  />
                ))}
              </div>
              : <p className="text-gray-200 text-xs">Почніть додавати модулі. Вони зявляться тут</p>
          }
        </div>
      </SortableContext>
    </DndContext>
  )
}
