import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import giglio from "@/assets/logos/giglio.png";
import logo90 from "@/assets/logos/logo-90.png";

const Contact: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="contact"
      ref={ref}
      className={`mt-10 contact-tablet:mt-32 py-16 px-4 translate-y-6 ease-out
        animate-entrata-fade duration-[1000ms] delay-[1000ms] opacity-0 ${ isVisible ? "opacity-100" : ""}`}
    >
      {/* Titolo */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-avigea text-tema-scuro mb-4">
          Prenota il tuo consulto oggi stesso
        </h2>
        <h2 className="text-5xl font-avigea font-bold text-tema-scuro mb-4">
          Per sentirti bene, sempre.
        </h2>
      </div>

      {/* Contenitore a due colonne */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* --- Colonna Sinistra: Card Contatti + Social --- */}
        <div className={`relative bg-white p-6 rounded-2xl shadow-2xl flex flex-col gap-6 h-full animate-entrata-fade duration-[1000ms] delay-[2000ms] opacity-0 ${ isVisible ? "opacity-100" : ""}`}>
          
          <img
            src={logo90}
            alt="icona_positivo"
            className="absolute h-40 w-40 rounded-2xl right-0 bottom-0"
            />

          {/* Header Contatti */}
          <div className="flex items-center">
            <img
              src={giglio}
              alt="Giglio"
              className={`h-10 w-auto animate-entrata-fade duration-2000 opacity-0 ${
                isVisible ? "opacity-100" : ""
              }`}
            />
            <h2 className="ml-5 text-tema-scuro text-3xl font-avigea">Contatti:</h2>
          </div>

          {/* Lista contatti */}
          <ul className="mt-2 ml-6 space-y-2 text-left text-xl font-lora text-tema-primario">
            <li className="flex items-start">
              <span className="text-tema-chiaro mr-2">•</span>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent("Viale sdadasdad Lastina")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-tema-primario transition-colors"
              >
                Viale sdadasdad Lastina
              </a>
            </li>
            <li className="flex items-start">
              <span className="text-tema-chiaro mr-2">•</span>
              <a href="tel:+393397654321" className="hover:underline">312315123q4321</a>
            </li>
            <li className="flex items-start">
              <span className="text-tema-chiaro mr-2">•</span>
              <a href="tel:+393397654321" className="hover:underline">312315123q4321</a>
            </li>
            <li className="flex items-start">
              <span className="text-tema-chiaro mr-2">•</span>
              <a href="mailto:mail.com" className="hover:underline">mail.com</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl pt-10 pl-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:text-blue-400 hover:opacity-100 transition-all"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:text-pink-400 hover:opacity-100 transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:text-blue-300 hover:opacity-100 transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* --- Colonna Destra: Google Maps --- */}
        <div className={`overflow-hidden rounded-2xl shadow-md animate-entrata-fade duration-[1000ms] delay-[2000ms] opacity-0 ${ isVisible ? "opacity-100" : ""}`}>
          <iframe
            title="Mappa Studio"
            src="https://www.google.com/maps/embed?pb=..."
            className="w-full h-96 border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
