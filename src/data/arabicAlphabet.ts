export interface ArabicLetter {
  id: string;
  arabic: string;
  name: string;
  transliteration: string;
  makhraj: string;
  makhrajDescription: string;
  makhrajIllustration: string;
  characteristics: string[];
  position: {
    isolated: string;
    initial: string;
    medial: string;
    final: string;
  };
  examples: {
    word: string;
    meaning: string;
    transliteration: string;
  }[];
  pronunciation: {
    description: string;
    tips: string[];
  };
}

import { arabicAlphabetEn } from './arabicAlphabet/en';
import { arabicAlphabetId } from './arabicAlphabet/id';
import { Language } from '@/contexts/LanguageContext';

const alphabetData = {
  en: arabicAlphabetEn,
  id: arabicAlphabetId
};

export const getArabicAlphabet = (language: Language): ArabicLetter[] => {
  return alphabetData[language];
};

export const getMakhrajColor = (makhraj: string): string => {
  const colors: { [key: string]: string } = {
    "Al-Jawf": "bg-gradient-primary",
    "Ash-Shafatayn": "bg-accent",
    "Tooth Ridge": "bg-gradient-accent", 
    "Between teeth": "bg-accent",
    "Middle of tongue": "bg-primary",
    "Lidah bagian tengah": "bg-primary",
    "Middle of throat": "bg-gradient-warm"
  };
  
  return colors[makhraj.split(" (")[0]] || "bg-secondary";
};