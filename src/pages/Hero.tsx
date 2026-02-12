import React from "react";
import logoPositivo from "@/assets/logos/ICON-POSITIVO.png";
import { useFadeIn } from "@/hooks/useFadeIn";

const Hero: React.FC = () => {
const { ref, isVisible } = useFadeIn();

// Variabili configurabili
  const FADE_DURATION = 750; // ms
  const DELAY_STEP = 750;    // ms per ogni elemento

  return (
    <section 
    id="hero"
      ref={ref}
    className={`justify-center relative hero-tablet:grid hero-tablet:grid-cols-[400px_theme(spacing.72)_400px] hero-pc:grid-cols-[700px_theme(spacing.72)_700px] hero-tablet:grid-rows-[400px_400px_400px] hero-tablet:place-items-center px-4 opacity-0 translate-y-6 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : ""}`}>
      {/* Logo centrale */}
      <div className="hero-tablet:col-start-2 hero-tablet:row-start-2 flex flex-col items-center">
        <img
          src={logoPositivo}
          alt="Afrodite positivo" 
          className={`h-auto w-full max-w-2xs sm:max-w-2xs animate-entrata-fade duration-1000 opacity-0 ${ isVisible ? "opacity-100" : ""}`}
        />
      </div>


      {/* Sopra Sinistra*/}
      <div className={`pb-4 hidden col-start-1 row-start-1 hero-tablet:flex flex-col items-center justify-self-center relative mr-6 h-full justify-end opacity-0 transition-all animate-fadeIn ${isVisible ? "opacity-100" : ""}`}
       style={{
            transitionDelay: `${1 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}>
        <div className="h-16 w-px bg-tema-primario origin-bottom scale-y-0 animate-grow"/>
          <h3 className="text-5xl font-avigea font-bold text-tema-primario mt-2">
            Benessere
          </h3>
          <p className="text-3xl font-lora max-w-xs text-tema-primario text-center">
            Promozione di uno stato di salute ottimale attraverso trattamenti specifici.
          </p>     
        </div>

      {/* Sopra */}
      <div className={`col-start-2 row-start-1 hidden hero-tablet:flex flex-col self-start items-center relative opacity-0 transition-all  animate-fadeIn ${isVisible ? "opacity-100" : ""}`}
       style={{
            transitionDelay: `${2 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}>
        <div className="h-16 w-px bg-tema-primario origin-bottom scale-y-0 animate-grow" />
        <h3 className="text-5xl font-avigea font-bold text-tema-primario mt-2">
            Salute
        </h3>
        <p className="text-3xl font-lora max-w-xs text-tema-primario text-center">
          Focus sulla prevenzione, diagnosi e trattamento per migliorare la qualità della vita.
        </p>

        {/* Riga verticale */}
       {/*  <span
          className={`
            absolute left-1/2 -bottom-20 -translate-x-1/2
            h-0 w-[2px] bg-tema-primario
            transition-all delay-300 duration-300
            ${isVisible ? "h-16" : ""}
          `}
        /> */}
      </div>

      {/* Sopra Destra*/}
      <div className={`col-start-3 row-start-1 hidden hero-tablet:flex flex-col items-center justify-end justify-self-center relative ml-6 h-full opacity-0 transition-all  animate-fadeIn ${isVisible ? "opacity-100" : ""}`}
      style={{
            transitionDelay: `${3 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}>
        <div className="h-16 w-px bg-tema-primario origin-bottom scale-y-0" />
        <h3 className="text-5xl font-avigea font-bold text-tema-primario mt-2">
          Innovazione
        </h3>
        <p className="text-3xl font-lora max-w-xs text-tema-primario text-center animate-fadeIn delay-700">
          Utilizzo di tecnologie avanzate come la radiofrequenza per trattamenti efficaci e moderni.
        </p>
        {/* Riga obliqua */}
        {/* <span
          className={`
            absolute -bottom-24 -left-72
            h-96 w-[2px] bg-tema-primario
            origin-bottom-right rotate-80
            transition-all delay-300 duration-500
            ${isVisible ? "scale-y-100" : "scale-y-0"}
          `}
        /> */}
      </div>

      {/* Destra */}
      <div className={`col-start-3 row-start-2 hidden hero-tablet:flex flex-col self-start items-center relative h-full opacity-0 transition-all  animate-fadeIn ${isVisible ? "opacity-100" : ""}`}
       style={{
            transitionDelay: `${4 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}>
        <div className="h-16 w-px bg-tema-primario origin-bottom scale-y-0" />
        <h3 className="text-5xl font-avigea font-bold text-tema-primario mt-2">
            Equilibrio
        </h3>
        <p className="text-3xl font-lora max-w-xs text-tema-primario text-center">
          Armonia tra tecnologia e attenzione personalizata ai bisogni dei pazienti.
        </p>

        {/* Riga orizzontale */}
        {/* <span
          className={`
            absolute top-1/2 -left-64 -translate-y-1/2
            h-[3px] w-0 bg-tema-primario
            transition-all delay-300 duration-300
            ${isVisible ? "w-52" : ""}
          `}
        /> */}
      </div>

      {/* Sotto Destra*/}
      <div className={`col-start-3 row-start-3 hidden hero-tablet:flex flex-col items-center self-start justify-self-center relative ml-6 opacity-0 transition-all  animate-fadeIn ${isVisible ? "opacity-100" : ""}`}
       style={{
            transitionDelay: `${5 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}>
        <h3 className="text-5xl font-avigea font-bold text-tema-primario mt-2">
          Professionalità
        </h3>
        <p className="text-3xl font-lora max-w-xs text-tema-primario text-center">
          Approccio scientifico, competente e affidabile per garantire cure di alto livello.
        </p>
        {/* Riga obliqua */}
        {/* <span
          className={`
            absolute -top-24 -left-72
            h-96 w-[2px] bg-tema-primario
            origin-top-left rotate-280
            transition-all delay-300 duration-500
            ${isVisible ? "scale-y-100" : "scale-y-0"}
          `}
        /> */}
      </div>

      {/* Sotto */}
      <div className={`col-start-2 row-start-3 hidden hero-tablet:flex flex-col self-start items-center relative opacity-0 transition-all  animate-fadeIn ${isVisible ? "opacity-100" : ""}`}
       style={{
            transitionDelay: `${6 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}>
        <div className="h-16 w-px bg-tema-primario origin-bottom scale-y-0" />
        <h3 className="text-5xl font-avigea font-bold text-tema-primario mt-2">
            Tecnologia
        </h3>
        <p className="text-3xl font-lora max-w-xs text-tema-primario text-center">
          Strumenti e metodologie all'avanguardia per trattamenti mirati e non invasivi.
        </p>

        {/* Riga verticale */}
       {/*  <span
          className={`
            absolute left-1/2 -bottom-20 -translate-x-1/2
            h-0 w-[2px] bg-tema-primario
            transition-all delay-300 duration-300
            ${isVisible ? "h-16" : ""}
          `}
        /> */}
      </div>

      {/* Sotto Sinistra*/}
      <div className={`col-start-1 row-start-3 hidden hero-tablet:flex flex-col items-center self-start justify-self-center relative mr-6 opacity-0 transition-all  animate-fadeIn ${isVisible ? "opacity-100" : ""}`}
       style={{
            transitionDelay: `${7 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}>
        <h3 className="text-5xl font-avigea font-bold text-tema-primario mt-2">
          Cura
        </h3>
        <p className="text-3xl font-lora max-w-xs text-tema-primario text-center">
          Attenzione completa alla salute disica ed emotica dei pazienti. Approccio scientifico, competente e affidabile per garantire cure di alto livello.
        </p>
        {/* Riga obliqua */}
        {/* <span
          className={`
            absolute -top-24 -left-72
            h-96 w-[2px] bg-tema-primario
            origin-top-left rotate-280
            transition-all delay-300 duration-500
            ${isVisible ? "scale-y-100" : "scale-y-0"}
          `}
        /> */}
      </div>

      {/* Sinistra */}
      <div className={`col-start-1 row-start-2 hidden hero-tablet:flex flex-col self-start items-center relative h-full opacity-0 transition-all  animate-fadeIn ${isVisible ? "opacity-100" : ""}`}
       style={{
            transitionDelay: `${8 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}>
        <div className="h-16 w-px bg-tema-primario origin-bottom scale-y-0" />
        <h3 className="text-5xl font-avigea font-bold text-tema-primario mt-2">
            Prevenzione
        </h3>
        <p className="text-3xl font-lora max-w-xs text-tema-primario text-center">
          Interventi mirati per ridurre il rischio di patologie e mantenere la salute nel tempo.
        </p>

        {/* Riga orizzontale */}
        {/* <span
          className={`
            absolute top-1/2 -left-64 -translate-y-1/2
            h-[3px] w-0 bg-tema-primario
            transition-all delay-300 duration-300
            ${isVisible ? "w-52" : ""}
          `}
        /> */}
      </div>
      <div className="mt-4 bg-white rounded-2xl gap-y-10 p-10 hero-tablet:hidden">
        {/* Responsive Benessere */}
        <div
          className={`flex flex-col items-center text-center opacity-0 transition-all animate-fadeIn hero-tablet:hidden ${
            isVisible ? "opacity-100" : ""
          }`}
          style={{
            transitionDelay: `${1 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}
        >
          
          <h3 className="text-3xl sm:text-4xl font-avigea font-bold text-tema-primario mt-2">
            Benessere
          </h3>
          <p className="text-xl sm:text-2xl font-lora max-w-md text-tema-primario">
            Promozione di uno stato di salute ottimale attraverso trattamenti specifici.
          </p>
        </div>

        {/* Responsive Salute */}
        <div
          className={`flex flex-col items-center text-center opacity-0 transition-all animate-fadeIn mt-10 hero-tablet:hidden ${
            isVisible ? "opacity-100" : ""
          }`}
          style={{
            transitionDelay: `${2 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}
        >
          
          <h3 className="text-3xl sm:text-4xl font-avigea font-bold text-tema-primario mt-2">
            Salute
          </h3>
          <p className="text-xl sm:text-2xl font-lora max-w-md text-tema-primario">
            Focus sulla prevenzione, diagnosi e trattamento per migliorare la qualità della vita.
          </p>
        </div>

        {/* Responsive Innovazione */}
        <div
          className={`flex flex-col items-center text-center opacity-0 transition-all animate-fadeIn mt-10 hero-tablet:hidden ${
            isVisible ? "opacity-100" : ""
          }`}
          style={{
            transitionDelay: `${3 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}
        >
          
          <h3 className="text-3xl sm:text-4xl font-avigea font-bold text-tema-primario mt-2">
            Innovazione
          </h3>
          <p className="text-xl sm:text-2xl font-lora max-w-md text-tema-primario">
            Utilizzo di tecnologie avanzate come la radiofrequenza per trattamenti efficaci e moderni.
          </p>
        </div>

        {/* Responsive Equilibrio */}
        <div
          className={`flex flex-col items-center text-center opacity-0 transition-all animate-fadeIn mt-10 hero-tablet:hidden ${
            isVisible ? "opacity-100" : ""
          }`}
          style={{
            transitionDelay: `${4 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}
        >
          
          <h3 className="text-3xl sm:text-4xl font-avigea font-bold text-tema-primario mt-2">
            Equilibrio
          </h3>
          <p className="text-xl sm:text-2xl font-lora max-w-md text-tema-primario">
            Armonia tra tecnologia e attenzione personalizzata ai bisogni dei pazienti.
          </p>
        </div>

        {/* Responsive Professionalità */}
        <div
          className={`flex flex-col items-center text-center opacity-0 transition-all animate-fadeIn mt-10 hero-tablet:hidden ${
            isVisible ? "opacity-100" : ""
          }`}
          style={{
            transitionDelay: `${5 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}
        >
          <h3 className="text-3xl sm:text-4xl font-avigea font-bold text-tema-primario mt-2">
            Professionalità
          </h3>
          <p className="text-xl sm:text-2xl font-lora max-w-md text-tema-primario">
            Approccio scientifico, competente e affidabile per garantire cure di alto livello.
          </p>
        </div>

        {/* Responsive Tecnologia */}
        <div
          className={`flex flex-col items-center text-center opacity-0 transition-all animate-fadeIn mt-10 hero-tablet:hidden ${
            isVisible ? "opacity-100" : ""
          }`}
          style={{
            transitionDelay: `${6 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}
        >
          
          <h3 className="text-3xl sm:text-4xl font-avigea font-bold text-tema-primario mt-2">
            Tecnologia
          </h3>
          <p className="text-xl sm:text-2xl font-lora max-w-md text-tema-primario">
            Strumenti e metodologie all'avanguardia per trattamenti mirati e non invasivi.
          </p>
        </div>

        {/* Responsive Cura */}
        <div
          className={`flex flex-col items-center text-center opacity-0 transition-all animate-fadeIn mt-10 hero-tablet:hidden ${
            isVisible ? "opacity-100" : ""
          }`}
          style={{
            transitionDelay: `${7 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}
        >
          <h3 className="text-3xl sm:text-4xl font-avigea font-bold text-tema-primario mt-2">
            Cura
          </h3>
          <p className="text-xl sm:text-2xl font-lora max-w-md text-tema-primario">
            Attenzione completa alla salute fisica ed emotiva dei pazienti. Approccio scientifico,
            competente e affidabile per garantire cure di alto livello.
          </p>
        </div>

        {/* Responsive Prevenzione */}
        <div
          className={`flex flex-col items-center text-center opacity-0 transition-all animate-fadeIn mt-10 hero-tablet:hidden ${
            isVisible ? "opacity-100" : ""
          }`}
          style={{
            transitionDelay: `${8 * DELAY_STEP}ms`,
            transitionDuration: `${FADE_DURATION}ms`,
          }}
        >
          
          <h3 className="text-3xl sm:text-4xl font-avigea font-bold text-tema-primario mt-2">
            Prevenzione
          </h3>
          <p className="text-xl sm:text-2xl font-lora max-w-md text-tema-primario">
            Interventi mirati per ridurre il rischio di patologie e mantenere la salute nel tempo.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
