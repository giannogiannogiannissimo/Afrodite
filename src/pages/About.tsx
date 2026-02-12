import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import dottore from "@/assets/logos/francesco.jpg";
import dottoressa from "@/assets/logos/mamma.png";
import "../css.css";

const About: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="about"
      ref={ref}
      className={`mt-10 py-16 px-4 text-center opacity-0 translate-y-6 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : ""}`}>
      <h2 className={`text-3xl font-avigea animate-entrata-fade duration-[1000ms] transition-all delay-[2500ms] opacity-0 sm:text-4xl md:text-5xl font-bold text-tema-scuro mb-4 ${isVisible ? "opacity-100" : ""}`}>
        Chi siamo
      </h2>
      <div className="flex flex-col gap-14">
          <div className={`shadow-2xl container relative flex flex-col about-us-normale:flex-row justify-between items-center bg-white pt-3 pb-4 pl-2 rounded-2xl animate-entrata-fade duration-[1000ms] transition-all delay-[3500ms] opacity-0 ${isVisible ? "opacity-100" : ""}`}>
              {/* Diagonal Fade Bottom Grid Right Background */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #8ECEDD 1px, transparent 1px),
                    linear-gradient(to bottom, #8ECEDD 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
                  maskImage:
                    "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
                }}
              />
                {/* Your Content/Components */}
                {/* Loader come cornice */}
                <div className="loader3 loader1"></div>
                {/* Foto circolare */}
                <img
                  src={dottore}
                  alt="dottore"
                  className="h-64 w-64 object-cover rounded-full justify-self-center"
                />
                <p className="z-10 ml-5 flex-1 justify-self-center text-xl sm:text-3xl text-tema-primario font-lora">Medico chirurgo con trentannale esperienza mi occupo principalmente di medicina preventiva, predittiva, rigenerativa, estetica e funzionale</p>
          </div>
          <div className={`shadow-2xl container relative flex flex-col-reverse about-us-normale:flex-row about-us-normale:justify-end about-us-normale:self-end items-center bg-white pt-3 pb-4 pr-2 rounded-2xl overflow-hidden animate-entrata-fade duration-[1000ms] transition-all delay-[4500ms] opacity-0 ${isVisible ? "opacity-100" : ""}`}>
            
            
            {/* Diagonal Fade Bottom Grid Left Background */}
            <div
              className="absolute inset-0 -z-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #8ECEDD 1px, transparent 1px),
                  linear-gradient(to bottom, #8ECEDD 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
              }}
            />
              {/* Your Content/Components */}
              {/* Loader come cornice */}
              <div className="loader3 loader2 "></div>

              
              <div className="z-10 mr-5 flex-1 text-xl sm:text-3xl text-tema-primario font-lora">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat dolorum fugiat eius quod nam nesciunt harum magni! Consequatur quas consequuntur non, culpa tenetur inventore enim. Provident minus magni iusto harum.
              </div>
              {/* Foto circolare */}
              <img
                src={dottoressa}
                alt="dottoressa"
                className="h-64 w-64 object-cover rounded-full justify-self-center"
              />
          </div>
          
      </div>
    </section>
  );
};

export default About;
