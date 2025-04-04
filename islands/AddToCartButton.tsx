// File: islands/AddToCartButton.tsx
import { h } from "preact";
import { useState } from "preact/hooks";

interface AddToCartButtonProps {
  productId: number;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    // Here you would implement actual cart functionality
    setIsAdded(true);
    
    // Reset the button after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };
  
  return (
    <button 
      onClick={handleAddToCart}
      class={`w-full font-medium py-2 px-4 rounded transition duration-300 ${
        isAdded 
          ? 'bg-green-600 hover:bg-green-700 text-white' 
          : 'bg-amber-600 hover:bg-amber-700 text-white'
      }`}
    >
      {isAdded ? 'Added to Cart!' : 'Add to Cart'}
    </button>
  );
}