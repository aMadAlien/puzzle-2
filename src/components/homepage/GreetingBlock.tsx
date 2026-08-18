export default function GreetingBlock() {
  return (
    <section className="grid-newspaper text-justify lg:!leading-[1]">
      <div className="grid-img-1">
        <img
          className="w-full h-full object-cover rounded-lg shadow-2xl shadow-gray-600 grayscale hover:grayscale-0 transition-all duration-300"
          src="https://i.pinimg.com/1200x/59/08/d1/5908d1245c12c9620b9f3bf9369ee4e9.jpg" alt="" />
      </div>
      <p className="grid-text grid-text-1 text-base font-medium  h-fit">
        Ми щиро віримо, що найцінніші подарунки — це не ті, що мають найбільшу ціну, а ті, у які вкладено час, турботу та частинку душі. Саме такі моменти залишаються в пам'яті на роки: несподіване повідомлення, спільна фотографія, улюблена пісня чи кілька простих слів, сказаних у потрібний момент. На жаль, у повсякденному житті ми не завжди знаходимо можливість висловити свої почуття так, як хотілося б. Особливо коли нас розділяють кілометри, різні часові пояси або просто насичений ритм життя.
      </p>
      <p className="grid-text grid-text-2 text-base font-medium  h-fit max-xl:mt-4">
        Саме тому ми створили простір, де звичайне привітання перетворюється на маленьку історію. Тут фотографії оживають, листи відкриваються після невеликої пригоди, а музика, спогади та інтерактивні елементи допомагають зробити кожен подарунок по-справжньому особистим. Ми хочемо, щоб кожна людина могла не просто надіслати посилання, а подарувати емоцію — ту, що викликає усмішку, здивування чи навіть щасливі сльози.
      </p>
      <div className="grid-img-2 flex items-center justify-center h-[400px]">
        <img
          className="w-full h-full object-cover rounded-lg shadow-2xl shadow-gray-600 grayscale hover:grayscale-0 transition-all duration-300"
          src="https://i.pinimg.com/1200x/63/1f/ee/631feeb110c371cd859e2208c5dcb665.jpg" alt="" />
      </div>
      <p className="grid-text grid-text-3 text-base font-medium  h-fit">
        Для цього ми створили колекцію готових шаблонів для найрізноманітніших подій: дня народження, річниці, освідчення, Дня святого Валентина, сімейних свят, дружніх привітань та багатьох інших важливих моментів. Кожен шаблон легко адаптувати під себе — додати власні фотографії, музику, текст і зробити його справді унікальним.
      </p>
      <p className="grid-text grid-text-4 text-base font-medium  h-fit">
        А якщо хочеться створити щось абсолютно особливе, ми надаємо окремі інтерактивні елементи, з яких можна скласти власний сюрприз.
        <br />
        А якщо хочеться створити щось абсолютно особливе, ми надаємо окремі інтерактивні елементи, з яких можна скласти власний сюрприз. Пазли, мініігри, листи, фотогалереї, квести, анімації та інші деталі легко поєднуються між собою, дозволяючи створити історію саме такою, якою ти її задумав.
      </p>
      <div className="grid-img-3 h-[300px] grayscale hover:grayscale-0 transition-all duration-300">
        <div className="relative max-w-[520px] z-[-1]">
          {/* Нижня фотографія */}
          <img
            src="https://i.pinimg.com/736x/78/b8/d2/78b8d2567b02554842a2e7c4a025a7d9.jpg"
            alt=""
            className="absolute w-[270px] h-[380px] object-cover rounded-lg shadow-2xl shadow-gray-600 grayscale hover:grayscale-0 transition-all duration-300
                  rotate-12 -top-5 xl:-top-10 left-[30%] xl:left-[45%] "
          />

          {/* Верхня фотографія */}
          <img
            src="https://i.pinimg.com/736x/4f/87/95/4f8795663913b35a4733df2c849ac871.jpg"
            alt=""
            className="absolute w-[300px] h-[350px] object-cover rounded-lg shadow-2xl shadow-gray-900 grayscale hover:grayscale-0 transition-all duration-300
                  -rotate-6 -top-10 left-15"
          />
        </div>
        {/* <img
              className="w-full h-full object-cover rounded-lg shadow-2xl shadow-gray-600"
              src="https://i.pinimg.com/1200x/63/1f/ee/631feeb110c371cd859e2208c5dcb665.jpg" alt="" /> */}
      </div>
      {/* <p className="col-span-8 lg:col-span-3 text-base font-medium  h-fit"> */}
      <p className="grid-text grid-text-5 text-base font-medium  h-fit">
        Ми лише починаємо цю подорож і щодня працюємо над тим, щоб з'являлося ще більше шаблонів, ідей та можливостей для творчості. Адже іноді достатньо одного щирого жесту, щоб зробити чийсь день теплішим, а спогад — незабутнім. Якщо наш сервіс допоможе хоча б ще одній людині сказати «Я люблю тебе», «Дякую», «Я поруч» або «Я пам'ятаю», значить ми створили його недаремно.
      </p>
    </section>
  )
}
