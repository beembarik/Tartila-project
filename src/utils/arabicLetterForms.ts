import { ArabicLetter } from '@/data/arabicAlphabet';

export interface ComprehensiveLetterForms {
  withVowels: string[];
  withSukun: string[];
  withShaddah: string[];
}

export const getComprehensiveLetterForms = (letter: ArabicLetter): ComprehensiveLetterForms => {
  const arabicLetter = letter.arabic;
  
  // Special cases for mad letters
  if (letter.id === 'alif') {
    return {
      withVowels: ['أَامَنَ', 'صَابِرَ', 'ذَاكَرَ'],
      withSukun: ['أَامَنَ', 'صَابِرَ', 'ذَاكَرَ'],
      withShaddah: ['أَامَنَ', 'صَابِرَ', 'ذَاكَرَ']
    };
  }
  
  if (letter.id === 'ya-mad') {
    return {
      withVowels: ['فِيْهَا', 'قِيْلَ', 'نَفْسِيْ'],
      withSukun: ['فِيْهَا', 'قِيْلَ', 'نَفْسِيْ'],
      withShaddah: ['فِيْهَا', 'قِيْلَ', 'نَفْسِيْ']
    };
  }
  
  if (letter.id === 'waw-mad') {
    return {
      withVowels: ['كُلُوْا', 'وَاشْرَبُوْا', 'صَبَرُوْا'],
      withSukun: ['كُلُوْا', 'وَاشْرَبُوْا', 'صَبَرُوْا'],
      withShaddah: ['كُلُوْا', 'وَاشْرَبُوْا', 'صَبَرُوْا']
    };
  }
  
  // Define vowel marks for regular letters
  
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
  // For mad letters, just show the examples as they are already complete words
  if (forms.withVowels[0] === forms.withSukun[0] && forms.withSukun[0] === forms.withShaddah[0]) {
    return forms.withVowels.join(' - ');
  }

  return `${forms.withVowels.join(' ')} - ${forms.withSukun.join(' ')} - ${forms.withShaddah.join(' ')}`;
};