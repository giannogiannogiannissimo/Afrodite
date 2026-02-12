import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import giglio from "@/assets/logos/giglio.png";
import logo90 from "@/assets/logos/logo-90.png";
import { Phone, Smartphone, MapPin, Mail } from "lucide-react";


const Contact: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section
      id="contact"
      ref={ref}
      className={`mt-16 contact-tablet:py-16 contact-tablet:mt-4 px-4 translate-y-6 ease-out
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

      {/* Verione desktop */}
      <div className="hidden contact-tablet:flex gap-8 items-start">
        
        {/* Contenitore */}
        <div className={`w-full mx-auto relative bg-white p-6 rounded-2xl shadow-2xl flex gap-6 h-full animate-entrata-fade duration-[1000ms]  transition-all ${ isVisible ? "opacity-100 translate-x-0" : "overflow-hidden opacity-0 -translate-x-3/4"}`}>
          
          <img
            src={logo90}
            alt="icona_positivo"
            className="absolute h-40 w-40 rounded-2xl right-0 bottom-0"
            />
            {/* Contatti */}
          <div className="w-1/2 flex flex-col">
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
                <MapPin className="text-tema-primario h-6 w-6 mr-3" />
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
                <Phone className="text-tema-primario h-6 w-6 mr-3" />
                <a href="tel:+393397654321" className="hover:underline">312315123q4321</a>
              </li>
              <li className="flex items-start">
                <Smartphone className="text-tema-primario h-6 w-6 mr-3" />
                <a href="tel:+393397654321" className="hover:underline">312315123q4321</a>
              </li>
              <li className="flex items-start">
                <Mail className="text-tema-primario h-6 w-6 mr-3" />
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
          {/* Orari */}
          <div className="w-1/2">
            {/* Header Orari */}
              <h2 className="ml-5 text-tema-scuro text-3xl font-avigea">Orari:</h2>
              <ul className="mt-2 ml-6 space-y-2 text-left text-xl font-lora text-tema-primario">
                <li className="flex flex-col items-start">
                  <p>Apertura:</p>
                  <div className="flex text-xl space-x-3">
                    <div className="flex flex-col">
                      <p>Lun-Ven:</p>
                      <p>08:00-13:00</p>
                    </div>
                    <div className="flex flex-col">
                      <p>Sabato:</p>
                      <p>08:00-13:00</p>
                    </div>
                  </div>
                </li>
                <li className="flex flex-col items-start">
                  <p>Segreteria:</p>
                  <div className="flex text-xl space-x-3">
                    <div className="flex flex-col">
                      <p>Lun-Ven:</p>
                      <p>08:00-13:00</p>
                    </div>
                    <div className="flex flex-col">
                      <p>Sabato:</p>
                      <p>08:00-13:00</p>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
          

          
        </div>

        
      </div>

      {/* Versione responsive */}
      <div className="container mx-auto contact-tablet:hidden flex flex-col">
        
        {/* Unica colonna */}
        <div className={`relative bg-white p-6 rounded-2xl shadow-2xl flex flex-col gap-6 h-full animate-entrata-fade duration-[1000ms] delay-[2000ms] opacity-0 ${ isVisible ? "opacity-100" : ""}`}>
          
          {/* Teal Glow Left */}
          <div
              className="absolute inset-0 z-0"
              style={{
              background: "#ffffff",
              backgroundImage: `
                  radial-gradient(
                  circle at top right,
                  var(--color-tema-chiaro),
                  transparent 80%
                  )
              `,
              filter: "blur(80px)",
              backgroundRepeat: "no-repeat",
              }}
          />
          <div className="space-y-6 z-10">
            <img
              src={logo90}
              alt="icona_positivo"
              className="absolute h-40 w-40 rounded-2xl right-0 bottom-0"
              />
            {/* Parte contatti */}
            <div className="flex flex-col">
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

              {/* Lista Contatti */}
              <ul className="mt-2 ml-6 space-y-2 text-left text-xl font-lora text-tema-primario">
                <li className="flex items-start">
                  <MapPin className="text-tema-primario h-6 w-6 mr-3" />
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
                  <Phone className="text-tema-primario h-6 w-6 mr-3" />
                  <a href="tel:+393397654321" className="hover:underline">312315123q4321</a>
                </li>
                <li className="flex items-start">
                  <Smartphone className="text-tema-primario h-6 w-6 mr-3" />
                  <a href="tel:+393397654321" className="hover:underline">312315123q4321</a>
                </li>
                <li className="flex items-start">
                  <Mail className="text-tema-primario h-6 w-6 mr-3" />
                  <a href="mailto:mail.com" className="hover:underline">mail.com</a>
                </li>
              </ul>
 
            </div>
            {/* Parte orari */}
            <div>
              {/* Header Orari */}
              <div className="flex items-center">
                <img
                  src={giglio}
                  alt="Giglio"
                  className={`h-10 w-auto animate-entrata-fade duration-2000 opacity-0 ${
                    isVisible ? "opacity-100" : ""
                  }`}
                />
                <h2 className="ml-5 text-tema-scuro text-3xl font-avigea">Orari:</h2>
              </div>
                
                <ul className="mt-2 ml-6 space-y-2 text-left text-xl font-lora text-tema-primario">
                  <li className="flex flex-col items-start">
                    <p>Apertura:</p>
                    <div className="flex flex-col text-xl space-y-2">
                      <div className="flex flex-col">
                        <p className="ml-4">Lun-Ven:</p>
                        <p className="ml-4">08:00-13:00</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="ml-4">Sabato:</p>
                        <p className="ml-4">08:00-13:00</p>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col items-start">
                    <p>Segreteria:</p>
                      <div className="flex flex-col text-xl space-y-2">
                        <div className="flex flex-col">
                          <p className="ml-4">Lun-Ven:</p>
                          <p className="ml-4">08:00-13:00</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="ml-4">Sabato:</p>
                          <p className="ml-4">08:00-13:00</p>
                      </div>
                    </div>
                  </li>
                </ul>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
