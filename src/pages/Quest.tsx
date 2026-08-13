import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ScreenWrapper from '../components/ScreenWrapper'

import { Quest } from '../types/common'
import { quests } from '../mocks/quest';


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