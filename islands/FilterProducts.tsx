// File: islands/FilterProducts.tsx
import { h } from "preact";
import { useEffect } from "preact/hooks";

export default function FilterProducts() {
  useEffect(() => {
    // Listen for category change events from the CategoryFilter island
    const handleCategoryChange = (event: CustomEvent) => {
      const { category } = event.detail;
      const productGrid = document.getElementById('product-grid');
      
      if (!productGrid) return;
      
      // Get all products from the data attribute
      const productsData = JSON.parse(productGrid.getAttribute('data-products') || '[]');
      
      // Filter products based on category
      const filteredProducts = category === 'all' 
        ? productsData 
        : productsData.filter((product: any) => product.category === category);
      
      // Get all product cards
      const productCards = document.querySelectorAll('[data-category]');
      
      // Show/hide products based on category
      productCards.forEach((card: HTMLElement) => {
        const productCategory = card.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    };
    
    window.addEventListener('categoryChanged', handleCategoryChange as EventListener);
    
    // Check URL on initial load
    const url = new URL(window.location.href);
    const categoryParam = url.searchParams.get('category');
    if (categoryParam) {
      const event = new CustomEvent('categoryChanged', { 
        detail: { category: categoryParam } 
      });
      window.dispatchEvent(event);
    }
    
    return () => {
      window.removeEventListener('categoryChanged', handleCategoryChange as EventListener);
    };
  }, []);
  
  return null; // This island doesn't render anything, it just adds client-side behavior
}