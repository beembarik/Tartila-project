import { ArabicLetter } from "@/data/arabicAlphabet";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AlphabetGridProps {
  letters: ArabicLetter[];
  selectedLetter: ArabicLetter | null;
  onLetterSelect: (letter: ArabicLetter) => void;
}

export const AlphabetGrid = ({ letters, selectedLetter, onLetterSelect }: AlphabetGridProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 p-4">
        {letters.map((letter) => (
          <Card
            key={letter.id}
            className={`
              cursor-pointer transition-all duration-500 hover-lift hover:shadow-soft
              ${selectedLetter?.id === letter.id 
                ? 'ring-2 ring-primary-rose bg-gradient-primary text-white scale-105' 
                : 'bg-card hover:bg-gradient-warm hover:shadow-rose'
              }
            `}
            onClick={() => onLetterSelect(letter)}
          >
            <CardContent className="p-4 flex flex-col items-center space-y-2">
              <div className={`
                text-3xl md:text-4xl font-bold transition-all duration-300 hover:animate-bounce-gentle
                ${selectedLetter?.id === letter.id ? 'text-white animate-glow' : 'text-primary'}
              `}>
                {letter.arabic}
              </div>
              <div className={`
                text-xs text-center transition-colors
                ${selectedLetter?.id === letter.id ? 'text-white/80' : 'text-muted-foreground'}
              `}>
                {letter.name}
              </div>
              <Badge 
                variant={selectedLetter?.id === letter.id ? "secondary" : "outline"}
                className="text-xs px-2 py-1"
              >
                {letter.transliteration}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};