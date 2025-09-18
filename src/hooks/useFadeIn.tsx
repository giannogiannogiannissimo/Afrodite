import { useEffect, useRef, useState } from "react";

export const useFadeIn = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // appare solo la prima volta
        }
      },
      { threshold: 0.2 } // 20% visibile per trigger
    );

    if (ref.current) {  //se il componente è stato montato, gli attacca l'observer
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
