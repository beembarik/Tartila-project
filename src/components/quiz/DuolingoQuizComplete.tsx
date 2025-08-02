import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { Trophy, Star, Sparkles, RotateCcw, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DuolingoQuizCompleteProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const DuolingoQuizComplete = ({ score, total, onRestart }: DuolingoQuizCompleteProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const percentage = Math.round((score / total) * 100);

  const getPerformanceData = (percentage: number) => {
    if (percentage >= 90) {
      return {
        title: "Outstanding!",
        subtitle: "You're mastering Arabic letters!",
        color: "text-yellow-500",
        bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
        badgeColor: "bg-yellow-100 text-yellow-800",
        stars: 3
      };
    } else if (percentage >= 80) {
      return {
        title: "Excellent!",
        subtitle: "Great knowledge of Arabic letters!",
        color: "text-green-500",
        bgColor: "bg-gradient-to-br from-green-400 to-emerald-500",
        badgeColor: "bg-green-100 text-green-800",
        stars: 3
      };
    } else if (percentage >= 70) {
      return {
        title: "Well Done!",
        subtitle: "Good progress in your learning!",
        color: "text-blue-500",
        bgColor: "bg-gradient-to-br from-blue-400 to-cyan-500",
        badgeColor: "bg-blue-100 text-blue-800",
        stars: 2
      };
    } else if (percentage >= 60) {
      return {
        title: "Good Job!",
        subtitle: "You're on the right track!",
        color: "text-orange-500",
        bgColor: "bg-gradient-to-br from-orange-400 to-yellow-500",
        badgeColor: "bg-orange-100 text-orange-800",
        stars: 2
      };
    } else {
      return {
        title: "Keep Practicing!",
        subtitle: "Every expert was once a beginner!",
        color: "text-purple-500",
        bgColor: "bg-gradient-to-br from-purple-400 to-pink-500",
        badgeColor: "bg-purple-100 text-purple-800",
        stars: 1
      };
    }
  };

  const performance = getPerformanceData(percentage);

  return (
    <div className="min-h-screen bg-gradient-warm py-8 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Floating Elements Animation */}
        <div className="relative">
          <div className="absolute -top-4 left-1/4 animate-bounce delay-100">
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </div>
          <div className="absolute -top-2 right-1/4 animate-bounce delay-300">
            <Star className="h-5 w-5 text-orange-400" />
          </div>
          <div className="absolute top-8 right-8 animate-bounce delay-500">
            <Sparkles className="h-4 w-4 text-pink-400" />
          </div>
        </div>

        <Card className="border-2 border-primary/20 overflow-hidden relative">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
          
          <CardHeader className="text-center relative z-10 pb-8">
            {/* Trophy with gradient background */}
            <div className={`mx-auto mb-6 w-24 h-24 ${performance.bgColor} rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300`}>
              <Trophy className="h-12 w-12 text-white" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < performance.stars
                      ? `fill-current ${performance.color}`
                      : "text-gray-300"
                  } transition-all duration-300 delay-${i * 100}`}
                />
              ))}
            </div>

            <CardTitle className="text-4xl font-bold text-primary mb-2">
              Congratulations!
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              Quiz completed successfully!
            </p>
          </CardHeader>

          <CardContent className="text-center space-y-8 relative z-10">
            {/* Score Display */}
            <div className="space-y-4">
              <div className={`text-7xl font-bold ${performance.color} animate-pulse`}>
                {percentage}%
              </div>
              <div className="text-xl text-muted-foreground">
                {score} out of {total} correct answers
              </div>
              
              <Badge className={`px-6 py-3 text-lg font-semibold ${performance.badgeColor} border-2`}>
                {performance.title}
              </Badge>
              
              <p className="text-base text-muted-foreground italic">
                {performance.subtitle}
              </p>
            </div>

            {/* Progress Insights */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-primary">Your Progress</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{score}</div>
                  <div className="text-sm text-muted-foreground">Correct</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{total - score}</div>
                  <div className="text-sm text-muted-foreground">Missed</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={onRestart}
                variant="outline"
                size="lg"
                className="flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <RotateCcw className="h-5 w-5" />
                Try Again
              </Button>
              
              <Button
                onClick={() => navigate("/learn")}
                size="lg"
                className="bg-gradient-primary text-white hover:scale-105 transition-transform flex items-center gap-3"
              >
                <BookOpen className="h-5 w-5" />
                Continue Learning
              </Button>
            </div>

            {/* Motivational Quote */}
            <div className="mt-8 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
              <p className="text-sm italic text-muted-foreground">
                "The Arabic language is the key to understanding the Quran and Islamic culture. Keep practicing!"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};