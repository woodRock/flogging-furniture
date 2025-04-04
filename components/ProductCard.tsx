// File: components/ProductCard.tsx
import { h } from "preact";
import { Product } from "../types.ts";
import AddToCartButton from "../islands/AddToCartButton.tsx";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div key={product.id} class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300" data-category={product.category}>
      <div class="relative h-64 bg-gray-200">
        <img 
          src={product.imageSrc} 
          alt={product.name} 
          class="w-full h-full object-cover"
        />
        <div class="absolute top-0 right-0 bg-amber-600 text-white m-4 px-3 py-1 rounded-full text-sm font-medium">
          ${product.price.toFixed(2)}
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p class="mt-2 text-gray-600">{product.description}</p>
        <ul class="mt-4 space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} class="flex items-start">
              <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <div class="mt-6">
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  );
}