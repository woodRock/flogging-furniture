// File: components/Hero.tsx
import { h } from "preact";

export default function Hero() {
  return (
    <div class="relative bg-stone-800 text-white">
      <div class="absolute inset-0 opacity-40 bg-center bg-cover" style={{ backgroundImage: "url('/api/placeholder/1200/600')" }}></div>
      <div class="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Renewed Roots</h1>
        <p class="mt-6 max-w-lg mx-auto text-xl sm:max-w-3xl">
          Sustainably crafted furniture with stories to tell. Each piece is uniquely upcycled and handcrafted.
        </p>
        <div class="mt-10">
          <a href="#products" class="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
            Explore Collection
          </a>
        </div>
      </div>
    </div>
  );
}