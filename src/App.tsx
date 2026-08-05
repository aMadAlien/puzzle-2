import { useEffect, useState } from 'react'
import './App.css'
import Greeting from './components/screens/Greeting'
import TextQuestion from './components/screens/TextQuestion'
import Rules from './components/screens/Rules'
import ScreenWrapper from './components/ScreenWrapper'
import Puzzle from './components/screens/Puzzle'
import Gallery from './components/screens/Gallery'


type Quest = {
  slug: string;
  title: string;
  steps: {
    slug: string;
    name: string;
    component: React.ComponentType<any>;
    data?: any;
  }[];
};

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
          title: 'Привіт!',
          description: 'Я радий, що ти тут. Давай розпочнемо нашу пригоду!'
        }
      },
      {
        slug: 'text-q',
        name: 'Text Question',
        component: TextQuestion,
        data: {
          question: 'Який сирд я найчастіше п\'ю?',
          correctAnswer: 'яблучний'
        }
      },
      {
        slug: 'puzzle-rules',
        name: 'Puzzle Rules',
        component: Rules,
        data: {
          title: 'Правила гри',
          description: 'Перед тобою одне з наших найкращих фото. Але зараз воно розбите на шматочки. Склади його 😊',
          imgSrc: '../../src/assets/gallery/5.jpg'
        }
      },
      {
        slug: 'puzzle',
        name: 'Puzzle',
        component: Puzzle,
        data: {
          letter: null,
          imgSrc: '../../src/assets/gallery/5.jpg'
        }
      },
      {
        slug: 'gallery',
        name: 'Gallery',
        component: Gallery,
        data: {
          images: [
            '../../src/assets/gallery/1.jpg',
            '../../src/assets/gallery/2.jpg',
            '../../src/assets/gallery/3.jpg',
            '../../src/assets/gallery/4.jpg',
            '../../src/assets/gallery/5.jpg'
          ]
        }
      }
    ]
  },
  {
    slug: 'quest-2',
    title: 'Quest 2',
    steps: [
      {
        slug: 'step-1',
        name: 'Greeting',
        component: TextQuestion
      }
    ]
  },
  {
    slug: 'quest-3',
    title: 'Quest 3',
    steps: [
      {
        slug: 'step-1',
        name: 'Greeting',
        component: Puzzle
      }
    ]
  },
];

function App() {
  const [quest, setQuest] = useState<Quest | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const slug = window.location.pathname.split("/").pop();

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
    <div className="">
      <ScreenWrapper
        data={quest['steps'][stepIndex]?.data}
        onNextStep={() => setStepIndex(prev => prev + 1)}
        Step={quest?.steps[stepIndex]?.component} />

      <div className="overlay" />
    </div>
  )
}

export default App
