import { Module, ModuleType } from "./module.types";

export type Quest = {
  slug: string;
  title: string;
  steps: Module[];
};

export interface ModuleInfo {
  id: string
  type: ModuleType
  title: string
  description: string
  image: string
}