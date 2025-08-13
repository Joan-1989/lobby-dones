// src/components/HeroSection.tsx

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Contenidor de la graella principal: 1 columna en mòbil, 2 en escriptoris */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Columna Esquerra: Text i botó */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 !leading-tight tracking-tighter">
              La violència masclista també és <span className="text-purple-600">digital</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
              Ajuda'ns a combatre-la. Coordinem i impulsem la igualtat de drets i oportunitats per a les dones en el marc d’una Europa unida i democràtica.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#projecte"
                className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
              >
                Descobreix el projecte
              </a>
            </div>
          </div>

          {/* Columna Dreta: Composició d'imatges */}
          <div className="relative h-80 lg:h-full min-h-[400px]">
            {/* Aquesta és la part més complexa. Fem servir un contenidor 'relative' 
              i posicionem les imatges de forma 'absolute' a dins.
              Juguem amb la rotació (rotate), la posició (top, left, right) i 
              la profunditat (z-index) per crear l'efecte de superposició.
              
              **IMPORTANT**: Canvia les URLs de 'placehold.co' per les teves imatges reals.
            */}
            
            {/* Imatge 1 (a sota de tot) */}
            <img 
              src="/images/hero-1.jpg"
              alt="Descripció de la imatge 1"
              className="absolute w-2/3 h-auto top-0 left-0 rounded-xl shadow-lg transform -rotate-6 transition-transform duration-300 hover:rotate-0"
            />
            
            {/* Imatge 2 (al mig) */}
            <img 
              src="/images/hero-2.jpg"
              alt="Descripció de la imatge 2"
              className="absolute w-2/3 h-auto top-1/4 right-0 rounded-xl shadow-xl transform rotate-3 z-10 transition-transform duration-300 hover:rotate-0"
            />
            
            {/* Imatge 3 (a sobre) */}
            <img 
              src="/images/hero-3.jpg"
              alt="Descripció de la imatge 3"
              className="absolute w-2/3 h-auto bottom-0 left-1/4 rounded-xl shadow-2xl transform rotate-2 z-20 transition-transform duration-300 hover:rotate-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
