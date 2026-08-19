// TextField.tsx

interface TextFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function TextField({
  label,
  value,
  placeholder,
  onChange,
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="form-label">
        {label}
      </label>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full rounded-lg
          border border-gray-700
          bg-gray-800
          px-3 py-2
          text-white
          outline-none
          transition
          focus:border-blue-500
        "
      />
    </div>
  );
}