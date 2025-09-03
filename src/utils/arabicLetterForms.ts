import { ArabicLetter } from '@/data/arabicAlphabet';

export interface ComprehensiveLetterForms {
  withVowels: string[];
  withSukun: string[];
  withShaddah: string[];
}

export const getComprehensiveLetterForms = (letter: ArabicLetter): ComprehensiveLetterForms => {
  const arabicLetter = letter.arabic;
  
  // Define vowel marks
  const fatha = '\u064E'; // َ
  const kasra = '\u0650'; // ِ  
  const damma = '\u064F'; // ُ
  const sukun = '\u0652'; // ْ
  const shaddah = '\u0651'; // ّ
  
  return {
    withVowels: [
      `${arabicLetter}${fatha}`, // بَ
      `${arabicLetter}${kasra}`, // بِ
      `${arabicLetter}${damma}`  // بُ
    ],
    withSukun: [
      `أَ${arabicLetter}${sukun}`, // أَبْ
      `أِ${arabicLetter}${sukun}`, // أِبْ
      `أُ${arabicLetter}${sukun}`  // أُبْ
    ],
    withShaddah: [
      `أَ${arabicLetter}${shaddah}${fatha}`, // أَبَّ
      `أِ${arabicLetter}${shaddah}${kasra}`, // أِبِّ
      `أُ${arabicLetter}${shaddah}${damma}`  // أُبُّ
    ]
  };
};

export const formatComprehensiveDisplay = (forms: ComprehensiveLetterForms): string => {
  return `${forms.withVowels.join(' ')} - ${forms.withSukun.join(' ')} - ${forms.withShaddah.join(' ')}`;
};