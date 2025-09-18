import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import uomo from "@/assets/logos/uomo.jpg";


const Uomo: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="uomo"
      ref={ref}
      className={`mt-10 donna-tablet:mt-0 pb-16 px-4 text-center opacity-0 translate-y-6 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : ""}`}>
      <div className="container flex flex-col-reverse donna-tablet:flex-row donna-tablet:h-[500px] mx-auto rounded-2xl donna-tablet:rounded-none items-stretch">    
        <div className="w-full donna-tablet:w-1/2 bg-white rounded-2xl donna-tablet:rounded-none shadow h-full">
            <ul className="mt-6 ml-2 p-7 space-y-2 text-left text-lg font-lora text-tema-primario">
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Incontinenza urinaria (post-radioterapia, da urgenza o dopo prostatectomia)</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Cicatrici post-chirurgiche dolorose (perineali e addominali)</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Dolore pelvico cronico</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Prostatite</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Disfunzione erettile</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Eiaculazione precoce</span>
                </li>
                <li className="flex items-start text-2xl">
                    <span className="text-tema-chiaro mr-2">•</span>
                    <span>Ipertrofia prostatica benigna</span>
                </li>
            </ul> 
        </div>
        <div className="donna-tablet:w-1/2 w-full h-full">
            <img
            src={uomo}
            alt="uomo"
            className="h-full w-full object-cover rounded-2xl donna-tablet:rounded-none"
            />
        </div>

      </div>
    </section>
  );
};

export default Uomo;
