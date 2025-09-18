import React from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import giglio from "@/assets/logos/giglio.png";

const Radiofrequenza: React.FC = () => {
    const { ref, isVisible } = useFadeIn();
  return (
    <section
        id="radiofrequenza"
        ref={ref} 
        className="mt-10 radiofrequenza-tablet:mt-32 py-20 flex flex-col text-center px-4 6xl:max-w-2xl 6xl:justify-self-center">
        <h2 className="text-3xl font-lora animate-entrata-fade duration-[1000ms] transition-all delay-1000 opacity-0 sm:text-4xl md:text-5xl font-bold text-tema-scuro mb-4">
            La Radiofrequenza:  
        </h2>
        <h3 className="text-2xl font-lora font-normal animate-entrata-fade duration-[1000ms] transition-all delay-1000 opacity-0 sm:text-3xl md:text-4xl text-tema-scuro mb-4">
            una soluzione innovativa
        </h3>
        <p className="text-xl sm:text-3xl md:text-4xl mt-10 text-tema-primario max-w-2xl mx-auto font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[2000ms] opacity-0">
            Il sistema di <span className="font-semibold">Radiofrequenza di Capenergy</span> offre un trattamento <span className="font-semibold">efficace, indolore e non invasivo</span>
            per il benessere <span className="font-semibold">femminile e maschile.</span> Grazie all'uso di <span className="font-semibold">onde elettromagnetiche</span> e 
            principi attivi, stimola la <span className="font-semibold">rigenerazione dei tessuti</span> in profondità, migliorando vascolarizzazione, collagene ed elastina.
        </p>
        <div className="hidden radiofrequenza-tablet:flex radiofrequenza-tablet:flex-row radiofrequenza-tablet:gap-10 radiofrequenza-tablet:justify-between radiofrequenza-tablet:mt-20">
            <div className={`flex flex-col bg-white w-1/3 p-6 rounded-2xl shadow-2xl animate-entrata-fade duration-[1000ms] delay-[3000ms] opacity-0 ${ isVisible ? "opacity-100" : ""}`}>
                <div className="flex">
                    <img
                        src={giglio}
                        alt="Giglio"
                        className={`h-10 w-auto`}
                    />
                    <h2 className="self-end ml-5 text-tema-scuro text-3xl font-avigea">Vantaggi principali:</h2>
                </div>
                <ul className="mt-3 ml-10 space-y-2 text-left text-lg font-lora text-tema-primario">
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Migliora l'effetto trofico e circolatorio.</span>
                    </li>
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Rafforza i tessuti, favorendone la rigenerazione.
                        </span>
                    </li>
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Rallenta l'invecchiamento cellulare.</span>
                    </li>
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Stimola il drenaggio delle tossine.</span>
                    </li>
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Promuove la produzione di collagene ed elastina.</span>
                    </li>
                </ul>
            </div>

            <div className={`flex flex-col bg-white w-1/3 p-6 rounded-2xl shadow-2xl animate-entrata-fade duration-[1000ms] delay-[4000ms] opacity-0 ${ isVisible ? "opacity-100" : ""}`}>
                <div className="flex">
                    <img
                        src={giglio}
                        alt="Giglio"
                        className={`h-10 w-auto`}
                    />
                    <h2 className="self-end ml-5 text-tema-scuro text-3xl font-avigea">Dopo <span className="text-tema-chiaro">3</span> sessioni:</h2>
                </div>
                <div className="flex flex-row">
                    <div className="flex mt-4 self-start">
                        {/* Rettangolo con padding per evitare che il testo venga tagliato */}
                        <div className="h-11 bg-tema-scuro text-white px-4 flex items-center justify-center rounded-l-2xl text-xl font-avigea font-bold">
                            80%
                        </div>

                        {/* Triangolo */}
                        <div className="
                            w-0 h-0
                            border-t-[22px] border-b-[22px] border-l-[15px]
                            border-t-transparent border-b-transparent border-l-tema-scuro
                        "></div>
                    </div>

                    <div>
                        <ul className="mt-6 ml-2 space-y-2 text-left text-lg font-lora text-tema-primario">
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Riduzione del dolore pelvice da dismenorrea</span>
                    </li>
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Correzione della sintomatologia legata allo stato reattivo conseguente all'incontinenza urinaria dello sforzo
                        </span>
                    </li>
                    
                </ul>   
                </div>
                </div>
                <div className={`flex flex-row`}>
                    <div className={`flex mt-4 self-start`}>
                        {/* Rettangolo con padding per evitare che il testo venga tagliato */}
                        <div className="h-11 bg-tema-chiaro text-white px-4 flex items-center justify-center rounded-l-2xl text-xl font-avigea font-bold">
                            70%
                        </div>

                        {/* Triangolo */}
                        <div className="
                            w-0 h-0
                            border-t-[22px] border-b-[22px] border-l-[15px]
                            border-t-transparent border-b-transparent border-l-tema-chiaro
                        "></div>
                    </div>

                    <div>
                        <ul className="mt-6 ml-2 space-y-2 text-left text-lg font-lora text-tema-primario">
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Riduzione del dolore pelvice da dismenorrea</span>
                    </li>
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Correzione della sintomatologia legata allo stato reattivo conseguente all'incontinenza urinaria dello sforzo
                        </span>
                    </li>
                    
                </ul>   
                </div>
                </div>
            </div>

            <div className={`flex flex-col bg-white w-1/3 p-6 rounded-2xl shadow-2xl animate-entrata-fade duration-[1000ms] delay-[5000ms] opacity-0 ${ isVisible ? "opacity-100" : ""}`}>
                <div className="flex">
                    <img
                        src={giglio}
                        alt="Giglio"
                        className={`h-10 w-auto animate-entrata-fade duration-2000 opacity-0 ${ isVisible ? "opacity-100" : ""}`}
                    />
                    <h2 className="self-end ml-5 text-tema-scuro text-3xl font-avigea">Dopo <span className="text-tema-chiaro">8</span> sessioni:</h2>
                </div>
                <div className="flex flex-row">
                    <div className="flex mt-4 self-start">
                        {/* Rettangolo con padding per evitare che il testo venga tagliato */}
                        <div className="h-11 bg-tema-scuro text-white px-4 flex items-center justify-center rounded-l-2xl text-xl font-avigea font-bold">
                            90%
                        </div>

                        {/* Triangolo */}
                        <div className="
                            w-0 h-0
                            border-t-[22px] border-b-[22px] border-l-[15px]
                            border-t-transparent border-b-transparent border-l-tema-scuro
                        "></div>
                    </div>

                    <div>
                <ul className="mt-6 ml-2 space-y-2 text-left text-lg font-lora text-tema-primario">
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Riduzione del dolore nei Trigger Points puborettali ed attenuazione dei sintomi legati a dispareunia e vaginismo</span>
                    </li>
                </ul>   
                </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex mt-4 self-start">
                        {/* Rettangolo con padding per evitare che il testo venga tagliato */}
                        <div className="h-11 bg-tema-chiaro text-white px-4 flex items-center justify-center rounded-l-2xl text-xl font-avigea font-bold">
                            75%
                        </div>

                        {/* Triangolo */}
                        <div className="
                            w-0 h-0
                            border-t-[22px] border-b-[22px] border-l-[15px]
                            border-t-transparent border-b-transparent border-l-tema-chiaro
                        "></div>
                    </div>

                    <div>
                        <ul className="mt-6 ml-2 space-y-2 text-left text-lg font-lora text-tema-primario">
                    <li className="flex items-start text-2xl">
                        <span className="text-tema-chiaro mr-2">•</span>
                        <span>Riduzione del dolore pelvico cronico da endometriosi</span>
                    </li>
                    
                </ul>   
                </div>
                </div>
            </div>
        </div>
        {/* Versione responsive mobile */}
        <div className="flex flex-col space-y-6 mt-10 radiofrequenza-tablet:hidden">
        {/* Card 1 */}
        <div
            className={`flex flex-col bg-white w-full p-6 rounded-2xl shadow-2xl animate-entrata-fade duration-[1000ms] delay-[3000ms] opacity-0 ${
            isVisible ? "opacity-100" : ""
            }`}
        >
            <div className="flex">
            <img src={giglio} alt="Giglio" className="h-10 w-auto" />
            <h2 className="self-end ml-5 text-tema-scuro text-2xl sm:text-3xl font-avigea">
                Vantaggi principali:
            </h2>
            </div>
            <ul className="mt-3 ml-6 space-y-2 text-left text-lg font-lora text-tema-primario">
            <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>Migliora l'effetto trofico e circolatorio.</span>
            </li>
            <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>Rafforza i tessuti, favorendone la rigenerazione.</span>
            </li>
            <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>Rallenta l'invecchiamento cellulare.</span>
            </li>
            <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>Stimola il drenaggio delle tossine.</span>
            </li>
            <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>Promuove la produzione di collagene ed elastina.</span>
            </li>
            </ul>
        </div>

        {/* Card 2 */}
        <div
            className={`flex flex-col bg-white w-full p-6 rounded-2xl shadow-2xl animate-entrata-fade duration-[1000ms] delay-[4000ms] opacity-0 ${
            isVisible ? "opacity-100" : ""
            }`}
        >
            <div className="flex">
            <img src={giglio} alt="Giglio" className="h-10 w-auto" />
            <h2 className="self-end ml-5 text-tema-scuro text-2xl sm:text-3xl font-avigea">
                Dopo <span className="text-tema-chiaro">3</span> sessioni:
            </h2>
            </div>
            {/* blocco % */}
            <div className="flex flex-row mt-4">
            <div className="flex self-start">
                <div className="h-11 bg-tema-scuro text-white px-4 flex items-center justify-center rounded-l-2xl text-lg sm:text-xl font-avigea font-bold">
                80%
                </div>
                <div
                className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[15px]
                border-t-transparent border-b-transparent border-l-tema-scuro"
                ></div>
            </div>
            <ul className="mt-2 ml-2 space-y-2 text-left text-lg font-lora text-tema-primario">
                <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>Riduzione del dolore pelvico da dismenorrea</span>
                </li>
                <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>
                    Correzione della sintomatologia legata all'incontinenza urinaria
                    da sforzo
                </span>
                </li>
            </ul>
            </div>
            {/* secondo blocco % */}
            <div className="flex flex-row mt-4">
            <div className="flex self-start">
                <div className="h-11 bg-tema-chiaro text-white px-4 flex items-center justify-center rounded-l-2xl text-lg sm:text-xl font-avigea font-bold">
                70%
                </div>
                <div
                className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[15px]
                border-t-transparent border-b-transparent border-l-tema-chiaro"
                ></div>
            </div>
            <ul className="mt-2 ml-2 space-y-2 text-left text-lg font-lora text-tema-primario">
                <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>Riduzione del dolore pelvico da dismenorrea</span>
                </li>
                <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>
                    Correzione della sintomatologia legata all'incontinenza urinaria
                    da sforzo
                </span>
                </li>
            </ul>
            </div>
        </div>

        {/* Card 3 */}
        <div
            className={`flex flex-col bg-white w-full p-6 rounded-2xl shadow-2xl animate-entrata-fade duration-[1000ms] delay-[5000ms] opacity-0 ${
            isVisible ? "opacity-100" : ""
            }`}
        >
            <div className="flex">
            <img src={giglio} alt="Giglio" className="h-10 w-auto" />
            <h2 className="self-end ml-5 text-tema-scuro text-2xl sm:text-3xl font-avigea">
                Dopo <span className="text-tema-chiaro">8</span> sessioni:
            </h2>
            </div>
            {/* blocco % */}
            <div className="flex flex-row mt-4">
            <div className="flex self-start">
                <div className="h-11 bg-tema-scuro text-white px-4 flex items-center justify-center rounded-l-2xl text-lg sm:text-xl font-avigea font-bold">
                90%
                </div>
                <div
                className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[15px]
                border-t-transparent border-b-transparent border-l-tema-scuro"
                ></div>
            </div>
            <ul className="mt-2 ml-2 space-y-2 text-left text-lg font-lora text-tema-primario">
                <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>
                    Riduzione del dolore nei Trigger Points puborettali ed attenuazione
                    dei sintomi legati a dispareunia e vaginismo
                </span>
                </li>
            </ul>
            </div>
            {/* secondo blocco % */}
            <div className="flex flex-row mt-4">
            <div className="flex self-start">
                <div className="h-11 bg-tema-chiaro text-white px-4 flex items-center justify-center rounded-l-2xl text-lg sm:text-xl font-avigea font-bold">
                75%
                </div>
                <div
                className="w-0 h-0 border-t-[22px] border-b-[22px] border-l-[15px]
                border-t-transparent border-b-transparent border-l-tema-chiaro"
                ></div>
            </div>
            <ul className="mt-2 ml-2 space-y-2 text-left text-lg font-lora text-tema-primario">
                <li className="flex items-start text-xl">
                <span className="text-tema-chiaro mr-2">•</span>
                <span>
                    Riduzione del dolore pelvico cronico da endometriosi
                </span>
                </li>
            </ul>
            </div>
        </div>
        </div>


    </section>
  );
};

export default Radiofrequenza;
