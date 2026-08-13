import { FormConfig } from '../types/form.types';
import { DynamicField } from './DynamicField';

interface DynamicFormProps {
  config: FormConfig;
  values: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

// interface DynamicFormProps<T extends Record<string, unknown>> {
//   config: FormConfig;
//   values: T;

//   onChange: <K extends keyof T>(
//     field: K,
//     value: T[K]
//   ) => void;
// }

export function DynamicForm({
  config,
  values,
  onChange,
}: DynamicFormProps) {
  return (
    <div className="flex flex-col gap-5">
      {Object.entries(config.fields).map(
        ([fieldName, fieldConfig]) => (
          <DynamicField
            key={fieldName}
            config={fieldConfig}
            value={values[fieldName] ?? ''}
            onChange={(value) =>
              onChange(fieldName, value)
            }
          />
        )
      )}
    </div>
  );
}