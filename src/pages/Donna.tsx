import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import donna from "@/assets/logos/donna.jpg";
import giglio from "@/assets/logos/giglio.png";
import donnaCard1 from "@/assets/logos/donnaCard1.jpg";
import donnaCard2 from "@/assets/logos/donnaCard2.jpg";
import donnaCard3 from "@/assets/logos/donnaCard3.jpg";


const Donna: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  const FADE_DURATION = 1000; // ms
    const DELAY_STEP = 500;    // ms per ogni elemento


  return (
    <section
      id="donna"
      ref={ref}
      className="overflow-hidden mt-20 donna-tablet:py-16 donna-tablet:mt-16 flex flex-col text-center px-4 6xl:max-w-2xl 6xl:justify-self-center">
      
        <h2 className={`text-3xl font-lora duration-500 transition-all delay-300 opacity-0 sm:text-4xl md:text-5xl font-bold text-tema-scuro mb-4 ${ isVisible ? "opacity-100" : "opacity-0"}`}>
            Ci prendiamo cura della Donna:
        </h2>
        <div className="container flex flex-col donna-tablet:flex-row mx-auto rounded-2xl donna-tablet:rounded-none items-stretch">  
            <div
                className={`container mx-auto donna-tablet:flex donna-tablet:items-stretch bg-white w-4/5 rounded-2xl shadow-2xl duration-[1000ms] delay-[1000ms] opacity-0 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1/2"}`}
            >                
                <img
                    src={donna}
                    alt="donna"
                    className="hidden donna-tablet:flex h-full w-full object-cover donna-tablet:w-1/2 donna-tablet:rounded-l-2xl rounded-t-2xl"
                    style={{
                            WebkitMaskImage:
                            "linear-gradient(to left, transparent 0%, black 15%, black 100%)",
                            maskImage:
                            "linear-gradient(to left, transparent 0%, black 15%, black 100%)",
                        }}
                />
                <img
                    src={donna}
                    alt="donna"
                    className="donna-tablet:hidden h-full w-full object-cover donna-tablet:w-1/2 donna-tablet:rounded-l-2xl rounded-t-2xl"
                    style={{
                            WebkitMaskImage:
                            "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
                            maskImage:
                            "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
                        }}
                />
                <div className="flex donna-tablet:w-1/2 p-6 flex-col">
                    <div className="flex">
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-10 w-auto`}
                        />
                        <h2 className="self-end ml-5 text-tema-scuro text-3xl font-avigea">Patologie trattate:</h2>
                    </div>
                    <ul className="mt-3 ml-10 space-y-2 text-left text-lg font-lora text-tema-primario">
                        <li className={`flex items-start text-md transition-all font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(1 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Secchezza vaginale ed atrofia</span>
                        </li>
                        <li className={`flex items-start text-md transition-all font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(2 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Incontinenza urinaria</span>
                        </li>
                        <li className={`flex items-start text-md transition-all font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(3 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Dolore pelvice cronico</span>
                        </li>
                        <li className={`flex items-start text-md transition-all font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(4 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Dismenorrea (dolori mestruali)</span>
                        </li>
                        <li className={`flex items-start text-md transition-all font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(5 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Vaginismo (rapporti sessuali dolorosi)</span>
                        </li>
                        <li className={`flex items-start text-md transition-all font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(6 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Endometriosi</span>
                        </li>
                        <li className={`flex items-start text-md transition-all font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(7 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Disturbi urinari e secchezza vaginale da radioterapia</span>
                        </li>
                        <li className={`flex items-start text-md transition-all font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(8 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Prolasso</span>
                        </li>
                        <li className={`flex items-start text-md transition-all font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(9 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Cicatrici perineali dolorose (cicatrici post-parto dolorose)</span>
                        </li>
                        <li className={`flex items-start text-md transition-all font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(10 * DELAY_STEP) +  2000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                            <span className="text-tema-chiaro mr-2">•</span>
                            <span>Lichen vulvare</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Area pacchetti */}
        <div className={`overflow-hidden donna-tablet:bg-none mx-auto flex flex-col container mt-10 donna-tablet:p-10 py-10 rounded-2xl space-y-6 bg-white delay-[2000ms] duration-500 transition-all ${isVisible ? "opacity-100 translate-x-0" : "overflow-hidden opacity-0 translate-x-1/2"}`}
            style={{
            background: `radial-gradient(circle, white 50%, var(--color-tema-chiaro) 100%)`,
            }}>
            <div className="flex flex-row">
                <h2 className={`px-4 donna-tablet:px-0 text-3xl text-shadow-2xs font-lora duration-500 transition-all delay-500 opacity-0 sm:text-4xl md:text-5xl font-bold text-tema-scuro mb-4 ${ isVisible ? "opacity-100" : "opacity-0"}`}>
                    Prenota il tuo pacchetto:  
                </h2>
            </div>
            <div className={`relative flex flex-row space-x-4 items-stretch h-[260px] transition-all delay-[2000ms] duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "overflow-hidden opacity-0 translate-x-1/2"}`}>
                <img
                    src={donnaCard1}
                    alt="donnaCard1"
                    className="absolute donna-tablet:relative opacity-20 donna-tablet:opacity-100 h-[260px] donna-tablet:w-1/2 donna-tablet:h-auto object-cover donna-tablet:rounded-l-2xl"
                    style={{
                            WebkitMaskImage:
                            "linear-gradient(to left, transparent 0%, black 35%, black 100%)",
                            maskImage:
                            "linear-gradient(to left, transparent 0%, black 35%, black 100%)",
                        }}
                >
                </img>
                <div className="flex flex-col space-y-4 p-4">
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(1 * DELAY_STEP) +  3000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Visita ginecologica</span>
                    </li>
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(2 * DELAY_STEP) +  3000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Esame trans vaginale</span>
                    </li>
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(3 * DELAY_STEP) +  3000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Prezzo: ...</span>
                    </li>
                </div>
            </div>
            <div className={`relative flex flex-row space-x-4 items-stretch h-[260px] justify-end transition-all delay-[3000ms] duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "overflow-hidden opacity-0 -translate-x-1/2"}`}>           
                <div className="flex flex-col space-y-4 p-4">
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(1 * DELAY_STEP) +  4000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Esame ecografico</span>
                    </li>
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(2 * DELAY_STEP) +  4000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Eco mammaria</span>
                    </li>
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(3 * DELAY_STEP) +  4000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Eco tiroide</span>
                    </li>
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(4 * DELAY_STEP) +  4000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Eco pubica/trans vaginale</span>
                    </li>
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(5 * DELAY_STEP) +  4000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Prezzo:...</span>
                    </li>
                </div>
                <img
                    src={donnaCard2}
                    alt="donnaCard2"
                    className="absolute donna-tablet:relative opacity-20 donna-tablet:opacity-100 h-[260px] donna-tablet:w-1/2 donna-tablet:h-auto object-cover donna-tablet:rounded-r-2xl"
                    style={{
                            WebkitMaskImage:
                            "linear-gradient(to right, transparent 0%, black 35%, black 100%)",
                            maskImage:
                            "linear-gradient(to right, transparent 0%, black 35%, black 100%)",
                        }}
                />
            </div>
            <div className={`relative flex flex-row space-x-4 items-stretch h-[260px] transition-all delay-[4000ms] duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "overflow-hidden opacity-0 translate-x-1/2"}`}>
                <img
                    src={donnaCard3}
                    alt="donnaCard3"
                    className="absolute donna-tablet:relative opacity-20 donna-tablet:opacity-100 h-[260px] donna-tablet:w-1/2 donna-tablet:h-auto object-cover donna-tablet:rounded-l-2xl"
                    style={{
                            WebkitMaskImage:
                            "linear-gradient(to left, transparent 0%, black 35%, black 100%)",
                            maskImage:
                            "linear-gradient(to left, transparent 0%, black 35%, black 100%)",
                        }}
                >
                </img>
                <div className="flex flex-col space-y-4 p-4">
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(1 * DELAY_STEP) +  5000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Visita ginecologica</span>
                    </li>
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(2 * DELAY_STEP) +  5000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Esame ecografico addome</span>
                    </li>
                    <li className={`flex items-center text-md transition-all space-x-4 font-semibold fade-in ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"}`} 
                            style={{
                                    transitionDelay: `${(3 * DELAY_STEP) +  5000}ms`,
                                    transitionDuration: `${FADE_DURATION}ms`,
                                }}>
                        <img
                            src={giglio}
                            alt="Giglio"
                            className={`h-6 w-auto`}
                        />
                        <span className="font-lora text-tema-primario text-xl">Prezzo: ...</span>
                    </li>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Donna;

