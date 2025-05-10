
import { useEffect, useRef, useState } from "react";
import { useAppSettings } from "@/context/AppSettingsContext";
import { useToast } from "@/hooks/use-toast";

const BackgroundMusic = () => {
  const { isPlayingMusic } = useAppSettings();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();
  
  // Use a different Creative Commons music URL with better compatibility
  const musicUrl = "https://cdn.freesound.org/previews/651/651272_11861866-lq.mp3";
  
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      
      // Set up event listeners before setting source to prevent race conditions
      audio.addEventListener('canplaythrough', () => {
        setIsLoaded(true);
      });
      
      audio.addEventListener('error', (e) => {
        console.error("Audio loading error:", e);
        toast({
          title: "Music Error",
          description: "Could not load background music. Try interacting with the page first.",
          variant: "destructive",
        });
      });
      
      audio.loop = true;
      audio.volume = 0.3;
      audio.preload = "auto";
      audio.src = musicUrl;
      
      audioRef.current = audio;
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('canplaythrough', () => {});
        audioRef.current.removeEventListener('error', () => {});
        audioRef.current = null;
      }
    };
  }, [toast]);
  
  useEffect(() => {
    if (audioRef.current && isLoaded) {
      if (isPlayingMusic) {
        // Using setTimeout to allow user interaction first
        setTimeout(() => {
          const playPromise = audioRef.current?.play();
          
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Audio playback was prevented:", error);
              toast({
                title: "Music Notice",
                description: "Please interact with the page first to enable music",
              });
            });
          }
        }, 100);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlayingMusic, isLoaded, toast]);
  
  return null; // This component doesn't render anything
};

export default BackgroundMusic;
