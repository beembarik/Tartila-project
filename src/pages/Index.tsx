import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Volume2, Star, Brain, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "react-router-dom";
const heroBackground = "/assets/hero-background.jpg";
const alphabetIllustration = "/assets/alphabet-illustration.jpg";
const patternDecoration = "/assets/pattern-decoration.jpg";

const Index = () => {
  const { t } = useLanguage();


  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
          <div className="flex justify-center mb-6">
            <img 
              src={alphabetIllustration} 
              alt="Arabic Alphabet" 
              className="w-24 h-24 rounded-full border-4 border-primary-gold animate-float"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in">
            {t.index.heroTitle}
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {t.index.heroSubtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge className="bg-white/20 text-white px-4 py-2">
              <Star className="mr-2 h-4 w-4" />
              {t.index.badges.letters}
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">
              <Volume2 className="mr-2 h-4 w-4" />
              {t.index.badges.audio}
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">
              <BookOpen className="mr-2 h-4 w-4" />
              {t.index.badges.tajweed}
            </Badge>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              <Link to="/learn" className="flex items-center gap-2">
                <BookOpen size={20} />
                {t.index.buttons.startLearning}
                <ArrowRight size={16} />
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-gold border-primary-gold text-white hover:bg-white hover:text-primary font-semibold"
            >
              <Link to="/quiz" className="flex items-center gap-2">
                <Brain size={20} />
                {t.index.buttons.takeQuiz}
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t.index.sections.choosePath}</h2>
          <p className="text-lg text-muted-foreground">{t.index.sections.pathSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-warm">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">{t.index.sections.interactiveTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                {t.index.sections.interactiveDesc}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Flashcards</Badge>
                <Badge variant="outline">Audio</Badge>
                <Badge variant="outline">Makhraj</Badge>
                <Badge variant="outline">Examples</Badge>
              </div>

              <Button
                asChild
                className="w-full bg-gradient-primary text-white hover:shadow-gold"
                size="lg"
              >
                <Link to="/learn">
                  {t.index.buttons.startLearning}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-warm">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">{t.index.sections.quizTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                {t.index.sections.quizDesc}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Multiple Choice</Badge>
                <Badge variant="outline">Flashcards</Badge>
                <Badge variant="outline">Progress Tracking</Badge>
                <Badge variant="outline">Spaced Repetition</Badge>
              </div>

              <Button
                asChild
                className="w-full bg-gradient-primary text-white hover:shadow-gold"
                size="lg"
              >
                <Link to="/quiz">
                  {t.index.buttons.takeQuiz}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-accent border-pattern-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Volume2 className="h-5 w-5" />
                {t.index.features.audioTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                {t.index.features.audioDesc}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-warm border-pattern-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <BookOpen className="h-5 w-5" />
                {t.index.features.tajweedTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                {t.index.features.tajweedDesc}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white border-primary-gold">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                {t.index.features.interactiveTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                {t.index.features.interactiveDesc}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src={patternDecoration} 
              alt="Islamic Pattern" 
              className="w-16 h-16 rounded opacity-70"
            />
          </div>
          <p className="text-white/80">
            {t.index.footer.mainText}
          </p>
          <p className="text-white/60 text-sm mt-2">
            {t.index.footer.subText}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
