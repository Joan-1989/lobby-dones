import React, { useState, useEffect, useRef } from 'react';

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'ca', name: 'Català' },
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
  ];

  const changeLanguage = (langCode: string) => {
    const googleTranslateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleTranslateElement) {
      googleTranslateElement.value = langCode;
      googleTranslateElement.dispatchEvent(new Event('change'));
    }
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-neutral-text-subtle hover:text-primary transition-colors duration-fast ease-in-out p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="Selecciona un idioma"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9.5a18.034 18.034 0 01-4.425-2.065M12 3a9 9 0 100 18 9 9 0 000-18zm-3.373 5.429c-.946-1.664-1.858-3.051-1.858-3.051s-1.8 3.65-2.555 5.923m8.583 3.539a21.037 21.037 0 01-4.492 2.065" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-neutral-background rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-50">
          {languages.map((lang) => (
            <a
              key={lang.code}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                changeLanguage(lang.code);
              }}
              className="block px-4 py-2 text-sm text-neutral-text hover:bg-neutral-light font-sans"
              role="menuitem"
            >
              {lang.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;