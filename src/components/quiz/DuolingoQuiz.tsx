import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/hooks/useLanguage";
import { ArabicLetter } from "@/data/arabicAlphabet";
import { Check, X, Volume2, Clock } from "lucide-react";
import { QuizSettings } from "./QuizSettings";

interface DuolingoQuizProps {
  letters: ArabicLetter[];
  settings: QuizSettings;
  onComplete: (score: number, total: number) => void;
}

export const DuolingoQuiz = ({ letters, settings, onComplete }: DuolingoQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(settings.hasTimer ? settings.timerMinutes * 60 : 0);
  const [questions, setQuestions] = useState<
    Array<{
      letter: ArabicLetter;
      options: string[];
      correctAnswer: string;
    }>
  >([]);

  const { t } = useLanguage();
  const totalQuestions = settings.numberOfQuestions;

  useEffect(() => {
    if (letters.length > 0) {
      generateQuestions();
    }
  }, [letters]);

  // Timer effect
  useEffect(() => {
    if (settings.hasTimer && timeLeft > 0 && !isComplete) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsComplete(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [settings.hasTimer, timeLeft, isComplete]);

  // Use a useEffect hook to call onComplete only once when the quiz is finished
  useEffect(() => {
    if (isComplete) {
      onComplete(score, totalQuestions);
    }
  }, [isComplete, score, onComplete, totalQuestions]);

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
      // Quiz is finished. Set the local state to complete.
      // The useEffect hook will handle notifying the parent on the next render.
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsComplete(false);
    setTimeLeft(settings.hasTimer ? settings.timerMinutes * 60 : 0);
    generateQuestions();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  // Render the loading state first
  if (!questions.length) {
    return <div>Loading...</div>;
  }

  // Then, render the completion screen if the quiz is complete
  if (isComplete) {
    // Show a finishing state until parent unmounts this component
    return <div className="text-center py-20 text-xl text-primary">Finishing quiz...</div>;
  }

  // Finally, render the quiz questions
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="h-screen flex flex-col max-w-2xl mx-auto p-4">
      <div className="flex-1 flex flex-col space-y-6 justify-center">
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            {currentQuestionIndex + 1} / {totalQuestions}
          </span>
          <span>
            {t.quiz.score}: {score}
          </span>
          {settings.hasTimer && (
            <span className={`flex items-center gap-1 ${timeLeft < 60 ? 'text-red-500' : 'text-muted-foreground'}`}>
              <Clock size={14} />
              {formatTime(timeLeft)}
            </span>
          )}
        </div>
        <Progress value={progress} className="h-3" />
        {settings.hasTimer && (
          <Progress 
            value={(timeLeft / (settings.timerMinutes * 60)) * 100} 
            className="h-2" 
            style={{ 
              background: timeLeft < 60 ? 'rgb(239 68 68 / 0.2)' : undefined 
            }} 
          />
        )}
      </div>

      <Card className="border-2 border-primary/20">
        <CardContent className="p-8 text-center">
          <h2 className="text-xl font-semibold mb-6 text-primary">
            {t.quiz.chooseAnswer}
          </h2>

          <div className="mb-8">
            <div className="text-8xl font-arabic text-primary mb-4">
              {currentQuestion.letter.arabic}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
            >
              <Volume2 size={16} className="mr-2" />
              Listen
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={`h-16 text-lg transition-all duration-300 ${
                  selectedAnswer === option
                    ? isCorrect
                      ? "bg-green-100 border-green-500 text-green-700"
                      : "bg-red-100 border-red-500 text-red-700"
                    : isAnswered && option === currentQuestion.correctAnswer
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "hover:bg-accent"
                } ${
                  isAnswered &&
                  option !== currentQuestion.correctAnswer &&
                  option !== selectedAnswer
                    ? "opacity-50"
                    : ""
                }`}
                onClick={() => handleAnswerSelect(option)}
                disabled={isAnswered}
              >
                {option}
                {isAnswered && option === currentQuestion.correctAnswer && (
                  <Check className="ml-2 h-5 w-5" />
                )}
                {isAnswered &&
                  selectedAnswer === option &&
                  option !== currentQuestion.correctAnswer && (
                    <X className="ml-2 h-5 w-5" />
                  )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {isAnswered && (
        <Card
          className={`border-2 ${
            isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
          }`}
        >
          <CardContent className="p-4 text-center">
            <div
              className={`flex items-center justify-center gap-2 text-lg font-semibold ${
                isCorrect ? "text-green-700" : "text-red-700"
              }`}
            >
              {isCorrect ? <Check className="h-6 w-6" /> : <X className="h-6 w-6" />}
              {isCorrect ? t.quiz.correct : t.quiz.incorrect}
            </div>

            <Button
              onClick={handleNext}
              className="mt-4"
              variant={isCorrect ? "default" : "destructive"}
            >
              {currentQuestionIndex < totalQuestions - 1
                ? t.quiz.nextQuestion
                : t.quiz.finishQuiz}
            </Button>
          </CardContent>
        </Card>
      )}
      </div>
    </div>
  );
};
