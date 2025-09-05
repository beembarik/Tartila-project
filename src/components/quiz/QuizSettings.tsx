import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/useLanguage";
import { Settings, Clock, Hash } from "lucide-react";

interface QuizSettingsProps {
  onStart: (settings: QuizSettings) => void;
  onBack: () => void;
}

export interface QuizSettings {
  numberOfQuestions: number;
  hasTimer: boolean;
  timerMinutes: number;
}

export const QuizSettings = ({ onStart, onBack }: QuizSettingsProps) => {
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [hasTimer, setHasTimer] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(5);
  const { t } = useLanguage();

  const handleStart = () => {
    onStart({
      numberOfQuestions,
      hasTimer,
      timerMinutes
    });
  };

  return (
    <div className="min-h-screen bg-gradient-warm py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4"
          >
            ← Back to Quiz Selection
          </Button>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
            <Settings className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-primary mb-2">
            Quiz Settings
          </h1>
          <p className="text-muted-foreground">
            Customize your Duolingo-style quiz experience
          </p>
        </div>

        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Configure Your Quiz
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Number of Questions */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-primary flex items-center gap-2">
                <Hash className="h-4 w-4" />
                Number of Questions
              </Label>
              <Select
                value={numberOfQuestions.toString()}
                onValueChange={(value) => setNumberOfQuestions(parseInt(value))}
              >
                <SelectTrigger className="w-full bg-accent-light text-muted-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Questions</SelectItem>
                  <SelectItem value="10">10 Questions</SelectItem>
                  <SelectItem value="15">15 Questions</SelectItem>
                  <SelectItem value="20">20 Questions</SelectItem>
                  <SelectItem value="25">25 Questions</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Choose how many questions you want to answer
              </p>
            </div>

            {/* Timer Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-background font-semibold text-primary flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Enable Timer
                </Label>
                <Switch
  checked={hasTimer}
  onCheckedChange={setHasTimer}
  colorOn="bg-secondary"
  colorOff="bg-foreground"
  thumbColorOn="bg-accent-light"
  thumbColorOff="bg-primary-foreground"
                />
              </div>
              
              {hasTimer && (
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">
                    Timer Duration (minutes)
                  </Label>
                  <Input
                    type="number"
                    min="1"
                    max="30"
                    value={timerMinutes}
                    onChange={(e) => setTimerMinutes(parseInt(e.target.value) || 5)}
                    className="w-full bg-accent-light"
                  />
                  <p className="text-xs text-muted-foreground">
                    Set time limit between 1-30 minutes
                  </p>
                </div>
              )}
            </div>

            {/* Quiz Preview */}
            <div className="bg-primary/5 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-primary">Quiz Summary</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• {numberOfQuestions} questions about Arabic letters</p>
                <p>• Multiple choice format with instant feedback</p>
                {hasTimer ? (
                  <p>• {timerMinutes} minute time limit</p>
                ) : (
                  <p>• No time limit (practice mode)</p>
                )}
                <p>• Progress tracking and final score</p>
              </div>
            </div>

            {/* Start Button */}
            <Button
              onClick={handleStart}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              size="lg"
            >
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};