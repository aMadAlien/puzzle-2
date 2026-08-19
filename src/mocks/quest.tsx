import { Quest } from "../types/common";
import { ModuleType } from "../types/module.types";

export const quests: Quest[] = [
  {
    slug: 'quest-1',
    title: 'Quest 1',
    steps: [
      {
        id: '1',
        slug: 'greeting',
        name: 'Greeting',
        data: {
          type: ModuleType.TEXT,
          components: {
            title: 'Привіт!',
            description: 'Я радий, що ти тут. Давай розпочнемо нашу пригоду!'
          }
        }
      },
      {
        id: '2',
        slug: 'textQuestion',
        name: 'Text Question',
        data: {
          type: ModuleType.QUESTION_TEXT,
          components: {
            question: 'Який сирд я найчастіше п\'ю?',
            correctAnswer: 'яблучний'
          }
        }
      },
      {
        id: '3',
        slug: 'textImg',
        name: 'Puzzle Rules',
        data: {
          type: ModuleType.TEXT_IMG,
          components: {
            title: 'Правила гри',
            description: 'Перед тобою одне з наших найкращих фото. Але зараз воно розбите на шматочки. Склади його 😊',
            imgSrc: 'https://i.pinimg.com/1200x/f0/9b/7b/f09b7b40b89df500ea3a24aba282764b.jpg'
          }
        }
      },
      {
        id: '4',
        slug: 'puzzle',
        name: 'Puzzle',
        data: {
          type: ModuleType.PUZZLE_LETTER,
          components: {
            letter: null,
            subtitle: '',
            imgSrc: 'https://i.pinimg.com/1200x/f0/9b/7b/f09b7b40b89df500ea3a24aba282764b.jpg'
          }
        }
      },
      {
        id: '5',
        slug: 'gallery',
        name: 'Gallery',
        data: {
          type: ModuleType.IMGS,
          components: {
            images: [
              'https://i.pinimg.com/1200x/ea/c5/c8/eac5c8e2aceaa3e8812c95ee55a13870.jpg',
              'https://i.pinimg.com/736x/56/57/3a/56573ae6329cad8f6440696ad8194cd4.jpg',
              'https://i.pinimg.com/736x/3f/6c/1f/3f6c1fcfb89e1c16dbd18e1aab5edc3e.jpg',
              'https://i.pinimg.com/736x/be/e0/f0/bee0f0ef821cb3d5a8923e88b1a5f7be.jpg',
              'https://i.pinimg.com/736x/2b/bf/4a/2bbf4ad589714611b6258f2a1f6c4aef.jpg',
            ]
          }
        }
      }
    ]
  },
];