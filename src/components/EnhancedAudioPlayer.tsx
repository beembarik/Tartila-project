import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Loader2,
  SkipBack,
  SkipForward
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

interface EnhancedAudioPlayerProps {
  letterName: string;
  arabicLetter: string;
  letterId: string;
}

export const EnhancedAudioPlayer = ({ 
  letterName, 
  arabicLetter, 
  letterId 
}: EnhancedAudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState([80]);
  const [playbackSpeed, setPlaybackSpeed] = useState([1]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [repeatCount, setRepeatCount] = useState(0);
  const [maxRepeats, setMaxRepeats] = useState([3]);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  // Update audio properties when controls change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
      audioRef.current.playbackRate = playbackSpeed[0];
    }
  }, [volume, playbackSpeed]);

  // Update current time
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const playPronunciation = async () => {
    if (isLoading) return;

    setIsLoading(true);
    
    try {
      const audioPath = `/assets/audio/${letterId}.mp3`;
      
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      const audio = new Audio(audioPath);
      audioRef.current = audio;
      
      // Apply current settings
      audio.volume = volume[0] / 100;
      audio.playbackRate = playbackSpeed[0];
      
      audio.onloadstart = () => setIsLoading(true);
      audio.oncanplay = () => setIsLoading(false);
      audio.onplay = () => setIsPlaying(true);
      audio.onpause = () => setIsPlaying(false);
      
      audio.onended = () => {
        setIsPlaying(false);
        if (repeatCount < maxRepeats[0] - 1) {
          setRepeatCount(prev => prev + 1);
          setTimeout(() => {
            audio.currentTime = 0;
            audio.play();
          }, 500);
        } else {
          setRepeatCount(0);
        }
      };
      
      audio.onerror = () => {
        setIsLoading(false);
        setIsPlaying(false);
        
        // Fallback to Web Speech API
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(letterName);
          utterance.lang = 'ar-SA';
          utterance.rate = playbackSpeed[0] * 0.7;
          utterance.pitch = 1;
          utterance.volume = volume[0] / 100;
          
          utterance.onstart = () => {
            setIsPlaying(true);
            setIsLoading(false);
          };
          
          utterance.onend = () => {
            setIsPlaying(false);
            if (repeatCount < maxRepeats[0] - 1) {
              setRepeatCount(prev => prev + 1);
              setTimeout(() => {
                speechSynthesis.speak(utterance);
              }, 500);
            } else {
              setRepeatCount(0);
            }
          };
          
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
    setRepeatCount(0);
  };

  const seekAudio = (value: number[]) => {
    if (audioRef.current && duration > 0) {
      const newTime = (value[0] / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 5);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto hover-lift">
      <CardContent className="p-6 space-y-4">
        {/* Arabic Letter Display */}
        <div className="text-center space-y-2">
          <div className="text-6xl font-bold text-primary animate-glow">
            {arabicLetter}
          </div>
          <div className="text-lg text-muted-foreground">
            {letterName}
          </div>
        </div>

        {/* Progress Bar */}
        {duration > 0 && (
          <div className="space-y-2">
            <Slider
              value={[duration > 0 ? (currentTime / duration) * 100 : 0]}
              onValueChange={seekAudio}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        )}

        {/* Main Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={skipBackward}
            disabled={!isPlaying && !audioRef.current}
            className="hover-glow"
          >
            <SkipBack size={16} />
          </Button>

          <Button
            variant={isPlaying ? "destructive" : "default"}
            size="lg"
            onClick={isPlaying ? stopPronunciation : playPronunciation}
            disabled={isLoading}
            className="hover-glow transition-all duration-300"
          >
            {isLoading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : isPlaying ? (
              <Pause size={20} />
            ) : (
              <Play size={20} />
            )}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={skipForward}
            disabled={!isPlaying && !audioRef.current}
            className="hover-glow"
          >
            <SkipForward size={16} />
          </Button>
        </div>

        {/* Repeat Indicator */}
        {repeatCount > 0 && (
          <div className="text-center text-sm text-primary animate-pulse-soft">
            Repeat {repeatCount + 1} of {maxRepeats[0]}
          </div>
        )}

        {/* Volume Control */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <VolumeX size={16} className="text-muted-foreground" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={5}
              className="flex-1"
            />
            <Volume2 size={16} className="text-muted-foreground" />
          </div>
          <div className="text-center text-xs text-muted-foreground">
            Volume: {volume[0]}%
          </div>
        </div>

        {/* Advanced Controls */}
        <div className="flex items-center justify-between">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="hover-glow">
                <Settings size={16} />
                <span className="ml-2">Settings</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 space-y-4">
              <div className="space-y-3">
                <div>
                  <Label>Playback Speed: {playbackSpeed[0]}x</Label>
                  <Slider
                    value={playbackSpeed}
                    onValueChange={setPlaybackSpeed}
                    min={0.5}
                    max={2}
                    step={0.25}
                    className="w-full mt-2"
                  />
                </div>
                
                <div>
                  <Label>Repeat Count: {maxRepeats[0]}</Label>
                  <Slider
                    value={maxRepeats}
                    onValueChange={setMaxRepeats}
                    min={1}
                    max={10}
                    step={1}
                    className="w-full mt-2"
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setRepeatCount(0);
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
              }
            }}
            className="hover-glow"
          >
            <RotateCcw size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};