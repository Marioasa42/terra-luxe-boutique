import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Language } from '@/lib/i18n';

type TranslationType = (typeof translations)[keyof typeof translations];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const defaultLanguageContext: LanguageContextType = {
  language: 'it',
  setLanguage: () => undefined,
  t: translations.it,
};

const LanguageContext = createContext<LanguageContextType>(defaultLanguageContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
