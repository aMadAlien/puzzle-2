import { FieldType } from "./module.types";

export interface TextFieldConfig {
  type: FieldType.TEXT;
  label: string;
  placeholder?: string;
}

export interface TextareaFieldConfig {
  type: FieldType.TEXTAREA;
  label: string;
  placeholder?: string;
  rows?: number;
}

export interface ImageFieldConfig {
  type: FieldType.IMAGE;
  label: string;
}

export interface ImageListFieldConfig {
  type: FieldType.IMAGE_LIST;
  label: string;
  maxItems?: number;
}

export type FieldConfig =
  | TextFieldConfig
  | TextareaFieldConfig
  | ImageFieldConfig
  | ImageListFieldConfig;

export interface FormConfig {
  fields: Record<string, FieldConfig>;
}