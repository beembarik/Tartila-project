import { ArabicLetter } from '../arabicAlphabet';

export const arabicAlphabetEn: ArabicLetter[] = [
  {
    id: "alif",
    arabic: "ا",
    name: "Alif",
    transliteration: "ā",
    makhraj: "Al-Jawf (الجوف)",
    makhrajDescription: "From the hollow/cavity of the mouth and throat - air flows freely without obstruction - prolonged vowel sound",
    makhrajIllustration: "/assets/makhraj-hollow.jpg",
    characteristics: ["Mad Letter (Letter of prolongation)", "No sound of its own", "Natural Mad", "Vowel elongation"],
    position: {
      isolated: "ا",
      initial: "ا",
      medial: "ـا",
      final: "ـا"
    },
    examples: [
      { word: "صابر", meaning: "Patient", transliteration: "ṣābir" },
      { word: "ذاكر", meaning: "Remembering", transliteration: "dhākir" }
    ],
    pronunciation: {
      description: "A pure vowel sound, Long 'aa' sound - elongated vowel that extends naturally",
      tips: ["Keep mouth open", "Extend the 'a' sound", "No constriction in throat", "Pure vowel elongation", "Natural prolongation"]
    }
  },
  {
    id: "ba",
    arabic: "ب",
    name: "Ba",
    transliteration: "b",
    makhraj: "Ash-Shafatayn (الشفتان)",
    makhrajDescription: "The two lips - sound produced by pressing lips together",
    makhrajIllustration: "/assets/Ba.jpg",
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
    makhrajIllustration: "/assets/makhraj-tooth-ridge.jpg",
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
    makhrajIllustration: "/assets/makhraj-between-teeth.jpg",
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
    makhrajIllustration: "/assets/makhraj-middle-tongue.jpg",
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
    makhrajIllustration: "/assets/makhraj-middle-throat.jpg",
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
  },
  {
    id: "kho",
    arabic: "خ",
    name: "Kha",
    transliteration: "kh",
    makhraj: "Top of throat (أقصى الحلق)",
    makhrajDescription: "Back of tongue against soft palate",
    makhrajIllustration: "/assets/makhraj-top-throat.jpg",
    characteristics: ["Hams (Voiceless)", "Rikhawah (Flowing)"],
    position: {
      isolated: "خ",
      initial: "خـ",
      medial: "ـخـ",
      final: "ـخ"
    },
    examples: [
      { word: "خبز", meaning: "Bread", transliteration: "khubz" },
      { word: "طبخ", meaning: "Cooking", transliteration: "tabakh" }
    ],
    pronunciation: {
      description: "Like 'ch' in Scottish 'loch' or German 'Bach'",
      tips: ["Back of tongue rises to palate", "Air flows out", "Raspy sound"]
    }
  },
  {
    id: "dal",
    arabic: "د",
    name: "Dal",
    transliteration: "d",
    makhraj: "Tooth Ridge (طرف اللسان)",
    makhrajDescription: "Tip of tongue against upper tooth ridge",
    makhrajIllustration: "/assets/makhraj-tooth-ridge.jpg",
    characteristics: ["Jahr (Voiced)", "Shiddah (Stopped)", "Qalqalah"],
    position: {
      isolated: "د",
      initial: "د",
      medial: "ـد",
      final: "ـد"
    },
    examples: [
      { word: "دب", meaning: "Bear", transliteration: "dubb" },
      { word: "جديد", meaning: "New", transliteration: "jadīd" }
    ],
    pronunciation: {
      description: "Like English 'd' but with the tongue tip more precisely on the tooth ridge",
      tips: ["Tongue tip on tooth ridge", "Sharp release", "Voice vibrates"]
    }
  },
  {
    id: "dhal",
    arabic: "ذ",
    name: "Dhal",
    transliteration: "dh",
    makhraj: "Between teeth and tongue (بين الأسنان)",
    makhrajDescription: "Tongue tip between or against upper teeth",
    makhrajIllustration: "/assets/makhraj-between-teeth.jpg",
    characteristics: ["Jahr (Voiced)", "Rikhawah (Flowing)"],
    position: {
      isolated: "ذ",
      initial: "ذ",
      medial: "ـذ",
      final: "ـذ"
    },
    examples: [
      { word: "ذهب", meaning: "Gold", transliteration: "dhahab" },
      { word: "لذيذ", meaning: "Delicious", transliteration: "ladhīdh" }
    ],
    pronunciation: {
      description: "Like English 'th' in 'the' or 'this'",
      tips: ["Tongue between teeth", "Air flows through", "Voice vibrates"]
    }
  },
  {
    id: "ra",
    arabic: "ر",
    name: "Ra",
    transliteration: "r",
    makhraj: "Tooth Ridge (طرف اللسان)",
    makhrajDescription: "Tip of tongue curls up, touching the palate near the tooth ridge",
    makhrajIllustration: "/assets/makhraj-tooth-ridge.jpg",
    characteristics: ["Jahr (Voiced)", "Tawasuth (Intermediate)"],
    position: {
      isolated: "ر",
      initial: "ر",
      medial: "ـر",
      final: "ـر"
    },
    examples: [
      { word: "رجل", meaning: "Man", transliteration: "rajul" },
      { word: "قمر", meaning: "Moon", transliteration: "qamar" }
    ],
    pronunciation: {
      description: "A single flap or light trill, similar to a Spanish 'r'",
      tips: ["Tongue tip curls up", "Light vibration of tongue", "Voice vibrates"]
    }
  },
  {
    id: "zay",
    arabic: "ز",
    name: "Zay",
    transliteration: "z",
    makhraj: "Between teeth and tongue (بين الأسنان)",
    makhrajDescription: "Tongue tip between upper and lower teeth",
    makhrajIllustration: "/assets/makhraj-between-teeth.jpg",
    characteristics: ["Jahr (Voiced)", "Rikhawah (Flowing)", "Shofir (Whistling)"],
    position: {
      isolated: "ز",
      initial: "ز",
      medial: "ـز",
      final: "ـز"
    },
    examples: [
      { word: "زيتون", meaning: "Olives", transliteration: "zaytūn" },
      { word: "ميزان", meaning: "Scale", transliteration: "mīzān" }
    ],
    pronunciation: {
      description: "Like English 'z' in 'zoo'",
      tips: ["Tongue tip near teeth", "Hissing sound", "Voice vibrates"]
    }
  },
  {
    id: "sin",
    arabic: "س",
    name: "Sin",
    transliteration: "s",
    makhraj: "Between teeth and tongue (بين الأسنان)",
    makhrajDescription: "Tongue tip between upper and lower teeth",
    makhrajIllustration: "/assets/makhraj-between-teeth.jpg",
    characteristics: ["Hams (Voiceless)", "Rikhawah (Flowing)", "Shofir (Whistling)"],
    position: {
      isolated: "س",
      initial: "سـ",
      medial: "ـسـ",
      final: "ـس"
    },
    examples: [
      { word: "سلام", meaning: "Peace", transliteration: "salām" },
      { word: "شمس", meaning: "Sun", transliteration: "shams" }
    ],
    pronunciation: {
      description: "Like English 's' in 'sun'",
      tips: ["Tongue tip near teeth", "Hissing sound", "No voice vibration"]
    }
  },
  {
    id: "shin",
    arabic: "ش",
    name: "Shin",
    transliteration: "sh",
    makhraj: "Middle of tongue (وسط اللسان)",
    makhrajDescription: "Middle of tongue rises to the palate",
    makhrajIllustration: "/assets/makhraj-middle-tongue.jpg",
    characteristics: ["Hams (Voiceless)", "Rikhawah (Flowing)"],
    position: {
      isolated: "ش",
      initial: "شـ",
      medial: "ـشـ",
      final: "ـش"
    },
    examples: [
      { word: "شمس", meaning: "Sun", transliteration: "shams" },
      { word: "عشاء", meaning: "Dinner", transliteration: "ʿishā'" }
    ],
    pronunciation: {
      description: "Like English 'sh' in 'sheep'",
      tips: ["Middle tongue rises", "Air flows out", "No voice vibration"]
    }
  },
  {
    id: "sad",
    arabic: "ص",
    name: "Sad",
    transliteration: "ṣ",
    makhraj: "Between teeth and tongue (طرف اللسان)",
    makhrajDescription: "Tip of tongue between lower and upper teeth",
    makhrajIllustration: "/assets/makhraj-between-teeth.jpg",
    characteristics: ["Hams (Voiceless)", "Rikhawah (Flowing)", "Shofir (Whistling)", "Iṭbāq (Covered)", "Istiʿlāʾ (Elevated)"],
    position: {
      isolated: "ص",
      initial: "صـ",
      medial: "ـصـ",
      final: "ـص"
    },
    examples: [
      { word: "صلاة", meaning: "Prayer", transliteration: "ṣalāt" },
      { word: "قصر", meaning: "Palace", transliteration: "qaṣr" }
    ],
    pronunciation: {
      description: "A heavy, emphasized 's' sound, with lips slightly forward",
      tips: ["Tongue tip near teeth", "Back of tongue elevated", "Thick hissing sound"]
    }
  },
  {
    id: "dad",
    arabic: "ض",
    name: "Dad",
    transliteration: "ḍ",
    makhraj: "Side of tongue (حافة اللسان)",
    makhrajDescription: "One or both sides of the tongue touch the upper molars",
    makhrajIllustration: "/assets/makhraj-side-tongue.jpg",
    characteristics: ["Jahr (Voiced)", "Shiddah (Stopped)", "Iṭbāq (Covered)", "Istiʿlāʾ (Elevated)"],
    position: {
      isolated: "ض",
      initial: "ضـ",
      medial: "ـضـ",
      final: "ـض"
    },
    examples: [
      { word: "ضابط", meaning: "Officer", transliteration: "ḍābiṭ" },
      { word: "أرض", meaning: "Earth", transliteration: "arḍ" }
    ],
    pronunciation: {
      description: "A very heavy 'd' sound, with sides of tongue pressing against molars",
      tips: ["Sides of tongue press molars", "Back of tongue elevated", "Thick and voiced"]
    }
  },
  {
    id: "tha",
    arabic: "ط",
    name: "Tha",
    transliteration: "ṭ",
    makhraj: "Tooth Ridge (طرف اللسان)",
    makhrajDescription: "Tip of tongue against upper tooth ridge",
    makhrajIllustration: "/assets/makhraj-tooth-ridge.jpg",
    characteristics: ["Jahr (Voiced)", "Shiddah (Stopped)", "Qalqalah", "Iṭbāq (Covered)", "Istiʿlāʾ (Elevated)"],
    position: {
      isolated: "ط",
      initial: "طـ",
      medial: "ـطـ",
      final: "ـط"
    },
    examples: [
      { word: "طبيب", meaning: "Doctor", transliteration: "ṭabīb" },
      { word: "مطر", meaning: "Rain", transliteration: "maṭar" }
    ],
    pronunciation: {
      description: "A heavy, emphasized 't' sound, with the back of the tongue raised",
      tips: ["Tongue tip on tooth ridge", "Back of tongue elevated", "Sharp and thick release"]
    }
  },
  {
    id: "zah",
    arabic: "ظ",
    name: "Zah",
    transliteration: "ẓ",
    makhraj: "Between teeth and tongue (بين الأسنان)",
    makhrajDescription: "Tongue tip between or against upper teeth",
    makhrajIllustration: "/assets/makhraj-between-teeth.jpg",
    characteristics: ["Jahr (Voiced)", "Rikhawah (Flowing)", "Iṭbāq (Covered)", "Istiʿlāʾ (Elevated)"],
    position: {
      isolated: "ظ",
      initial: "ظـ",
      medial: "ـظـ",
      final: "ـظ"
    },
    examples: [
      { word: "ظرف", meaning: "Envelope", transliteration: "ẓarf" },
      { word: "عظيم", meaning: "Great", transliteration: "ʿaẓīm" }
    ],
    pronunciation: {
      description: "A heavy, emphasized 'th' sound from 'the', with the back of the tongue raised",
      tips: ["Tongue between teeth", "Back of tongue elevated", "Thick and voiced"]
    }
  },
  {
    id: "ayn",
    arabic: "ع",
    name: "Ayn",
    transliteration: "ʿ",
    makhraj: "Middle of throat (وسط الحلق)",
    makhrajDescription: "Middle part of the throat",
    makhrajIllustration: "/assets/makhraj-middle-throat.jpg",
    characteristics: ["Jahr (Voiced)", "Tawasuth (Intermediate)"],
    position: {
      isolated: "ع",
      initial: "عـ",
      medial: "ـعـ",
      final: "ـع"
    },
    examples: [
      { word: "عين", meaning: "Eye", transliteration: "ʿayn" },
      { word: "شعر", meaning: "Hair", transliteration: "shaʿr" }
    ],
    pronunciation: {
      description: "A deep, voiced guttural sound from the middle of the throat",
      tips: ["Constrict throat muscles", "Voice vibrates deeply in the throat"]
    }
  },
  {
    id: "ghayn",
    arabic: "غ",
    name: "Ghayn",
    transliteration: "gh",
    makhraj: "Top of throat (أقصى الحلق)",
    makhrajDescription: "Back of tongue against soft palate",
    makhrajIllustration: "/assets/makhraj-top-throat.jpg",
    characteristics: ["Jahr (Voiced)", "Rikhawah (Flowing)"],
    position: {
      isolated: "غ",
      initial: "غـ",
      medial: "ـغـ",
      final: "ـغ"
    },
    examples: [
      { word: "غرفة", meaning: "Room", transliteration: "ghurfah" },
      { word: "صغير", meaning: "Small", transliteration: "ṣaghīr" }
    ],
    pronunciation: {
      description: "Similar to the Parisian French 'r' or the gargling sound made in the back of the throat",
      tips: ["Back of tongue rises to palate", "Air flows out", "Raspy and voiced"]
    }
  },
  {
    id: "fa",
    arabic: "ف",
    name: "Fa",
    transliteration: "f",
    makhraj: "The two lips (الشفتان)",
    makhrajDescription: "The top incisors touch the inner part of the lower lip",
    makhrajIllustration: "/assets/makhraj-lips-teeth.jpg",
    characteristics: ["Hams (Voiceless)", "Rikhawah (Flowing)"],
    position: {
      isolated: "ف",
      initial: "فـ",
      medial: "ـفـ",
      final: "ـف"
    },
    examples: [
      { word: "فيل", meaning: "Elephant", transliteration: "fīl" },
      { word: "سفر", meaning: "Travel", transliteration: "safar" }
    ],
    pronunciation: {
      description: "Like English 'f' in 'fish'",
      tips: ["Top teeth on lower lip", "Air flows out", "No voice vibration"]
    }
  },
  {
    id: "qaf",
    arabic: "ق",
    name: "Qaf",
    transliteration: "q",
    makhraj: "Back of tongue (أقصى اللسان)",
    makhrajDescription: "Back of tongue against the soft palate",
    makhrajIllustration: "/assets/makhraj-back-tongue.jpg",
    characteristics: ["Jahr (Voiced)", "Shiddah (Stopped)", "Qalqalah", "Istiʿlāʾ (Elevated)"],
    position: {
      isolated: "ق",
      initial: "قـ",
      medial: "ـقـ",
      final: "ـق"
    },
    examples: [
      { word: "قلم", meaning: "Pen", transliteration: "qalam" },
      { word: "قمر", meaning: "Moon", transliteration: "qamar" }
    ],
    pronunciation: {
      description: "A deep, guttural 'k' sound from the very back of the throat",
      tips: ["Back of tongue rises to palate", "Explosive release", "Voice vibrates"]
    }
  },
  {
    id: "kaf",
    arabic: "ك",
    name: "Kaf",
    transliteration: "k",
    makhraj: "Back of tongue (أقصى اللسان)",
    makhrajDescription: "Back of tongue against the soft palate, slightly forward of Qaf",
    makhrajIllustration: "/assets/makhraj-back-tongue.jpg",
    characteristics: ["Hams (Voiceless)", "Shiddah (Stopped)"],
    position: {
      isolated: "ك",
      initial: "كـ",
      medial: "ـكـ",
      final: "ـك"
    },
    examples: [
      { word: "كتاب", meaning: "Book", transliteration: "kitāb" },
      { word: "ملك", meaning: "King", transliteration: "malik" }
    ],
    pronunciation: {
      description: "Like English 'k' in 'cat'",
      tips: ["Back of tongue rises to palate", "Explosive release", "No voice vibration"]
    }
  },
  {
    id: "lam",
    arabic: "ل",
    name: "Lam",
    transliteration: "l",
    makhraj: "Tooth Ridge (طرف اللسان)",
    makhrajDescription: "Tip of tongue against the hard palate",
    makhrajIllustration: "/assets/makhraj-tooth-ridge.jpg",
    characteristics: ["Jahr (Voiced)", "Tawasuth (Intermediate)"],
    position: {
      isolated: "ل",
      initial: "لـ",
      medial: "ـلـ",
      final: "ـل"
    },
    examples: [
      { word: "لبن", meaning: "Milk", transliteration: "laban" },
      { word: "قلم", meaning: "Pen", transliteration: "qalam" }
    ],
    pronunciation: {
      description: "Like English 'l' in 'light'",
      tips: ["Tongue tip on hard palate", "Air flows around sides of tongue", "Voice vibrates"]
    }
  },
  {
    id: "mim",
    arabic: "م",
    name: "Mim",
    transliteration: "m",
    makhraj: "The two lips (الشفتان)",
    makhrajDescription: "Lips are closed",
    makhrajIllustration: "/assets/Mim.jpg",
    characteristics: ["Jahr (Voiced)", "Tawasuth (Intermediate)", "Ghunnah (Nasal sound)"],
    position: {
      isolated: "م",
      initial: "مـ",
      medial: "ـمـ",
      final: "ـم"
    },
    examples: [
      { word: "مسجد", meaning: "Mosque", transliteration: "masjid" },
      { word: "اسم", meaning: "Name", transliteration: "ism" }
    ],
    pronunciation: {
      description: "Like English 'm' in 'mother'",
      tips: ["Lips are closed", "Humming sound from the nose", "Voice vibrates"]
    }
  },
  {
    id: "nun",
    arabic: "ن",
    name: "Nun",
    transliteration: "n",
    makhraj: "Tooth Ridge (طرف اللسان)",
    makhrajDescription: "Tip of tongue against the upper tooth ridge",
    makhrajIllustration: "/assets/makhraj-tooth-ridge.jpg",
    characteristics: ["Jahr (Voiced)", "Tawasuth (Intermediate)", "Ghunnah (Nasal sound)"],
    position: {
      isolated: "ن",
      initial: "نـ",
      medial: "ـنـ",
      final: "ـن"
    },
    examples: [
      { word: "نور", meaning: "Light", transliteration: "nūr" },
      { word: "عين", meaning: "Eye", transliteration: "ʿayn" }
    ],
    pronunciation: {
      description: "Like English 'n' in 'nose'",
      tips: ["Tongue tip on tooth ridge", "Humming sound from the nose", "Voice vibrates"]
    }
  },
  {
    id: "ha",
    arabic: "ه",
    name: "Ha",
    transliteration: "h",
    makhraj: "Bottom of throat (أقصى الحلق)",
    makhrajDescription: "Bottom part of the throat, near the chest",
    makhrajIllustration: "/assets/makhraj-bottom-throat.jpg",
    characteristics: ["Hams (Voiceless)", "Rikhawah (Flowing)"],
    position: {
      isolated: "ه",
      initial: "هـ",
      medial: "ـهـ",
      final: "ـه"
    },
    examples: [
      { word: "هلال", meaning: "Crescent", transliteration: "hilāl" },
      { word: "وجه", meaning: "Face", transliteration: "wajh" }
    ],
    pronunciation: {
      description: "Like English 'h' in 'hello'",
      tips: ["Air flows from the throat", "No strong friction", "No voice vibration"]
    }
  },
  {
    id: "waw",
    arabic: "و",
    name: "Waw",
    transliteration: "w",
    makhraj: "The two lips (الشفتان)",
    makhrajDescription: "Lips are rounded and protruded",
    makhrajIllustration: "/assets/makhraj-lips.jpg",
    characteristics: ["Jahr (Voiced)", "Rikhawah (Flowing)"],
    position: {
      isolated: "و",
      initial: "و",
      medial: "ـو",
      final: "ـو"
    },
    examples: [
      { word: "وردة", meaning: "Rose", transliteration: "wardah" },
      { word: "أبو", meaning: "Father", transliteration: "abū" }
    ],
    pronunciation: {
      description: "Like English 'w' in 'water'",
      tips: ["Lips are rounded", "Voice vibrates"]
    }
  },
  {
    id: "waw-mad",
    arabic: "و",
    name: "Waw Mad",
    transliteration: "ū",
    makhraj: "Ash-Shafatayn (الشفتان)",
    makhrajDescription: "From the lips - prolonged 'oo' sound with rounded lips",
    makhrajIllustration: "/assets/makhraj-lips.jpg",
    characteristics: ["Mad letter (prolongation)", "Natural mad", "Long 'oo' vowel"],
    position: {
      isolated: "و",
      initial: "و",
      medial: "و",
      final: "و"
    },
    examples: [
      { word: "كلوا", meaning: "Eat (plural)", transliteration: "kulū" },
      { word: "واشربوا", meaning: "And drink (plural)", transliteration: "washrabū" },
      { word: "صبروا", meaning: "They were patient", transliteration: "ṣabarū" }
    ],
    pronunciation: {
      description: "Long 'oo' sound - extended vowel with rounded lips",
      tips: ["Round your lips", "Extend the 'oo' sound", "Natural prolongation"]
    }
  },
  {
    id: "ya",
    arabic: "ي",
    name: "Ya",
    transliteration: "y",
    makhraj: "Middle of tongue (وسط اللسان)",
    makhrajDescription: "Middle of tongue rises to the palate",
    makhrajIllustration: "/assets/makhraj-middle-tongue.jpg",
    characteristics: ["Jahr (Voiced)", "Rikhawah (Flowing)"],
    position: {
      isolated: "ي",
      initial: "يـ",
      medial: "ـيـ",
      final: "ـي"
    },
    examples: [
      { word: "يد", meaning: "Hand", transliteration: "yad" },
      { word: "بيت", meaning: "House", transliteration: "bayt" }
    ],
    pronunciation: {
      description: "Like English 'y' in 'yes'",
      tips: ["Middle of tongue rises", "Voice vibrates"]
    }
  },
  {
    id: "ya-mad",
    arabic: "ي",
    name: "Ya Mad",
    transliteration: "ī",
    makhraj: "Al-Jawf (الجوف)",
    makhrajDescription: "From the hollow cavity of the mouth and throat - prolonged 'ee' sound",
    makhrajIllustration: "/assets/makhraj-hollow.jpg",
    characteristics: ["Mad letter (prolongation)", "Natural mad", "Long 'ee' vowel"],
    position: {
      isolated: "ي",
      initial: "ي",
      medial: "ي",
      final: "ي"
    },
    examples: [
      { word: "فيها", meaning: "In it", transliteration: "fīhā" },
      { word: "قيل", meaning: "It was said", transliteration: "qīla" },
      { word: "نفسي", meaning: "My soul", transliteration: "nafsī" }
    ],
    pronunciation: {
      description: "Long 'ee' sound - extended vowel pronunciation",
      tips: ["Extend the 'ee' sound", "Natural lengthening", "High tongue position"]
    }
  }
];