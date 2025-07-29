import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AudioPlayerProps {
  letterName: string;
  arabicLetter: string;
}

export const AudioPlayer = ({ letterName, arabicLetter }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  // For now, we'll simulate audio playback with Text-to-Speech API
  const playPronunciation = async () => {
    if (isPlaying || isLoading) return;

    setIsLoading(true);
    
    try {
      // Use Web Speech API for pronunciation if available
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(letterName);
        utterance.lang = 'ar-SA'; // Arabic (Saudi Arabia)
        utterance.rate = 0.7; // Slower for learning
        utterance.pitch = 1;
        utterance.volume = 0.8;
        
        utterance.onstart = () => {
          setIsPlaying(true);
          setIsLoading(false);
        };
        
        utterance.onend = () => {
          setIsPlaying(false);
        };
        
        utterance.onerror = () => {
          setIsPlaying(false);
          setIsLoading(false);
          toast({
            title: "Audio Error",
            description: "Could not play pronunciation. Please try again.",
            variant: "destructive"
          });
        };
        
        // Stop any currently playing speech
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
      } else {
        setIsLoading(false);
        toast({
          title: "Audio Not Supported",
          description: "Your browser doesn't support audio playback.",
          variant: "destructive"
        });
      }
    } catch (error) {
      setIsLoading(false);
      setIsPlaying(false);
      toast({
        title: "Audio Error",
        description: "Failed to play pronunciation.",
        variant: "destructive"
      });
    }
  };

  const stopPronunciation = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={isPlaying ? "destructive" : "default"}
        size="sm"
        onClick={isPlaying ? stopPronunciation : playPronunciation}
        disabled={isLoading}
        className="flex items-center gap-2"
      >
        {isLoading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : isPlaying ? (
          <VolumeX size={16} />
        ) : (
          <Volume2 size={16} />
        )}
        {isLoading ? "Loading..." : isPlaying ? "Stop" : "Play"}
      </Button>
      
      <div className="text-sm text-muted-foreground">
        {arabicLetter} - {letterName}
      </div>
    </div>
  );
};