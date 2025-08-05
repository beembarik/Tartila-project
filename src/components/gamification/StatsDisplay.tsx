import React from 'react';
import { useGamification } from '@/contexts/GamificationContext';
import { Target, Award, Flame, CheckCircle } from 'lucide-react';

export function StatsDisplay() {
  const { data } = useGamification();

  const accuracy = data.totalQuestions > 0 
    ? Math.round((data.correctAnswers / data.totalQuestions) * 100) 
    : 0;

  const stats = [
    {
      icon: Target,
      label: 'Accuracy',
      value: `${accuracy}%`,
      color: 'text-primary'
    },
    {
      icon: CheckCircle,
      label: 'Correct',
      value: data.correctAnswers.toString(),
      color: 'text-accent'
    },
    {
      icon: Flame,
      label: 'Streak',
      value: `${data.streakDays} days`,
      color: 'text-orange-500'
    },
    {
      icon: Award,
      label: 'Achievements',
      value: data.achievements.filter(a => a.earned).length.toString(),
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg p-4 text-center shadow-soft border border-border hover:shadow-islamic transition-all duration-300"
        >
          <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
          <p className="text-2xl font-bold text-card-foreground mb-1">
            {stat.value}
          </p>
          <p className="text-sm text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}