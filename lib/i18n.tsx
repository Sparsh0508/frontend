import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getTranslation, Translations } from './translations';

interface I18nContextType {
  currentLanguage: string;
  translations: Translations;
  changeLanguage: (languageCode: string) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [translations, setTranslations] = useState<Translations>(getTranslation('en'));

  const changeLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    setTranslations(getTranslation(languageCode));
  };

  const value: I18nContextType = {
    currentLanguage,
    translations,
    changeLanguage,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
