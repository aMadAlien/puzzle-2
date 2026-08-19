import { FormConfig } from "../types/form.types";
import { FieldType } from "../types/module.types";

export const textQuestionFormConfig: FormConfig = {
  fields: {
    question: {
      type: FieldType.TEXT,
      label: 'Задайте питання',
      placeholder: 'Задайте питання...',
    },

    correctAnswer: {
      type: FieldType.TEXTAREA,
      label: 'Дайте відповідь',
      placeholder: 'Дайте відповідь...',
      rows: 5,
    },
  },
};