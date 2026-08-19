import { DynamicForm } from './DynamicForm';
import { ModuleData, ModuleSlug, SelectedModule } from '../types/module.types';
import { moduleRegistry } from "../config/moduleRegistry";

interface Props {
  module: SelectedModule;
  onChange: (id: string, data: ModuleData) => void;
}

export function ModuleEditor({ module, onChange }: Props) {
  const config = moduleRegistry[module.slug as ModuleSlug];

  if (!config) return null;

  return (
    <div className="p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        {module.name}
      </h2>


      <DynamicForm
        config={config.form}
        values={module.data.components as unknown as Record<string, unknown>}
        onChange={(field, value) => {
          const updatedComponents = {
            ...module.data.components,
            [field]: value,
          };

          onChange(module.id, {
            ...module.data,
            components: updatedComponents,
          } as ModuleData);
        }}
      />

    </div>
  );
}