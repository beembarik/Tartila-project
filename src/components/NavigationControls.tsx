import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, RotateCcw, Shuffle } from "lucide-react";

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
          size="sm"
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-1"
        >
          <ChevronLeft size={16} />
          Previous
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onFlip}
          className="flex items-center gap-1"
        >
          <RotateCcw size={16} />
          {isFlipped ? "Front" : "Details"}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onShuffle}
          className="flex items-center gap-1"
        >
          <Shuffle size={16} />
          Shuffle
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={currentIndex === totalCount - 1}
          className="flex items-center gap-1"
        >
          Next
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};