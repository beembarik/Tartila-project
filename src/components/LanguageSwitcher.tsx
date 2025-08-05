import { useLanguage } from "@/hooks/useLanguage";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  const langData = {
    id: { flag: "🇮🇩", label: "ID" },
    en: { flag: "🇬🇧", label: "EN" },
  };

  const { flag, label } = langData[language || "id"]; // default "id"

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-2 py-1 text-sm font-semibold rounded-full 
                 bg-islamic-green-light/20 hover:bg-islamic-green-light/40 
                 transition-all duration-300"
    >
      <span className="text-lg">{flag}</span>
      {label}
    </button>
  );
};