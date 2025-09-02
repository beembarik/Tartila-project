import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2, RotateCcw, BookOpen, Eye } from "lucide-react";
import { ArabicLetter, getMakhrajColor } from "@/data/arabicAlphabet";
import { useLanguage } from "@/hooks/useLanguage";

interface AlphabetCardProps {
  letter: ArabicLetter;
  isFlipped: boolean;
  onFlip: () => void;
  onPlaySound: () => void;
  className?: string;
}

export const AlphabetCard = ({ letter, isFlipped, onFlip, onPlaySound, className }: AlphabetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <div className={`relative w-full max-w-md mx-auto perspective-1000 ${className || ''}`}>
      <Card 
        className={`
          relative h-[500px] transition-transform duration-700 transform-style-preserve-3d cursor-pointer
          ${isFlipped ? 'rotate-y-180' : ''} 
          hover:shadow-warm ${isHovered ? 'scale-105' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onFlip}
      >
        {/* Front Side */}
        <CardContent className={`
          absolute inset-0 w-full h-full backface-hidden rounded-lg p-8
          bg-gradient-warm border-2 border-pattern-medium
          flex flex-col items-center justify-center
        `}>
          <div className="text-center space-y-6">
            {/* Arabic Letter */}
            <div className="relative">
              <div className="text-8xl md:text-9xl font-bold text-primary animate-float font-arabic">
                {letter.arabic}
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-glow"></div>
            </div>
            
            {/* Letter Name */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-primary">{letter.name}</h2>
              <p className="text-lg text-muted-foreground">{letter.transliteration}</p>
            </div>
            
            {/* Makhraj Badge */}
            <Badge className={`${getMakhrajColor(letter.makhraj)} text-white px-4 py-2 text-sm`}>
              {letter.makhraj.split(" (")[0]}
            </Badge>
            
            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onPlaySound();
                }}
                className="flex items-center gap-2 hover:bg-accent hover:text-white"
              >
                <Volume2 size={16} />
                {t.actions.listen}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Eye size={16} />
                {t.actions.details}
              </Button>
            </div>
          </div>
        </CardContent>

        {/* Back Side */}
        <CardContent className={`
          absolute inset-0 w-full h-full backface-hidden rounded-lg p-6
          bg-gradient-accent border-2 border-primary rotate-y-180
          overflow-y-auto
        `}>
          <div className="space-y-4">
            {/* Header */}
            <div className="text-center border-b border-primary/20 pb-4">
              <div className="text-4xl font-bold text-primary mb-2 font-arabic">{letter.arabic}</div>
              <h3 className="text-xl font-semibold text-primary">{letter.name} {t.card.details}</h3>
            </div>
            
            {/* Makhraj Information */}
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-primary mb-1">{t.card.makhraj}</h4>
                <p className="text-sm text-foreground/80 mb-2">{letter.makhrajDescription}</p>
                <div className="flex justify-center">
                  <img 
                    src={letter.makhrajIllustration} 
                    alt={`Makhraj illustration for ${letter.name}`}
                    className="w-32 h-32 object-cover rounded-lg border border-primary/20"
                  />
                </div>
              </div>
              
              {/* Characteristics */}
              <div>
                <h4 className="font-semibold text-primary mb-2">{t.card.characteristics}</h4>
                <div className="flex flex-wrap gap-1">
                  {letter.characteristics.map((char, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {char}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Pronunciation */}
              <div>
                <h4 className="font-semibold text-primary mb-1">{t.card.pronunciation}</h4>
                <p className="text-sm text-foreground/80 mb-2">{letter.pronunciation.description}</p>
                <div className="space-y-1">
                  {letter.pronunciation.tips.map((tip, index) => (
                    <div key={index} className="text-xs text-foreground/70 flex items-start gap-1">
                      <span className="text-accent">•</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Examples */}
              <div>
                <h4 className="font-semibold text-primary mb-2">{t.card.examples}</h4>
                <div className="space-y-2">
                  {letter.examples.map((example, index) => (
                    <div key={index} className="bg-card/50 rounded-md p-2">
                      <div className="text-sm font-medium text-primary">{example.word}</div>
                      <div className="text-xs text-foreground/70">
                        {example.meaning} ({example.transliteration})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t border-primary/20">
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onPlaySound();
                }}
                className="flex items-center gap-2 flex-1"
              >
                <Volume2 size={14} />
                {t.actions.pronunciation}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onFlip();
                }}
                className="flex items-center gap-2"
              >
                <RotateCcw size={14} />
                {t.actions.flip}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};