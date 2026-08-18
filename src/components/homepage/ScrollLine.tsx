
export default function ScrollLine() {
  return (
    <div className="overflow-hidden bg-[#1d1d1d] py-3 text-[#e5e4e7] max-md:-mx-4">
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
  )
}