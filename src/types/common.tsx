import { Module } from "./module.types";

export type Quest = {
  slug: string;
  title: string;
  steps: Module[];
};
