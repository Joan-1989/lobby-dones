import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-neutral-text hover:text-primary transition-colors duration-fast ease-in-out text-base font-medium relative group">
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-normal group-hover:w-full"></span>
  </a>
);

const ActionButton: React.FC<{ href: string; children: React.ReactNode; primary?: boolean }> = ({ href, children, primary = false }) => (
  <a
    href={href}
    className={`
      ${primary ? 'bg-accent hover:bg-accent/90 text-white' : 'bg-primary/10 hover:bg-primary/20 text-primary-dark'}
      font-semibold py-2 px-5 rounded-lg
      transition-all duration-normal ease-in-out transform hover:scale-105
    `}
  >
    {children}
  </a>
);


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-light/80 backdrop-blur-lg sticky top-0 z-50 border-b border-neutral-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-8">
          <NavLink href="#about">Qui som</NavLink>
          <NavLink href="#projects">Projectes</NavLink>
          <NavLink href="#news">Actualitat</NavLink>
          <NavLink href="#contact">Contacte</NavLink>
        </nav>
        <div className="hidden lg:flex items-center gap-x-4">
            <LanguageSwitcher />
            <ActionButton href="#">Fes-te Sòcia</ActionButton>
            <ActionButton href="#" primary>Fes una Donació</ActionButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Obrir menú"
          aria-expanded={isMobileMenuOpen}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-light/95 backdrop-blur-sm pb-8 px-6 absolute w-full shadow-lg">
          <nav className="flex flex-col items-center gap-y-6 pt-6">
            <NavLink href="#about">Qui som</NavLink>
            <NavLink href="#projects">Projectes</NavLink>
            <NavLink href="#news">Actualitat</NavLink>
            <NavLink href="#contact">Contacte</NavLink>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
            <div className="flex flex-col items-stretch w-full gap-y-4 pt-4">
                <ActionButton href="#">Fes-te Sòcia</ActionButton>
                <ActionButton href="#" primary>Fes una Donació</ActionButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;