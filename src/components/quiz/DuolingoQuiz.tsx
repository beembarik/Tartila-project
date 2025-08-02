import React, { useEffect, useState } from 'react';
import { ArabicLetter } from '@/types/ArabicLetter';
import { generateDuolingoQuestions } from '@/lib/quizGenerator';
import { shuffleArray } from '@/lib/utils';
import DuolingoQuestionCard from './DuolingoQuestionCard';
import DuolingoQuizComplete from './DuolingoQuizComplete';

interface DuolingoQuizProps {
  letters: ArabicLetter[];
  totalQuestions?: number;
  onComplete: (score: number) => void;
}

const DuolingoQuiz: React.FC<DuolingoQuizProps> = ({
  letters,
  totalQuestions = 10,
  onComplete,
}) => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (letters.length > 0) {
      const newQuestions = generateDuolingoQuestions(letters, totalQuestions);
      setQuestions(shuffleArray(newQuestions));
    }
  }, [letters, totalQuestions]);

  // Handle quiz completion based on index
  useEffect(() => {
    if (currentQuestionIndex >= questions.length && questions.length > 0) {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    if (isComplete) {
      onComplete(score);
    }
  }, [isComplete, score, onComplete]);

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);

    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion && answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        // Handled by useEffect now
      }
    }, 1000);
  };

  const handleRestart = () => {
    const newQuestions = generateDuolingoQuestions(letters, totalQuestions);
    setQuestions(shuffleArray(newQuestions));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsComplete(false);
  };

  const currentQuestion = questions[currentQuestionIndex] ?? null;

  if (isComplete || currentQuestionIndex >= questions.length) {
    return (
      <DuolingoQuizComplete
        score={score}
        total={totalQuestions}
        onRestart={handleRestart}
      />
    );
  }

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <DuolingoQuestionCard
      question={currentQuestion}
      onAnswer={handleAnswer}
      selectedAnswer={selectedAnswer}
      isAnswered={isAnswered}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={totalQuestions}
    />
  );
};

export default DuolingoQuiz;