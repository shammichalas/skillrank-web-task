
import { Moon, Sun, Music, Globe } from "lucide-react";
import { useAppSettings } from "@/context/AppSettingsContext";
import { Switch } from "@/components/ui/switch";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const SettingsMenu = () => {
  const { isDarkMode, toggleDarkMode, isPlayingMusic, toggleMusic, language, setLanguage, t } = useAppSettings();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel>{t('settings')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <div className="p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              <span>{t('darkMode')}</span>
            </div>
            <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
          </div>
        </div>
        
        <DropdownMenuSeparator />
        
        <div className="p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music className="w-4 h-4" />
              <span>{t('backgroundMusic')}</span>
            </div>
            <Switch checked={isPlayingMusic} onCheckedChange={toggleMusic} />
          </div>
        </div>
        
        <DropdownMenuSeparator />
        
        <div className="p-2">
          <p className="text-sm font-medium mb-2">{t('language')}</p>
          <RadioGroup
            value={language}
            onValueChange={(value) => setLanguage(value as "en" | "ta" | "hi")}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="en" id="en" />
              <Label htmlFor="en">English</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ta" id="ta" />
              <Label htmlFor="ta">தமிழ்</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hi" id="hi" />
              <Label htmlFor="hi">हिंदी</Label>
            </div>
          </RadioGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsMenu;
