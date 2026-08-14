import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#f5efe3] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <p className="text-sm uppercase tracking-[0.3em] mb-4">
          The Daily Memory
        </p>

        <div className="border-y-2 border-black py-8">
          <h1 className="text-[120px] md:text-[180px] leading-none font-serif font-bold">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-serif mt-4">
            Схоже, ця сторінка загубилася.
          </h2>
        </div>

        <p className="mt-6 text-base md:text-lg font-medium leading-relaxed">
          Ми перевірили всі архіви, але не знайшли сторінку, яку ти шукаєш.
          Можливо, вона ніколи не існувала, або просто вирішила взяти
          маленьку перерву.
        </p>

        <Link
          to="/"
          className="
            inline-block
            mt-8
            border-2 border-black
            px-8 py-3
            uppercase
            text-sm
            tracking-widest
            font-bold
            hover:bg-black
            hover:text-[#f5efe3]
            transition
          "
        >
          Повернутися на головну
        </Link>

        <p className="mt-10 text-xs uppercase tracking-widest opacity-50">
          Issue No. 404 — Somewhere in the archives
        </p>

      </div>
    </main>
  );
}