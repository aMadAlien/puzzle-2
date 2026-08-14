import { FormConfig } from "../types/form.types";
import { FieldType } from "../types/module.types";

export const galleryFormConfig: FormConfig = {
  fields: {
    images: {
      type: FieldType.IMAGE_LIST,
      label: 'Ваша галерея',
      maxItems: 10,
    },
  },
};