// File: components/SustainabilitySection.tsx
import { h } from "preact";

export default function SustainabilitySection() {
  return (
    <div class="bg-stone-100 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900">Our Sustainable Promise</h2>
            <p class="mt-4 text-gray-600">
              Every piece in our collection is thoughtfully crafted from salvaged materials that would otherwise end up in landfills. By choosing our furniture, you're not just decorating your home—you're participating in a circular economy and reducing environmental impact.
            </p>
            <div class="mt-8 grid grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <div class="text-amber-600 text-2xl font-bold">2,500+</div>
                <div class="text-gray-600">Pounds of material diverted from landfills monthly</div>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm">
                <div class="text-amber-600 text-2xl font-bold">100%</div>
                <div class="text-gray-600">Locally sourced materials and craftsmanship</div>
              </div>
            </div>
          </div>
          <div class="mt-10 lg:mt-0">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreativecommons.org%2Fwp-content%2Fuploads%2F2023%2F05%2FUntitled-design.jpg&f=1&nofb=1&ipt=c85e00aac205fb064af0e4c4be696bfc9600567bbfa35b5b9879c9371efc262d&ipo=images" alt="Sustainability" class="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}