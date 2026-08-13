import { FormConfig } from "../types/form.types";
import { FieldType } from "../types/module.types";

export const textQuestionFormConfig: FormConfig = {
  fields: {
    question: {
      type: FieldType.TEXT,
      label: 'Питання',
      placeholder: 'Задайте питання...',
    },

    correctAnswer: {
      type: FieldType.TEXTAREA,
      label: 'Відповідь',
      placeholder: 'Дайте відповідь...',
      rows: 5,
    },
  },
};