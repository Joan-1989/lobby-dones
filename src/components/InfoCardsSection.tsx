// src/components/InfoCardsSection.tsx

import React, { useState } from 'react';

// Defineixo el tipus per a cada testimoni
interface Testimonial {
  image: string;
  quote: string;
  name: string;
  role: string;
}

// Dades extretes i adaptades de l'arxiu RESPOSTES FORMULARI.html
const testimonials: Testimonial[] = [
  {
    image: 'https://placehold.co/100x100/e2e8f0/4a5568?text=VM',
    quote: 'Hem identificat la vostra organització com un actor que s\'ha posicionat clarament en contra de l\'antifeminisme, la qual cosa és de gran interès per al nostre estudi europeu per contrarestar les campanyes d\'odi i misogínia.',
    name: 'Valentina Maglietta',
    role: 'Investigadora Principal, Gender Five Plus',
  },
  {
    image: 'https://placehold.co/100x100/e2e8f0/4a5568?text=AV',
    quote: 'Estem molt conscienciats amb el moviment feminista i us presentem un projecte artístic per commemorar el dia de la dona, ja que creiem que podeu estar-hi interessades. La proposta pretén remoure consciències.',
    name: 'Aida Vila',
    role: 'Artista, MANILA Wall Art',
  },
  {
    image: 'https://placehold.co/100x100/e2e8f0/4a5568?text=MA',
    quote: 'Organitzem una jornada d\'homenatge a la nostra companya de lluita Consuelo Barea. Ens dirigim a vosaltres per si voleu participar-hi com a entitat també pionera en la defensa d\'aquests drets.',
    name: 'Matilde Aragó Gassiot',
    role: 'Magistrada jubilada',
  },
];

// Component intern per a cada targeta de testimoni
const TestimonialCard: React.FC<Testimonial> = ({ image, quote, name, role }) => (
  <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl shadow-lg">
    <img src={image} alt={`Retrat de ${name}`} className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
    <div className="text-center md:text-left">
      <div className="flex justify-center md:justify-start text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        ))}
      </div>
      <blockquote className="text-gray-700 italic">"{quote}"</blockquote>
      <p className="mt-4 font-bold text-gray-900">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

// Component principal de la secció
const InfoCardsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? testimonials.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Capçalera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Testimonis reals de la comunitat
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Descobreix com la nostra feina ha ajudat a tancar la bretxa digital de gènere i a crear espais més segurs.
          </p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Fletxa Esquerra */}
          <button onClick={prevSlide} className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          {/* Contenidor del slider */}
          <div className="w-full max-w-3xl overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Fletxa Dreta */}
          <button onClick={nextSlide} className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Fletxes per a mòbil (a sota) */}
          <div className="absolute -bottom-16 flex lg:hidden gap-4">
             <button onClick={prevSlide} className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
             </button>
             <button onClick={nextSlide} className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
