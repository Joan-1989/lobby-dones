// src/App.tsx

import React, { useState, useEffect } from 'react';

// ============================================================================
// INICI: DADES I COMPONENTS INTEGRATS
// Per solucionar els problemes de rutes, tot el codi està en aquest arxiu.
// ============================================================================

// --- DADES DE PUBLICACIONS ---
export interface Publication {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  fullContent: string;
}

const publications: Publication[] = [
  {
    id: 'dones-represaliades',
    title: "Dones represaliades a Terrassa",
    category: "Memòria Històrica",
    imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2025/05/portada-llibre-dones-represaliades.png",
    excerpt: "Una investigació per dignificar la memòria de 119 dones que van patir la repressió franquista a la ciutat, fruit de dos anys de recerca.",
    fullContent: `
      <h2 class="text-3xl font-bold mb-4">Un homenatge necessari a la lluita femenina</h2>
      <p class="mb-4">Aquesta obra és un homenatge a les dones que, al final de la Guerra Civil i sota el règim franquista, van ser condemnades i empresonades per defensar les seves idees. És el fruit d'una investigació que inclou una llista de dones represaliades a Terrassa i reconstrueix les seves històries a través dels documents conservats als arxius de tribunals militars i altres fonts.</p>
      <p>Entre acusacions injustes i judicis sumaríssims, emergeixen vides marcades per la valentia i la resistència en un context d'opressió. El llibre posa en relleu la invisibilització d'aquestes dones al llarg de dècades i esdevé una contribució essencial per mantenir viva la memòria històrica.</p>
    `
  },
  {
    id: 'prostitucio-debat',
    title: "La prostitució: un tema de debat",
    category: "Anàlisi",
    imageUrl: "https://placehold.co/600x400/e9d5ff/4c1d95?text=Publicació",
    excerpt: "Un recull de textos i ponències de diversos seminaris per abordar el complex debat entre l'abolició i la reglamentació de la prostitució.",
    fullContent: `
      <h2 class="text-3xl font-bold mb-4">Documents per a la reflexió: abolició o reglamentació</h2>
      <p class="mb-4">Des de la seva creació, la Plataforma ha tingut com a objectiu propiciar els canvis legals i socials per eliminar tota forma de violència contra les dones. Aquesta publicació recull el material de diversos actes, jornades i seminaris on s'ha tractat el tema de la prostitució des de múltiples perspectives.</p>
      <p>El document busca oferir arguments per a un debat informat, contrastant visions des del periodisme, la psicologia, el treball social i la política, sempre amb el compromís ètic amb la Igualtat i els Drets de les dones com a Drets Humans.</p>
    `
  },
  {
    id: 'publicitat-joc',
    title: "Imaginarios publicitarios, género y juego",
    category: "Investigació",
    imageUrl: "https://images.unsplash.com/photo-1593349480503-64d17b3d88f6?q=80&w=1974&auto=format&fit=crop",
    excerpt: "Anàlisi de la vulnerabilitat femenina i l'addicció conductual en el context de les narratives de consum i la publicitat.",
    fullContent: `
      <h2 class="text-3xl font-bold mb-4">Vulnerabilitat femenina i adicció en les narratives de consum</h2>
      <p class="mb-4">Aquest projecte de investigació aborda l'impacte de gènere en els comportaments de joc de risc des d'una perspectiva innovadora, centrada en l'anàlisi dels imaginaris publicitaris que modelen la vulnerabilitat específica de les dones.</p>
      <p>La hipòtesi central és que la publicitat contemporània reforça models de dependència i un ideal d'autocontrol il·lusori que incideixen directament en la forma en què les dones es vinculen amb el joc problemàtic.</p>
    `
  }
];

