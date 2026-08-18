import { TemplateInfo } from '../../types/common'

export default function VerticalScreenCard({ data }: { data: TemplateInfo }) {
  return (
    <div
      key={data.id}
      className="flex-[1_0_250px] min-w-0"
    >
      <img
        className="w-full h-[200px] sm:h-[250px] object-cover"
        src={data.image}
        alt="template img"
      />

      <h3
        className="
      text-lg sm:text-xl
      font-bold uppercase
      my-3 sm:my-4 break-all
      line-clamp-2
    "
      >
        {data.title}
      </h3>

      <p
        className="
      text-sm sm:text-base
      leading-relaxed
      text-[#1d1d1d]
      mb-3 break-all
      line-clamp-[7]
    "
      >
        {data.description}
      </p>

      <button
        className="
      flex gap-2 items-center
      transition-all duration-300
      hover:opacity-50
      mt-6 sm:mt-10
    "
      >
        <span className="text-xs uppercase">
          Переглянути
        </span>

        <svg
          className="rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8z"
          />
        </svg>
      </button>
    </div>
  )
}
