import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import donna from "@/assets/logos/donna.jpg";


const Donna: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="donna"
      ref={ref}
      className={`mt-10 donna-tablet:mt-32 pt-16 px-4 text-center opacity-0 translate-y-6 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : ""}`}>
      <div className="container flex flex-col donna-tablet:flex-row donna-tablet:h-[500px] mx-auto rounded-2xl donna-tablet:rounded-none items-stretch">
        <div className="w-full h-full donna-tablet:w-1/2">
            <img
            src={donna}
            alt="donna"
            className="h-full w-full object-cover rounded-2xl donna-tablet:rounded-none"
            />
        </div>
        <div className="donna-tablet:w-1/2 bg-white rounded-2xl shadow w-full h-full">
            <ul className="mt-6 ml-2 p-7 space-y-2 text-left text-lg font-lora text-tema-primario h-full">
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Secchezza vaginale ed atrofia</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Incontinenza urinaria</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Dolore pelvice cronico</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Dismenorrea (dolori mestruali)</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Vaginismo (rapporti sessuali dolorosi)</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Endometriosi</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Disturbi urinari e secchezza vaginale da radioterapia</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Prolasso</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Cicatrici perineali dolorose (cicatrici post-parto dolorose)</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Lichen vulvare</span>
                </li>
            </ul> 
        </div>

      </div>
    </section>
  );
};

export default Donna;
