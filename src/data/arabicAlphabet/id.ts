import { ArabicLetter } from '../arabicAlphabet';

export const arabicAlphabetId: ArabicLetter[] = [
  {
    id: "alif",
    arabic: "ا",
    name: "Alif",
    transliteration: "ā",
    makhraj: "Al-Jawf (الجوف)",
    makhrajDescription: "Rongga/ruang kosong - udara mengalir bebas tanpa halangan",
    makhrajIllustration: "/src/assets/makhraj-hollow.jpg",
    characteristics: ["Harf Madd (Huruf pemanjangan)", "Tidak memiliki bunyi sendiri"],
    position: {
      isolated: "ا",
      initial: "ا",
      medial: "ـا",
      final: "ـا"
    },
    examples: [
      { word: "أب", meaning: "Ayah", transliteration: "ab" },
      { word: "ماء", meaning: "Air", transliteration: "mā'" }
    ],
    pronunciation: {
      description: "Bunyi vokal murni, memanjangkan vokal sebelumnya",
      tips: ["Buka mulut", "Tidak ada penyempitan di tenggorokan", "Pemanjangan vokal murni"]
    }
  },
  {
    id: "ba",
    arabic: "ب",
    name: "Ba",
    transliteration: "b",
    makhraj: "Ash-Shafatayn (الشفتان)",
    makhrajDescription: "Kedua bibir - bunyi dihasilkan dengan menekan bibir bersama-sama",
    makhrajIllustration: "/src/assets/makhraj-lips.jpg",
    characteristics: ["Jahr (Bersuara)", "Shiddah (Tertahan)", "Qalqalah"],
    position: {
      isolated: "ب",
      initial: "بـ",
      medial: "ـبـ",
      final: "ـب"
    },
    examples: [
      { word: "بيت", meaning: "Rumah", transliteration: "bayt" },
      { word: "كتاب", meaning: "Buku", transliteration: "kitāb" }
    ],
    pronunciation: {
      description: "Seperti 'b' Bahasa Indonesia tetapi dengan penekanan lebih pada penutupan bibir",
      tips: ["Tekan bibir dengan kuat", "Lepaskan dengan ledakan kecil", "Suara bergetar"]
    }
  },
  {
    id: "ta",
    arabic: "ت",
    name: "Ta",
    transliteration: "t",
    makhraj: "Tooth Ridge (طرف اللسان)",
    makhrajDescription: "Ujung lidah menyentuh gusi gigi atas",
    makhrajIllustration: "/src/assets/makhraj-tooth-ridge.jpg",
    characteristics: ["Hams (Tidak bersuara)", "Shiddah (Tertahan)"],
    position: {
      isolated: "ت",
      initial: "تـ",
      medial: "ـتـ",
      final: "ـت"
    },
    examples: [
      { word: "تفاح", meaning: "Apel", transliteration: "tuffāh" },
      { word: "بنت", meaning: "Anak perempuan", transliteration: "bint" }
    ],
    pronunciation: {
      description: "Seperti 't' Bahasa Indonesia tetapi lidah menyentuh gusi dengan lebih tepat",
      tips: ["Ujung lidah di gusi", "Pelepasan tajam", "Tidak ada getaran suara"]
    }
  },
  {
    id: "tha",
    arabic: "ث",
    name: "Tha",
    transliteration: "th",
    makhraj: "Between teeth and tongue (بين الأسنان)",
    makhrajDescription: "Ujung lidah di antara atau menyentuh gigi atas",
    makhrajIllustration: "/src/assets/makhraj-between-teeth.jpg",
    characteristics: ["Hams (Tidak bersuara)", "Rikhawah (Mengalir)"],
    position: {
      isolated: "ث",
      initial: "ثـ",
      medial: "ـثـ",
      final: "ـث"
    },
    examples: [
      { word: "ثلاثة", meaning: "Tiga", transliteration: "thalātha" },
      { word: "بحث", meaning: "Penelitian", transliteration: "bahth" }
    ],
    pronunciation: {
      description: "Seperti 'th' dalam bahasa Inggris 'think'",
      tips: ["Lidah di antara gigi", "Udara mengalir melalui", "Tidak ada getaran suara"]
    }
  },
  {
    id: "jim",
    arabic: "ج",
    name: "Jim",
    transliteration: "j",
    makhraj: "Middle of tongue (وسط اللسان)",
    makhrajDescription: "Tengah lidah menyentuh langit-langit lunak",
    makhrajIllustration: "/src/assets/makhraj-middle-tongue.jpg",
    characteristics: ["Jahr (Bersuara)", "Shiddah (Tertahan)", "Qalqalah"],
    position: {
      isolated: "ج",
      initial: "جـ",
      medial: "ـجـ",
      final: "ـج"
    },
    examples: [
      { word: "جمل", meaning: "Unta", transliteration: "jamal" },
      { word: "مسجد", meaning: "Masjid", transliteration: "masjid" }
    ],
    pronunciation: {
      description: "Seperti 'j' dalam bahasa Indonesia 'jam'",
      tips: ["Tengah lidah naik", "Penutupan lembut", "Suara bergetar"]
    }
  },
  {
    id: "ha",
    arabic: "ح",
    name: "Ha",
    transliteration: "ḥ",
    makhraj: "Middle of throat (وسط الحلق)",
    makhrajDescription: "Bagian tengah tenggorokan",
    makhrajIllustration: "/src/assets/makhraj-middle-throat.jpg",
    characteristics: ["Hams (Tidak bersuara)", "Rikhawah (Mengalir)"],
    position: {
      isolated: "ح",
      initial: "حـ",
      medial: "ـحـ",
      final: "ـح"
    },
    examples: [
      { word: "حليب", meaning: "Susu", transliteration: "ḥalīb" },
      { word: "فرح", meaning: "Kegembiraan", transliteration: "faraḥ" }
    ],
    pronunciation: {
      description: "Bunyi 'h' dalam dari tengah tenggorokan, seperti menghembuskan nafas ke cermin",
      tips: ["Konstriksi tengah tenggorokan", "Hembuskan napas dengan lembut", "Tidak ada getaran suara"]
    }
  }
];