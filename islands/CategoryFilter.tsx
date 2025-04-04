// File: islands/CategoryFilter.tsx
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

interface CategoryFilterProps {
  categories: {
    id: string;
    name: string;
  }[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Update URL with the selected category
  useEffect(() => {
    const url = new URL(window.location.href);
    if (activeCategory === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', activeCategory);
    }
    window.history.pushState({}, '', url);
    
    // Dispatch custom event for the product grid to listen to
    const event = new CustomEvent('categoryChanged', { 
      detail: { category: activeCategory } 
    });
    window.dispatchEvent(event);
  }, [activeCategory]);
  
  // Initialize from URL if category is present
  useEffect(() => {
    const url = new URL(window.location.href);
    const categoryParam = url.searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, []);
  
  return (
    <div class="border-b border-gray-200">
      <nav class="flex space-x-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            class={`pb-4 px-1 font-medium text-sm ${
              activeCategory === category.id
                ? 'border-b-2 border-amber-600 text-amber-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </nav>
    </div>
  );
}