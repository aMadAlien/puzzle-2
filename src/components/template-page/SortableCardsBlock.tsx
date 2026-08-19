import { DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { Dispatch, SetStateAction } from "react";
import SortableCard from '../../components/cards/SortableCard';
import { SelectedModule } from "../../types/module.types";

export default function SortableCardsBlock({ align = 'vertical', data, selectedId, hideLayers, selectModule, removeModule, setData }: {
  align?: 'horizontal' | 'vertical',
  hideLayers: boolean,
  selectedId: string | null,
  data: SelectedModule[],
  removeModule: (id: string) => void,
  selectModule: (id: string) => void,
  setData: Dispatch<SetStateAction<SelectedModule[]>>
}) {
  const isVerticalAlign = align === 'vertical';
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
            bg-gray-900 md:pb-[80px] overflow-y-auto pb-2
            transition-all duration-500 max-md:h-full
            ${isVerticalAlign && (hideLayers
              ? "w-0 p-0 opacity-0"
              : "w-1/3 p-3 opacity-100"
            )}
          `}
        >
          {
            data.length ?
              <div className={`${isVerticalAlign ? 'flex-col' : ''} flex gap-3 md:gap-4 h-full`}>
                {data.map((item, index) => (
                  <SortableCard
                    key={item.id}
                    id={item.id}
                    index={index}
                    data={item}
                    isSelected={selectedId === item.id}
                    removeModule={removeModule}
                    selectModule={selectModule}
                  />
                ))}
              </div>
              : <p className="text-gray-200 text-sm md:text-xs text-center">Почніть додавати модулі. Вони зявляться тут</p>
          }
        </div>
      </SortableContext>
    </DndContext>
  )
}
