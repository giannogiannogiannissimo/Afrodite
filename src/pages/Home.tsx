import React from "react";
import logoPositivoOrizzontale from "@/assets/logos/POSITIVO-ORIZZONTALE.png";


const Home: React.FC = () => {
  return (
    <section className="shadow-2xl py-10 bg-white rounded-2xl mx-4 md:mx-16 flex flex-col text-center px-4 "
      style={{
        background:
          "radial-gradient(125% 125% at 0% 50%, #fff 40%, #8ECEDD 100%)",
      }}
    >


      <h2 className="text-3xl font-avigea animate-entrata-fade duration-[1000ms] transition-all delay-1000 opacity-0 sm:text-4xl md:text-5xl font-bold text-tema-scuro mb-4">
        Perchè scegliere
      </h2>
      <div className="flex items-center justify-center gap-2">
        <img
          src={logoPositivoOrizzontale}
          alt="Afrodite positivo orizzontale"
          className="h-auto w-full max-w-2xs sm:max-w-sm animate-entrata-fade duration-[1500ms] transition-all delay-[1500ms] opacity-0"
        />
        <span className="text-3xl font-avigea sm:text-4xl md:text-5xl font-bold text-tema-scuro animate-entrata-fade duration-[1500ms] transition-all delay-[1500ms] opacity-0">?</span>
      </div>
      <p className="text-xl sm:text-3xl md:text-4xl mt-10 text-tema-primario max-w-2xl mx-auto font-lora animate-entrata-fade duration-[1500ms] transition-all delay-[2000ms] opacity-0">
          Con la radiofrequenza e altri <span className="font-semibold">trattamenti personalizzati</span>, ogni percorso terapeutico è studiato sulle tue esigenze, con <span className="font-semibold">tecnologie all'avanguardia</span> e un approccio professionale e umano. 
      </p>
      
    </section>
  );
};

export default Home;
