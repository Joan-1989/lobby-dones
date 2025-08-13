// src/pages/HomePage.tsx

import React, { useState } from 'react';

// ============================================================================
// INICI: COMPONENTS INTEGRATS PER EVITAR ERRORS D'IMPORTACIÓ
// Per solucionar els problemes de rutes, he mogut el codi de cada component
// directament a dins d'aquest arxiu.
// ============================================================================

// --- HeroSection Component ---
const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-x-clip">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-24 lg:grid-cols-2 lg:gap-x-16 items-center">
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
          <div className="relative h-96 lg:h-full min-h-[500px]">
            <div 
              className="group absolute p-2 bg-white rounded-xl shadow-lg transition-transform duration-300 ease-out"
              style={{ width: '80%', maxWidth: '450px', top: '15%', left: '0%', transform: 'rotate(-8deg)', zIndex: 10 }}
            >
              <img 
                src="/images/hero-1.jpg"
                alt="Silueta d'una mà sostenint un mòbil amb un fons vermell"
                className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
            <div 
              className="group absolute p-2 bg-white rounded-xl shadow-xl transition-transform duration-300 ease-out"
              style={{ width: '80%', maxWidth: '450px', top: '35%', left: '25%', transform: 'rotate(2deg)', zIndex: 20 }}
            >
              <img 
                src="/images/hero-2.jpg"
                alt="Mòbil mostrant paraules relacionades amb el discurs d'odi"
                className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
            <div 
              className="group absolute p-2 bg-white rounded-xl shadow-2xl transition-transform duration-300 ease-out"
              style={{ width: '80%', maxWidth: '450px', top: '5%', left: '30%', transform: 'rotate(6deg)', zIndex: 30 }}
            >
              <img 
                src="/images/hero-3.jpg"
                alt="Diverses persones utilitzant els seus telèfons mòbils"
                className="w-full h-full object-cover rounded-md transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- QuoteSection Component ---
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

// --- InfoCardsSection (Testimonials) Component ---
interface Testimonial {
  image: string;
  quote: string;
  name: string;
  role: string;
}
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
const InfoCardsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  const nextSlide = () => setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Testimonis reals de la comunitat</h2>
          <p className="mt-4 text-lg text-gray-600">Descobreix com la nostra feina ha ajudat a tancar la bretxa digital de gènere i a crear espais més segurs.</p>
        </div>
        <div className="relative flex items-center justify-center">
          <button onClick={prevSlide} className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors hidden lg:block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
          <div className="w-full max-w-3xl overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (<div key={index} className="w-full flex-shrink-0"><TestimonialCard {...testimonial} /></div>))}
            </div>
          </div>
          <button onClick={nextSlide} className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors hidden lg:block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          <div className="absolute -bottom-16 flex lg:hidden gap-4">
             <button onClick={prevSlide} className="p-3 bg-white rounded-full shadow-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
             <button onClick={nextSlide} className="p-3 bg-white rounded-full shadow-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NewsSection Component ---
interface Post { id: number; title: string; date: string; category: string; imageUrl: string; excerpt: string; content: string; }
const posts: Post[] = [
  { id: 1, title: "La nostra presidenta Rosa Mª Fernández Sansa, homenatjada amb la medalla d'honor de la ciutat de Terrassa", date: "21 de març de 2023", category: "Reconeixements", imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2023/03/img-20230307-wa0038.jpg", excerpt: "L'Ajuntament de Terrassa va concedir-li la Medalla d'Honor per les seves aportacions al feminisme...", content: `<p>El dia 6 de març l'Ajuntament de Terrassa va concedir-li la Medalla d'Honor de la Ciutat...</p>`},
  { id: 2, title: "Prostitució: un debat etern", date: "27 d'abril de 2022", category: "Opinió", imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2016/11/iphone-133.jpg", excerpt: "La prostitució, abolició o reglamentació, és un debat històric que cíclicament es produeix...", content: `<p>La prostitució, abolició o reglamentació, es un debat històric...</p>`},
  { id: 3, title: "Resum dels seminaris web de la campanya: 'mobilitza't contra el sexisme'", date: "23 de novembre de 2020", category: "Campanyes", imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2020/10/cartel-medios-verde-def.jpg", excerpt: "Des d'agost de 2020, el Lobby Europeu de Dones a Espanya participa en la campanya...", content: `<p>Des d'agost de 2020, el Lobby Europeu de Dones a Espanya participa en la campanya...</p>`},
];
const NewsCard: React.FC<{ post: Post }> = ({ post }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img className="h-48 w-full object-cover" src={post.imageUrl} alt={`Imatge per a ${post.title}`} />
    <div className="p-6">
      <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold">{post.category}</div>
      <p className="block mt-1 text-lg leading-tight font-bold text-black hover:underline">{post.title}</p>
      <p className="mt-2 text-gray-500">{post.excerpt}</p>
      <div className="mt-4"><a href="#" className="text-purple-600 hover:text-purple-800 font-semibold">Llegeix més &rarr;</a></div>
    </div>
  </div>
);
const NewsSection: React.FC = () => {
  const latestPosts = posts.slice(0, 3);
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Actualitat i Notícies</h2>
          <p className="mt-4 text-lg text-gray-600">Estigues al dia de les nostres últimes activitats, campanyes i articles d'opinió.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (<NewsCard key={post.id} post={post} />))}
        </div>
      </div>
    </section>
  );
};

// --- AIAssistantSection Component ---
const AIAssistantSection: React.FC = () => {
  // Aquest component es manté com a marcador de posició de moment.
  return <div />;
};

// ============================================================================
// FI: COMPONENTS INTEGRATS
// ============================================================================


// Component principal de la pàgina d'inici
const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <InfoCardsSection />
      <NewsSection />
      <AIAssistantSection />
    </>
  );
};

export default HomePage;
