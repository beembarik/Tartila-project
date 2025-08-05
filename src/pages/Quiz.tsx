import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { DuolingoQuiz } from "@/components/quiz/DuolingoQuiz";
import { AnkiQuiz } from "@/components/quiz/AnkiQuiz";
import { QuizSettings, QuizSettings as QuizSettingsType } from "@/components/quiz/QuizSettings";
import { DuolingoQuizComplete } from "@/components/quiz/DuolingoQuizComplete";
import { useLanguage } from "@/hooks/useLanguage";
import { Brain, Trophy, RotateCcw, Zap, GraduationCap, Award } from "lucide-react";
import { AchievementsGrid } from "@/components/gamification/AchievementsGrid";
import { ProgressBar } from "@/components/gamification/ProgressBar";
import { StatsDisplay } from "@/components/gamification/StatsDisplay";

const Quiz = () => {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [quizSettings, setQuizSettings] = useState<QuizSettingsType>({
    numberOfQuestions: 10,
    hasTimer: false,
    timerMinutes: 5
  });
  const [quizResults, setQuizResults] = useState<{ score: number; total: number } | null>(null);
  const { t, arabicAlphabet } = useLanguage();
  const navigate = useNavigate();

  const handleQuizComplete = (score: number, total: number) => {
    setQuizResults({ score, total });
    setActiveQuiz(null);
  };

  const handleRestartQuiz = () => {
    setQuizResults(null);
    setActiveQuiz(null);
    setShowSettings(false);
  };

  const handleQuizStart = (settings: QuizSettingsType) => {
    setQuizSettings(settings);
    setShowSettings(false);
    setActiveQuiz('duolingo');
  };

  if (showSettings) {
    return (
      <QuizSettings
        onStart={handleQuizStart}
        onBack={() => setShowSettings(false)}
      />
    );
  }

  if (activeQuiz) {
    return (
      <div className="min-h-screen bg-gradient-warm py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Button
              variant="ghost"
              onClick={() => setActiveQuiz(null)}
              className="mb-4"
            >
              ← Back to Quiz Selection
            </Button>
            <h1 className="text-3xl font-bold text-primary">
              {activeQuiz === 'duolingo' ? t.quiz.duolingoStyle : t.quiz.ankiStyle}
            </h1>
          </div>
          
          {activeQuiz === 'duolingo' ? (
            <DuolingoQuiz 
              letters={arabicAlphabet} 
              settings={quizSettings}
              onComplete={handleQuizComplete} 
            />
          ) : (
            <AnkiQuiz letters={arabicAlphabet} onComplete={handleQuizComplete} />
          )}
        </div>
      </div>
    );
  }

  if (quizResults) {
    return (
      <DuolingoQuizComplete
        score={quizResults.score}
        total={quizResults.total}
        onRestart={handleRestartQuiz}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-warm py-8">
      <div className="container mx-auto px-4">
        {/* Gamification Dashboard */}
        <div className="mb-8">
          <ProgressBar />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.quiz.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.quiz.subtitle}
          </p>
        </div>

        {/* Quiz Selection */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Duolingo Style Quiz */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-warm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-primary">
                  {t.quiz.duolingoStyle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Multiple choice questions with immediate feedback. Perfect for quick learning sessions.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Multiple Choice</Badge>
                    <Badge variant="outline" className="text-xs">10 Questions</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Instant Feedback</Badge>
                    <Badge variant="outline" className="text-xs">Progress Tracking</Badge>
                  </div>
                </div>

                <Button
                  onClick={() => setShowSettings(true)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  Start Duolingo Quiz
                </Button>
              </CardContent>
            </Card>

            {/* Anki Style Quiz */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-warm">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-primary">
                  {t.quiz.ankiStyle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  Spaced repetition flashcards with self-assessment. Ideal for deep memorization.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Flashcards</Badge>
                    <Badge variant="outline" className="text-xs">Self-Assessment</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Detailed Info</Badge>
                    <Badge variant="outline" className="text-xs">Spaced Repetition</Badge>
                  </div>
                </div>

                <Button
                  onClick={() => setActiveQuiz('anki')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  Start Anki Quiz
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Section */}
          <div className="mt-16">
            <AchievementsGrid />
          </div>

          {/* Features Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-primary mb-8">Why Take Quizzes?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">Test Knowledge</h3>
                <p className="text-sm text-muted-foreground">
                  Evaluate your understanding of Arabic letters and their properties
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">Track Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor your learning progress with detailed scoring
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <RotateCcw className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">Reinforce Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Strengthen memory through active recall and repetition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;