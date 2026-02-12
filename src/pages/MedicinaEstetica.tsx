import React from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import giglio from "@/assets/logos/giglio.png";
import visoDonna from "@/assets/logos/visoDonna.jpg";
import corpoDonna from "@/assets/logos/corpoDonna.jpg";


const MedicinaEstetica: React.FC = () => {
    const { ref, isVisible } = useFadeIn();

    const FADE_DURATION = 1000; // ms
    const DELAY_STEP = 500;    // ms per ogni elemento

  return (
    <section
        id="medicinaEstetica"
        ref={ref} 
        className="mt-10 medicinaEstetica-tablet:py-16 medicinaEstetica-tablet:mt-12 py-10 flex flex-col text-center px-4 6xl:max-w-2xl 6xl:justify-self-center">
        
        <h2 className={`text-3xl font-lora duration-500 transition-all delay-500 opacity-0 sm:text-4xl md:text-5xl font-bold text-tema-scuro mb-4 ${ isVisible ? "opacity-100" : "opacity-0"}`}>
            Medicina estetica:  
        </h2>

        {/* Versione normale */}
        <div className={`hidden medicinaEstetica-tablet:flex medicinaEstetica-tablet:flex-col medicinaEstetica-tablet:gap-10 medicinaEstetica-tablet:justify-between medicinaEstetica-tablet:mt-20 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2"}`}>
            <div
                className={`relative overflow-hidden container mx-auto flex items-stretch bg-white w-4/5 rounded-2xl shadow-2xl duration-[1000ms] delay-[1000ms] ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2"}`}>
                    {/* Teal Glow Left */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                        background: "#ffffff",
                        backgroundImage: `
                            radial-gradient(
                            circle at bottom left,
                            var(--color-tema-chiaro),
                            transparent 80%
                            )
                        `,
                        filter: "blur(80px)",
                        backgroundRepeat: "no-repeat",
                        }}
                    />
                <div className="z-10 flex w-1/2 p-6 flex-col h-full">
                    <div className="flex">
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-10 w-auto`}
                        />
                        <h2 className="self-end ml-5 text-tema-scuro text-4xl medicinaEstetica-tablet:text-3xl font-avigea">Trattamento viso:</h2>
                    </div>
                    <ul
                    className={`transition-all fade-in mt-3 ml-10 space-y-2 text-left text-lg font-lora text-tema-primario ${
                        isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-1/2"
                    }`}
                    >
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(1 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Biostimolazione con acido ialuronico</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(2 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Bioristrutturazione
                            </span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(3 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Peeling</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(4 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Tossina botulinica</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(5 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Filler</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(6 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Carbossiterapia</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(7 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Radiofrequenza medicale</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(8 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Fotobiomodulazione</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(9 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Microneedling</span>
                        </li>
                    </ul>
                </div>
                {/* COLONNA DESTRA */}
                <div className="w-1/2">
                    <img
                    src={visoDonna}
                    alt="visoDonna"
                    className="h-auto w-full object-cover rounded-r-2xl"
                    style={{
                        WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 35%, black 100%)",
                        maskImage:
                        "linear-gradient(to right, transparent 0%, black 35%, black 100%)",
                    }}
                    />
                </div>
            </div>

            <div className={`relative overflow-hidden mt-10 container mx-auto flex items-stretch bg-white w-4/5 rounded-2xl shadow-2xl duration-[1000ms] delay-[2000ms] ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2"
                }`}>

                    <div
                        className="absolute inset-0 z-0"
                        style={{
                        background: "#ffffff",
                        backgroundImage: `
                            radial-gradient(
                            circle at bottom right,
                            var(--color-tema-chiaro),
                            transparent 80%
                            )
                        `,
                        filter: "blur(80px)",
                        backgroundRepeat: "no-repeat",
                        }}
                    />
                {/* COLONNA SINISTRA */}
                <div className="w-1/2">
                    <img
                    src={corpoDonna}
                    alt="corpoDonna"
                    className="h-auto w-full object-cover rounded-l-2xl"
                    style={{
                        WebkitMaskImage:
                        "linear-gradient(to left, transparent 0%, black 35%, black 100%)",
                        maskImage:
                        "linear-gradient(to left, transparent 0%, black 35%, black 100%)",
                    }}
                    />
                </div>
                <div className="z-10 flex w-1/2 p-6 flex-col h-full">
                    <div className="flex">
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-10 w-auto`}
                        />
                        <h2 className="self-end ml-5 text-tema-scuro text-4xl medicinaEstetica-tablet:text-3xl font-avigea">Trattamento corpo:</h2>
                    </div>
                    <ul className="mt-3 ml-10 space-y-2 text-left text-lg font-lora text-tema-primario">
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(1 * DELAY_STEP) +  3000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Carbossiterapia</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(2 * DELAY_STEP) +  3000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Ossigeno-Ozonoterapia
                            </span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(3 * DELAY_STEP) +  3000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Fotobiomodulazione</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(4 * DELAY_STEP) +  3000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Cavitazione medicale</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(5 * DELAY_STEP) +  3000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Epilazione progressiva</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(6 * DELAY_STEP) +  3000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Carbossiterapia</span>
                        </li>
                        <li className={`flex items-start text-3xl medicinaEstetica-tablet:text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(7 * DELAY_STEP) +  3000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Radiofrequenza medicale</span>
                        </li>
                    </ul>
                </div>
                
            </div>

        </div>

        {/* Versione responsive mobile */}
        <div className="rounded-2xl flex flex-col space-y-6 mt-10 medicinaEstetica-tablet:hidden">
            {/* Card 1 */}
            <div className={`overflow-hidden flex flex-col bg-white rounded-2xl items-stretch transition-all delay-1000 duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2"}`}>
                {/* Immagine viso */}
                <div>
                    <img
                    src={visoDonna}
                    alt="visoDonna"
                    className="h-[360px] w-full object-cover rounded-t-2xl"
                    style={{
                        WebkitMaskImage:
                        "linear-gradient(to top, transparent 10%, black 35%, black 100%)",
                        maskImage:
                        "linear-gradient(to top, transparent 0%, black 35%, black 100%)",
                    }}
                    />
                </div>
                <div
                    className={`overflow-hidden flex flex-col bg-white w-full p-6 rounded-b-2xl shadow-2xl duration-[1000ms] delay-[1000ms] opacity-0 ${ isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1/2"}`}>
                    <div className="flex">
                    <img src={giglio} alt="Giglio" className="h-10 w-auto" />
                    <h2 className="self-end ml-5 text-tema-scuro text-2xl sm:text-3xl font-avigea">
                        Trattamento viso:
                    </h2>
                    </div>
                    <ul className="mt-3 ml-6 space-y-2 text-left text-lg font-lora text-tema-primario">
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(1 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Biostimolazione con acido ialuronico</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(2 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Bioristrutturazione</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(3 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Peeling</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(4 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Tossina botulinica</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(5 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Filler</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(6 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Carbossiterapia</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(7 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>medicinaEstetica medicale</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(8 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Fotobiomodulazione</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(9 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Microneedling</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Card 2 */}
            <div className={`overflow-hidden flex flex-col bg-white rounded-2xl items-stretch transition-all delay-[2000ms] duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2"}`}>
                {/* Immagine corpo */}
                <div>
                    <img
                    src={corpoDonna}
                    alt="corpoDonna"
                    className="h-[360px] w-full object-cover rounded-t-2xl"
                    style={{
                        WebkitMaskImage:
                        "linear-gradient(to top, transparent 10%, black 35%, black 100%)",
                        maskImage:
                        "linear-gradient(to top, transparent 0%, black 35%, black 100%)",
                    }}
                    />
                </div>
                <div className={`flex flex-col bg-white w-full p-6 rounded-2xl shadow-2xl duration-[1000ms] delay-[1000ms] opacity-0 ${ isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2"}`}>
                    <div className="flex">
                    <img src={giglio} alt="Giglio" className="h-10 w-auto" />
                    <h2 className="self-end ml-5 text-tema-scuro text-2xl sm:text-3xl font-avigea">
                        Trattamento corpo:
                    </h2>
                    </div>
                    <ul className="mt-3 ml-6 space-y-2 text-left text-lg font-lora text-tema-primario">
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(1 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Carbossiterapia</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(2 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Ossigeno-Ozonoterapia</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(3 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Fotobiomodulazione</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(4 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Cavitazione medicale</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(5 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Epilazione progressiva</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(6 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Carbossiterapia</span>
                        </li>
                        <li className={`flex items-start text-xl transition-all fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`}
                            style={{
                                    transitionDelay: `${(7 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>medicinaEstetica medicale</span>
                        </li>
                    </ul>
                </div> 
            </div>

                   
        </div>

    </section>
  );
};

export default MedicinaEstetica;
