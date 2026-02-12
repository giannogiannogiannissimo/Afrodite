import React, { useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import logoNegativo from "@/assets/logos/NEGATIVO -ORIZZONTALE.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: "home", label: "Home" },
    
    { to: "about", label: "Chi siamo" },
    { to: "medicinaEstetica", label: "Medicina estetica" },
    { to: "radiofrequenza", label: "Tecniche" },
    { to: "donna", label: "Patologie" },
    { to: "contact", label: "Contatti" },
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-tema-primario text-white shadow-md">
        <div className="px-4 py-3 flex flex-col md:flex-row justify-between navbar-pc:justify-center navbar-pc:gap-x-96 md:items-center gap-y-4">
          {/* Logo */}
          <a
            href="#home"
            className="transition-all flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={logoNegativo}
              alt="Afrodite negativo"
              className="h-20 w-auto animate-entrata-fade duration-[1500ms] transition-all"
            />
          </a>

          {/* Menu Desktop */}
          <ul className="hidden navbar-tablet:flex gap-4">
            {menuItems.map((item, index) => (
              <li
                key={item.to}
                style={{ animationDelay: `${(index +1) * 750}ms` }}
                className="opacity-0 animate-entrata-fade transition-all duration-1000"
              >
                <a
                  href={`#${item.to}`}
                  className="relative w-full font-lora px-3 py-2 text-2xl navbar-pc:text-2xl group text-white hover:text-gray-200 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] navbar-tablet:h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>



          {/* Bottone Mobile */}
          <button
            className="relative w-10 h-8 navbar-tablet:hidden flex flex-col justify-center items-center group cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {/* Riga 1 */}
            <span
              className={`absolute block h-1 w-8 bg-white rounded transition-transform duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            {/* Riga 2 */}
            <span
              className={`absolute block h-1 w-8 bg-white rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Riga 3 */}
            <span
              className={`absolute block h-1 w-8 bg-white rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>

        </div>
      </nav>

      {/* Menu Mobile */}
      <ul
        className={`
          fixed top-36 md:top-24 left-0 w-full   /* 👈 si posiziona subito sotto la navbar (24 = h-24) */
          navbar-tablet:hidden bg-tema-chiaro flex flex-col space-y-2 px-4 py-6 text-black font-lora
          overflow-hidden transition-all duration-300 ease-in-out z-40
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        {menuItems.map((item) => (
          <li
            key={item.to}
            className="font-semibold hover:text-tema-scuro cursor-pointer hover:bg-white transition-colors duration-300 rounded-2xl px-4"
            onClick={() => {
              // chiudi menu
              setIsOpen(false);

              // scroll verso il checkpoint
              scroller.scrollTo(item.to, {
                duration: 1000,
                smooth: false,
                offset: -80,
              });
            }}
          >
            <ScrollLink
              to={item.to}
              smooth={false}
              duration={1000}
              offset={-80}
              spy={true}
              activeClass="active"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
