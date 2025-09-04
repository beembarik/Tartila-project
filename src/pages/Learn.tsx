import { useState, useCallback } from "react";
import { AlphabetCard } from "@/components/AlphabetCard";
import { AlphabetGrid } from "@/components/AlphabetGrid";
import { NavigationControls } from "@/components/NavigationControls";
import { EnhancedAudioPlayer } from "@/components/EnhancedAudioPlayer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Grid3X3, Volume2 } from "lucide-react";
import { ArabicLetter } from "@/data/arabicAlphabet";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";

const Learn = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<ArabicLetter | null>(null);
  const [activeTab, setActiveTab] = useState("flashcards");
  const [isAudioDialogOpen, setIsAudioDialogOpen] = useState(false);
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
    setIsAudioDialogOpen(true);
  }, []);

  const handleLetterSelect = useCallback((letter: ArabicLetter) => {
    const index = arabicAlphabet.findIndex(l => l.id === letter.id);
    setCurrentLetterIndex(index);
    setSelectedLetter(letter);
    setIsCardFlipped(false);
    setActiveTab("flashcards");
  }, [arabicAlphabet]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-rainbow pt-24">
      <div className="flex-1 overflow-y-auto container mx-auto px-4 pb-8">
        <div className="text-center mb-8 fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-float">
            {t.navigation.learn}
          </h1>
          <p className="text-lg text-muted-foreground slide-up">
            Study Arabic letters with interactive flashcards and detailed information
          </p>
        </div>

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

          <TabsContent value="flashcards" className="space-y-6">
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

            <div className="flex justify-center fade-in">
              <AlphabetCard
                letter={currentLetter}
                isFlipped={isCardFlipped}
                onFlip={handleFlip}
                onPlaySound={handlePlaySound}
                className="aspect-[3/4] max-h-[340px]"
              />
            </div>

            <div className="flex justify-center slide-up pt-4">
              <Dialog open={isAudioDialogOpen} onOpenChange={setIsAudioDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-primary text-primary-foreground hover:shadow-warm flex items-center gap-2">
                    <Volume2 size={18} />
                    Listen to {currentLetter.name}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader className="flex flex-row items-center justify-between pb-4">
                    <DialogTitle className="text-center flex-1">
                      Audio Player - {currentLetter.name}
                    </DialogTitle>
                  </DialogHeader>
                  <EnhancedAudioPlayer
                    letterName={currentLetter.name}
                    arabicLetter={currentLetter.arabic}
                    letterId={currentLetter.id}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>

          <TabsContent value="grid" className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-2">Arabic Alphabet Grid</h2>
              <p className="text-muted-foreground">Click on any letter to study it in detail</p>
            </div>

            <div className="overflow-x-auto">
              <AlphabetGrid
                letters={arabicAlphabet}
                selectedLetter={selectedLetter}
                onLetterSelect={handleLetterSelect}
              />
            </div>

            {selectedLetter && (
              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => setActiveTab("flashcards")}
                  className="bg-gradient-primary text-primary-foreground hover:shadow-warm"
                >
                  Study {selectedLetter.name} in Detail
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Learn;