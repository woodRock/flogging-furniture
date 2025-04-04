// File: routes/index.tsx (Updated)
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import CategoryFilter from "../islands/CategoryFilter.tsx";
import FilterProducts from "../islands/FilterProducts.tsx";
import ProductGrid from "../components/ProductGrid.tsx";
import Hero from "../components/Hero.tsx";
import SustainabilitySection from "../components/SustainabilitySection.tsx";
import Footer from "../components/Footer.tsx";
import { Product } from "../types.ts";

// Data that would normally come from a database or API
const products = [
  {
    id: 1,
    name: 'Reclaimed Oak Coffee Table',
    price: 349.99,
    category: 'tables',
    description: 'Handcrafted coffee table made from 100-year-old barn wood. Each piece features unique grain patterns and historical markings.',
    features: ['Sustainable oak wood', 'Metal hairpin legs', 'Natural finish', 'Dimensions: 42"L x 24"W x 18"H'],
    imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.custommade.com%2FQrxHmaxyXtDLCNYxqafgiF40vg4%3D%2Fcustommade-photosets%2F328867%2F328867.1002732.jpg&f=1&nofb=1&ipt=dcda9addbd393a5d3417be303b7d650af3b691347466017470905e209d11e4d2&ipo=images'
  },
  {
    id: 2,
    name: "Mid-Century Modern Armchair",
    price: 499.99,
    category: "seating",
    description: "A stylish armchair with a solid wood frame and soft, eco-friendly upholstery. Perfect for any living room.",
    features: [ 'Solid wood frame', 'Eco-friendly upholstery', 'Comfortable cushioning', 'Dimensions: 30"H x 28"W x 32"D'],
    imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feverythingbackyard.net%2Fwp-content%2Fuploads%2F2017%2F03%2F2_recycled-plastic-chair.jpg&f=1&nofb=1&ipt=226e47a83489550a6ecf0353e0e15088b86e0e1a48699450a6d3dbc58bb817a3&ipo=images"
  },
  {
    id: 3,
    name: "Industrial Chest of Drawers",
    price: 599.99,
    category: "storage",
    description: "A robust chest of drawers made from reclaimed metal and wood. Ideal for storing clothes or other items.",
    features: ['Reclaimed metal and wood', 'Industrial design', 'Multiple storage compartments', 'Dimensions: 36"H x 30"W x 18"D'],
    imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.1o1pallets.com%2Fwp-content%2Fuploads%2F2015%2F04%2Fpallet-chest-of-drawers.jpg&f=1&nofb=1&ipt=f0d8cd7ac56f92d3ccb313c291145aae8f7fff6fb320e619b170b1c0f97f74e8&ipo=images"
  },
  {
    id: 4,
    name: "Reclaimed Wooden Pallet Wall Art",
    price: 79.99,
    category: "decor",
    description: "Unique wall art made from reclaimed wooden pallets. Each piece is handcrafted and features a rustic design.",
    features: ['Handcrafted from reclaimed wood', 'Rustic design', 'Lightweight and easy to hang', 'Dimensions: 24" x 36"'],
    imageSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.custommade.com%2FO7XxKkvVavmec_ahoYtqqAbgIOk%3D%2Fcustommade-photosets%2F92642%2F92642.875166.jpg&f=1&nofb=1&ipt=489cc0e6694cced396a589baac2f45c456b82f8cb4d065f5ff3b145a23806b73&ipo=images"
  }
];

const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'seating', name: 'Seating' },
  { id: 'tables', name: 'Tables' },
  { id: 'storage', name: 'Storage' },
  { id: 'decor', name: 'Decor' }
];

// Server handlers for the route
export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render({ products, categories });
  },
};

export default function Home({ data }: PageProps<{ products: Product[], categories: {id: string, name: string}[] }>) {
  const { products, categories } = data;
  
  return (
    <div class="bg-stone-50 min-h-screen">
      <Hero />
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12" id="products">
        <CategoryFilter categories={categories} />
        <ProductGrid products={products} />
        <FilterProducts /> {/* Client-side filtering logic */}
      </div>
      
      <SustainabilitySection />
      <Footer />
    </div>
  );
}