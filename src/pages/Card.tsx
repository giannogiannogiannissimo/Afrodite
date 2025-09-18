import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import "../css.css";

const Card: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="card"
      ref={ref}
      className={`container py-16 px-4 text-center opacity-0 translate-y-6 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : ""}`}>
      
      <div className="card">
    <h1>Animate Borders</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ad exercitationem voluptatem ullam et, natus impedit quae veniam optio a doloremque officiis beatae, itaque nesciunt nostrum quasi molestiae laudantium dolor asperiores soluta sint sed ratione cupiditate. Laudantium earum reiciendis enim.</p>
  </div>

    </section>
  );
};

export default Card;
