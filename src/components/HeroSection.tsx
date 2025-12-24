import React from 'react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const styles = `
        .device-container { position: relative; width: 100%; height: 100%; }
        .project-device { position: absolute; width: 65%; max-width: 480px; padding: 1.5%; border-radius: 16px; background-color: rgb(247, 247, 247); box-shadow: rgb(219, 219, 219) -6px 6px 0px 0px, rgba(0, 0, 0, 0.3) -25px 49px 50px -20px; transition: transform 500ms ease, box-shadow 500ms ease; transform-style: preserve-3d; }
        .project-device:hover { box-shadow: rgb(219, 219, 219) -5px 5px 0px 0px, rgba(0, 0, 0, 0.3) -23px 45px 45px -20px; transform: var(--transform-hover); }
        .device-1 { top: 5%; left: 0%; transform: perspective(9000px) rotateX(45deg) rotateY(0deg) rotateZ(-38deg); --transform-hover: perspective(12000px) rotateX(44deg) rotateY(0deg) rotateZ(-38deg) scale(1.02); z-index: 10; }
        .device-2 { top: 25%; left: 35%; transform: perspective(9000px) rotateX(45deg) rotateY(0deg) rotateZ(-38deg); --transform-hover: perspective(12000px) rotateX(44deg) rotateY(0deg) rotateZ(-38deg) scale(1.02); z-index: 20; }
        .device-3 { top: 50%; left: 10%; transform: perspective(9000px) rotateX(45deg) rotateY(0deg) rotateZ(-38deg); --transform-hover: perspective(12000px) rotateX(44deg) rotateY(0deg) rotateZ(-38deg) scale(1.02); z-index: 5; }
        @media screen and (max-width: 1023px) { .project-device { width: 60%; } .device-1 { left: -5%; } .device-2 { left: 30%; top: 20%; } .device-3 { left: 0%; top: 45%; } }
        @media screen and (max-width: 767px) { .project-device { width: 50%; min-width: 280px; } .device-1 { left: 0%; top: 10%; } .device-2 { left: 45%; top: 25%; } .device-3 { left: 20%; top: 50%; } }
    `;
  return (
    <section className="w-full bg-white pt-16 md:pt-24 overflow-hidden">
      <style>{styles}</style>
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 items-center">
          <div className="flex flex-col justify-center text-center lg:text-left z-10 pb-16 lg:pb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 !leading-tight tracking-tighter">
              La Plataforma Catalana de Suport al Lobby Europeu de Dones
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Treballem per fer arribar aquesta incidència feminista europea a Catalunya, enfortint el treball en xarxa, la sensibilització social i la transformació de les polítiques públiques.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('projecte'); }} className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-purple-700">Descobreix el projecte</a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[550px] -mx-6 lg:mx-0">
            <div className="device-container">
              <div className="project-device device-1"><img src="/images/hero-1.jpg" alt="Imatge de projecte 1" className="w-full h-auto rounded-lg" /></div>
              <div className="project-device device-2"><img src="/images/hero-2.jpg" alt="Imatge de projecte 2" className="w-full h-auto rounded-lg" /></div>
              <div className="project-device device-3"><img src="/images/hero-3.jpg" alt="Imatge de projecte 3" className="w-full h-auto rounded-lg" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
