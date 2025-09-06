import { ArabicLetter } from '../arabicAlphabet';

export const arabicAlphabetId: ArabicLetter[] = [
  {
    id: "alif",
    arabic: "ا",
    name: "Alif",
    transliteration: "ā",
    makhraj: "Al-Jawf (الجوف)",
    makhrajDescription: "Dari Rongga/ruang kosong mulut dan tenggorokan - udara mengalir bebas tanpa halangan - suara vokal yang dipanjangkan",
    makhrajIllustration: "/assets/Alif.png",
    characteristics: ["Huruf Mad (pemanjangan)", "Tidak memiliki bunyi sendiri", ],
    position: {
      isolated: "ا",
      initial: "ا",
      medial: "ـا",
      final: "ـا"
    },
    examples: [
      { word: "صابر", meaning: "Sabar", transliteration: "ṣābir" },
      { word: "ذاكر", meaning: "Mengingat", transliteration: "dhākir" }
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
    makhrajIllustration: "/assets/Ba.png",
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
    makhraj: "Ujung lidah (طرف اللسان)",
    makhrajDescription: "Ujung lidah menyentuh gusi gigi atas",
    makhrajIllustration: "/assets/Ta.png",
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
    name: "Tsa",
    transliteration: "ts",
    makhraj: "Ujung lidah (بين الأسنان)",
    makhrajDescription: "Ujung lidah di antara atau menyentuh gigi seri atas",
    makhrajIllustration: "/assets/Dzal-Tsa.png",
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
    makhraj: "Lidah bagian tengah (وسط اللسان)",
    makhrajDescription: "Tengah lidah menyentuh langit-langit lunak",
    makhrajIllustration: "/assets/Jim.png",
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
    name: "ḥa",
    transliteration: "ḥ",
    makhraj: "Tenggorokan bagian tengah (وسط الحلق)",
    makhrajDescription: "Bagian tengah tenggorokan",
    makhrajIllustration: "/assets/Hah.png",
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
  },
  {
    id: "kho",
    arabic: "خ",
    name: "Kha",
    transliteration: "kh",
    makhraj: "Tenggorokan bagian atas (أقصى الحلق)",
    makhrajDescription: "Pangkal lidah menyentuh langit-langit lunak",
    makhrajIllustration: "/assets/Kha.png",
    characteristics: ["Hams (Tidak bersuara)", "Rikhawah (Mengalir)"],
    position: {
    isolated: "خ",
    initial: "خـ",
    medial: "ـخـ",
    final: "ـخ"
    },
    examples: [
      { word: "خبز", meaning: "Roti", transliteration: "khubz" },
      { word: "طبخ", meaning: "Memasak", transliteration: "tabakh" }
    ],
    pronunciation: {
    description: "Seperti bunyi 'kh' dalam bahasa Jerman 'Bach' atau Skotlandia 'loch'",
    tips: ["Pangkal lidah naik ke langit-langit", "Udara mengalir keluar", "Suara serak"]
    }
  },
  {
    id: "dal",
    arabic: "د",
    name: "Dal",
    transliteration: "d",
    makhraj: "Ujung lidah (طرف اللسان)",
    makhrajDescription: "Ujung lidah menyentuh gusi gigi atas",
    makhrajIllustration: "/assets/Dal-Ta.png",
    characteristics: ["Jahr (Bersuara)", "Shiddah (Tertahan)", "Qalqalah"],
    position: {
    isolated: "د",
    initial: "د",
    medial: "ـد",
    final: "ـد"
    },
    examples: [
      { word: "دب", meaning: "Beruang", transliteration: "dubb" },
      { word: "جديد", meaning: "Baru", transliteration: "jadīd" }
    ],
    pronunciation: {
    description: "Seperti 'd' Bahasa Indonesia, tetapi ujung lidah lebih ke gusi gigi atas",
    tips: ["Ujung lidah di gusi", "Pelepasan tajam", "Suara bergetar"]
    }
  },
  {
    id: "dhal",
    arabic: "ذ",
    name: "Dzal",
    transliteration: "dh",
    makhraj: "Ujung lidah (بين الأسنان)",
    makhrajDescription: "Ujung lidah di antara gigi seri atas dan bawah",
    makhrajIllustration: "/assets/Dzal-Tsa.png",
    characteristics: ["Jahr (Bersuara)", "Rikhawah (Mengalir)"],
    position: {
    isolated: "ذ",
    initial: "ذ",
    medial: "ـذ",
    final: "ـذ"
    },
    examples: [
      { word: "ذهب", meaning: "Emas", transliteration: "dhahab" },
      { word: "لذيذ", meaning: "Lezat", transliteration: "ladhīdh" }
    ],
    pronunciation: {
    description: "Seperti 'th' dalam bahasa Inggris 'the' atau 'this'",
    tips: ["Lidah di antara gigi", "Suara mengalir melalui", "Suara bergetar"]
    }
  },
  {
    id: "ra",
    arabic: "ر",
    name: "Ra",
    transliteration: "r",
    makhraj: "Ujung lidah (طرف اللسان)",
    makhrajDescription: "Ujung lidah melengkung ke atas, menyentuh langit-langit dekat gusi",
    makhrajIllustration: "/assets/Ra.png",
    characteristics: ["Jahr (Bersuara)", "Tawasuth (Pertengahan)"],
    position: {
    isolated: "ر",
    initial: "ر",
    medial: "ـر",
    final: "ـر"
    },
    examples: [
      { word: "رجل", meaning: "Pria", transliteration: "rajul" },
      { word: "قمر", meaning: "Bulan", transliteration: "qamar" }
    ],
    pronunciation: {
    description: "Mirip 'r' yang digulirkan (rolling 'r') dalam bahasa Spanyol, tetapi lebih ringan",
    tips: ["Ujung lidah melengkung ke atas", "Getaran ringan pada lidah", "Suara bergetar"]
    }
  },
  {
    id: "zay",
    arabic: "ز",
    name: "Zay",
    transliteration: "z",
    makhraj: "Ujung lidah (طرف اللسان)",
    makhrajDescription: "Ujung lidah di antara gigi atas dan bawah",
    makhrajIllustration: "/assets/Sin-Zay.png",
    characteristics: ["Jahr (Bersuara)", "Rikhawah (Mengalir)", "Shofir (Siulan)"],
    position: {
    isolated: "ز",
    initial: "ز",
    medial: "ـز",
    final: "ـز"
    },
    examples: [
      { word: "زيتون", meaning: "Zaitun", transliteration: "zaytūn" },
      { word: "ميزان", meaning: "Timbangan", transliteration: "mīzān" }
    ],
    pronunciation: {
    description: "Seperti 'z' dalam bahasa Inggris 'zoo' atau 'zebra'",
    tips: ["Ujung lidah dekat gigi", "Suara mendesis", "Suara bergetar"]
    }
  },
  {
    id: "sin",
    arabic: "س",
    name: "Sin",
    transliteration: "s",
    makhraj: "Ujung lidah (طرف اللسان)",
    makhrajDescription: "Ujung lidah di antara gigi atas dan bawah",
    makhrajIllustration: "/assets/Sin-Zay.png",
    characteristics: ["Hams (Tidak bersuara)", "Rikhawah (Mengalir)", "Shofir (Siulan)"],
    position: {
    isolated: "س",
    initial: "سـ",
    medial: "ـسـ",
    final: "ـس"
    },
    examples: [
      { word: "سلام", meaning: "Damai", transliteration: "salām" },
      { word: "شمس", meaning: "Matahari", transliteration: "shams" }
    ],
    pronunciation: {
    description: "Seperti 's' dalam bahasa Indonesia 'susu'",
    tips: ["Ujung lidah dekat gigi", "Suara mendesis", "Tidak ada getaran suara"]
    }
  },
  {
    id: "shin",
    arabic: "ش",
    name: "Shin",
    transliteration: "sh",
    makhraj: "Lidah bagian tengah (وسط اللسان)",
    makhrajDescription: "Tengah lidah naik ke langit-langit",
    makhrajIllustration: "/assets/Syin.png",
    characteristics: ["Hams (Tidak bersuara)", "Rikhawah (Mengalir)"],
    position: {
    isolated: "ش",
    initial: "شـ",
    medial: "ـشـ",
    final: "ـش"
    },
    examples: [
      { word: "شمس", meaning: "Matahari", transliteration: "shams" },
      { word: "عشاء", meaning: "Makan malam", transliteration: "ʿishā'" }
    ],
    pronunciation: {
    description: "Seperti 'sy' dalam bahasa Indonesia 'syukur' atau 'sh' dalam bahasa Inggris 'she'",
    tips: ["Tengah lidah naik", "Udara mengalir keluar", "Tidak ada getaran suara"]
    }
  },
  {
    id: "shad",
    arabic: "ص",
    name: "Shad",
    transliteration: "ṣ",
    makhraj: "Ujung lidah (طرف اللسان)",
    makhrajDescription: "Ujung lidah di antara gigi bawah dan gigi atas",
    makhrajIllustration: "/assets/Shad.png",
    characteristics: ["Hams (Tidak bersuara)", "Rikhawah (Mengalir)", "Shofir (Siulan)", "Iṭbāq (Tertutup)", "Istiʿlāʾ (Terangkat)"],
    position: {
    isolated: "ص",
    initial: "صـ",
    medial: "ـصـ",
    final: "ـص"
    },
    examples: [
      { word: "صلاة", meaning: "Shalat", transliteration: "ṣalāt" },
      { word: "قصر", meaning: "Istana", transliteration: "qaṣr" }
    ],
    pronunciation: {
    description: "Seperti 's' yang ditebalkan, bibir sedikit maju",
    tips: ["Ujung lidah dekat gigi", "Pangkal lidah terangkat", "Suara mendesis tebal"]
    }
  },
  {
    id: "dad",
    arabic: "ض",
    name: "Dad",
    transliteration: "ḍ",
    makhraj: "Sisi lidah (حافة اللسان)",
    makhrajDescription: "Salah satu atau kedua sisi lidah menyentuh gigi geraham atas",
    makhrajIllustration: "/assets/Dhad.png",
    characteristics: ["Jahr (Bersuara)", "Shiddah (Tertahan)", "Iṭbāq (Tertutup)", "Istiʿlāʾ (Terangkat)"],
    position: {
    isolated: "ض",
    initial: "ضـ",
    medial: "ـضـ",
    final: "ـض"
    },
    examples: [
      { word: "ضابط", meaning: "Petugas", transliteration: "ḍābiṭ" },
      { word: "أرض", meaning: "Bumi", transliteration: "arḍ" }
    ],
    pronunciation: {
    description: "Bunyi 'd' yang sangat ditebalkan, dengan sisi lidah menekan gigi geraham",
    tips: ["Sisi lidah menekan gigi geraham", "Pangkal lidah terangkat", "Suara bergetar dan tebal"]
    }
  },
  {
    id: "tha",
    arabic: "ط",
    name: "Tha",
    transliteration: "ṭ",
    makhraj: "Ujung lidah (طرف اللسان)",
    makhrajDescription: "Ujung lidah menyentuh gusi gigi atas",
    makhrajIllustration: "/assets/Tha.png",
    characteristics: ["Jahr (Bersuara)", "Shiddah (Tertahan)", "Qalqalah", "Iṭbāq (Tertutup)", "Istiʿlāʾ (Terangkat)"],
    position: {
    isolated: "ط",
    initial: "طـ",
    medial: "ـطـ",
    final: "ـط"
    },
    examples: [
      { word: "طبيب", meaning: "Dokter", transliteration: "ṭabīb" },
      { word: "مطر", meaning: "Hujan", transliteration: "maṭar" }
    ],
    pronunciation: {
    description: "Seperti 't' yang ditebalkan, dengan pangkal lidah terangkat ke atas",
    tips: ["Ujung lidah di gusi", "Pangkal lidah terangkat", "Pelepasan tajam dan tebal"]
    }
  },
  {
    id: "zah",
    arabic: "ظ",
    name: "Zha",
    transliteration: "ẓ",
    makhraj: "Ujung lidah (بين الأسنان)",
    makhrajDescription: "Ujung lidah di antara atau menyentuh gigi seri atas",
    makhrajIllustration: "/assets/Zha.png",
    characteristics: ["Jahr (Bersuara)", "Rikhawah (Mengalir)", "Iṭbāq (Tertutup)", "Istiʿlāʾ (Terangkat)"],
    position: {
    isolated: "ظ",
    initial: "ظـ",
    medial: "ـظـ",
    final: "ـظ"
    },
    examples: [
      { word: "ظرف", meaning: "Amplop", transliteration: "ẓarf" },
      { word: "عظيم", meaning: "Agung", transliteration: "ʿaẓīm" }
    ],
    pronunciation: {
    description: "Seperti 'th' dalam 'the' yang ditebalkan, dengan pangkal lidah terangkat",
    tips: ["Lidah di antara gigi", "Pangkal lidah terangkat", "Suara mengalir dan tebal"]
    }
  },
  {
    id: "ayn",
    arabic: "ع",
    name: "ʿAin",
    transliteration: "ʿ",
    makhraj: "Tenggorokan bagian tengah (وسط الحلق)",
    makhrajDescription: "Bagian tengah tenggorokan",
    makhrajIllustration: "/assets/makhraj-middle-throat.jpg",
    characteristics: ["Jahr (Bersuara)", "Tawasuth (Pertengahan)"],
    position: {
    isolated: "ع",
    initial: "عـ",
    medial: "ـعـ",
    final: "ـع"
    },
    examples: [
      { word: "عين", meaning: "Mata", transliteration: "ʿayn" },
      { word: "شعر", meaning: "Rambut", transliteration: "shaʿr" }
    ],
    pronunciation: {
    description: "Bunyi yang dalam dari tenggorokan, seperti 'a' yang tertekan",
    tips: ["Kontraksi otot tenggorokan", "Suara bergetar di tenggorokan"]
    }
  },
  {
    id: "ghayn",
    arabic: "غ",
    name: "Ghain",
    transliteration: "gh",
    makhraj: "Tenggorokan bagian atas (أقصى الحلق)",
    makhrajDescription: "Pangkal lidah menyentuh langit-langit lunak",
    makhrajIllustration: "/assets/Ghain.png",
    characteristics: ["Jahr (Bersuara)", "Rikhawah (Mengalir)"],
    position: {
    isolated: "غ",
    initial: "غـ",
    medial: "ـغـ",
    final: "ـغ"
    },
    examples: [
      { word: "غرفة", meaning: "Kamar", transliteration: "ghurfah" },
      { word: "صغير", meaning: "Kecil", transliteration: "ṣaghīr" }
    ],
    pronunciation: {
    description: "Mirip 'r' yang digulirkan (rolling 'r') dalam bahasa Perancis atau bunyi 'g' serak dalam bahasa Belanda",
    tips: ["Pangkal lidah naik", "Udara mengalir keluar", "Suara bergetar dan serak"]
    }
  },
  {
    id: "fa",
    arabic: "ف",
    name: "Fa",
    transliteration: "f",
    makhraj: "Ash-Shafatayn (الشفتان)",
    makhrajDescription: "Gigi seri atas menyentuh bibir bawah",
    makhrajIllustration: "/assets/makhraj-lips-teeth.jpg",
    characteristics: ["Hams (Tidak bersuara)", "Rikhawah (Mengalir)"],
    position: {
    isolated: "ف",
    initial: "فـ",
    medial: "ـفـ",
    final: "ـف"
    },
    examples: [
      { word: "فيل", meaning: "Gajah", transliteration: "fīl" },
      { word: "سفر", meaning: "Perjalanan", transliteration: "safar" }
    ],
    pronunciation: {
    description: "Seperti 'f' dalam Bahasa Indonesia",
    tips: ["Gigi atas di bibir bawah", "Udara mengalir keluar", "Tidak ada getaran suara"]
    }
  },
  {
    id: "qaf",
    arabic: "ق",
    name: "Qaf",
    transliteration: "q",
    makhraj: "Pangkal lidah (أقصى اللسان)",
    makhrajDescription: "Pangkal lidah terangkat ke langit-langit lunak",
    makhrajIllustration: "/assets/Qaf.png",
    characteristics: ["Jahr (Bersuara)", "Shiddah (Tertahan)", "Qalqalah", "Istiʿlāʾ (Terangkat)"],
    position: {
    isolated: "ق",
    initial: "قـ",
    medial: "ـقـ",
    final: "ـق"
    },
    examples: [
      { word: "قلم", meaning: "Pena", transliteration: "qalam" },
      { word: "قمر", meaning: "Bulan", transliteration: "qamar" }
    ],
    pronunciation: {
    description: "Mirip 'k' dalam Bahasa Indonesia tetapi lebih dalam dan tebal, dari belakang tenggorokan",
    tips: ["Pangkal lidah naik ke langit-langit", "Pelepasan eksplosif", "Suara bergetar dan tebal"]
    }
  },
  {
    id: "kaf",
    arabic: "ك",
    name: "Kaf",
    transliteration: "k",
    makhraj: "Pangkal lidah (أقصى اللسان)",
    makhrajDescription: "Pangkal lidah terangkat ke langit-langit lunak",
    makhrajIllustration: "/assets/Kaf.png",
    characteristics: ["Hams (Tidak bersuara)", "Shiddah (Tertahan)"],
    position: {
    isolated: "ك",
    initial: "كـ",
    medial: "ـكـ",
    final: "ـك"
    },
    examples: [
      { word: "كتاب", meaning: "Buku", transliteration: "kitāb" },
      { word: "ملك", meaning: "Raja", transliteration: "malik" }
    ],
    pronunciation: {
    description: "Seperti 'k' dalam Bahasa Indonesia 'kucing'",
    tips: ["Pangkal lidah naik ke langit-langit", "Pelepasan eksplosif", "Tidak ada getaran suara"]
    }
  },
  {
    id: "lam",
    arabic: "ل",
    name: "Lam",
    transliteration: "l",
    makhraj: "Ujung lidah (طرف اللسان)",
    makhrajDescription: "Ujung lidah menyentuh langit-langit keras",
    makhrajIllustration: "/assets/Lam-Tarqiq.png",
    characteristics: ["Jahr (Bersuara)", "Tawasuth (Pertengahan)"],
    position: {
    isolated: "ل",
    initial: "لـ",
    medial: "ـلـ",
    final: "ـل"
    },
    examples: [
      { word: "لبن", meaning: "Susu", transliteration: "laban" },
      { word: "قلم", meaning: "Pena", transliteration: "qalam" }
    ],
    pronunciation: {
    description: "Seperti 'l' dalam Bahasa Indonesia, tetapi ujung lidah lebih presisi di langit-langit",
    tips: ["Ujung lidah di langit-langit", "Suara mengalir di sisi lidah", "Suara bergetar"]
    }
  },
  {
    id: "mim",
    arabic: "م",
    name: "Mim",
    transliteration: "m",
    makhraj: "Ash-Shafatayn (الشفتان)",
    makhrajDescription: "Kedua bibir ditutup",
    makhrajIllustration: "/assets/Mim.png",
    characteristics: ["Jahr (Bersuara)", "Tawasuth (Pertengahan)", "Ghunnah (Dengung)"],
    position: {
    isolated: "م",
    initial: "مـ",
    medial: "ـمـ",
    final: "ـم"
    },
    examples: [
      { word: "مسجد", meaning: "Masjid", transliteration: "masjid" },
      { word: "اسم", meaning: "Nama", transliteration: "ism" }
    ],
    pronunciation: {
    description: "Seperti 'm' dalam Bahasa Indonesia",
    tips: ["Tutup bibir", "Suara dengung dari hidung"]
    }
  },
  {
    id: "nun",
    arabic: "ن",
    name: "Nun",
    transliteration: "n",
    makhraj: "Ujung lidah (طرف اللسان)",
    makhrajDescription: "Ujung lidah menyentuh gusi gigi atas",
    makhrajIllustration: "/assets/Nun.png",
    characteristics: ["Jahr (Bersuara)", "Tawasuth (Pertengahan)", "Ghunnah (Dengung)"],
    position: {
    isolated: "ن",
    initial: "نـ",
    medial: "ـنـ",
    final: "ـن"
    },
    examples: [
      { word: "نور", meaning: "Cahaya", transliteration: "nūr" },
      { word: "عين", meaning: "Mata", transliteration: "ʿayn" }
    ],
    pronunciation: {
    description: "Seperti 'n' dalam Bahasa Indonesia",
    tips: ["Ujung lidah di gusi", "Suara dengung dari hidung"]
    }
  },
  {
    id: "ha",
    arabic: "ه",
    name: "Ha",
    transliteration: "h",
    makhraj: "Tenggorokan bagian bawah (أقصى الحلق)",
    makhrajDescription: "Bagian bawah tenggorokan, dekat dada",
    makhrajIllustration: "/assets/Ha.png",
    characteristics: ["Hams (Tidak bersuara)", "Rikhawah (Mengalir)"],
    position: {
    isolated: "ه",
    initial: "هـ",
    medial: "ـهـ",
    final: "ـه"
    },
    examples: [
      { word: "هلال", meaning: "Bulan sabit", transliteration: "hilāl" },
      { word: "وجه", meaning: "Wajah", transliteration: "wajh" }
    ],
    pronunciation: {
    description: "Seperti 'h' dalam Bahasa Indonesia 'hujan'",
    tips: ["Udara mengalir dari tenggorokan", "Tidak ada gesekan yang kuat", "Tidak ada getaran suara"]
    }
  },
  {
    id: "waw",
    arabic: "و",
    name: "Wau",
    transliteration: "w",
    makhraj: "Ash-Shafatayn (الشفتان)",
    makhrajDescription: "Kedua bibir dimajukan dan dibulatkan",
    makhrajIllustration: "/assets/makhraj-lips.jpg",
    characteristics: ["Jahr (Bersuara)", "Rikhawah (Mengalir)"],
    position: {
    isolated: "و",
    initial: "و",
    medial: "ـو",
    final: "ـو"
    },
    examples: [
      { word: "وردة", meaning: "Mawar", transliteration: "wardah" },
      { word: "أبو", meaning: "Ayah", transliteration: "abū" }
    ],
    pronunciation: {
    description: "Seperti 'w' dalam Bahasa Indonesia atau 'w' dalam bahasa Inggris 'way'",
    tips: ["Bibir dibulatkan", "Bunyi bergetar"]
    }
  },
  {
    id: "waw-mad",
    arabic: "و",
    name: "Waw Mad",
    transliteration: "ū",
    makhraj: "Ash-Shafatayn (الشفتان)",
    makhrajDescription: "Dari bibir - bunyi 'uu' yang dipanjangkan dengan bibir bulat",
    makhrajIllustration: "/assets/makhraj-lips.jpg",
    characteristics: ["Huruf mad (pemanjangan)", "Mad thobi'i", "Vokal 'uu' panjang"],
    position: {
      isolated: "و",
      initial: "و",
      medial: "و",
      final: "و"
    },
    examples: [
      { word: "كلوا", meaning: "Makanlah (jamak)", transliteration: "kulū" },
      { word: "واشربوا", meaning: "Dan minumlah (jamak)", transliteration: "washrabū" },
      { word: "صبروا", meaning: "Mereka bersabar", transliteration: "ṣabarū" }
    ],
    pronunciation: {
      description: "Bunyi 'uu' panjang - vokal yang diperpanjang dengan bibir bulat",
      tips: ["Bulatkan bibir", "Perpanjang bunyi 'uu'", "Pemanjangan alami"]
    }
  },
  {
    id: "ya",
    arabic: "ي",
    name: "Ya",
    transliteration: "y",
    makhraj: "Lidah bagian tengah (وسط اللسان)",
    makhrajDescription: "Tengah lidah naik ke langit-langit",
    makhrajIllustration: "/assets/Ya.png",
    characteristics: ["Jahr (Bersuara)", "Rikhawah (Mengalir)"],
    position: {
    isolated: "ي",
    initial: "يـ",
    medial: "ـيـ",
    final: "ـي"
    },
    examples: [
      { word: "يد", meaning: "Tangan", transliteration: "yad" },
      { word: "بيت", meaning: "Rumah", transliteration: "bayt" }
    ],
    pronunciation: {
    description: "Seperti 'y' dalam Bahasa Indonesia 'yakin'",
    tips: ["Tengah lidah naik", "Suara bergetar"]
    }
  },
  {
    id: "ya-mad",
    arabic: "ي",
    name: "Ya Mad",
    transliteration: "ī",
    makhraj: "Al-Jawf (الجوف)",
    makhrajDescription: "Dari rongga mulut dan tenggorokan - bunyi 'ii' yang dipanjangkan",
    makhrajIllustration: "/assets/Ya-Mad.png",
    characteristics: ["Huruf mad (pemanjangan)", "Mad thobi'i", "Vokal 'ii' panjang"],
    position: {
      isolated: "ي",
      initial: "ي",
      medial: "ي",
      final: "ي"
    },
    examples: [
      { word: "فيها", meaning: "Di dalamnya", transliteration: "fīhā" },
      { word: "قيل", meaning: "Dikatakan", transliteration: "qīla" },
      { word: "نفسي", meaning: "Jiwaku", transliteration: "nafsī" }
    ],
    pronunciation: {
      description: "Bunyi 'ii' panjang - pengucapan vokal yang diperpanjang",
      tips: ["Perpanjang bunyi 'ii'", "Pemanjangan alami", "Posisi lidah tinggi"]
    }
  }
];
