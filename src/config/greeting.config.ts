import { FormConfig } from "../types/form.types";
import { FieldType } from "../types/module.types";

export const greetingFormConfig: FormConfig = {
  fields: {
    title: {
      type: FieldType.TEXT,
      label: 'Заголовок',
      placeholder: 'Введіть заголовок...',
    },

    description: {
      type: FieldType.TEXTAREA,
      label: 'Підзаголовок/опис',
      placeholder: 'Почніть писати...',
      rows: 5,
    },
  },
};