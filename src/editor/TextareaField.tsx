// TextareaField.tsx

interface TextareaFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  rows?: number;
  onChange: (value: string) => void;
}

export function TextareaField({
  label,
  value,
  placeholder,
  rows = 4,
  onChange,
}: TextareaFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-300">
        {label}
      </label>

      <textarea
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full rounded-lg
          border border-gray-700
          bg-gray-800
          px-3 py-2
          text-white
          outline-none
          resize-none
          transition
          focus:border-blue-500
        "
      />
    </div>
  );
}