import React from 'react';
import { Progress } from '@/components/ui/progress';
import { useGamification } from '@/contexts/GamificationContext';
import { useLanguage } from '@/hooks/useLanguage';
import { gamificationTranslations } from '@/data/translations/gamification';
import { Trophy, Star } from 'lucide-react';

export function ProgressBar() {
  const { data, getProgress, getNextLevelPoints } = useGamification();
  const { language } = useLanguage();
  const gt = gamificationTranslations[language];

  return (
    <div className="bg-card rounded-xl p-4 shadow-soft border border-border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-accent" />
          <span className="font-semibold text-card-foreground">
            {gt.level} {data.level}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-muted-foreground">
            {data.points} {gt.points}
          </span>
        </div>
      </div>
      
      <Progress 
        value={getProgress()} 
        className="h-3 mb-2"
      />
      
      <p className="text-xs text-muted-foreground text-center">
        {getNextLevelPoints()} {gt.pointsToLevel} {data.level + 1}
      </p>
    </div>
  );
}