// --- DADES DE NOTÍCIES ---
export interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "La nostra presidenta Rosa Mª Fernández Sansa, homenatjada amb la medalla d'honor de la ciutat de Terrassa",
    date: "21 de març de 2023",
    category: "Reconeixements",
    imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2023/03/img-20230307-wa0038.jpg",
    excerpt: "L'Ajuntament de Terrassa va concedir-li la Medalla d'Honor per les seves aportacions al feminisme, havent creat al 1991 la primera Regidoria...",
    content: `<p>El dia 6 de març l'Ajuntament de Terrassa va concedir-li la Medalla d'Honor de la Ciutat...</p>`,
  },
  {
    id: 2,
    title: "Prostitució: un debat etern",
    date: "27 d'abril de 2022",
    category: "Opinió",
    imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2016/11/iphone-133.jpg",
    excerpt: "La prostitució, abolició o reglamentació, és un debat històric que, de manera cíclica es produeix i recurrentment decau.",
    content: `<p>La prostitució, abolició o reglamentació, es un debat històric que, de manera mes o menys cíclica i amb mes o menys intensitat es produeix...</p>`,
  },
  {
    id: 3,
    title: "Resum dels seminaris web de la campanya: 'mobilitza't contra el sexisme'",
    date: "23 de novembre de 2020",
    category: "Campanyes",
    imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2020/10/cartel-medios-verde-def.jpg",
    excerpt: "Des d'agost de 2020, el Lobby Europeu de Dones a Espanya participa en la campanya impulsada pel Consell d'Europa per eradicar el sexisme.",
    content: `<p>Des d'agost de 2020, el Lobby Europeu de Dones a Espanya participa en la campanya "Mobilitza't contra el Sexisme"...</p>`,
  },
    {
    id: 4,
    title: "El fòrum generació per a la igualtat conclou a París amb compromisos revolucionaris",
    date: "14 de juliol de 2021",
    category: "Internacional",
    imageUrl: "https://plataformalobbydones.com/wp-content/uploads/2019/06/ag-20192png.png",
    excerpt: "El Fòrum marca un canvi històric positiu de poder i perspectiva. Els defensors de la igualtat de gènere han pressionat per obtenir plans d’estímul.",
    content: `<p>“El Generation Equality Forum marca un canvi històric positiu de poder i perspectiva...</p>`,
  },
];


// --- COMPONENTS ---

const Logo: React.FC = () => ( <img src="https://cdn.prod.website-files.com/6895f3040c1b084e5c2a263b/6897120fd7fe900272a8abb9_LOGO%20LOBBY.jpg" alt="Lobby Dones Logo" className="h-10 w-auto"/> );
const LanguageSwitcher: React.FC = () => ( <div className="relative"><button className="flex items-center text-sm font-medium text-gray-600 hover:text-purple-600"><span>CA</span><svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path></svg></button></div> );

