
import { Recipe } from "@/lib/data";
import { useFavorites } from "@/context/FavoritesContext";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

const RecipeCard = ({ recipe, index }: RecipeCardProps) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isFav = isFavorite(recipe.id);
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFav) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };
  
  // Category emojis mapping
  const categoryEmojis = {
    comforting: "🍲",
    party: "🎉",
    romantic: "💖",
    healthy: "🌿",
  };

  return (
    <div 
      className={cn(
        "masonry-item rounded-lg overflow-hidden shadow-md bg-white transition-all duration-300",
        "hover:shadow-xl animate-fade-in"
      )}
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <Link to={`/recipe/${recipe.id}`} className="block">
        <div className="relative">
          <img 
            src={recipe.imageUrl} 
            alt={recipe.title} 
            className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
          <button
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
          >
            <Heart className={cn("w-5 h-5", isFav ? "fill-rose-500 text-rose-500" : "text-gray-600")} />
          </button>
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-1/2"></div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-2">
            <span className="text-xl mr-2">{categoryEmojis[recipe.category]}</span>
            <span className="text-sm text-gray-600 capitalize">{recipe.category}</span>
          </div>
          <h3 className="font-dancing text-2xl mb-2">{recipe.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{recipe.description}</p>
          <div className="flex justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">
            <span>⏱️ {recipe.prepTime} prep</span>
            <span>🍽️ {recipe.servings} servings</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
