import { FieldConfig } from '../types/form.types';
import { FieldType } from '../types/module.types';
import { TextField } from './TextField';
import { TextareaField } from './TextareaField';

interface DynamicFieldProps {
  config: FieldConfig;
  value: string;
  onChange: (value: string) => void;
}

export function DynamicField({
  config,
  value,
  onChange,
}: DynamicFieldProps) {

  switch (config.type) {

    case FieldType.TEXT:
      return (
        <TextField
          label={config.label}
          value={value}
          placeholder={config.placeholder}
          onChange={onChange}
        />
      );

    case FieldType.TEXTAREA:
      return (
        <TextareaField
          label={config.label}
          value={value}
          placeholder={config.placeholder}
          rows={config.rows}
          onChange={onChange}
        />
      );

    default:
      return null;
  }
}