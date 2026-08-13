import Gallery from "../components/screens/Gallery";
import Greeting from "../components/screens/Greeting";
import Puzzle from "../components/screens/Puzzle";
import TextQuestion from "../components/screens/TextQuestion";
import { ModuleType } from "../types/module.types";
import { greetingFormConfig } from "./greeting.config";

export const moduleRegistry = {

  greeting: {
    name: 'Greeting',
    type: ModuleType.TEXT,
    component: Greeting,
    form: greetingFormConfig,
  },

  textQuestion: {
    name: 'Text Question',
    type: ModuleType.QUESTION_TEXT,
    component: TextQuestion,
    // form: textQuestionFormConfig,
  },

  gallery: {
    name: 'Gallery',
    type: ModuleType.IMGS,
    component: Gallery,
    // form: galleryFormConfig,
  },

  puzzle: {
    name: 'Puzzle',
    type: ModuleType.PUZZLE_LETTER,
    component: Puzzle,
    // form: puzzleFormConfig,
  },

} as const;