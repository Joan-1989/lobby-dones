import React, { useState, useEffect } from 'react';

const LanguageSwitcher: React.FC = () => {
    const [currentLang, setCurrentLang] = useState('ca');

    const changeLanguage = (langCode: 'ca' | 'es') => {
        const googleTranslateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (googleTranslateElement) {
            googleTranslateElement.value = langCode;
            googleTranslateElement.dispatchEvent(new Event('change'));
            setCurrentLang(langCode);
        } else {
            console.warn("L'element de Google Translate no s'ha trobat. Assegura't que l'script s'ha carregat correctament a l'index.html i no hi ha errors de 'Quirks Mode'.");
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const langSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (langSelect && langSelect.value && currentLang !== langSelect.value) {
                setCurrentLang(langSelect.value);
            }
        }, 500);
        return () => clearInterval(interval);
    }, [currentLang]);

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => changeLanguage('ca')}
                className={`text-sm font-medium transition-colors ${currentLang === 'ca' ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-purple-600'}`}
                aria-pressed={currentLang === 'ca'}
            >
                CA
            </button>
            <span className="text-gray-300">|</span>
            <button
                onClick={() => changeLanguage('es')}
                className={`text-sm font-medium transition-colors ${currentLang === 'es' ? 'text-purple-600 font-bold' : 'text-gray-600 hover:text-purple-600'}`}
                aria-pressed={currentLang === 'es'}
            >
                ES
            </button>
        </div>
    );
};

export default LanguageSwitcher;
