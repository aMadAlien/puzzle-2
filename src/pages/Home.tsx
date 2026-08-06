
export default function HomePage() {
  return (
    <div className="p-4 h-screen">
      <div className="max-w-[1460px] w-full mx-auto overflow-hidden">

        <button
          type="button"
          className="fixed bottom-10 right-10 bg-gray-300 w-[60px] flex items-center justify-center aspect-square rounded-full shadow-lg z-50 hover:scale-110 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M12.5 22H10c-3.3 0-4.95 0-5.975-1.025S3 18.3 3 15v-4c0-1.886 0-2.828.586-3.414S5.114 7 7 7h8c1.886 0 2.828 0 3.414.586S19 9.114 19 11v2"></path><path d="M15 9.5C15 5.634 13.21 2 11 2S7 5.634 7 9.5M17.5 22S14 19.882 14 17.833c0-1.012.737-1.833 1.75-1.833c.525 0 1.05.177 1.75.882c.7-.706 1.225-.882 1.75-.882c1.013 0 1.75.82 1.75 1.833C21 19.883 17.5 22 17.5 22"></path></g></svg>
        </button>


        <p className="text-xl font-bold">Віртуальний подарунок</p>
        <div className="h-[1px] w-full bg-[#1d1d1d]" />

        <h1 className="title--large my-7">
          створюй емоції
        </h1>

        <div className="overflow-hidden bg-[#1d1d1d] py-3 text-[#e5e4e7]">
          <div className="marquee">
            <div className="marquee-content">
              <span>створюй інтерактивні подарунки з фотографіями, іграми, музикою та теплими словами за кілька хвилин</span>
              <span>|</span>
              <span>створюй інтерактивні подарунки з фотографіями, іграми, музикою та теплими словами за кілька хвилин</span>
              <span>|</span>
            </div>

            <div className="marquee-content" aria-hidden="true">
              <span>створюй інтерактивні подарунки з фотографіями, іграми, музикою та теплими словами за кілька хвилин</span>
              <span>|</span>
              <span>створюй інтерактивні подарунки з фотографіями, іграми, музикою та теплими словами за кілька хвилин</span>
              <span>|</span>
            </div>
          </div>
        </div>

        <div className="my-5 flex gap-10 ml-5 items-center">
          <div className="w-[40%] text-4xl font-bold uppercase">
            <h2 className="leading-[120%]">
              <span className="tracking-[2px] bg-[#D9D9D9] -ml-5 px-5 rounded-full">подарунок,</span>
              <br />який<br />
              <span className="tracking-[-2.5px]">запам'ятається</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 w-[55%] text-[#1d1d1d] text-lg font-medium">
            <p className="italic">
              "Хотів би я знати, навіщо зірки світяться… Напевно, для того, щоб рано чи пізно кожен міг знову відшукати свою."
            </p>

            <p className="text-sm opacity-50 text-right">Маленький Принц, Антуан де Сент-Екзюпері</p>
          </ div>
        </div>

        <div className="w-full h-[600px] relative overflow-hidden">
          <img src="https://i.pinimg.com/1200x/c5/2a/e5/c52ae5f237987031a50501e7f8422c8c.jpg" alt="main image"
            className="w-full h-full object-cover "
          />
        </div>


        <section className="my-10">
          <div className="flex gap-5">
            <div className="flex flex-col gap-7 w-[70%]">

              <div className="flex gap-5">
                <div className="w-[200px] aspect-square relative overflow-hidden shrink-0">
                  <img src="https://i.pinimg.com/1200x/c5/2a/e5/c52ae5f237987031a50501e7f8422c8c.jpg" alt="main image"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-3 justify-between">
                  <div>
                    <h3 className="text-xl font-bold uppercase">Lorem ipsum dolor sit amet.</h3>
                    <p className="text-[#1d1d1d]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quisquam eum aut? Accusamus placeat voluptatibus odit hic, dolores maxime iste doloribus ut sapiente.</p>
                  </div>


                  <button
                    type="button"
                    className="flex gap-3 items-center mt-3 opacity-75 hover:opacity-50 transition-all duration-300 self-end"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" viewBox="0 0 14 14">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"></path>
                    </svg>
                    <span>Зберегти</span>
                  </button>
                  {/* <div className="border-2 border-[#1d1d1d] py-1 px-4 uppercase opacity-50 rounded-full text-center font-bold w-fit">free</div> */}
                </div>

              </div>

            </div>
            <div className="w-[30%] flex flex-col gap-5">
              <div className="bg-[#1d1d1d] p-5 text-[#e5e4e7]">
                <h4 className="text-lg font-bold uppercase">Lorem ipsum dolor sit amet.</h4>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quisquam eum aut? Accusamus placeat voluptatibus odit hic, dolores maxime iste doloribus ut sapiente.</p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}