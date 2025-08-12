import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
}

const ArrowIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1.5 transition-transform duration-fast ease-in-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, linkText }) => (
  <div className="bg-neutral-background p-8 rounded-lg border border-neutral-border hover:border-primary/50 transition-all duration-normal ease-in-out flex flex-col transform hover:-translate-y-1">
    <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            {icon}
        </div>
    </div>
    <div className="flex-grow mt-5">
      <h3 className="font-display font-bold text-xl text-neutral-text mb-2">{title}</h3>
      <p className="text-neutral-text-subtle leading-relaxed mb-6 font-sans">{description}</p>
    </div>
    <a href="#" className="font-semibold flex items-center group text-primary mt-auto">
      {linkText} <ArrowIcon />
    </a>
  </div>
);

const infoCardsData: InfoCardProps[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: 'Qui som',
    description: 'Descobreix la nostra missió, visió i l\'equip que treballa per la igualtat de gènere.',
    linkText: 'Saber-ne més',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: 'Els nostres projectes',
    description: 'Coneix en detall els projectes que impulsem per generar un impacte real i durador.',
    linkText: 'Explorar projectes',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    title: 'Esdeveniments',
    description: 'Participa en les nostres activitats, xerrades i tallers per formar part activa del canvi.',
    linkText: 'Veure calendari',
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    title: 'Involucra-t\'hi',
    description: 'Hi ha moltes maneres d\'ajudar. Troba la que millor s\'adapti a tu i uneix-te a la causa.',
    linkText: 'Formes d\'ajudar',
  },
];

const InfoCardsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-neutral-light py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-text mb-4">Els nostres pilars</h2>
              <p className="font-sans text-lg text-neutral-text-subtle leading-relaxed">
                Actuem sobre quatre eixos fonamentals per avançar cap a una igualtat real i efectiva en tots els àmbits de la societat.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {infoCardsData.map((card, index) => (
                <InfoCard key={index} {...card} />
              ))}
            </div>
        </div>
    </section>
  );
};

export default InfoCardsSection;