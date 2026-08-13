import { FormConfig } from "../types/form.types";
import { FieldType } from "../types/module.types";

export const greetingFormConfig: FormConfig = {
  fields: {
    title: {
      type: FieldType.TEXT,
      label: 'Title',
      placeholder: 'Enter title...',
    },

    description: {
      type: FieldType.TEXTAREA,
      label: 'Description',
      placeholder: 'Enter description...',
      rows: 5,
    },
  },
};