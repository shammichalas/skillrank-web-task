
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { recipes } from "@/lib/data";
import { useFavorites } from "@/context/FavoritesContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Clock, Users, ChevronLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Recipe = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(recipes.find(r => r.id === id));
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isFav = id ? isFavorite(id) : false;
  const { toast } = useToast();
  
  useEffect(() => {
    // Find recipe based on id
    const foundRecipe = recipes.find(r => r.id === id);
    setRecipe(foundRecipe);
    
    // Scroll to top when recipe changes
    window.scrollTo(0, 0);
  }, [id]);
  
  const handleFavoriteToggle = () => {
    if (!recipe) return;
    
    if (isFav) {
      removeFromFavorites(recipe.id);
      toast({
        title: "Removed from favorites",
        description: `${recipe.title} has been removed from your favorites.`,
      });
    } else {
      addToFavorites(recipe);
      toast({
        title: "Added to favorites",
        description: `${recipe.title} has been added to your favorites.`,
      });
    }
  };
  
  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe?.title,
        text: recipe?.description,
        url: window.location.href,
      }).catch((err) => {
        console.error('Error sharing:', err);
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast({
          title: "Link copied!",
          description: "Recipe link copied to clipboard",
        });
      });
    }
  };
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center flex-grow">
          <h2 className="font-dancing text-3xl mb-4">Recipe not found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the recipe you're looking for.</p>
          <Link to="/" className="text-orange-500 hover:text-orange-600 font-medium">
            Return to all recipes
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleStartCooking = () => {
    navigate("/login");
    toast({
      title: "Login Required",
      description: "Please login to start cooking this recipe.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="flex-grow">
        {/* Banner Image */}
        <div className="relative h-64 sm:h-96 overflow-hidden">
          <img 
            src={recipe.imageUrl} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <Link to="/" className="flex items-center text-white/80 hover:text-white mb-4 transition-colors w-fit">
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to recipes
            </Link>
            <h1 className="font-dancing text-4xl md:text-5xl">{recipe.title}</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          {/* Recipe Info & Actions */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div className="flex flex-wrap gap-4 md:gap-8">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-gray-800">
                  <span className="font-medium">Prep:</span> {recipe.prepTime}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-gray-800">
                  <span className="font-medium">Cook:</span> {recipe.cookTime}
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-gray-800">
                  <span className="font-medium">Serves:</span> {recipe.servings}
                </span>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4 sm:mt-0">
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center"
                onClick={handleShareClick}
              >
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
              <Button 
                variant={isFav ? "default" : "outline"}
                size="sm"
                className={cn(
                  "flex items-center",
                  isFav ? "bg-pink-500 hover:bg-pink-600" : ""
                )}
                onClick={handleFavoriteToggle}
              >
                <Heart className={cn("w-4 h-4 mr-1", isFav ? "fill-white" : "")} />
                {isFav ? "Saved" : "Save"}
              </Button>
            </div>
          </div>
          
          {/* Recipe Description */}
          <p className="text-lg text-gray-700 mb-10 max-w-3xl">{recipe.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ingredients Column */}
            <div className="md:col-span-1">
              <div className="bg-cooking-ivory/50 rounded-xl p-6 shadow-sm">
                <h2 className="font-dancing text-3xl mb-4">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Instructions Column */}
            <div className="md:col-span-2">
              <h2 className="font-dancing text-3xl mb-4">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 bg-cooking-peach rounded-full flex items-center justify-center font-medium">
                        {index + 1}
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="text-gray-700">{instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="mt-12 mb-8 flex justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white font-medium px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={handleStartCooking}
            >
              Start Cooking
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Recipe;
