import { DndContext } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { Dispatch, SetStateAction } from "react";
import SortableCard from '../../components/cards/SortableCard';

export default function SortableCardsBlock({ data, hideLayers, setData }: { hideLayers: boolean, data: { id: string; title: string; }[], setData: Dispatch<SetStateAction<{ id: string; title: string; }[]>> }) {
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
            flex flex-col gap-4 overflow-y-auto
            bg-gray-900 pb-[80px]
            transition-all duration-500
            ${hideLayers
              ? "w-0 px-0 opacity-0"
              : "w-1/3 px-3 opacity-100"
            }
          `}
        >
          {data.map(item => (
            <SortableCard
              key={item.id}
              id={item.id}
              title={item.title}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
