// src/components/InfoCardsSection.tsx

import React from 'react';

// Defineixo el tipus per a cada targeta d'informació
interface CardData {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Icones de mostra (pots canviar-les per les que necessitis)
const IconExample1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const IconExample2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z" /></svg>
);
const IconExample3: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3" /></svg>
);


const cards: CardData[] = [
  {
    title: 'Front de Lluita 1',
    description: 'Descripció breu del primer eix estratègic o front de lluita de l\'organització.',
    icon: IconExample1,
  },
  {
    title: 'Front de Lluita 2',
    description: 'Descripció breu del segon eix estratègic o front de lluita de l\'organització.',
    icon: IconExample2,
  },
  {
    title: 'Front de Lluita 3',
    description: 'Descripció breu del tercer eix estratègic o front de lluita de l\'organització.',
    icon: IconExample3,
  },
];

const InfoCard: React.FC<{ card: CardData }> = ({ card }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <card.icon className="h-10 w-10 text-purple-600 mb-4" />
    <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
    <p className="text-gray-600">{card.description}</p>
  </div>
);

const InfoCardsSection: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Títol de la secció */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            Els nostres fronts de lluita
          </h2>
        </div>

        {/* Graella de targetes */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <InfoCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;

