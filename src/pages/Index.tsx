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

const alphabetIllustration = "/assets/alphabet-illustration.jpg";
const patternDecoration = "/assets/pattern-decoration.jpg";

const Index = () => {
  const { t } = useLanguage();
  const { data, updateStreak } = useGamification();

  React.useEffect(() => {
    updateStreak();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={alphabetIllustration}
                alt="Arabic Alphabet"
                className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white/30 shadow-2xl animate-float"
              />
              <div className="absolute -inset-2 bg-white/10 rounded-full animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-2xl leading-tight">
            {t.index.heroTitle}
          </h1>
          <p className="text-base md:text-lg lg:text-xl opacity-95 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
            {t.index.heroSubtitle}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Badge className="bg-white/20 backdrop-blur-sm text-white px-4 py-2.5 font-semibold border border-white/20 rounded-full">
              <Star className="mr-2 h-4 w-4" /> {t.index.badges.letters}
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white px-4 py-2.5 font-semibold border border-white/20 rounded-full">
              <Volume2 className="mr-2 h-4 w-4" /> {t.index.badges.audio}
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white px-4 py-2.5 font-semibold border border-white/20 rounded-full">
              <BookOpen className="mr-2 h-4 w-4" /> {t.index.badges.tajweed}
            </Badge>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Button
              asChild
              size="lg"
              variant="gradient"
              className="shadow-2xl px-8 py-4 font-bold rounded-full flex-1 sm:flex-none"
            >
              <Link to="/learn" className="flex items-center justify-center gap-3">
                <BookOpen size={20} /> {t.index.buttons.startLearning} <ArrowRight size={16} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="gold"
              className="shadow-2xl px-8 py-4 font-bold rounded-full flex-1 sm:flex-none"
            >
              <Link to="/quiz" className="flex items-center justify-center gap-3">
                <Brain size={20} /> {t.index.buttons.takeQuiz} <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Progress */}
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

      {/* Progress & Stats Section */}
      <section className="bg-muted/40 py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 max-w-4xl mx-auto">
            <ProgressBar />
            <StatsDisplay />
          </div>
        </div>
      </section>

      {/* Choose Path Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-6">
              {t.index.sections.choosePath}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.index.sections.pathSubtitle}
            </p>
          </div>

          <div className="grid gap-6 max-w-5xl mx-auto">
            {/* Learn Card */}
            <Card className="group border-2 border-primary/20 hover:border-primary/40 bg-card/90 hover:-translate-y-1 transition-all rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-primary font-bold mb-3">
                  {t.index.sections.interactiveTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 px-6 pb-8">
                <p className="text-muted-foreground text-center">{t.index.sections.interactiveDesc}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="outline" className="border-primary/30 text-primary">Flashcards</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Audio</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Makhraj</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Examples</Badge>
                </div>
                <Button asChild className="w-full bg-gradient-primary text-white font-bold py-4 rounded-full hover:scale-105">
                  <Link to="/learn" className="flex items-center justify-center gap-3">
                    {t.index.buttons.startLearning} <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quiz Card */}
            <Card className="group border-2 border-accent/20 hover:border-accent/40 bg-card/90 hover:-translate-y-1 transition-all rounded-2xl">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-accent rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl text-accent font-bold mb-3">
                  {t.index.sections.quizTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 px-6 pb-8">
                <p className="text-muted-foreground text-center">{t.index.sections.quizDesc}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="outline" className="border-accent/30 text-accent">Multiple Choice</Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">Flashcards</Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">Progress Tracking</Badge>
                  <Badge variant="outline" className="border-accent/30 text-accent">Spaced Repetition</Badge>
                </div>
                <Button asChild className="w-full bg-gradient-accent text-white font-bold py-4 rounded-full hover:scale-105">
                  <Link to="/quiz" className="flex items-center justify-center gap-3">
                    {t.index.buttons.takeQuiz} <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/20 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">Why Choose Our Platform?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature Cards */}
            <Card className="bg-accent/10 border border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-accent font-bold">
                  <Volume2 className="h-5 w-5" /> {t.index.features.audioTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.index.features.audioDesc}</p>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 border border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary font-bold">
                  <BookOpen className="h-5 w-5" /> {t.index.features.tajweedTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.index.features.tajweedDesc}</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/10 border border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-secondary font-bold">
                  <Star className="h-5 w-5" /> {t.index.features.interactiveTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.index.features.interactiveDesc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <img
              src={patternDecoration}
              alt="Islamic Pattern"
              className="w-16 h-16 rounded opacity-70 shadow-soft"
            />
          </div>
          <p className="text-white/90 text-base font-medium">{t.index.footer.mainText}</p>
          <p className="text-white/70 text-sm mt-2">{t.index.footer.subText}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;