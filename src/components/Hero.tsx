
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-cooking-peach py-16 sm:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=2026&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cooking-peach via-cooking-peach/90 to-transparent"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div 
          className="animate-fade-in max-w-3xl"
          style={{ animationDelay: '0.2s' }}
        >
          <h1 className="font-dancing text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-800">
            Explore Cooking Like Never Before
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover beautiful recipes that blend artistry with flavor. Each dish is crafted to delight both your palate and your eyes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-400 hover:from-amber-600 hover:to-orange-500 text-white font-medium px-8 shadow-md hover:shadow-lg transition-all duration-300 animate-bounce"
            >
              Browse Recipes
            </Button>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 hover:bg-cooking-rose/20 transition-all duration-300"
              >
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
