import { useMemo, useState } from "react";
import PuzzleGrid from "../puzzle";

export default function Puzzle({ data, onNextStep }: { data: { letter: string; imgSrc: string }; onNextStep: () => void }) {
    const [isHintOpen, setIsHintOpen] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [cardSide, setCardSide] = useState<"front" | "back">("front");
    const [showNext, setShowNext] = useState<boolean>(false);

    const { letter, imgSrc } = data;

    const puzzleSize = useMemo(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const isMobile = width < 768;
        const padding = isMobile ? 20 : 40;

        return (width > height ? height : width) - padding;
    }, [window.innerHeight, window.innerWidth])

    return (
        <div className="h-screen flex items-center justify-center relative p-5 max-md:p-2 overflow-hidden">
            <div
                className={`image-hint ${isCompleted ? "hidden" : ""} ${isHintOpen && 'active'}`}
                onClick={() => setIsHintOpen(!isHintOpen)}>
                <img src={imgSrc} alt="image hint" />
            </div>

            <div className={`card-scene ${isCompleted ? "completed" : ""}`}>
                <div
                    className={`puzzle-letter-wrapper ${cardSide}`}
                    style={{
                        width: `${puzzleSize}px`,
                        height: `${puzzleSize}px`,
                    }}
                    onClick={() => {
                        if (isCompleted) {
                            setCardSide(prev => prev === "front" ? "back" : "front")
                            setShowNext(true);
                        }
                    }}
                >
                    <div className="card-face front">
                        <PuzzleGrid
                            size={puzzleSize}
                            rows={4}
                            cols={4}
                            imgSrc={imgSrc}
                            onComplete={() => setIsCompleted(true)} />
                    </div>

                    <div className="card-face back">
                        <div className="letter">
                            <p>{letter || "Дякую тобі за те, що ти є в моєму житті. Поруч із тобою навіть звичайні моменти стають особливими, а майбутнє здається світлим і теплим. Люблю тебе і завжди з нетерпінням чекаю нашої наступної зустрічі. ❤️"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <button
                className={`move-next-button
                    ${isCompleted && showNext ? "active" : ""}`}
                onClick={onNextStep}
            >Рухаємось далі?</button>
        </div>
    )
}
