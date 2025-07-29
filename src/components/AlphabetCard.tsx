import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Volume2, RotateCcw, BookOpen, Eye } from "lucide-react";
import { ArabicLetter, getMakhrajColor } from "@/data/arabicAlphabet";

interface AlphabetCardProps {
  letter: ArabicLetter;
  isFlipped: boolean;
  onFlip: () => void;
  onPlaySound: () => void;
}

export const AlphabetCard = ({ letter, isFlipped, onFlip, onPlaySound }: AlphabetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full max-w-md mx-auto perspective-1000">
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
              <div className="text-8xl md:text-9xl font-bold text-primary animate-float">
                {letter.arabic}
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-gold rounded-full animate-glow"></div>
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
                className="flex items-center gap-2 hover:bg-primary-gold hover:text-white"
              >
                <Volume2 size={16} />
                Listen
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Eye size={16} />
                Details
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
              <div className="text-4xl font-bold text-primary mb-2">{letter.arabic}</div>
              <h3 className="text-xl font-semibold text-primary">{letter.name} Details</h3>
            </div>
            
            {/* Makhraj Information */}
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-primary mb-1">Makhraj (Place of Articulation)</h4>
                <p className="text-sm text-foreground/80">{letter.makhrajDescription}</p>
              </div>
              
              {/* Characteristics */}
              <div>
                <h4 className="font-semibold text-primary mb-2">Characteristics</h4>
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
                <h4 className="font-semibold text-primary mb-1">Pronunciation</h4>
                <p className="text-sm text-foreground/80 mb-2">{letter.pronunciation.description}</p>
                <div className="space-y-1">
                  {letter.pronunciation.tips.map((tip, index) => (
                    <div key={index} className="text-xs text-foreground/70 flex items-start gap-1">
                      <span className="text-primary-gold">•</span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Examples */}
              <div>
                <h4 className="font-semibold text-primary mb-2">Examples</h4>
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
                Pronunciation
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
                Flip
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};