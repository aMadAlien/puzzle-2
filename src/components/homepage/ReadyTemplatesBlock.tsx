import { useEffect, useState } from "react";
import { TemplateInfo } from "../../types/common";
import VerticalScreenCard from "../cards/VerticalScreenCard";

export default function ReadyTemplatesBlock() {
  const [templates, setTemplates] = useState<TemplateInfo[]>();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api/templates'}?limit=4`)
      .then(async response => {
        if (!response.ok) throw new Error('Quest not found');
        const data = await response.json();
        const handledData = data.map((i: any) => ({ ...i, title: i.name }))
        setTemplates(handledData);
      })
      .catch(() => setTemplates([]));
  }, []);

  if (!templates) return null;

  return (
    <section className="mt-20 mb-10 border-t border-black pt-5">
      <h2 className="mb-9 title-main">Готові шаблони на будь-яку подію</h2>
      <div className="flex gap-5 overflow-auto">

        {templates.map(data => (
          <VerticalScreenCard key={data.id} data={data} />
        ))}

      </div>
    </section>
  )
}
