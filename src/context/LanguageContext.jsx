import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('subbu_lang') || 'en';
  });

  const t = (key) => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  };

  useEffect(() => {
    localStorage.setItem('subbu_lang', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
