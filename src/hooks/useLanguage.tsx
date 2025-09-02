import { useLanguageContext, Language } from '@/contexts/LanguageContext';
import { enTranslations } from '@/data/translations/en';
import { idTranslations } from '@/data/translations/id';
import { gamificationTranslations } from '@/data/translations/gamification';
import { getArabicAlphabet } from '@/data/arabicAlphabet';

const translations = {
  en: enTranslations,
  id: idTranslations
};

export const useLanguage = () => {
  const { language, setLanguage } = useLanguageContext();
  
  const t = translations[language];
  const gt = gamificationTranslations[language];
  const arabicAlphabet = getArabicAlphabet(language);
  
  return {
    language,
    setLanguage,
    t,
    gt,
    arabicAlphabet
  };
};