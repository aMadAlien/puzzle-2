
interface ScreenWrapProps {
    data: any;
    onNextStep: () => void;
    Step: React.ComponentType<{ data: any; onNextStep: () => void }>;
}

export default function ScreenWrapper({ data, onNextStep, Step }: ScreenWrapProps) {

    function handleClick() {
        // fade in overlay
        document.querySelector('.overlay')?.classList.add('active')

        // fade out overlay after 1.3 seconds
        setTimeout(() => {
            onNextStep();

            setTimeout(() => {
                document.querySelector('.overlay')?.classList.remove('active')
            }, 700)
        }, 1100)
    }

    return (
        <Step data={data} onNextStep={handleClick} />
    )
}
