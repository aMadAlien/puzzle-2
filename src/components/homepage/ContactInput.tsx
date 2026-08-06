export default function ContactInput() {
    return (
        <div className="flex flex-col gap-1 bg-gray-100 p-5">
            <p className="text-xs font-bold uppercase">Маєш пропозиції або ідеї?</p>
            <p className="text-xs">Лишай свій Telegram для зворотнього зв'язку</p>
            <input
                type="text"
                placeholder="Telegram"
                className="w-full mt-3 py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
            />
            <button className="mt-3 self-end bg-[#e5e4e7] text-[#1d1d1d] text-sm py-2 px-4 uppercase transition-all duration-300 hover:opacity-50">Надіслати</button>
        </div>
    )
}