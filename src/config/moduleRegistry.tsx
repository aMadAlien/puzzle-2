import Gallery from "../components/screens/Gallery";
import Greeting from "../components/screens/Greeting";
import Puzzle from "../components/screens/Puzzle";
import TextQuestion from "../components/screens/TextQuestion";
import { GalleryData, GreetingData, ModuleType, PuzzleData, TextQuestionData } from "../types/module.types";
import { greetingFormConfig } from "./greeting.config";

export const moduleRegistry = {

  greeting: {
    name: 'Greeting',
    type: ModuleType.TEXT,
    component: Greeting,
    form: greetingFormConfig,
    createData: (): GreetingData => ({
      type: ModuleType.TEXT,
      components: {
        title: 'Привіт!',
        description: 'Давай розпочнемо нашу пригоду!',
      },
    }),
  },

  textQuestion: {
    name: 'Text Question',
    type: ModuleType.QUESTION_TEXT,
    component: TextQuestion,
    // form: textQuestionFormConfig,
    form: greetingFormConfig,

    createData: (): TextQuestionData => ({
      type: ModuleType.QUESTION_TEXT,
      components: {
        question: '',
        correctAnswer: '',
      },
    }),
  },

  gallery: {
    name: 'Gallery',
    type: ModuleType.IMGS,
    component: Gallery,
    // form: galleryFormConfig,
    form: greetingFormConfig,

    createData: (): GalleryData => ({
      type: ModuleType.IMGS,
      components: {
        images: [],
      },
    }),
  },

  puzzle: {
    name: 'Puzzle',
    type: ModuleType.PUZZLE_LETTER,
    component: Puzzle,
    // form: puzzleFormConfig,
    form: greetingFormConfig,

    createData: (): PuzzleData => ({
      type: ModuleType.PUZZLE_LETTER,
      components: {
        letter: '',
        imgSrc: '',
      },
    }),
  },

} as const;

export type ModuleSlug = keyof typeof moduleRegistry;