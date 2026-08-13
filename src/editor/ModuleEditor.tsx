import { useState } from 'react';

import { DynamicForm } from './DynamicForm';
import { greetingFormConfig } from '../config/greeting.config';
import { Module } from '../types/module.types';

interface Props {
  module: Module;
}

export function ModuleEditor({ module }: Props) {

  const [values, setValues] = useState(
    module.data.components
  );

  const handleChange = (
    field: string,
    value: string
  ) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // const config = moduleRegistry[module.slug];

  return (
    <div className="p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        {module.name}
      </h2>

      <DynamicForm
        // config={config.form}
        // values={module.data.components}
        config={greetingFormConfig}
        values={values}
        onChange={handleChange}
      />

    </div>
  );
}