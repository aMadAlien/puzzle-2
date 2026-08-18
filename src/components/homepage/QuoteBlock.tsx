export default function QuoteBlock() {
  return (
    <div className="h-[60dvh] p-5 mt-3 max-md:-mx-4"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/c5/2a/e5/c52ae5f237987031a50501e7f8422c8c.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>

      <div className="flex flex-col gap-10 h-full justify-between">
        <div className="w-[40%] text-lg sm:text-2xl md:text-4xl font-bold uppercase">
          <h2 className="leading-[120%] text-white ml-2">
            <span className="tracking-[2px] bg-gray-400 -ml-3 sm:-ml-5 px-3 sm:px-5 rounded-full">подарунок,</span>
            <br />який<br />
            <span className="tracking-[-2.5px]">запам'ятається</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:gap-5 w-[80%] sm:w-[50%] text-[#1d1d1d] text-base sm:text-lg font-medium text-white self-end text-right">
          <p className="italic">
            "Хотів би я знати, навіщо зірки світяться… Напевно, для того, щоб рано чи пізно кожен міг знову відшукати свою."
          </p>

          <p className="text-sm opacity-50">Маленький Принц, Антуан де Сент-Екзюпері</p>
        </ div>
      </div>

    </div>
  )
}