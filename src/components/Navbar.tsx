import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";
import { BookOpen, Menu, X, Home, Brain } from "lucide-react";

const alphabetIllustration = "/favicon.ico";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: "/", label: t.navigation.home, icon: Home },
    { path: "/learn", label: t.navigation.learn, icon: BookOpen },
    { path: "/quiz", label: t.navigation.quiz, icon: Brain },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      {/* Capsule Container */}
      <div
        className="flex items-center justify-between gap-4 px-5 py-2 rounded-full 
        bg-white/80 backdrop-blur-md border border-white/30 
        shadow-lg transition-all duration-300"
      >
        {/* Branding */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <img
              src={alphabetIllustration}
              alt="Tartila"
              className="w-9 h-9 rounded-full border-2 border-white/30 shadow-lg group-hover:border-white/50 transition-all duration-300"
            />
            <div className="absolute -inset-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="text-gray-800">
            <div className="font-bold text-base tracking-tight">Tatila</div>
            <div className="text-xs opacity-80 font-medium">{t.tagline}</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? "bg-accent text-white shadow-md"
                  : "text-gray-800 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          ))}
        </div>

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:bg-primary/10 p-2 rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-64 
          bg-white/90 backdrop-blur-md border border-white/30 
          rounded-2xl shadow-lg p-4 space-y-2 animate-slide-in"
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? "bg-primary-light text-white shadow-md"
                  : "text-gray-800 hover:bg-accent/80 hover:text-gray-500"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};