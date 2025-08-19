import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glowEl = glowRef.current;
    const dotEl = dotRef.current;
    const ringEl = ringRef.current;
    
    if (!glowEl || !dotEl || !ringEl) return;

    const onMove = (e: MouseEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      
      // Update glow background position
      glowEl.style.setProperty('--x', x);
      glowEl.style.setProperty('--y', y);
      
      // Update cursor dot and ring positions
      dotEl.style.left = x;
      dotEl.style.top = y;
      ringEl.style.left = x;
      ringEl.style.top = y;
    };

    const onMouseEnter = () => {
      dotEl.style.opacity = '1';
      ringEl.style.opacity = '1';
      document.body.style.cursor = 'none';
    };

    const onMouseLeave = () => {
      dotEl.style.opacity = '0';
      ringEl.style.opacity = '0';
      document.body.style.cursor = 'default';
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <>
      <div ref={glowRef} aria-hidden className="cursor-glow" />
      <div ref={dotRef} aria-hidden className="cursor-dot opacity-0" />
      <div ref={ringRef} aria-hidden className="cursor-ring opacity-0" />
    </>
  );
};

export default CursorGlow;
