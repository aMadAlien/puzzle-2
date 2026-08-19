import { FormConfig } from "../types/form.types";
import { FieldType } from "../types/module.types";

export const textImgFormConfig: FormConfig = {
  fields: {
    imgSrc: {
      type: FieldType.IMAGE,
      label: 'Ваше фото',
    },
    title: {
      type: FieldType.TEXT,
      label: 'Заголовок',
      placeholder: 'Твоя посмішка зводить мене з розуму...',
    },
    description: {
      type: FieldType.TEXTAREA,
      label: 'Звернення',
      placeholder: 'Дякую тобі за те, що ти є в моєму житті...',
      rows: 7,
    },
  },
};