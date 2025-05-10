
import { useEffect, useRef } from "react";
import RecipeCard from "./RecipeCard";
import { Recipe } from "@/lib/data";

interface MasonryGridProps {
  recipes: Recipe[];
}

const MasonryGrid = ({ recipes }: MasonryGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeAllGridItems = () => {
      const allItems = document.getElementsByClassName("masonry-item") as HTMLCollectionOf<HTMLElement>;
      for (let i = 0; i < allItems.length; i++) {
        resizeGridItem(allItems[i]);
      }
    };

    const resizeGridItem = (item: HTMLElement) => {
      if (!gridRef.current) return;
      
      const grid = gridRef.current;
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      
      const contentHeight = item.querySelector('.content')?.getBoundingClientRect().height || item.getBoundingClientRect().height;
      const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
      
      item.style.gridRowEnd = "span " + rowSpan;
    };

    const handleResize = () => {
      resizeAllGridItems();
    };

    resizeAllGridItems();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [recipes]);

  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="font-dancing text-3xl text-gray-600">No recipes found</h3>
        <p className="mt-2 text-gray-500">Try selecting a different category</p>
      </div>
    );
  }

  return (
    <div ref={gridRef} className="masonry-grid">
      {recipes.map((recipe, index) => (
        <RecipeCard key={recipe.id} recipe={recipe} index={index} />
      ))}
    </div>
  );
};

export default MasonryGrid;
