
export default function Rules({ data, onNextStep }: { data: { title: string; description: string, imgSrc: string }; onNextStep: () => void }) {
    const { title, description, imgSrc } = data;

    function handleClick() {
        onNextStep();
    }

    return (
        <div className="h-full flex flex-col gap-5 justify-center items-center p-5">
            {
                title && <h1 className="text-2xl font-bold text-center text-white">{title}</h1>
            }
            {
                description ?
                    <p className="whitespace-pre-wrap text-lg text-center text-white">{description}</p>
                    :
                    <>
                        <p className="text-lg text-center text-white">Ось твоя перша головоломка!</p>
                        <p className="text-lg text-center text-white">Перед тобою одне з наших найкращих фото.</p>
                        <p className="text-lg text-center text-white">Але зараз воно розбите на шматочки.</p>
                        <p className="text-lg text-center text-white">Склади його 😊</p>
                    </>
            }

            <div className="w-full h-full max-h-[60dvh] max-md:max-h-[40dvh] overflow-hidden mx-auto relative">
                <img
                    className="w-full h-full object-contain absolute"
                    src={imgSrc} />
            </div>

            <button onClick={handleClick}>Почнімо</button>
        </div>
    )
}
