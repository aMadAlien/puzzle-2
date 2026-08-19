import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import ScreenWrapper from '../components/ScreenWrapper'
import { moduleRegistry } from '../config/moduleRegistry'
import { Module, ModuleSlug } from '../types/module.types'
import { Quest } from '../types/common'

interface QuestResponse extends Quest { };


export default function QuestPage() {
  const [quest, setQuest] = useState<Quest | null>(null);
  const [stepIndex, setStepIndex] = useState(0);

  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    if (!slug) return;

    setQuest(null);
    setStepIndex(0);

    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api/templates'}/${slug}`)
      .then(response => {
        if (!response.ok) throw new Error('Quest not found');
        return response.json() as Promise<QuestResponse>;
      })
      .then((response: Quest) => {
        const steps: Module[] = response.steps.map(step => {
          const moduleSlug = step.slug as ModuleSlug;
          const moduleConfig = moduleRegistry[moduleSlug];

          if (!moduleConfig) throw new Error(`Unknown module: ${step.slug}`);

          return {
            id: step.id,
            slug: moduleSlug,
            name: step.name,
            component: moduleConfig.component,
            data: step.data,
          };
        });

        setQuest({ slug: response.slug, title: response.title, steps });
      })
      .catch(() => setQuest(null));
  }, [slug]);

  const moduleConfig = useMemo(() => {
    return quest ? moduleRegistry[quest['steps'][stepIndex]?.slug as ModuleSlug] : null;
  }, [stepIndex, moduleRegistry, quest])


  if (!quest || !moduleConfig) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <h1>Quest not found</h1>
      </div>
    )
  }

  return (
    <div className="quest-wrapper">
      <ScreenWrapper
        data={quest['steps'][stepIndex]?.data.components}
        onNextStep={() => setStepIndex(prev => prev + 1)}
        Step={moduleConfig.component} />

      <div className="overlay" />
    </div>
  )
}