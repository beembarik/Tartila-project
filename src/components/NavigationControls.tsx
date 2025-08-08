import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface NavigationControlsProps {
  currentIndex: number;
  totalCount: number;
  onPrevious: () => void;
  onNext: () => void;
  onFlip: () => void;
  onShuffle: () => void;
  isFlipped: boolean;
}

export const NavigationControls = ({
  currentIndex,
  totalCount,
  onPrevious,
  onNext,
  onFlip,
  onShuffle,
  isFlipped
}: NavigationControlsProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-md mx-auto">
      {/* Progress Indicator */}
      <div className="text-sm text-muted-foreground font-medium">
        {currentIndex + 1} of {totalCount}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          disabled={currentIndex === 0}
          aria-label={t.navigation.previous}
        >
          <ChevronLeft size={16} />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onFlip}
          className="flex items-center gap-1"
        >
          <RotateCcw size={16} />
          {isFlipped ? t.actions.flip : t.actions.details}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={onShuffle}
          className="flex items-center gap-1"
        >
          <Shuffle size={16} />
          {t.navigation.shuffle}
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={currentIndex === totalCount - 1}
          aria-label={t.navigation.next}
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};