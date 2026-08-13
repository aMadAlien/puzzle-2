import { FormConfig } from '../types/form.types';
import { DynamicField } from './DynamicField';

interface DynamicFormProps<T extends Record<string, unknown>> {
  config: FormConfig;
  values: T;

  onChange: <K extends keyof T>(
    field: K,
    value: T[K]
  ) => void;
}

export function DynamicForm<
  T extends Record<string, unknown>
>({
  config,
  values,
  onChange,
}: DynamicFormProps<T>) {
  return (
    <div className="flex flex-col gap-5">
      {Object.entries(config.fields).map(
        ([fieldName, fieldConfig]) => (
          <DynamicField
            key={fieldName}
            config={fieldConfig}
            value={String(values[fieldName as keyof T] ?? '')}
            onChange={(value) =>
              onChange(
                fieldName as keyof T,
                value as T[keyof T]
              )
            }
          />
        )
      )}
    </div>
  );
}