interface HeaderProps { onNavigate: (page: string) => void; }
const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'; return () => { document.body.style.overflow = 'unset'; }; }, [isMenuOpen]);
  const navLinks = [ { name: 'Inici', id: 'home' }, { name: 'Qui som', id: 'quisom' }, { name: 'Què fem', id: 'ambits' }, { name: 'Publicacions', id: 'publicacions' }, { name: 'Actualitat', id: 'actualitat' } ];
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, pageId: string) => { e.preventDefault(); onNavigate(pageId); setIsMenuOpen(false); };
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:px-10 shadow-sm">
        <a href="#" onClick={(e) => handleLinkClick(e, 'home')} aria-label="Pàgina d'inici"><Logo /></a>
        <nav className="hidden md:flex items-center gap-6">{navLinks.map((link) => (<a key={link.name} href="#" onClick={(e) => handleLinkClick(e, link.id)} className="text-sm font-medium text-gray-600 hover:text-purple-600">{link.name}</a>))}</nav>
        <div className="hidden md:flex items-center gap-4"><LanguageSwitcher /><a href="#" onClick={(e) => handleLinkClick(e, 'implicathi')} className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg text-sm hover:bg-purple-700">Implica-t'hi</a></div>
        <div className="md:hidden"><button onClick={() => setIsMenuOpen(true)} aria-label="Obrir menú" className="p-2"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg></button></div>
      </header>
      <div className={`fixed inset-0 z-50 transform transition-transform md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
        <div className="relative z-10 h-full w-4/5 max-w-sm bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-8"><a href="#" onClick={(e) => handleLinkClick(e, 'home')}><Logo /></a><button onClick={() => setIsMenuOpen(false)} aria-label="Tancar menú" className="p-2"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>
          <nav className="flex flex-col gap-6">{navLinks.map((link) => (<a key={link.name} href="#" onClick={(e) => handleLinkClick(e, link.id)} className="text-lg font-medium text-gray-700">{link.name}</a>))}<hr className="my-4"/><LanguageSwitcher /><a href="#" onClick={(e) => handleLinkClick(e, 'implicathi')} className="mt-4 w-full text-center bg-purple-600 text-white font-semibold py-3 px-5 rounded-lg">Implica-t'hi</a></nav>
        </div>
      </div>
    </>
  );
};

const Footer: React.FC = () => ( <footer className="bg-gray-800 text-white"> <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-12"> <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> <div><Logo /></div><div><h3 className="font-bold mb-4">Navegació</h3><ul><li><a href="#" className="hover:underline">Qui som</a></li><li><a href="#" className="hover:underline">Actualitat</a></li></ul></div><div><h3 className="font-bold mb-4">Legal</h3><ul><li><a href="#" className="hover:underline">Política de privacitat</a></li><li><a href="#" className="hover:underline">Avís legal</a></li></ul></div><div><h3 className="font-bold mb-4">Segueix-nos</h3></div></div><div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm"><p>&copy; {new Date().getFullYear()} Plataforma Lobby Dones. Tots els drets reservats.</p></div></div></footer> );
const HeroSection: React.FC = () => ( <section className="w-full bg-white pt-16 md:pt-24 overflow-x-clip"> <div className="container mx-auto max-w-7xl px-6 lg:px-8"> <div className="grid grid-cols-1 gap-y-24 lg:grid-cols-2 lg:gap-x-16 items-center"> <div className="flex flex-col justify-center text-center lg:text-left"><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 !leading-tight tracking-tighter">La violència masclista també és <span className="text-purple-600">digital</span></h1><p className="mt-4 text-lg md:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">Ajuda'ns a combatre-la. Coordinem i impulsem la igualtat de drets i oportunitats per a les dones en el marc d’una Europa unida i democràtica.</p><div className="mt-8 flex justify-center lg:justify-start"><a href="#projecte" className="bg-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-purple-700">Descobreix el projecte</a></div></div><div className="relative h-96 lg:h-full min-h-[500px]"> <div className="group absolute p-2 bg-white rounded-xl shadow-lg" style={{ width: '80%', maxWidth: '450px', top: '15%', left: '0%', transform: 'rotate(-8deg)', zIndex: 10 }}><img src="/images/hero-1.jpg" alt="Silueta d'una mà sostenint un mòbil" className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"/></div><div className="group absolute p-2 bg-white rounded-xl shadow-xl" style={{ width: '80%', maxWidth: '450px', top: '35%', left: '25%', transform: 'rotate(2deg)', zIndex: 20 }}><img src="/images/hero-2.jpg" alt="Mòbil mostrant paraules d'odi" className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"/></div><div className="group absolute p-2 bg-white rounded-xl shadow-2xl" style={{ width: '80%', maxWidth: '450px', top: '5%', left: '30%', transform: 'rotate(6deg)', zIndex: 30 }}><img src="/images/hero-3.jpg" alt="Diverses persones utilitzant mòbils" className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"/></div></div></div></div></section> );
const QuoteSection: React.FC = () => ( <section className="py-24 sm:py-32 bg-gray-50"><div className="container mx-auto max-w-4xl px-6 lg:px-8"><blockquote className="text-center text-2xl md:text-3xl font-medium leading-relaxed text-gray-800">"Coordinem i impulsem la igualtat de drets i oportunitats per a les dones en el marc d’una <span className="text-blue-600"> Europa unida i democràtica</span>."</blockquote></div></section> );
const InfoCardsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
      { image: 'https://placehold.co/100x100/e2e8f0/4a5568?text=VM', quote: 'Hem identificat la vostra organització com un actor que s\'ha posicionat clarament en contra de l\'antifeminisme...', name: 'Valentina Maglietta', role: 'Investigadora Principal, Gender Five Plus' },
      { image: 'https://placehold.co/100x100/e2e8f0/4a5568?text=AV', quote: 'Estem molt conscienciats amb el moviment feminista i us presentem un projecte artístic per commemorar el dia de la dona...', name: 'Aida Vila', role: 'Artista, MANILA Wall Art' },
      { image: 'https://placehold.co/100x100/e2e8f0/4a5568?text=MA', quote: 'Organitzem una jornada d\'homenatge a la nostra companya de lluita Consuelo Barea. Ens dirigim a vosaltres per si voleu participar-hi...', name: 'Matilde Aragó Gassiot', role: 'Magistrada jubilada' },
    ];
    const prevSlide = () => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    const nextSlide = () => setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    const TestimonialCard: React.FC<typeof testimonials[0]> = ({ image, quote, name, role }) => (
      <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl shadow-lg">
        <img src={image} alt={`Retrat de ${name}`} className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start text-yellow-400 mb-2">{[...Array(5)].map((_, i) => (<svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
          <blockquote className="text-gray-700 italic">"{quote}"</blockquote>
          <p className="mt-4 font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    );
    return (
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Testimonis reals de la comunitat</h2><p className="mt-4 text-lg text-gray-600">Descobreix com la nostra feina ha ajudat a tancar la bretxa digital de gènere i a crear espais més segurs.</p></div>
          <div className="relative flex items-center justify-center">
            <button onClick={prevSlide} className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 hidden lg:block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
            <div className="w-full max-w-3xl overflow-hidden"><div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>{testimonials.map((t, i) => (<div key={i} className="w-full flex-shrink-0"><TestimonialCard {...t} /></div>))}</div></div>
            <button onClick={nextSlide} className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 hidden lg:block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
            <div className="absolute -bottom-16 flex lg:hidden gap-4"><button onClick={prevSlide} className="p-3 bg-white rounded-full shadow-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button><button onClick={nextSlide} className="p-3 bg-white rounded-full shadow-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button></div>
          </div>
        </div>
      </section>
    );
  };

const NewsSection: React.FC = () => {
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
  const latestPosts = posts.slice(0, 3);
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900">Actualitat i Notícies</h2><p className="mt-4 text-lg text-gray-600">Estigues al dia de les nostres últimes activitats, campanyes i articles d'opinió.</p></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{latestPosts.map((post) => (<NewsCard key={post.id} post={post} />))}</div>
      </div>
    </section>
  );
};

const AIAssistantSection: React.FC = () => null;


// --- PÀGINES ---

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <QuoteSection />
    <InfoCardsSection />
    <NewsSection />
    <AIAssistantSection />
  </>
);

const NewsPage: React.FC = () => {
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
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-16"><h1 className="text-4xl md:text-5xl font-bold text-gray-900">Actualitat</h1><p className="mt-4 text-xl text-gray-600">Totes les nostres activitats, campanyes i articles d'opinió.</p></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => (<NewsCard key={post.id} post={post} />))}</div>
      </div>
    </section>
  );
};

const QuiSomPage: React.FC = () => (
  <div className="bg-white">
    <div className="container mx-auto max-w-7xl py-24 px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">La nostra història</h1>
        <p className="mt-4 text-xl text-gray-600">
          La Plataforma Catalana de Suport al Lobby Europeu de Dones es va constituir el 6 de setembre del 2000 com una coordinadora d'ONGs de dones per promoure la igualtat de drets i oportunitats en el marc d'una Europa unida i democràtica.
        </p>
      </div>
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">El nostre equip</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-gray-50 p-8 rounded-2xl shadow-sm mb-12">
          <div className="md:col-span-1">
            <img src="https://plataformalobbydones.com/wp-content/uploads/2022/04/rosa_ma_fernandez.jpg" alt="Retrat de Rosa Maria Fernández Sansa" className="rounded-full w-48 h-48 mx-auto object-cover"/>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-purple-700">Rosa Maria Fernández Sansa</h3>
            <p className="text-md text-gray-500 font-semibold mb-4">Presidenta</p>
            <p className="text-gray-700">
              Historiadora i activista amb una reconeguda trajectòria en la defensa dels drets de les dones. Va ser pionera en la creació de la primera Regidoria de Promoció de la Dona a Terrassa (1991) i és fundadora del Casal de la Dona de Terrassa (1986). La seva tasca ha estat reconeguda amb la Creu de Sant Jordi (2018) i la Medalla d'Honor de la Ciutat de Terrassa (2023).
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center p-8">
           <div className="md:col-span-1 md:order-2">
            <img src="https://placehold.co/192x192/e2e8f0/4a5568?text=MC" alt="Retrat de Marta Corcoy Rius" className="rounded-full w-48 h-48 mx-auto object-cover"/>
          </div>
          <div className="md:col-span-2 md:order-1 text-right">
            <h3 className="text-2xl font-bold text-purple-700">Marta Corcoy Rius</h3>
            <p className="text-md text-gray-500 font-semibold mb-4">Membre destacada</p>
            <p className="text-gray-700">
              Doctora en comunicació i periodisme, és professora a la UAB i presidenta de l'Associació de Dones Periodistes de Catalunya. La seva investigació se centra en l'anàlisi dels discursos mediàtics amb perspectiva de gènere i la representació de les dones en l'esfera pública.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PublicacionsPage: React.FC<{ onNavigate: (page: string) => void; }> = ({ onNavigate }) => {
    const handlePubClick = (e: React.MouseEvent<HTMLAnchorElement>, pubId: string) => {
        e.preventDefault();
        onNavigate(`publicacio/${pubId}`);
    };
    return (
        <section className="bg-gray-50 py-24 sm:py-32">
            <div className="container mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Publicacions</h1>
                    <p className="mt-4 text-xl text-gray-600">Explora els nostres documents, investigacions i llibres sobre feminisme, igualtat i drets de les dones.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {publications.map((pub) => (
                        <div key={pub.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                            <img src={pub.imageUrl} alt={`Imatge per a ${pub.title}`} className="h-56 w-full object-cover"/>
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm text-purple-600 font-semibold uppercase">{pub.category}</p>
                                <h3 className="text-xl font-bold text-gray-900 mt-2">{pub.title}</h3>
                                <p className="mt-2 text-gray-600 flex-grow">{pub.excerpt}</p>
                                <a href="#" onClick={(e) => handlePubClick(e, pub.id)} className="mt-4 text-purple-600 font-semibold hover:text-purple-800 self-start">Llegeix més &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
const PublicacioDetailPage: React.FC<{ pubId: string }> = ({ pubId }) => {
    const publication = publications.find(p => p.id === pubId);
    if (!publication) {
        return <div className="text-center py-24">Publicació no trobada.</div>;
    }
    return (
        <article className="bg-white py-24 sm:py-32">
            <div className="container mx-auto max-w-3xl px-6 lg:px-8">
                <img src={publication.imageUrl} alt={`Imatge per a ${publication.title}`} className="w-full h-96 object-cover rounded-2xl mb-12"/>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">{publication.title}</h1>
                <p className="mt-4 text-lg text-gray-500">{publication.category}</p>
                <div className="prose lg:prose-xl mt-8" dangerouslySetInnerHTML={{ __html: publication.fullContent }} />
            </div>
        </article>
    );
};
const AmbitsPage: React.FC = () => ( <div className="container mx-auto py-24 px-6 text-center"><h1 className="text-4xl font-bold">Què fem</h1><p className="mt-4 text-lg">Aquesta pàgina està en construcció.</p></div> );
const ImplicathiPage: React.FC = () => ( <div className="container mx-auto py-24 px-6 text-center"><h1 className="text-4xl font-bold">Implica-t'hi</h1><p className="mt-4 text-lg">Aquesta pàgina està en construcció.</p></div> );

// ============================================================================
// COMPONENT PRINCIPAL DE L'APLICACIÓ
// ============================================================================

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    const [pageName, pageId] = currentPage.split('/');

    switch (pageName) {
      case 'home':
        return <HomePage />;
      case 'actualitat':
        return <NewsPage />;
      case 'quisom':
        return <QuiSomPage />;
      case 'ambits':
        return <AmbitsPage />;
      case 'publicacions':
        return <PublicacionsPage onNavigate={navigate} />;
      case 'publicacio':
        return <PublicacioDetailPage pubId={pageId} />;
      case 'implicathi':
        return <ImplicathiPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header onNavigate={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
