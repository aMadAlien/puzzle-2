import { FormConfig } from "../types/form.types";
import { FieldType } from "../types/module.types";

export const puzzleFormConfig: FormConfig = {
  fields: {
    imgSrc: {
      type: FieldType.IMAGE,
      label: 'Ваше фото',
    },
    letter: {
      type: FieldType.TEXTAREA,
      label: 'Напишіть листа',
      placeholder: 'Дякую тобі за те, що ти є в моєму житті...',
      rows: 7,
    },
  },
};