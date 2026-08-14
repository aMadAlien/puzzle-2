import { FieldConfig } from '../types/form.types';
import { FieldType } from '../types/module.types';
import { TextField } from './TextField';
import { TextareaField } from './TextareaField';
import ImageListField from './ImageListField';
import ImageField from './ImageField';

interface DynamicFieldProps {
  config: FieldConfig;
  value: string | string[];
  onChange: (value: string | string[]) => void;
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
          value={typeof value === 'string' ? value : ''}
          placeholder={config.placeholder}
          onChange={(nextValue) => onChange(nextValue)}
        />
      );

    case FieldType.TEXTAREA:
      return (
        <TextareaField
          label={config.label}
          value={typeof value === 'string' ? value : ''}
          placeholder={config.placeholder}
          rows={config.rows}
          onChange={(nextValue) => onChange(nextValue)}
        />
      );

    case FieldType.IMAGE:
      return (
        <ImageField
          label={config.label}
          value={typeof value === 'string' ? value : ''}
          onChange={(nextValue) => onChange(nextValue)}
        />
      );

    case FieldType.IMAGE_LIST:
      return (
        <ImageListField
          label={config.label}
          value={Array.isArray(value) ? value : []}
          maxItems={config.maxItems}
          onChange={(nextValue) => onChange(nextValue)}
        />
      );

    default:
      return null;
  }
}