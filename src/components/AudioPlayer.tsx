import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AudioPlayerProps {
  letterName: string;
  arabicLetter: string;
  letterId: string;
}

export const AudioPlayer = ({ letterName, arabicLetter, letterId }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const playPronunciation = async () => {
    if (isPlaying || isLoading) return;

    setIsLoading(true);
    
    try {
      // Create audio element with the path to the MP3 file
      const audioPath = `/assets/audio/${letterId}.mp3`;
      
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      const audio = new Audio(audioPath);
      audioRef.current = audio;
      
      audio.onloadstart = () => setIsLoading(true);
      audio.oncanplay = () => setIsLoading(false);
      
      audio.onplay = () => setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
      audio.onpause = () => setIsPlaying(false);
      
      audio.onerror = () => {
        setIsLoading(false);
        setIsPlaying(false);
        
        // Fallback to Web Speech API if MP3 file is not available
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(letterName);
          utterance.lang = 'ar-SA';
          utterance.rate = 0.7;
          utterance.pitch = 1;
          utterance.volume = 0.8;
          
          utterance.onstart = () => {
            setIsPlaying(true);
            setIsLoading(false);
          };
          
          utterance.onend = () => setIsPlaying(false);
          
          speechSynthesis.cancel();
          speechSynthesis.speak(utterance);
        } else {
          toast({
            title: "Audio Error",
            description: "Audio file not found and speech synthesis not supported.",
            variant: "destructive"
          });
        }
      };
      
      await audio.play();
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
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
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