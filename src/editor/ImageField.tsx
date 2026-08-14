import { ChangeEvent, useId, useRef } from 'react';

export default function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      console.log('result', result)
      onChange(result);
    };

    reader.readAsDataURL(file);

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    event.target.value = '';
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-gray-300">{label}</label>

      {value ? (
        <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800">
          <img
            src={value}
            alt={label}
            className="h-52 w-full object-cover"
          />

          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-lg text-white transition hover:bg-black"
            aria-label="Remove image"
          >
            ×
          </button>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-600 bg-gray-800/40 px-3 py-6 text-sm text-gray-400">
          Немає фото
        </div>
      )}

      <div className="flex items-center gap-3">
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFile}
        />

        <label
          htmlFor={inputId}
          className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-blue-500 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
        >
          {value ? 'Замінити фото' : 'Додати фото'}
        </label>
      </div>
    </div>
  );
}