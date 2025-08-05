import React from 'react';
import { useGamification } from '@/contexts/GamificationContext';
import { AchievementBadge } from './AchievementBadge';

export function AchievementsGrid() {
  const { data } = useGamification();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-primary mb-2">Your Achievements</h3>
        <p className="text-muted-foreground">
          Earn badges by completing challenges and reaching milestones
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.achievements.map((achievement) => (
          <AchievementBadge 
            key={achievement.id} 
            achievement={achievement}
            className="h-full"
          />
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        {data.achievements.filter(a => a.earned).length} of {data.achievements.length} achievements earned
      </div>
    </div>
  );
}