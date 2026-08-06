const mostUsedTemplateData = [
  { title: "Card 1", description: "Description for Card 1" }, { title: "Card 2", description: "Description for Card 2" }, { title: "Card 3", description: "Description for Card 3" }
]

function SideTemplate() {
  return (
    <div className="bg-[#1d1d1d] p-5 text-[#e5e4e7]">
      <p className="text-xs font-bold uppercase">готовий шаблон</p>
      <h3 className="text-3xl">Фаворит</h3>

      <div className="w-full h-[300px] relative overflow-hidden my-5">
        <img src="https://i.pinimg.com/1200x/c5/2a/e5/c52ae5f237987031a50501e7f8422c8c.jpg" alt="Template image"
          className="w-full h-full object-cover mt-4"
        />
      </div>

      <button className="bg-[#e5e4e7] text-[#1d1d1d] text-sm py-2 px-4 uppercase transition-all duration-300 hover:opacity-50">Спробувати</button>

      <div className="flex flex-col gap-5 mt-5">

        {
          mostUsedTemplateData.map((data, index) => (
            <div key={index} className="flex gap-5 border-b border-gray-500 pb-3">
              <div className="text-2xl">0{index + 1}</div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold uppercase">{data.title}</p>
                <p className="text-xs">{data.description}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default SideTemplate