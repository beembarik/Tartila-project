import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Volume2, Star, Brain, ArrowRight, Trophy, Target } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
import { ProgressBar } from "@/components/gamification/ProgressBar";
import { StatsDisplay } from "@/components/gamification/StatsDisplay";
import { useGamification } from "@/contexts/GamificationContext";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const { t } = useLanguage();
  const { data, updateStreak } = useGamification();

  // Animasi scroll
  const heroReveal = useScrollReveal();
  const gamificationReveal = useScrollReveal();
  const pathReveal = useScrollReveal();
  const featuresReveal = useScrollReveal();
  const footerReveal = useScrollReveal();

  // Update streak ketika user membuka halaman
  React.useEffect(() => {
    updateStreak();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero Section */}
      <section
        ref={heroReveal.ref}
        className={`relative min-h-[85vh] flex items-center transition-all duration-700 ${heroReveal.isVisible ? "fade-in slide-up" : "opacity-0 translate-y-6"}`}
      >
        <div className="absolute inset-0 bg-gradient-primary"></div>
        <div className="relative z-10 container mx-auto px-6 py-12 text-center text-white">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="/assets/alphabet-illustration.jpg"
                alt="Arabic Alphabet"
                className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white/30 animate-float shadow-2xl"
              />
              <div className="absolute -inset-2 bg-white/10 rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            {t.index.heroTitle}
          </h1>
          <p className="text-base md:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
            {t.index.heroSubtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full">
              <Star className="mr-2 h-4 w-4" />
              {t.index.badges.letters}
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full">
              <Volume2 className="mr-2 h-4 w-4" />
              {t.index.badges.audio}
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full">
              <BookOpen className="mr-2 h-4 w-4" />
              {t.index.badges.tajweed}
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button asChild size="lg" variant="gradient" className="rounded-full flex-1 sm:flex-none">
              <Link to="/learn" className="flex items-center justify-center gap-3">
                <BookOpen size={20} />
                {t.index.buttons.startLearning}
                <ArrowRight size={16} />
              </Link>
            </Button>

            <Button asChild size="lg" variant="gold" className="rounded-full flex-1 sm:flex-none">
              <Link to="/quiz" className="flex items-center justify-center gap-3">
                <Brain size={20} />
                {t.index.buttons.takeQuiz}
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Progress Indicator */}
          {data.totalQuestions > 0 && (
            <div className="mt-8 max-w-sm mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    <span>Level {data.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>{Math.round((data.correctAnswers / data.totalQuestions) * 100)}% accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gamification Dashboard */}
      <section
        ref={gamificationReveal.ref}
        className={`bg-primary/5 py-12 transition-all duration-700 ${gamificationReveal.isVisible ? "fade-in slide-up" : "opacity-0 translate-y-6"}`}
      >
        <div className="container mx-auto px-6">
          <div className="grid gap-6 max-w-4xl mx-auto">
            <ProgressBar />
            <StatsDisplay />
          </div>
        </div>
      </section>

      {/* Path Section */}
      <section
        ref={pathReveal.ref}
        className={`bg-background py-12 transition-all duration-700 ${pathReveal.isVisible ? "fade-in slide-up" : "opacity-0 translate-y-6"}`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-6">
            {t.index.sections.choosePath}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.index.sections.pathSubtitle}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresReveal.ref}
        className={`bg-accent/5 py-12 transition-all duration-700 ${featuresReveal.isVisible ? "fade-in slide-up" : "opacity-0 translate-y-6"}`}
      >
        <div className="container mx-auto px-6">
          {/* ... fitur cards tetap seperti kode kamu */}
        </div>
      </section>

      {/* Footer */}
      <footer
        ref={footerReveal.ref}
        className={`bg-primary text-white py-8 mt-16 transition-all duration-700 ${footerReveal.isVisible ? "fade-in slide-up" : "opacity-0 translate-y-6"}`}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/90 text-base font-medium">{t.index.footer.mainText}</p>
          <p className="text-white/70 text-sm mt-2">{t.index.footer.subText}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;