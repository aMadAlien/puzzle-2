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

export type FieldConfig =
  | TextFieldConfig
  | TextareaFieldConfig;

export interface FormConfig {
  fields: Record<string, FieldConfig>;
}