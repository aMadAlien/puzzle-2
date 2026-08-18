import BasketBtn from "../components/BasketBtn"
import HorizontalScreenCard from "../components/cards/HorizontalScreenCard"
import ContactInput from "../components/homepage/ContactInput"
import QuoteBlock from "../components/homepage/QuoteBlock"
import ScrollLine from "../components/homepage/ScrollLine"
import SideTemplate from "../components/homepage/SideTemplate"
import GreetingBlock from "../components/homepage/GreetingBlock"
import { modulesList, templatesList } from "../mocks/homepage"
import VerticalScreenCard from "../components/cards/VerticalScreenCard"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="p-4 min-h-screen overflow-hidden"
      style={{
        background: 'url("https://i.pinimg.com/originals/78/9b/64/789b6496f318fe6f62074ffb8a45ea0d.png"), #f7f2e8',
        backgroundSize: 'cover',
        mixBlendMode: 'multiply',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-[1460px] w-full mx-auto ">

        <BasketBtn />

        <p className="text-sm sn:text-xl font-bold">Віртуальний подарунок</p>
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

        <GreetingBlock />

        <section className="my-10">
          <div className="flex gap-5 justify-between modules-presentation-block">

            <div className="modules-block w-[70%]">
              <div className="flex flex-col gap-7">
                {
                  modulesList.map(item => (
                    <div key={item.id}>
                      <HorizontalScreenCard data={item} />
                      <div className="h-[1px] w-full bg-gray-500" />
                    </div>
                  ))
                }
              </div>
              <button className="flex gap-2 items-center transition-all duration-300 hover:opacity-50 mt-10">
                <span className="text-sm uppercase">Переглянути всі</span>

                <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z"></path></svg>
              </button>
            </div>


            <div className="template-block w-[25%] flex flex-col gap-5">
              <SideTemplate />
              <ContactInput />
            </div>

          </div>
        </section>

        <section className="mt-20 mb-10 border-t border-black pt-5">
          <h2 className="mb-9 title-main">Готові шаблони на будь-яку подію</h2>
          <div className="flex gap-5 overflow-auto">

            {templatesList.map(data => (
              <VerticalScreenCard key={data.id} data={data} />
            ))}

          </div>
        </section>


        <section className="mt-20 py-4 border-t border-gray-400 md:flex md:justify-between text-xs">
          <p>© 2026 Всі права захищені. Створено з любов'ю.</p>
          <div className="flex gap-7 justify-between max-w-[400px] max-md:mt-4">
            <Link to="">TikTok</Link>
            <Link to="">Instagram</Link>
          </div>
        </section>
      </div>
    </div>
  )
}