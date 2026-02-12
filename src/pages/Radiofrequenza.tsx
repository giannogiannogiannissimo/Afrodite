import React from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import giglio from "@/assets/logos/giglio.png";
import Carosello from "@/components/Carosello";


const Radiofrequenza: React.FC = () => {
    const { ref, isVisible } = useFadeIn();
  return (
    <section
        id="radiofrequenza"
        ref={ref} 
        className="mt-16 py-16 radiofrequenza-tablet:mt-16 flex flex-col text-center px-4">
        
        <h2 className={`text-3xl font-lora duration-500 transition-all delay-1000 opacity-0 sm:text-4xl md:text-5xl font-bold text-tema-scuro mb-4 ${ isVisible ? "opacity-100" : "opacity-0"}`}>
            Tecniche utilizzate:
        </h2>
        <div className="hidden radiofrequenza-tablet:flex radiofrequenza-tablet:flex-row items-stretch gap-x-10 pb-4">
            <div className="flex flex-col p-10 bg-white mx-auto rounded-2xl shadow-2xl">
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
            </div>
            {/* Versione normale */}
            <div className="hidden radiofrequenza-tablet:flex radiofrequenza-tablet:flex-col radiofrequenza-tablet:gap-10 radiofrequenza-tablet:justify-between">
                {/* Card 1 */}
                <div className={`flex flex-col bg-white p-6 rounded-2xl shadow-2xl animate-entrata-fade duration-[1000ms] delay-[3000ms] opacity-0 ${ isVisible ? "opacity-100" : ""}`}>
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

                {/* Card 2 */}
                <div className={`flex flex-col bg-white p-6 rounded-2xl shadow-2xl animate-entrata-fade duration-[1000ms] delay-[4000ms] opacity-0 ${ isVisible ? "opacity-100" : ""}`}>
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

                {/* Card 3 */}
                <div className={`flex flex-col bg-white p-6 rounded-2xl shadow-2xl animate-entrata-fade duration-[1000ms] delay-[5000ms] opacity-0 ${ isVisible ? "opacity-100" : ""}`}>
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
        </div>
        
        
        {/* Versione responsive mobile */}
        <div className="flex flex-col space-y-6 mt-10 radiofrequenza-tablet:hidden">
            <div className="flex flex-col p-10 w-full bg-white mx-auto rounded-2xl shadow-2xl">
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
            </div>
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

        <Carosello
            items={[
                /* CARD 1 */
                <div className="flex flex-col h-full min-h-[550px] bg-white p-10 rounded-2xl shadow-2xl"
                        style={{
                        background:
                        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #8ECEDD 100%)",
                    }}>

                    <h2 className="text-xl font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[6000ms] opacity-0 radiofrequenza-tablet:text-2xl font-bold text-tema-scuro mb-4">
                        La Biostimolazione:  
                    </h2>
                    
                    <p className="text-md radiofrequenza-tablet:text-xl mt-10 text-tema-primario max-w-2xl mx-auto font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[7000ms] opacity-0">
                        La <span className="font-semibold">Biostimolazione (o biorivitalizzazione)</span> consiste nell'iniezione di sostanze come
                        <span className="font-semibold">acido ialuronico, vitamine e amminoacidi </span> nel derma per stimolare la pelle
                        a produrre <span className="font-semibold">collagene, elastina e acido ialuronico, migliorando idratazione, elasticità e tonicità.</span>
                    </p>
                </div>,

                <div className="flex flex-col h-full min-h-[550px] bg-white p-10 rounded-2xl shadow-2xl"
                        style={{
                        background:
                        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #8ECEDD 100%)",
                    }}>

                    <h2 className="text-xl font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[6000ms] opacity-0 radiofrequenza-tablet:text-2xl font-bold text-tema-scuro mb-4">
                        La Bioristrutturazione:  
                    </h2>
                    
                    <p className="text-md radiofrequenza-tablet:text-xl mt-10 text-tema-primario max-w-2xl mx-auto font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[7000ms] opacity-0">
                        La <span className="font-semibold">Bioristrutturazione</span> del viso è un trattamento di medicina estetica che consiste
                        nell'iniezione di <span className="font-semibold">biostimolanti </span> come <span className="font-semibold">acido ialuronico
                            , le vitamine e i peptidi nel derma </span>per stimolare la produzione naturale di <span className="font-semibold">collagene 
                                ed elastina, migliorando l'idratazione, la compattezza e l'elasticità della pelle.</span>
                    </p>
                </div>,

                <div className="flex flex-col h-full min-h-[550px] bg-white p-10 rounded-2xl shadow-2xl"
                        style={{
                        background:
                        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #8ECEDD 100%)",
                    }}>

                    <h2 className="text-xl font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[6000ms] opacity-0 radiofrequenza-tablet:text-2xl font-bold text-tema-scuro mb-4">
                        Il Peeling chimico:  
                    </h2>
                    
                    <p className="text-md radiofrequenza-tablet:text-xl mt-10 text-tema-primario max-w-2xl mx-auto font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[7000ms] opacity-0">
                        Il <span className="font-semibold">Peeling chimico</span> è un trattamento clinico-estetico che utilizza <span className="font-semibold">agenti caustici per esfoliare 
                        la pelle in modo controllato</span>, raggiungendo progressivamente strati più profondi dell’epidermide e del derma. L’obiettivo è provocare 
                        un <span className="font-semibold">danneggiamento selettivo</span> che stimoli i <span className="font-semibold">processi di rigenerazione e riparazione cutanea.</span> Quando agisce solo sugli strati più superficiali
                        può essere eseguito anche come semplice trattamento cosmetico.                
                    </p>
                </div>,

                <div className="flex flex-col h-full min-h-[550px] bg-white p-10 rounded-2xl shadow-2xl"
                        style={{
                        background:
                        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #8ECEDD 100%)",
                    }}>

                    <h2 className="text-xl font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[6000ms] opacity-0 radiofrequenza-tablet:text-2xl font-bold text-tema-scuro mb-4">
                        La Fotobiomodulazione:  
                    </h2>
                    
                    <p className="text-md radiofrequenza-tablet:text-xl mt-10 text-tema-primario max-w-2xl mx-auto font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[7000ms] opacity-0">
                        La <span className="font-semibold">Fotobiomodulazione</span> è una terapia non invasiva che utilizza <span className="font-semibold">luci rosse e infrarosse a bassa intensità 
                        per stimolare energia cellulare, ridurre l’infiammazione e favorire la rigenerazione dei tessuti.</span> Non produce calore, a differenza dei laser ad
                        alta potenza. Viene impiegata in oculistica, dermatologia e nella guarigione delle ferite per migliorare vari processi riparativi.                
                    </p>
                </div>,
                <div className="flex flex-col h-full min-h-[550px] bg-white p-10 rounded-2xl shadow-2xl"
                        style={{
                        background:
                        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #8ECEDD 100%)",
                    }}>

                    <h2 className="text-xl font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[6000ms] opacity-0 radiofrequenza-tablet:text-2xl font-bold text-tema-scuro mb-4">
                        L'Elettroporazione:  
                    </h2>
                    
                    <p className="text-md radiofrequenza-tablet:text-xl mt-10 text-tema-primario max-w-2xl mx-auto font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[7000ms] opacity-0">
                        L'<span className="font-semibold">Elettroporazione</span>è una tecnica che usa <span className="font-semibold">impulsi elettrici brevi e ad alta tensione</span> per rendere temporaneamente
                        permeabili le membrane cellulari, <span className="font-semibold">creando pori che permettono il passaggio di molecole.</span> L’effetto può essere reversibile o irreversibile in base 
                        all’intensità dell’impulso. Viene utilizzata per veicolare principi attivi in medicina estetica, trattare aritmie in cardiologia e introdurre DNA nelle cellule in biologia molecolare.                
                    </p>
                </div>,
                <div className="flex flex-col h-full min-h-[550px] bg-white p-10 rounded-2xl shadow-2xl"
                        style={{
                        background:
                        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #8ECEDD 100%)",
                    }}>

                    <h2 className="text-xl font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[6000ms] opacity-0 radiofrequenza-tablet:text-2xl font-bold text-tema-scuro mb-4">
                        Il Microneedling:
                    </h2>
                    
                    <p className="text-md radiofrequenza-tablet:text-xl mt-10 text-tema-primario max-w-2xl mx-auto font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[7000ms] opacity-0">
                        Il <span className="font-semibold">Microneedling</span> è una tecnica di ringiovanimento cutaneo che, attraverso <span className="font-semibold">micro-perforazioni effettuate
                        con aghi sottili</span>, induce una <span className="font-semibold">reazione di riparazione tissutale che interviene con una
                        rinnovata produzione di collagene e con un accelerato turnover cellulare.</span>
                    </p>
                </div>,

                <div className="flex flex-col h-full min-h-[550px] bg-white p-10 rounded-2xl shadow-2xl"
                        style={{
                        background:
                        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #8ECEDD 100%)",
                    }}>

                    <h2 className="text-xl font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[6000ms] opacity-0 radiofrequenza-tablet:text-2xl font-bold text-tema-scuro mb-4">
                        La Sublimazione Dermica:
                    </h2>
                    
                    <p className="text-md radiofrequenza-tablet:text-xl mt-10 text-tema-primario max-w-2xl mx-auto font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[7000ms] opacity-0">
                        La <span className="font-semibold">Sublimazione Dermica</span> è una tecnica estetica non chirurgica che <span className="font-semibold">vaporizza gli strati superficiali della pelle 
                        tramite un arco elettrico</span>, senza passare dallo stato liquido. Questo processo <span className="font-semibold">rimuove inestetismi come rughe, lassità cutanea, verruche e xantelasmi.</span> 
                        Stimola la contrazione e rigenerazione del collagene, favorendo un recupero rapido e una pelle più tonica.
                    </p>
                </div>,

                <div className="flex flex-col h-full min-h-[550px] bg-white p-10 rounded-2xl shadow-2xl"
                        style={{
                        background:
                        "radial-gradient(125% 125% at 50% 10%, #fff 40%, #8ECEDD 100%)",
                    }}>

                    <h2 className="text-xl font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[6000ms] opacity-0 radiofrequenza-tablet:text-2xl font-bold text-tema-scuro mb-4">
                        La Luce Pulsata:
                    </h2>
                    
                    <p className="text-md radiofrequenza-tablet:text-xl mt-10 text-tema-primario max-w-2xl mx-auto font-lora animate-entrata-fade duration-[1000ms] transition-all delay-[7000ms] opacity-0">
                        La <span className="font-semibold">Luce Pulsata</span> è una tecnologia che utilizza un <span className="font-semibold">ampio spettro di luce per trattamenti come fotodepilazione e fotoringiovanimento,</span>
                        senza essere un laser vero e proprio. Funziona convertendo la luce in <span className="font-semibold">energia termica per colpire le cellule che producono melanina,</span> risultando spesso meno dolorosa e 
                        più controllata del laser. È una procedura non invasiva e non ablativa: <span className="font-semibold">penetra negli strati profondi della pelle senza danneggiare l’epidermide.</span>
                    </p>
                </div>

                /* Continua con tutte le altre card... */
            ]}
            />



        
    </section>
  );
};

export default Radiofrequenza;
