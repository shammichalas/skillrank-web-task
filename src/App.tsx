
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import { AppSettingsProvider } from "./context/AppSettingsContext";
import Index from "./pages/Index";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import BackgroundMusic from "./components/BackgroundMusic";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  // Only render the app once we've checked authentication
  if (!isAuthReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppSettingsProvider>
        <FavoritesProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BackgroundMusic />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/recipe/:id" element={<Recipe />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </FavoritesProvider>
      </AppSettingsProvider>
    </QueryClientProvider>
  );
};

export default App;
