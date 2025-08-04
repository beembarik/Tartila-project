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
    <nav className="bg-primary/95 backdrop-blur-sm border-b border-accent/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={alphabetIllustration} 
              alt="Arabic Alphabet" 
              className="w-10 h-10 rounded-full border-2 border-accent"
            />
            <div className="text-white">
              <div className="font-bold text-lg">Arabic Learning</div>
              <div className="text-xs opacity-80">Huruf Hijaiyah</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <item.icon size={18} />
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
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-md transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={20} />
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