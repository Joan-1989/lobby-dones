// src/components/Header.tsx

import React, { useState, useEffect } from 'react';

// Components interns per evitar problemes d'importació
const Logo: React.FC = () => (
  <img 
    src="https://cdn.prod.website-files.com/6895f3040c1b084e5c2a263b/6897120fd7fe900272a8abb9_LOGO%20LOBBY.jpg" 
    alt="Lobby Dones Logo"
    className="h-10 w-auto"
  />
);

const LanguageSwitcher: React.FC = () => (
  <div className="relative">
     <button className="flex items-center text-sm font-medium text-gray-600 hover:text-purple-600">
       <span>CA</span>
       <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
     </button>
  </div>
);

// Definim el tipus de les props que rebrà el Header
interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Afegim un 'id' a cada enllaç per a la navegació
  const navLinks = [
    { name: 'Qui som', id: 'quisom' },
    { name: 'Àmbits d\'actuació', id: 'ambits' },
    { name: 'Recursos', id: 'recursos' },
    { name: 'Actualitat', id: 'actualitat' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, pageId: string) => {
    e.preventDefault(); // Evitem que l'enllaç recarregui la pàgina
    onNavigate(pageId);
    setIsMenuOpen(false); // Tanquem el menú mòbil en fer clic
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:px-10 shadow-sm">
        <a href="#" onClick={(e) => handleLinkClick(e, 'home')} aria-label="Pàgina d'inici">
          <Logo />
        </a>

        {/* Menú per a escriptoris */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              onClick={(e) => handleLinkClick(e, link.id)}
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, 'implicathi')}
            className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg text-sm hover:bg-purple-700 transition-colors"
          >
            Implica-t'hi
          </a>
        </div>

        {/* Botó d'hamburguesa per a mòbils */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Obrir menú" className="p-2">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </header>

      {/* Menú lateral per a mòbils */}
      <div className={`fixed inset-0 z-50 transform transition-transform md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
        <div className="relative z-10 h-full w-4/5 max-w-sm bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <a href="#" onClick={(e) => handleLinkClick(e, 'home')}><Logo /></a>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Tancar menú" className="p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href="#" onClick={(e) => handleLinkClick(e, link.id)} className="text-lg font-medium text-gray-700">{link.name}</a>
            ))}
            <hr className="my-4"/>
            <LanguageSwitcher />
            <a href="#" onClick={(e) => handleLinkClick(e, 'implicathi')} className="mt-4 w-full text-center bg-purple-600 text-white font-semibold py-3 px-5 rounded-lg">Implica-t'hi</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
