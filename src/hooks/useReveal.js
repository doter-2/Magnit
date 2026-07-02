import { useState, useEffect, useRef } from "react";

export function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, v];
}
