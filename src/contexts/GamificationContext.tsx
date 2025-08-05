import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: Date;
}

interface GamificationData {
  points: number;
  level: number;
  totalQuestions: number;
  correctAnswers: number;
  streakDays: number;
  lastActivityDate?: string;
  achievements: Achievement[];
}

interface GamificationContextType {
  data: GamificationData;
  addPoints: (points: number) => void;
  markQuestionAnswered: (correct: boolean) => void;
  updateStreak: () => void;
  earnAchievement: (achievementId: string) => void;
  getProgress: () => number;
  getNextLevelPoints: () => number;
}

const defaultAchievements: Achievement[] = [
  {
    id: 'first_correct',
    title: 'First Success',
    description: 'Answer your first question correctly',
    icon: '🎯',
    earned: false
  },
  {
    id: 'streak_3',
    title: 'On Fire',
    description: 'Get 3 questions correct in a row',
    icon: '🔥',
    earned: false
  },
  {
    id: 'level_2',
    title: 'Rising Scholar',
    description: 'Reach level 2',
    icon: '📈',
    earned: false
  },
  {
    id: 'perfect_quiz',
    title: 'Perfect Score',
    description: 'Complete a quiz with 100% accuracy',
    icon: '⭐',
    earned: false
  },
  {
    id: 'daily_learner',
    title: 'Daily Learner',
    description: 'Practice for 3 days in a row',
    icon: '📅',
    earned: false
  }
];

const initialData: GamificationData = {
  points: 0,
  level: 1,
  totalQuestions: 0,
  correctAnswers: 0,
  streakDays: 0,
  achievements: defaultAchievements
};

const GamificationContext = createContext<GamificationContextType | null>(null);

export function GamificationProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<GamificationData>(initialData);

  useEffect(() => {
    const saved = localStorage.getItem('arabic-learn-gamification');
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        setData(prev => ({
          ...prev,
          ...parsedData,
          achievements: parsedData.achievements || defaultAchievements
        }));
      } catch (error) {
        console.error('Failed to parse gamification data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('arabic-learn-gamification', JSON.stringify(data));
  }, [data]);

  const addPoints = (points: number) => {
    setData(prev => {
      const newPoints = prev.points + points;
      const newLevel = Math.floor(newPoints / 100) + 1;
      
      return {
        ...prev,
        points: newPoints,
        level: newLevel
      };
    });
  };

  const markQuestionAnswered = (correct: boolean) => {
    setData(prev => ({
      ...prev,
      totalQuestions: prev.totalQuestions + 1,
      correctAnswers: correct ? prev.correctAnswers + 1 : prev.correctAnswers
    }));

    if (correct) {
      addPoints(10);
      
      // Check for first correct answer achievement
      if (data.correctAnswers === 0) {
        earnAchievement('first_correct');
      }
    }
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    const lastActivity = data.lastActivityDate;
    
    setData(prev => {
      if (!lastActivity) {
        return {
          ...prev,
          streakDays: 1,
          lastActivityDate: today
        };
      }

      const lastDate = new Date(lastActivity);
      const todayDate = new Date(today);
      const daysDiff = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

      let newStreak = prev.streakDays;
      if (daysDiff === 1) {
        newStreak = prev.streakDays + 1;
      } else if (daysDiff > 1) {
        newStreak = 1;
      }

      // Check for streak achievements
      if (newStreak === 3) {
        earnAchievement('daily_learner');
      }

      return {
        ...prev,
        streakDays: newStreak,
        lastActivityDate: today
      };
    });
  };

  const earnAchievement = (achievementId: string) => {
    setData(prev => ({
      ...prev,
      achievements: prev.achievements.map(achievement =>
        achievement.id === achievementId
          ? { ...achievement, earned: true, earnedAt: new Date() }
          : achievement
      )
    }));
  };

  const getProgress = () => {
    const pointsInCurrentLevel = data.points % 100;
    return pointsInCurrentLevel;
  };

  const getNextLevelPoints = () => {
    return 100 - (data.points % 100);
  };

  const value: GamificationContextType = {
    data,
    addPoints,
    markQuestionAnswered,
    updateStreak,
    earnAchievement,
    getProgress,
    getNextLevelPoints
  };

  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
}