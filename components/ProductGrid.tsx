// File: components/ProductGrid.tsx
import { h } from "preact";
import { Product } from "../types.ts";
import ProductCard from "./ProductCard.tsx";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div class="py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="product-grid" data-products={JSON.stringify(products)}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}