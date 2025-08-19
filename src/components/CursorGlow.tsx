import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      el.style.setProperty('--x', x);
      el.style.setProperty('--y', y);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div ref={ref} aria-hidden className="cursor-glow" />;
};

export default CursorGlow;
