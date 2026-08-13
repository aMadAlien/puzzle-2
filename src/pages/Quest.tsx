import { useEffect, useState } from 'react'
import Greeting from '../components/screens/Greeting'
import TextQuestion from '../components/screens/TextQuestion'
import Rules from '../components/screens/Rules'
import ScreenWrapper from '../components/ScreenWrapper'
import Puzzle from '../components/screens/Puzzle'
import Gallery from '../components/screens/Gallery'

import { ModuleType, Quest } from '../types/common'
import { useParams } from 'react-router-dom'



const quests: Quest[] = [
  {
    slug: 'quest-1',
    title: 'Quest 1',
    steps: [
      {
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
        slug: 'puzzle',
        name: 'Puzzle',
        component: Puzzle,
        data: {
          type: ModuleType.PUZZLE_LETTER,
          components: {
            letter: null,
            imgSrc: '../../src/assets/gallery/5.jpg'
          }
        }
      },
      {
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

export default function QuestPage() {
  const [quest, setQuest] = useState<Quest | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const { slug } = useParams<{ slug: string }>();
  // const slug = window.location.pathname.split("/").pop();

  useEffect(() => {
    const q = quests.find(q => q.slug === slug);

    if (q) {
      setQuest(q);
    }
  }, [slug]);

  if (!quest) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <h1>Quest not found</h1>
      </div>
    )
  }

  return (
    <div className="quest-wrapper">
      <ScreenWrapper
        data={quest['steps'][stepIndex]?.data}
        onNextStep={() => setStepIndex(prev => prev + 1)}
        Step={quest?.steps[stepIndex]?.component} />

      <div className="overlay" />
    </div>
  )
}