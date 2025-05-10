
import { useFavorites } from "@/context/FavoritesContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MasonryGrid from "@/components/MasonryGrid";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Favorites = () => {
  const { favorites } = useFavorites();
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-10">
          <h1 className="font-dancing text-5xl mb-4">Your Favorite Recipes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All of your saved culinary inspirations in one place. Ready to cook whenever you are.
          </p>
        </div>
        
        {favorites.length > 0 ? (
          <MasonryGrid recipes={favorites} />
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="text-6xl mb-4">💖</div>
            <h2 className="font-dancing text-3xl mb-3">No favorites yet</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start exploring recipes and save your favorites to find them here.
            </p>
            <Link to="/">
              <Button>
                Browse Recipes
              </Button>
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Favorites;
