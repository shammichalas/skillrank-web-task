
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Recipe } from "@/lib/data";

type FavoritesContextType = {
  favorites: Recipe[];
  addToFavorites: (recipe: Recipe) => void;
  removeFromFavorites: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("cookingFavorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cookingFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (recipe: Recipe) => {
    setFavorites((prev) => [...prev, recipe]);
  };

  const removeFromFavorites = (recipeId: string) => {
    setFavorites((prev) => prev.filter((recipe) => recipe.id !== recipeId));
  };

  const isFavorite = (recipeId: string) => {
    return favorites.some((recipe) => recipe.id === recipeId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
