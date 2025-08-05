import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";
import { BookOpen, Menu, X, Home, Brain } from "lucide-react";
const alphabetIllustration = "/assets/alphabet-illustration.jpg";

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
    <nav className="bg-gradient-to-r from-[hsl(var(--islamic-green)/90)] to-[hsl(var(--soft-gold)/90)] backdrop-blur-md border-b border-white/15 sticky top-0 z-50 shadow-lg">
  <div className="container mx-auto px-6">
    <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-all duration-300 group">
            <div className="relative">
              <img 
                src={alphabetIllustration} 
                alt="Arabic Alphabet" 
                className="w-10 h-10 rounded-full border-2 border-white/30 shadow-lg group-hover:border-white/50 transition-all duration-300"
              />
              <div className="absolute -inset-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-islamic-green">
              <div className="font-bold text-base md:text-lg tracking-tight">Arabic Learning</div>
              <div className="text-xs opacity-80 font-medium">Huruf Hijaiyah</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 font-medium text-sm ${
                  isActive(item.path)
                    ? "bg-white/20 text-white backdrop-blur-sm border border-white/30 shadow-lg"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary hover:bg-white/20 rounded-full p-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    isActive(item.path)
                      ? "bg-white/20 text-white border border-white/30 shadow-md"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};