import React from 'react';

interface LogoProps {
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooter = false }) => (
  <a href="#" className="flex items-center gap-3 group" aria-label="Pàgina d'inici del Lobby Europeu de Dones">
    <div className={isFooter ? 'text-accent-light' : 'text-primary'}>
        <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            <path d="M12 18V6" />
            <path d="M9 15h6" />
            <path d="M14.48 10.5C14.78 11.23 15 12.08 15 13a3 3 0 01-6 0c0-.92.22-1.77.52-2.5" />
            <path d="M18.89 12.22A8.01 8.01 0 0012 4a8 8 0 00-8 8c0 1.99.74 3.8 2 5.22" />
        </svg>
    </div>
    <div className="flex flex-col">
      <span className={`font-display font-bold text-base sm:text-lg leading-tight whitespace-nowrap ${isFooter ? 'text-white' : 'text-neutral-text'}`}>Lobby Europeu de Dones</span>
      <span className={`font-sans font-medium text-xs sm:text-sm -mt-1 ${isFooter ? 'text-accent-light/80' : 'text-primary'}`}>Plataforma Catalana de Suport</span>
    </div>
  </a>
);

export default Logo;