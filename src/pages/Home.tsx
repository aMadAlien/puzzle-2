import BasketBtn from "../components/BasketBtn"
import HorizontalScreenCard from "../components/cards/HorizontalScreenCard"
import ContactInput from "../components/homepage/ContactInput"
import QuoteBlock from "../components/homepage/QuoteBlock"
import ScrollLine from "../components/homepage/ScrollLine"
import SideTemplate from "../components/homepage/SideTemplate"


export default function HomePage() {
  return (
    <div className="p-4 h-screen">
      <div className="max-w-[1460px] w-full mx-auto overflow-hidden">

        <BasketBtn />

        <p className="text-xl font-bold">Віртуальний подарунок</p>
        <div className="h-[1px] w-full bg-[#1d1d1d]" />

        <h1 className="title--large my-7">
          створюй емоції
        </h1>

        <ScrollLine />
        <QuoteBlock />

        {/* <div className="w-full h-[600px] relative overflow-hidden">
          <img src="https://i.pinimg.com/1200x/c5/2a/e5/c52ae5f237987031a50501e7f8422c8c.jpg" alt="main image"
            className="w-full h-full object-cover "
          />
        </div> */}


        <section className="my-10">
          <div className="flex gap-5 justify-between">

            <div className=" w-[70%]">
              <div className="flex flex-col gap-7">

                <HorizontalScreenCard data={{ title: "Card 1", description: "Description for Card 1", id: 1 }} />
                <div className="h-[1px] w-full bg-gray-500" />
                <HorizontalScreenCard data={{ title: "Card 2", description: "Description for Card 2", id: 2 }} />
                <div className="h-[1px] w-full bg-gray-500" />
                <HorizontalScreenCard data={{ title: "Card 3", description: "Description for Card 3", id: 3 }} />
                <div className="h-[1px] w-full bg-gray-500" />
                <HorizontalScreenCard data={{ title: "Card 4", description: "Description for Card 4", id: 4 }} />
                <div className="h-[1px] w-full bg-gray-500" />
                <HorizontalScreenCard data={{ title: "Card 3", description: "Description for Card 3", id: 3 }} />
                <div className="h-[1px] w-full bg-gray-500" />
                <HorizontalScreenCard data={{ title: "Card 4", description: "Description for Card 4", id: 4 }} />
              </div>
              <button className="flex gap-2 items-center transition-all duration-300 hover:opacity-50 mt-10">
                <span className="text-sm uppercase">Переглянути всі</span>

                <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z"></path></svg>
              </button>
            </div>


            <div className="w-[25%] flex flex-col gap-5">
              <SideTemplate />
              <ContactInput />
            </div>

          </div>
        </section>
      </div>
    </div >
  )
}