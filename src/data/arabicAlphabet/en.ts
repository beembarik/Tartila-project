import { ArabicLetter } from '../arabicAlphabet';

export const arabicAlphabetEn: ArabicLetter[] = [
  {
    id: "alif",
    arabic: "ا",
    name: "Alif",
    transliteration: "ā",
    makhraj: "Al-Jawf (الجوف)",
    makhrajDescription: "The hollow/cavity - air flows freely without obstruction",
    makhrajIllustration: "/src/assets/makhraj-hollow.jpg",
    characteristics: ["Harf Madd (Letter of prolongation)", "No sound of its own"],
    position: {
      isolated: "ا",
      initial: "ا",
      medial: "ـا",
      final: "ـا"
    },
    examples: [
      { word: "أب", meaning: "Father", transliteration: "ab" },
      { word: "ماء", meaning: "Water", transliteration: "mā'" }
    ],
    pronunciation: {
      description: "A pure vowel sound, elongates the preceding vowel",
      tips: ["Keep mouth open", "No constriction in throat", "Pure vowel elongation"]
    }
  },
  {
    id: "ba",
    arabic: "ب",
    name: "Ba",
    transliteration: "b",
    makhraj: "Ash-Shafatayn (الشفتان)",
    makhrajDescription: "The two lips - sound produced by pressing lips together",
    makhrajIllustration: "/src/assets/makhraj-lips.jpg",
    characteristics: ["Jahr (Voiced)", "Shiddah (Stopped)", "Qalqalah"],
    position: {
      isolated: "ب",
      initial: "بـ",
      medial: "ـبـ",
      final: "ـب"
    },
    examples: [
      { word: "بيت", meaning: "House", transliteration: "bayt" },
      { word: "كتاب", meaning: "Book", transliteration: "kitāb" }
    ],
    pronunciation: {
      description: "Like English 'b' but with more emphasis on lip closure",
      tips: ["Press lips firmly together", "Release with slight explosion", "Voice vibrates"]
    }
  },
  {
    id: "ta",
    arabic: "ت",
    name: "Ta",
    transliteration: "t",
    makhraj: "Tooth Ridge (طرف اللسان)",
    makhrajDescription: "Tip of tongue against upper tooth ridge",
    makhrajIllustration: "/src/assets/makhraj-tooth-ridge.jpg",
    characteristics: ["Hams (Voiceless)", "Shiddah (Stopped)"],
    position: {
      isolated: "ت",
      initial: "تـ",
      medial: "ـتـ",
      final: "ـت"
    },
    examples: [
      { word: "تفاح", meaning: "Apple", transliteration: "tuffāh" },
      { word: "بنت", meaning: "Girl", transliteration: "bint" }
    ],
    pronunciation: {
      description: "Like English 't' but tongue touches tooth ridge more precisely",
      tips: ["Tongue tip against tooth ridge", "Sharp release", "No voice vibration"]
    }
  },
  {
    id: "tha",
    arabic: "ث",
    name: "Tha",
    transliteration: "th",
    makhraj: "Between teeth and tongue (بين الأسنان)",
    makhrajDescription: "Tongue tip between or against upper teeth",
    makhrajIllustration: "/src/assets/makhraj-between-teeth.jpg",
    characteristics: ["Hams (Voiceless)", "Rikhawah (Flowing)"],
    position: {
      isolated: "ث",
      initial: "ثـ",
      medial: "ـثـ",
      final: "ـث"
    },
    examples: [
      { word: "ثلاثة", meaning: "Three", transliteration: "thalātha" },
      { word: "بحث", meaning: "Research", transliteration: "bahth" }
    ],
    pronunciation: {
      description: "Like English 'th' in 'think'",
      tips: ["Tongue between teeth", "Air flows through", "No voice vibration"]
    }
  },
  {
    id: "jim",
    arabic: "ج",
    name: "Jim",
    transliteration: "j",
    makhraj: "Middle of tongue (وسط اللسان)",
    makhrajDescription: "Middle of tongue against soft palate",
    makhrajIllustration: "/src/assets/makhraj-middle-tongue.jpg",
    characteristics: ["Jahr (Voiced)", "Shiddah (Stopped)", "Qalqalah"],
    position: {
      isolated: "ج",
      initial: "جـ",
      medial: "ـجـ",
      final: "ـج"
    },
    examples: [
      { word: "جمل", meaning: "Camel", transliteration: "jamal" },
      { word: "مسجد", meaning: "Mosque", transliteration: "masjid" }
    ],
    pronunciation: {
      description: "Like English 'j' in 'jam'",
      tips: ["Middle tongue rises", "Soft closure", "Voice vibrates"]
    }
  },
  {
    id: "ha",
    arabic: "ح",
    name: "Ha",
    transliteration: "ḥ",
    makhraj: "Middle of throat (وسط الحلق)",
    makhrajDescription: "Middle part of the throat",
    makhrajIllustration: "/src/assets/makhraj-middle-throat.jpg",
    characteristics: ["Hams (Voiceless)", "Rikhawah (Flowing)"],
    position: {
      isolated: "ح",
      initial: "حـ",
      medial: "ـحـ",
      final: "ـح"
    },
    examples: [
      { word: "حليب", meaning: "Milk", transliteration: "ḥalīb" },
      { word: "فرح", meaning: "Joy", transliteration: "faraḥ" }
    ],
    pronunciation: {
      description: "Deep 'h' sound from middle throat, like fogging a mirror",
      tips: ["Constrict middle throat", "Breathe out gently", "No voice vibration"]
    }
  }
];