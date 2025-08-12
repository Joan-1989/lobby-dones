import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-primary via-secondary to-accent-light">
      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-tight">
            Defensem els drets de les dones
          </h1>
          <p className="font-sans text-lg md:text-xl text-primary-light/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            Unim forces per construir una societat més justa i igualitària. La teva veu és essencial per impulsar el canvi real i efectiu a Catalunya.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light transition-colors duration-fast"
            >
              Uneix-t'hi Ara
            </a>
            <a href="#projects" className="text-base font-semibold leading-6 text-white hover:text-white/80 transition-colors duration-fast">
              Descobreix Com <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;