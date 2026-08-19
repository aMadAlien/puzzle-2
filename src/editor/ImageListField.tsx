import { ChangeEvent, useId, useRef } from 'react';

export default function ImageListField({
  label,
  value,
  maxItems,
  onChange,
}: {
  label: string;
  value: string[];
  maxItems?: number;
  onChange: (value: string[]) => void;
}) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const canAddMore =
    maxItems === undefined ||
    value.length < maxItems;

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) return;

    const nextImages = await Promise.all(
      files.map((file) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
      }))
    );

    const merged = [...value, ...nextImages];
    const limited = maxItems === undefined ? merged : merged.slice(0, maxItems);

    onChange(limited);

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    event.target.value = '';
  };

  const removeImage = (imageToRemove: string) => {
    onChange(value.filter((image) => image !== imageToRemove));
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="form-label">{label}</label>

      {value.length > 0 ? (
        <div className="grid grid-cols-3 gap-3">
          {value.map((image, index) => (
            <div key={`${image}-${index}`} className="relative group overflow-hidden rounded-lg border border-gray-700 bg-gray-800">
              <img
                src={image}
                alt={`${label} ${index + 1}`}
                className="h-24 w-full object-cover"
              />

              <button
                type="button"
                onClick={() => removeImage(image)}
                className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/70 text-xs text-white transition hover:bg-black"
                aria-label={`Remove image ${index + 1}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-gray-600 bg-gray-800/40 px-3 py-4 text-sm text-gray-400">
          Немає зображень
        </div>
      )}

      {canAddMore && (
        <div className="flex items-center justify-between gap-3">
          <input
            ref={inputRef}
            id={inputId}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFiles}
          />

          <label
            htmlFor={inputId}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-blue-500 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-500/20"
          >
            Додати зображення
          </label>

          {maxItems && (
            <span className="text-xs text-gray-400">
              {value.length} / {maxItems}
            </span>
          )}
        </div>
      )}
    </div>
  );
}