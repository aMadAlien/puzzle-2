
export default function Greeting({ data, onNextStep }: { data: { title: string; description: string }; onNextStep: () => void }) {
  console.log('Greeting data:', data);
  const { title, description } = data;

  function handleClick() {
    onNextStep();
  }

  return (
    <div
      className="w-full h-full flex justify-center items-center relative"
      onClick={handleClick}
    >
      <svg className="heart" viewBox="0 0 32 29.6">
        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
      </svg>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        {
          title && <h1 className="text-4xl font-bold text-center text-white">{title}</h1>
        }
        {
          description && <p className="max-w-md text-lg text-center text-white">{description}</p>
        }
      </div>

    </div>
  )
}
