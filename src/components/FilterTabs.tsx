
import { cn } from "@/lib/utils";

interface FilterTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const FilterTabs = ({ activeCategory, setActiveCategory }: FilterTabsProps) => {
  const categories = [
    { id: 'all', name: 'All', emoji: '✨' },
    { id: 'comforting', name: 'Comforting', emoji: '🍲' },
    { id: 'party', name: 'Party', emoji: '🎉' },
    { id: 'romantic', name: 'Romantic', emoji: '💖' },
    { id: 'healthy', name: 'Healthy', emoji: '🌿' }
  ];
  
  return (
    <div className="flex justify-center my-8">
      <div className="bg-white shadow-md rounded-full px-2 py-1 flex flex-wrap justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "text-sm sm:text-base px-4 py-2 mx-1 my-1 rounded-full transition-all duration-300",
              activeCategory === category.id 
                ? "bg-gradient-to-r from-cooking-mint to-cooking-peach text-gray-800 shadow-sm" 
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            <span className="mr-2">{category.emoji}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;
