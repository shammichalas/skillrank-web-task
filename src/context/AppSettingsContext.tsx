
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

type Language = "en" | "ta" | "hi";

interface Translations {
  [key: string]: {
    en: string;
    ta: string;
    hi: string;
  };
}

// Basic translations for demonstration
const translations: Translations = {
  home: {
    en: "Home",
    ta: "முகப்பு",
    hi: "होम"
  },
  favorites: {
    en: "Favorites",
    ta: "பிடித்தவை",
    hi: "पसंदीदा"
  },
  login: {
    en: "Login",
    ta: "உள்நுழைய",
    hi: "लॉगिन"
  },
  register: {
    en: "Register",
    ta: "பதிவு செய்க",
    hi: "रजिस्टर"
  },
  darkMode: {
    en: "Dark Mode",
    ta: "இருள் பயன்முறை",
    hi: "डार्क मोड"
  },
  backgroundMusic: {
    en: "Background Music",
    ta: "பின்னணி இசை",
    hi: "पृष्ठभूमि संगीत"
  },
  language: {
    en: "Language",
    ta: "மொழி",
    hi: "भाषा"
  },
  settings: {
    en: "Settings",
    ta: "அமைப்புகள்",
    hi: "सेटिंग्स"
  },
  english: {
    en: "English",
    ta: "ஆங்கிலம்",
    hi: "अंग्रेज़ी"
  },
  tamil: {
    en: "Tamil",
    ta: "தமிழ்",
    hi: "तमिल"
  },
  hindi: {
    en: "Hindi",
    ta: "இந்தி",
    hi: "हिंदी"
  }
};

type AppSettingsContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isPlayingMusic: boolean;
  toggleMusic: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const AppSettingsContext = createContext<AppSettingsContextType | undefined>(undefined);

export function AppSettingsProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const { toast } = useToast();
  
  // Initialize from localStorage if available
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === "true");
    }
    
    const storedLanguage = localStorage.getItem("language") as Language | null;
    if (storedLanguage && ["en", "ta", "hi"].includes(storedLanguage)) {
      setLanguage(storedLanguage as Language);
    }
    
    const storedMusicState = localStorage.getItem("isPlayingMusic");
    if (storedMusicState) {
      setIsPlayingMusic(storedMusicState === "true");
    }
  }, []);
  
  // Apply dark mode class to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);
  
  // Save language preference
  useEffect(() => {
    localStorage.setItem("language", language);
    toast({
      title: "Language Changed",
      description: `The language has been changed to ${t('english')} (${language})`,
    });
  }, [language]);
  
  // Save music preference
  useEffect(() => {
    localStorage.setItem("isPlayingMusic", isPlayingMusic.toString());
  }, [isPlayingMusic]);
  
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };
  
  const toggleMusic = () => {
    setIsPlayingMusic(prev => {
      const newState = !prev;
      if (newState) {
        toast({
          title: "Music Playing",
          description: "Background music has been turned on",
        });
      } else {
        toast({
          title: "Music Stopped",
          description: "Background music has been turned off",
        });
      }
      return newState;
    });
  };
  
  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || key;
  };
  
  return (
    <AppSettingsContext.Provider 
      value={{ 
        isDarkMode, 
        toggleDarkMode, 
        isPlayingMusic, 
        toggleMusic,
        language,
        setLanguage,
        t
      }}
    >
      {children}
    </AppSettingsContext.Provider>
  );
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext);
  if (context === undefined) {
    throw new Error("useAppSettings must be used within an AppSettingsProvider");
  }
  return context;
}
