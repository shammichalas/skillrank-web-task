
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Heart, User, LogOut } from "lucide-react";
import SearchBar from "./SearchBar";
import SettingsMenu from "./SettingsMenu";
import { useAppSettings } from "@/context/AppSettingsContext";
import { auth, signOut } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useAppSettings();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Logged out",
        description: "You have been logged out successfully.",
      });
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Error",
        description: "There was an error logging out. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  // Check if user is logged in
  const currentUser = auth.currentUser;
  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm py-4 transition-colors duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-3xl mr-2">🍳</span>
          <span className="font-dancing text-2xl md:text-3xl font-bold dark:text-white">The Art of Cooking</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <SettingsMenu />
          <button
            className="p-2 ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <SearchBar className="w-64" />
          
          <Link
            to="/"
            className={`transition-colors duration-200 hover:text-orange-600 ${
              isActive("/") ? "text-orange-500 font-medium" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {t('home')}
          </Link>
          
          <Link
            to="/favorites"
            className={`flex items-center transition-colors duration-200 hover:text-pink-600 ${
              isActive("/favorites") ? "text-pink-500 font-medium" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <Heart className="w-4 h-4 mr-1" />
            {t('favorites')}
          </Link>
          
          {currentUser ? (
            <button
              onClick={handleSignOut}
              className={`flex items-center transition-colors duration-200 hover:text-red-600 text-gray-600 dark:text-gray-300`}
            >
              <LogOut className="w-4 h-4 mr-1" />
              {t('logout')}
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className={`flex items-center transition-colors duration-200 hover:text-blue-600 ${
                  isActive("/login") ? "text-blue-500 font-medium" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                <User className="w-4 h-4 mr-1" />
                {t('login')}
              </Link>
              
              <Link
                to="/register"
                className={`transition-colors duration-200 hover:text-orange-600 ${
                  isActive("/register") ? "text-orange-500 font-medium" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {t('register')}
              </Link>
            </>
          )}
          
          <SettingsMenu />
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 py-2 bg-white dark:bg-gray-900">
          <SearchBar className="mb-4" />
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md ${
                isActive("/") ? "bg-orange-100 text-orange-500 dark:bg-orange-900 dark:text-orange-300" : "text-gray-600 dark:text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              to="/favorites"
              className={`px-3 py-2 rounded-md flex items-center ${
                isActive("/favorites") ? "bg-pink-100 text-pink-500 dark:bg-pink-900 dark:text-pink-300" : "text-gray-600 dark:text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className="w-4 h-4 mr-1" />
              {t('favorites')}
            </Link>
            
            {currentUser ? (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="px-3 py-2 rounded-md flex items-center text-gray-600 dark:text-gray-300 hover:bg-red-100 hover:text-red-500 dark:hover:bg-red-900 dark:hover:text-red-300"
              >
                <LogOut className="w-4 h-4 mr-1" />
                {t('logout')}
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`px-3 py-2 rounded-md flex items-center ${
                    isActive("/login") ? "bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300" : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4 mr-1" />
                  {t('login')}
                </Link>
                <Link
                  to="/register"
                  className={`px-3 py-2 rounded-md ${
                    isActive("/register") ? "bg-orange-100 text-orange-500 dark:bg-orange-900 dark:text-orange-300" : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('register')}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
