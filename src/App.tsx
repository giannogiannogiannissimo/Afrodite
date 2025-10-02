import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Radiofrequenza from "./pages/Radiofrequenza";
import Donna from "./pages/Donna";
import Uomo from "./pages/Uomo";


const App: React.FC = () => {
  const [showPolicy, setShowPolicy] = useState<"privacy" | "cookie" | null>(null);

  return (
    <div className="relative">
      
      <div className={`${showPolicy == null ? "" : "opacity-50 pointer-events-none"}`}>
        <Navbar />
        <main className="min-h-screen flex flex-col pt-32 bg-[url('@/assets/backgrounds/sfondo.png')] bg-repeat">
          <section id="home" className="scroll-mt-32"><Home /></section>  
          <section id="about"><About /></section>
          <section id="hero"><Hero /></section>
          <section id="radiofrequenza"><Radiofrequenza /></section>
          <section id="donna"><Donna /></section>
          <section id="uomo"><Uomo /></section>
          <section id="contact"><Contact /></section>
        
          <Footer setShowPolicy={setShowPolicy} />
        </main>
      </div>
      {/* Modale */}
        {showPolicy && (
          <div className="fixed inset-0 flex justify-center items-center">
            <div
              className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative font-avigea text-tema-primario"
            >
              {/* Bottone chiudi */}
              <button
                className="absolute top-3 right-3 flex items-center justify-center w-8 font-bold h-8 text-black hover:text-black hover:bg-gray-200 p-2 hover:rounded-full"
                onClick={() => setShowPolicy(null)}
              >
                ✕
              </button>

              <h2 className="text-xl font-bold mb-4">
                {showPolicy === "privacy" ? "Privacy Policy" : "Cookie Policy"}
              </h2>

              <div className="space-y-3 text-xl text-tema">
                {showPolicy === "privacy" ? (
                  <>
                    <p>
                      Questo sito non raccoglie dati personali tramite moduli o registrazioni. 
                      Eventuali dati inviati via email o telefono saranno usati solo per rispondere 
                      alle richieste e non ceduti a terzi.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Questo sito utilizza solo cookie tecnici essenziali al funzionamento. 
                      Non vengono utilizzati cookie di profilazione o marketing.
                    </p>
                    <p>
                      Eventuali link esterni (es. social network) possono utilizzare propri cookie, 
                      indipendenti da questo sito.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default App;
