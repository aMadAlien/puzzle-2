import { ComponentType, ReactNode } from 'react';
import { FormConfig } from './form.types';

export enum ModuleType {
  TEXT = 'text',
  QUESTION_TEXT = 'question-text',
  TEXT_IMG = 'text-img',
  PUZZLE_LETTER = 'puzzle-letter',
  IMGS = 'imgs',
}

export enum FieldType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  IMAGE = 'image',
  IMAGE_LIST = 'image-list',
}

export interface GreetingComponents {
  title: string;
  description: string;
}

export interface TextQuestionComponents {
  question: string;
  correctAnswer: string;
}

export interface RulesComponents {
  title: string;
  description: string;
  imgSrc: string;
}

export interface PuzzleComponents {
  letter: string | null;
  subtitle: string | null;
  imgSrc: string;
}

export interface GalleryComponents {
  images: string[];
}

export interface GreetingData {
  type: ModuleType.TEXT;
  components: GreetingComponents;
}

export interface TextQuestionData {
  type: ModuleType.QUESTION_TEXT;
  components: TextQuestionComponents;
}

export interface RulesData {
  type: ModuleType.TEXT_IMG;
  components: RulesComponents;
}

export interface PuzzleData {
  type: ModuleType.PUZZLE_LETTER;
  components: PuzzleComponents;
}

export interface GalleryData {
  type: ModuleType.IMGS;
  components: GalleryComponents;
}

export type ModuleData =
  | GreetingData
  | TextQuestionData
  | RulesData
  | PuzzleData
  | GalleryData;

export type ModuleComponents =
  | GreetingComponents
  | TextQuestionComponents
  | RulesComponents
  | PuzzleComponents
  | GalleryComponents;

export interface Module<T extends ModuleData = ModuleData> {
  id: string;
  slug: string;
  name: string;
  component: ComponentType<any>;
  data: T;
}

export interface SelectedModule {
  id: string;
  name: string;
  slug: ModuleSlug;
  data: ModuleData;
  icon: ReactNode;
}

// ======================
export type ModuleSlug =
  | "greeting"
  | "textQuestion"
  | "puzzle"
  | "gallery"
  | "textImg";

type ModuleDataMap = {
  greeting: GreetingData;
  textQuestion: TextQuestionData;
  puzzle: PuzzleData;
  gallery: GalleryData;
  textImg: RulesData;
};

export type ModuleRegistryItem<T extends ModuleSlug> = {
  id: string;
  icon: ReactNode;
  name: string;
  type: ModuleType;
  component: ComponentType<any>;
  form: FormConfig;
  createData: () => ModuleDataMap[T];
};

export type ModuleRegistry = {
  [K in ModuleSlug]?: ModuleRegistryItem<K>;
};