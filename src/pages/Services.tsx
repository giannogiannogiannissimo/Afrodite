import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";

const services = [
  { title: "Visite Generali", desc: "Controlli e consulti di medicina generale." },
  { title: "Pediatria", desc: "Cure e prevenzione per bambini e adolescenti." },
  { title: "Dermatologia", desc: "Visite specialistiche per pelle e capelli." },
  { title: "Cardiologia", desc: "Controlli e diagnosi per il benessere del cuore." },
];

const Services: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="services"
      ref={ref}
      className={`py-16 px-4 text-center opacity-0 translate-y-6 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : ""}`}
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-10">
        I nostri servizi
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              transitionDelay: `${index * 0.5}s`, // mezzo secondo di differenza
            }}
            className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transform transition-all duration-1000 ease-out
              opacity-0 translate-y-6
              ${isVisible ? "opacity-100 translate-y-0" : ""}`}
          >
            <h3 className="text-lg sm:text-xl font-bold text-blue-500">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
