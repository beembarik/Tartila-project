import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { ArabicLetter } from "@/data/arabicAlphabet";
import { Volume2, RotateCcw } from "lucide-react";

interface AnkiQuizProps {
  letters: ArabicLetter[];
  onComplete: (score: number, total: number) => void;
}

export const AnkiQuiz = ({ letters, onComplete }: AnkiQuizProps) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [cards, setCards] = useState<ArabicLetter[]>([]);
  const [scores, setScores] = useState<number[]>([]);
  const [completedCards, setCompletedCards] = useState(0);
  
  const { t } = useLanguage();
  const totalCards = Math.min(10, letters.length);

  useEffect(() => {
    const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);
    setCards(shuffledLetters.slice(0, totalCards));
  }, [letters]);

  const currentCard = cards[currentCardIndex];

  const handleDifficultySelect = (difficulty: 'again' | 'hard' | 'good' | 'easy') => {
    let score = 0;
    switch (difficulty) {
      case 'easy':
        score = 4;
        break;
      case 'good':
        score = 3;
        break;
      case 'hard':
        score = 2;
        break;
      case 'again':
        score = 1;
        break;
    }

    const newScores = [...scores, score];
    setScores(newScores);
    setCompletedCards(prev => prev + 1);

    if (difficulty === 'again') {
      // Add card back to the deck for review
      const newCards = [...cards];
      newCards.push(currentCard);
      setCards(newCards);
    }

    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      // Calculate final score
      const averageScore = newScores.reduce((a, b) => a + b, 0) / newScores.length;
      onComplete(Math.round((averageScore / 4) * 100), totalCards);
    }
  };

  if (!currentCard) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress */}
      <div className="text-center text-sm text-muted-foreground">
        Card {currentCardIndex + 1} of {cards.length} ({completedCards} completed)
      </div>

      {/* Flashcard */}
      <Card className="border-2 border-primary/20 min-h-[400px]">
        <CardContent className="p-8 h-full flex flex-col justify-center">
          {!showAnswer ? (
            // Question Side
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-primary mb-8">
                {t.quiz.question}
              </h2>
              
              <div className="space-y-6">
                <div className="text-9xl font-arabic text-primary">
                  {currentCard.arabic}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Volume2 size={16} className="mr-2" />
                  Listen
                </Button>
              </div>

              <Button
                onClick={() => setShowAnswer(true)}
                className="bg-gradient-primary text-white hover:shadow-gold mt-8"
                size="lg"
              >
                {t.quiz.showAnswer}
              </Button>
            </div>
          ) : (
            // Answer Side
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <div className="text-7xl font-arabic text-primary">
                  {currentCard.arabic}
                </div>
                <div className="text-3xl font-bold text-primary">
                  {currentCard.name}
                </div>
                <div className="text-lg text-muted-foreground">
                  {currentCard.transliteration}
                </div>
              </div>

              <div className="bg-accent/50 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-primary mb-2">{t.card.makhraj}:</h3>
                <p className="text-sm">{currentCard.makhraj}</p>
                
                <h3 className="font-semibold text-primary mb-2 mt-4">{t.card.characteristics}:</h3>
                <p className="text-sm">{currentCard.characteristics}</p>
              </div>

              {/* Anki-style difficulty buttons */}
              <div className="grid grid-cols-4 gap-2 mt-8">
                <Button
                  variant="destructive"
                  onClick={() => handleDifficultySelect('again')}
                  className="flex flex-col gap-1 h-16"
                >
                  <span className="text-xs">&lt;1m</span>
                  <span className="font-semibold">{t.quiz.again}</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDifficultySelect('hard')}
                  className="flex flex-col gap-1 h-16 border-orange-300 text-orange-600 hover:bg-orange-50"
                >
                  <span className="text-xs">&lt;6m</span>
                  <span className="font-semibold">{t.quiz.hard}</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDifficultySelect('good')}
                  className="flex flex-col gap-1 h-16 border-green-300 text-green-600 hover:bg-green-50"
                >
                  <span className="text-xs">&lt;10m</span>
                  <span className="font-semibold">{t.quiz.good}</span>
                </Button>
                <Button
                  variant="default"
                  onClick={() => handleDifficultySelect('easy')}
                  className="flex flex-col gap-1 h-16 bg-blue-600 hover:bg-blue-700"
                >
                  <span className="text-xs">4d</span>
                  <span className="font-semibold">{t.quiz.difficulty}</span>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Reset Button */}
      <div className="text-center">
        <Button
          variant="ghost"
          onClick={() => {
            setCurrentCardIndex(0);
            setShowAnswer(false);
            setScores([]);
            setCompletedCards(0);
          }}
          className="text-muted-foreground"
        >
          <RotateCcw size={16} className="mr-2" />
          Reset Quiz
        </Button>
      </div>
    </div>
  );
};