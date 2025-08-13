// src/components/QuoteSection.tsx

import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <blockquote className="text-center text-2xl md:text-3xl font-medium leading-relaxed text-gray-800">
          "Coordinem i impulsem la igualtat de drets i oportunitats per a les dones en el marc d’una 
          <span className="text-blue-600"> Europa unida i democràtica</span>."
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;