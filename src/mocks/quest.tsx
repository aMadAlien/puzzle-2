import Gallery from "../components/screens/Gallery";
import Greeting from "../components/screens/Greeting";
import Puzzle from "../components/screens/Puzzle";
import Rules from "../components/screens/Rules";
import TextQuestion from "../components/screens/TextQuestion";
import { Quest } from "../types/common";
import { ModuleType } from "../types/module.types";

export const quests: Quest[] = [
  {
    slug: 'quest-1',
    title: 'Quest 1',
    steps: [
      {
        id: '',
        slug: 'greeting',
        name: 'Greeting',
        component: Greeting,
        data: {
          type: ModuleType.TEXT,
          components: {
            title: 'Привіт!',
            description: 'Я радий, що ти тут. Давай розпочнемо нашу пригоду!'
          }
        }
      },
      {
        id: '',
        slug: 'text-q',
        name: 'Text Question',
        component: TextQuestion,
        data: {
          type: ModuleType.QUESTION_TEXT,
          components: {
            question: 'Який сирд я найчастіше п\'ю?',
            correctAnswer: 'яблучний'
          }
        }
      },
      {
        id: '',
        slug: 'puzzle-rules',
        name: 'Puzzle Rules',
        component: Rules,
        data: {
          type: ModuleType.TEXT_IMG,
          components: {
            title: 'Правила гри',
            description: 'Перед тобою одне з наших найкращих фото. Але зараз воно розбите на шматочки. Склади його 😊',
            imgSrc: '../../src/assets/gallery/5.jpg'
          }
        }
      },
      {
        id: '',
        slug: 'puzzle',
        name: 'Puzzle',
        component: Puzzle,
        data: {
          type: ModuleType.PUZZLE_LETTER,
          components: {
            letter: null,
            subtitle: '',
            imgSrc: '../../src/assets/gallery/5.jpg'
          }
        }
      },
      {
        id: '',
        slug: 'gallery',
        name: 'Gallery',
        component: Gallery,
        data: {
          type: ModuleType.IMGS,
          components: {
            images: [
              '../../src/assets/gallery/1.jpg',
              '../../src/assets/gallery/2.jpg',
              '../../src/assets/gallery/3.jpg',
              '../../src/assets/gallery/4.jpg',
              '../../src/assets/gallery/5.jpg'
            ]
          }
        }
      }
    ]
  },
];