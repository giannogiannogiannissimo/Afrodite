import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Radiofrequenza from "./pages/Radiofrequenza";
import Donna from "./pages/Donna";
import Uomo from "./pages/Uomo";
import MedicinaEstetica from "./pages/MedicinaEstetica";


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* <main className="min-h-screen flex flex-col pt-32 bg-[url('@/assets/backgrounds/pattern.png')] bg-repeat bg-fixed"> */}
      <main className="min-h-screen flex flex-col pt-32 bg-[url('@/assets/backgrounds/sfondo.png')] bg-repeat">
        <section id="home" className="scroll-mt-32"><Home /></section>  
        <section id="about"><About /></section>
        <section id="hero"><Hero /></section>
        <section id="medicinaEstetica"><MedicinaEstetica /></section>
        <section id="radiofrequenza"><Radiofrequenza /></section>
        <section id="donna"><Donna /></section>
        {/* <section id="uomo"><Uomo /></section> */}
        <section id="contact"><Contact /></section>
      
        <Footer />
      </main>
    </div>
  );
};

export default App;
