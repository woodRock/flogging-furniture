// File: components/ProcessTimeline.tsx
// This is a static component that would replace the Process Timeline section in routes/custom.tsx

import { h } from "preact";

export default function ProcessTimeline() {
  return (
    <div class="bg-stone-100 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-16">Our Custom Order Process</h2>
        
        <div class="relative">
          {/* Timeline container */}
          <div class="hidden md:block absolute left-1/2 h-full w-1 bg-amber-200 transform -translate-x-1/2"></div>
          
          <div class="space-y-24"> {/* Increased spacing between steps */}
            {/* Step 1 */}
            <div class="relative">
              <div class="md:flex md:items-center">
                <div class="md:w-5/12 md:pr-16 md:text-right"> {/* Increased right padding */}
                  <h3 class="text-xl font-semibold text-gray-900">1. Initial Consultation</h3>
                  <p class="mt-3 text-gray-600">
                    We begin with a conversation about your vision, needs, and space. Share your ideas, inspiration photos, and any specific requirements you have for your custom piece.
                  </p>
                </div>
                
                {/* Timeline node */}
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div class="h-12 w-12 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">1</div>
                </div>
                
                <div class="mt-6 md:mt-0 md:w-5/12 md:pl-16"> {/* Increased left padding */}
                  <div class="h-64 overflow-hidden rounded-lg shadow-md"> {/* Fixed height container */}
                    <img 
                      src="/api/placeholder/600/400" 
                      alt="Initial consultation" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div class="relative">
              <div class="md:flex md:items-center">
                <div class="md:w-5/12 md:pr-16 md:order-last md:text-left"> {/* Flipped sides, increased padding */}
                  <h3 class="text-xl font-semibold text-gray-900">2. Material Selection</h3>
                  <p class="mt-3 text-gray-600">
                    We'll explore material options from our inventory of reclaimed wood, metal, and other sustainable materials. You're welcome to visit our workshop to see and touch potential materials in person.
                  </p>
                </div>
                
                {/* Timeline node */}
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div class="h-12 w-12 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">2</div>
                </div>
                
                <div class="mt-6 md:mt-0 md:w-5/12 md:pl-16 md:order-first md:text-right"> {/* Flipped sides, increased padding */}
                  <div class="h-64 overflow-hidden rounded-lg shadow-md"> {/* Fixed height container */}
                    <img 
                      src="/api/placeholder/600/400" 
                      alt="Material selection" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div class="relative">
              <div class="md:flex md:items-center">
                <div class="md:w-5/12 md:pr-16 md:text-right"> {/* Increased padding */}
                  <h3 class="text-xl font-semibold text-gray-900">3. Design & Proposal</h3>
                  <p class="mt-3 text-gray-600">
                    Based on our discussions, we'll create a detailed design proposal including sketches or renderings, dimensions, material specifications, and pricing. We'll refine this together until you're completely satisfied.
                  </p>
                </div>
                
                {/* Timeline node */}
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div class="h-12 w-12 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">3</div>
                </div>
                
                <div class="mt-6 md:mt-0 md:w-5/12 md:pl-16"> {/* Increased padding */}
                  <div class="h-64 overflow-hidden rounded-lg shadow-md"> {/* Fixed height container */}
                    <img 
                      src="/api/placeholder/600/400" 
                      alt="Design proposal" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div class="relative">
              <div class="md:flex md:items-center">
                <div class="md:w-5/12 md:pr-16 md:order-last md:text-left"> {/* Flipped sides, increased padding */}
                  <h3 class="text-xl font-semibold text-gray-900">4. Crafting Your Piece</h3>
                  <p class="mt-3 text-gray-600">
                    Once the design is approved and the deposit is received, our artisans begin crafting your piece. We'll send you progress updates throughout the creation process.
                  </p>
                </div>
                
                {/* Timeline node */}
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div class="h-12 w-12 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">4</div>
                </div>
                
                <div class="mt-6 md:mt-0 md:w-5/12 md:pl-16 md:order-first md:text-right"> {/* Flipped sides, increased padding */}
                  <div class="h-64 overflow-hidden rounded-lg shadow-md"> {/* Fixed height container */}
                    <img 
                      src="/api/placeholder/600/400" 
                      alt="Crafting process" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div class="relative">
              <div class="md:flex md:items-center">
                <div class="md:w-5/12 md:pr-16 md:text-right"> {/* Increased padding */}
                  <h3 class="text-xl font-semibold text-gray-900">5. Delivery & Installation</h3>
                  <p class="mt-3 text-gray-600">
                    When your piece is complete, we'll schedule delivery and installation. We'll ensure everything fits perfectly in your space and provide care instructions for your new furniture.
                  </p>
                </div>
                
                {/* Timeline node */}
                <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div class="h-12 w-12 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">5</div>
                </div>
                
                <div class="mt-6 md:mt-0 md:w-5/12 md:pl-16"> {/* Increased padding */}
                  <div class="h-64 overflow-hidden rounded-lg shadow-md"> {/* Fixed height container */}
                    <img 
                      src="/api/placeholder/600/400" 
                      alt="Delivery and installation" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}