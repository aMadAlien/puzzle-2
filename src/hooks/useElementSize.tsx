import { useEffect, useRef, useState } from "react";

export default function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setSize(entry.contentRect.width);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, size };
}