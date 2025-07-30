import { useLanguageContext, Language } from '@/contexts/LanguageContext';
import { enTranslations } from '@/data/translations/en';
import { idTranslations } from '@/data/translations/id';

const translations = {
  en: enTranslations,
  id: idTranslations
};

export const useLanguage = () => {
  const { language, setLanguage } = useLanguageContext();
  
  const t = translations[language];
  
  return {
    language,
    setLanguage,
    t
  };
};