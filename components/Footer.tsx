// File: components/Footer.tsx
import { h } from "preact";
import NewsletterForm from "../islands/NewsletterForm.tsx";

export default function Footer() {
  return (
    <footer class="bg-stone-800 text-white">
      <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold">Renewed Roots</h3>
            <p class="mt-4 text-stone-300 text-sm">
              Creating sustainable furniture with character since 2025. Each piece tells a story and helps create a greener future.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Quick Links</h3>
            <ul class="mt-4 space-y-2">
              <li><a href="/" class="text-stone-300 hover:text-white transition duration-300">Catalogue</a></li>
              <li><a href="/about" class="text-stone-300 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/custom" class="text-stone-300 hover:text-white transition duration-300">Custom Orders</a></li>
              <li><a href="/sustainability" class="text-stone-300 hover:text-white transition duration-300">Sustainability</a></li>
              <li><a href="/contact" class="text-stone-300 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Newsletter</h3>
            <p class="mt-4 text-stone-300 text-sm">
              Subscribe to receive updates on new arrivals and special promotions.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <div class="mt-12 border-t border-stone-700 pt-8 text-center text-sm text-stone-400">
          © {new Date().getFullYear()} Renewed Roots. All rights reserved.
        </div>
      </div>
    </footer>
  );
}