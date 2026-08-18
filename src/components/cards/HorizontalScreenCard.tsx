import { useSavedModules } from "../../context/SavedModulesContext";
import { ModuleInfo } from "../../types/common";
import SaveBtn from "../../elements/SaveBtn";

export default function HorizontalScreenCard({ data }: { data: ModuleInfo }) {
  const { savedModules, toggleModule } = useSavedModules();

  return (
    <div className="flex gap-5">
      <div className="w-[200px] aspect-square relative overflow-hidden shrink-0">
        <img src={data.image} alt="main image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 justify-between w-full">
        <div>
          <h3 className="text-xl font-bold uppercase">{data.title}</h3>
          <p className="text-[#1d1d1d]">{data.description}</p>
        </div>

        <SaveBtn
          isSaved={savedModules.includes(data.id)}
          onClick={() => toggleModule(data.id)}
        />

        {/* <div className="border-2 border-[#1d1d1d] py-1 px-4 uppercase opacity-50 rounded-full text-center font-bold w-fit">free</div> */}
      </div>

    </div>
  )
}
