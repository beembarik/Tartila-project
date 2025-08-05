import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: Date;
}

interface AchievementBadgeProps {
  achievement: Achievement;
  className?: string;
}

export function AchievementBadge({ achievement, className }: AchievementBadgeProps) {
  return (
    <div className={cn(
      "flex flex-col items-center p-3 rounded-xl border transition-all duration-300",
      achievement.earned 
        ? "bg-accent/10 border-accent shadow-gold" 
        : "bg-muted/50 border-border opacity-60",
      className
    )}>
      <div className={cn(
        "text-2xl mb-2 transition-all duration-300",
        achievement.earned ? "scale-110" : "grayscale"
      )}>
        {achievement.icon}
      </div>
      
      <h4 className={cn(
        "font-semibold text-sm text-center mb-1",
        achievement.earned ? "text-card-foreground" : "text-muted-foreground"
      )}>
        {achievement.title}
      </h4>
      
      <p className="text-xs text-muted-foreground text-center leading-tight">
        {achievement.description}
      </p>

      {achievement.earned && (
        <Badge variant="secondary" className="mt-2 text-xs">
          Earned!
        </Badge>
      )}
    </div>
  );
}