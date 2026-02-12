import { useEffect, useRef, useState } from "react";

interface CaroselloProps {
  items: React.ReactNode[];
}

const Carosello: React.FC<CaroselloProps> = ({ items }) => {
  const total = items.length;

  // Creiamo i cloni per il loop infinito
  const extendedItems = [
    ...items.slice(-3), 
    ...items,
    ...items.slice(0, 3), 
  ];

  const [current, setCurrent] = useState(3); 
  const [isTransitioning, setIsTransitioning] = useState(true);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth < 768;
  const visibleSlides = isMobile ? 1 : 3;

  // Autoplay direction
  const lastDirection = useRef(1); // 1 = destra, -1 = sinistra

  // Timer autoplay
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Swipe handling
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  const getTranslateX = () =>
    -(current * (100 / visibleSlides));

  const setSlider = (value: number) => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `translateX(${value}%)`;
    }
  };

  const startDrag = (e: any) => {
    stopAutoplay();
    setIsDragging(true);
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    prevTranslate.current = getTranslateX();
  };

  const onDrag = (e: any) => {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = x - startX.current;
    currentTranslate.current =
      prevTranslate.current + (diff / window.innerWidth) * 100;
    setSlider(currentTranslate.current);
  };

  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const movement = currentTranslate.current - prevTranslate.current;

    if (movement < -5) {
      next();
      lastDirection.current = 1;
    } else if (movement > 5) {
      prev();
      lastDirection.current = -1;
    } else {
      setSlider(prevTranslate.current);
    }

    startAutoplay();
  };

  const next = () => {
    lastDirection.current = 1;
    setIsTransitioning(true);
    setCurrent((c) => c + 1);
  };

  const prev = () => {
    lastDirection.current = -1;
    setIsTransitioning(true);
    setCurrent((c) => c - 1);
  };

  // --- AUTOPLAY ---
  const triggerAutoMove = () => {
    if (lastDirection.current === 1) next();
    else prev();
  };

  const startAutoplay = () => {
    stopAutoplay(); 
    autoTimerRef.current = setTimeout(triggerAutoMove, 5000); // 5s
  };

  const stopAutoplay = () => {
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
  };

  // Riposizionamento invisibile
  useEffect(() => {
    if (!wrapperRef.current) return;

    wrapperRef.current.style.transition = isTransitioning
      ? "transform 0.5s ease"
      : "none";

    wrapperRef.current.style.transform = `translateX(${getTranslateX()}%)`;

    const timeout = setTimeout(() => {
      setIsTransitioning(false);

      if (current >= total + 3) setCurrent(3);
      if (current < 3) setCurrent(total + 2);
    }, 500);

    startAutoplay(); 

    return () => clearTimeout(timeout);
  }, [current]);

  // Attiva autoplay all'avvio
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  return (
    <div className="relative w-full overflow-hidden mt-10 select-none rounded-2xl">

      {!isMobile && (
        <button
          onClick={() => {
            stopAutoplay();
            prev();
            startAutoplay();
          }}
          className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-tema-primario text-white px-4 pb-2 rounded-full shadow hover:bg-tema-scuro z-20 text-3xl"
        >
          ‹
        </button>
      )}

      <div
        ref={wrapperRef}
        className="flex"
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={startDrag}
        onTouchMove={onDrag}
        onTouchEnd={endDrag}
      >
        {extendedItems.map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full md:w-1/3 p-4"
          >
            {card}
          </div>
        ))}
      </div>

      {!isMobile && (
        <button
          onClick={() => {
            stopAutoplay();
            next();
            startAutoplay();
          }}
          className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-tema-primario text-white px-4 pb-2 rounded-full shadow hover:bg-tema-scuro z-20 text-3xl"
        >
          ›
        </button>
      )}

      {isMobile && (
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, i) => {
            const isActive = (current - 3 + total) % total === i;
            return (
              <div
                key={i}
                className={`h-3 w-3 rounded-full transition-all ${
                  isActive
                    ? "bg-tema-primario scale-110"
                    : "bg-gray-300"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carosello;
