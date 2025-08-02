import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/hooks/useLanguage";
import { ArabicLetter } from "@/data/arabicAlphabet";
import { Check, X, Volume2 } from "lucide-react";

interface DuolingoQuizProps {
  letters: ArabicLetter[];
  onComplete: (score: number) => void;
}

export const DuolingoQuiz = ({ letters, onComplete }: DuolingoQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<
    Array<{
      letter: ArabicLetter;
      options: string[];
      correctAnswer: string;
    }>
  >([]);

  const { t } = useLanguage();
  const totalQuestions = 10;

  useEffect(() => {
    if (letters.length > 0) {
      generateQuestions();
    }
  }, [letters]);

  const generateQuestions = () => {
    const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);
    const newQuestions = shuffledLetters.slice(0, totalQuestions).map((letter) => {
      const incorrectOptions = letters
        .filter((l) => l.id !== letter.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((l) => l.name);

      const options = [letter.name, ...incorrectOptions].sort(() => Math.random() - 0.5);

      return {
        letter,
        options,
        correctAnswer: letter.name,
      };
    });

    setQuestions(newQuestions);
  };

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (questions[currentQuestionIndex]?.correctAnswer === answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // Quiz finished, notify parent and pass the final score
      onComplete(score);
    }
  };

  // The loading state and rendering logic for questions remains the same
  if (!questions.length) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* ... (rest of the component's JSX remains the same) ... */}
    </div>
  );
};
