import { useState, useCallback } from "react";
import { AlphabetCard } from "@/components/AlphabetCard";
import { AlphabetGrid } from "@/components/AlphabetGrid";
import { NavigationControls } from "@/components/NavigationControls";
import { AudioPlayer } from "@/components/AudioPlayer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Grid3X3, Volume2, Star } from "lucide-react";
import { ArabicLetter } from "@/data/arabicAlphabet";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import heroBackground from "@/assets/hero-background.jpg";
import alphabetIllustration from "@/assets/alphabet-illustration.jpg";
import patternDecoration from "@/assets/pattern-decoration.jpg";

const Index = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<ArabicLetter | null>(null);
  const [activeTab, setActiveTab] = useState("flashcards");
  const { toast } = useToast();
  const { t, arabicAlphabet } = useLanguage();

  const currentLetter = arabicAlphabet[currentLetterIndex];

  const handlePrevious = useCallback(() => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(prev => prev - 1);
      setIsCardFlipped(false);
    }
  }, [currentLetterIndex]);

  const handleNext = useCallback(() => {
    if (currentLetterIndex < arabicAlphabet.length - 1) {
      setCurrentLetterIndex(prev => prev + 1);
      setIsCardFlipped(false);
    }
  }, [currentLetterIndex, arabicAlphabet.length]);

  const handleFlip = useCallback(() => {
    setIsCardFlipped(prev => !prev);
  }, []);

  const handleShuffle = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * arabicAlphabet.length);
    setCurrentLetterIndex(randomIndex);
    setIsCardFlipped(false);
  }, [arabicAlphabet.length]);

  const handlePlaySound = useCallback(() => {
    // This will be handled by the AudioPlayer component
    toast({
      title: t.audio.playing,
      description: `${currentLetter.name}`,
    });
  }, [currentLetter, toast, t]);

  const handleLetterSelect = useCallback((letter: ArabicLetter) => {
    const index = arabicAlphabet.findIndex(l => l.id === letter.id);
    setCurrentLetterIndex(index);
    setSelectedLetter(letter);
    setIsCardFlipped(false);
    setActiveTab("flashcards");
  }, [arabicAlphabet]);

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-16 text-center text-white">
          <div className="flex items-center justify-between mb-6">
            <div></div>
            <img 
              src={alphabetIllustration} 
              alt="Arabic Alphabet" 
              className="w-24 h-24 rounded-full border-4 border-primary-gold animate-float"
            />
            <div className="flex justify-end">
              <LanguageSwitcher />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in">
            {t.header.title}
          </h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {t.header.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge className="bg-primary-gold text-primary-gold-foreground px-4 py-2">
              <Star className="mr-2 h-4 w-4" />
              28 Letters
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">
              <Volume2 className="mr-2 h-4 w-4" />
              Audio Pronunciation
            </Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">
              <BookOpen className="mr-2 h-4 w-4" />
              Tajweed Rules
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="flashcards" className="flex items-center gap-2">
              <BookOpen size={16} />
              Flashcards
            </TabsTrigger>
            <TabsTrigger value="grid" className="flex items-center gap-2">
              <Grid3X3 size={16} />
              {t.navigation.showAll}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flashcards" className="space-y-8">
            {/* Audio Player */}
            <div className="flex justify-center">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <AudioPlayer 
                    letterName={currentLetter.name}
                    arabicLetter={currentLetter.arabic}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Flashcard */}
            <div className="flex justify-center">
              <AlphabetCard
                letter={currentLetter}
                isFlipped={isCardFlipped}
                onFlip={handleFlip}
                onPlaySound={handlePlaySound}
              />
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center">
              <NavigationControls
                currentIndex={currentLetterIndex}
                totalCount={arabicAlphabet.length}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onFlip={handleFlip}
                onShuffle={handleShuffle}
                isFlipped={isCardFlipped}
              />
            </div>
          </TabsContent>

          <TabsContent value="grid" className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-2">Arabic Alphabet Grid</h2>
              <p className="text-muted-foreground">Click on any letter to study it in detail</p>
            </div>
            
            <AlphabetGrid
              letters={arabicAlphabet}
              selectedLetter={selectedLetter}
              onLetterSelect={handleLetterSelect}
            />
            
            {selectedLetter && (
              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => setActiveTab("flashcards")}
                  className="bg-gradient-primary text-white hover:shadow-gold"
                >
                  Study {selectedLetter.name} in Detail
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-accent border-pattern-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Volume2 className="h-5 w-5" />
                Audio Pronunciation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                Listen to correct pronunciation of each letter with proper makharijul huruf
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-warm border-pattern-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <BookOpen className="h-5 w-5" />
                Tajweed Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">
                Learn the characteristics and articulation points of each Arabic letter
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary text-white border-primary-gold">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Interactive Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                Engaging flashcards with detailed information and examples
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
            Master the Arabic alphabet with proper tajweed pronunciation
          </p>
          <p className="text-white/60 text-sm mt-2">
            Built with love for Arabic learners worldwide
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
