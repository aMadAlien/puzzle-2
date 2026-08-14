import { ModuleInfo } from "../../types/common";


export default function HorizontalScreenCard({ data }: { data: ModuleInfo }) {
  const savedModulesList: string[] = JSON.parse(localStorage.getItem('savedModulesList') || '[]');

  function toggleModule(id: string) {
    if (savedModulesList.includes(id)) {
      removeModuleFromSaved(id);
    } else {
      saveModule(id);
    }
  }

  function removeModuleFromSaved(id: string) {
    localStorage.setItem('savedModulesList', JSON.stringify(
      savedModulesList.filter(i => i !== id)
    ));
  }

  function saveModule(id: string) {
    localStorage.setItem('savedModulesList', JSON.stringify(
      [...savedModulesList, id]
    ));
  }

  return (
    <div className="flex gap-5">
      <div className="w-[200px] aspect-square relative overflow-hidden shrink-0">
        {/* <img src="https://i.pinimg.com/1200x/c5/2a/e5/c52ae5f237987031a50501e7f8422c8c.jpg" alt="main image"
          className="w-full h-full object-cover"
        /> */}
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
          isSaved={savedModulesList.includes(data.id)}
          onClick={() => toggleModule(data.id)}
        />

        {/* <div className="border-2 border-[#1d1d1d] py-1 px-4 uppercase opacity-50 rounded-full text-center font-bold w-fit">free</div> */}
      </div>

    </div>
  )
}

function SaveBtn({ isSaved, onClick }: { isSaved: boolean, onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${isSaved ? "opacity-50" : "opacity-75"}
        text-sm
        flex gap-2 items-center mt-3 hover:opacity-50 transition-all duration-300 self-end mb-3`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 14 14">
        <path fill={isSaved ? "currentColor" : "none"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"></path>
      </svg>
      <span>{isSaved ? "Збережено" : "Зберегти"}</span>
    </button>
  )
}