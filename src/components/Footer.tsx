import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import sfondo from "@/assets/backgrounds/footer.png";
import immagine_footer from "@/assets/backgrounds/Immagine_footer.png";


interface FooterProps {
  setShowPolicy: (value: "privacy" | "cookie" | null) => void;
}

const Footer: React.FC<FooterProps> = ({ setShowPolicy }) => {
  

  return (
    <footer className="relative font-body text-white h-1/3">
      <img
        src={sfondo}
        alt="Sfondo footer"
        className="absolute inset-0 w-full h-full object-fill"
      />
      <div className="ml-10 flex flex-col sm:flex-row sm:justify-start gap-8 w-auto pt-10">
        
        {/* Sezione contatti */}
        <div className="text-left space-y-2 z-10 m-4 pt-7">
          <p className="font-semibold">Contatti</p>
          <p>📍 Via12312312312312, Latina</p>
          <p>📞 0234234233 24321423</p>
          <p>📱 <a href="tel:+393397654321" className="hover:underline">341222121</a></p>
          <p>📱 <a href="tel:+393397654321" className="hover:underline">312315123q4321</a></p>
          <p>✉️ <a href="mailto:mail.com" className="hover:underline">mail.com</a></p>
        </div>

        {/* Policy + Social */}
        <div className="flex flex-col text-lef items-start md:items-end gap-4 m-4 z-10">
          <div className="flex gap-4 text-left">
            <button
              type="button"
              onClick={() => setShowPolicy("privacy")}
              className="hover:text-gray-200 underline"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => setShowPolicy("cookie")}
              className="hover:text-gray-200 underline"
            >
              Cookie Policy
            </button>
          </div>
          <div className="flex gap-6 text-3xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:text-blue-400 hover:opacity-100">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:text-pink-400 hover:opacity-100">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:text-blue-300 hover:opacity-100">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 flex justify-end">
        <img
          src={immagine_footer}
          alt="Immagine footer"
          className="h-auto w-auto max-h-32 md:max-h-32 lg:max-h-36 object-contain"
        />
      </div>  

      </div>


      

    </footer>

  );
};

export default Footer;
