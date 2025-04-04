// File: routes/custom.tsx
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import CustomOrderForm from "../islands/CustomOrderForm.tsx";

export default function CustomOrders() {
  return (
    <div class="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <div class="relative bg-stone-800 text-white">
        <div class="absolute inset-0 opacity-40 bg-center bg-cover" style={{ backgroundImage: "url('/api/placeholder/1200/400')" }}></div>
        <div class="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Custom Orders</h1>
          <p class="mt-6 max-w-lg mx-auto text-xl sm:max-w-3xl">
            Bring your vision to life with furniture crafted specifically for your space.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900">Your Vision, Our Craft</h2>
            <div class="mt-6 text-gray-600 space-y-6">
              <p>
                At Renewed Roots, custom projects are at the heart of what we do. We believe that furniture should be as unique as the space it inhabits and the people who use it.
              </p>
              <p>
                Our collaborative design process ensures that each piece not only meets your functional needs but also tells a story through thoughtfully selected reclaimed materials and expert craftsmanship.
              </p>
              <p>
                Whether you're looking for a statement dining table made from salvaged barn wood, a custom shelving unit built from industrial materials, or a special piece that incorporates materials with personal significance, we're here to bring your vision to life.
              </p>
            </div>
          </div>
          <div class="mt-10 lg:mt-0">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F58%2F04%2Ff6%2F5804f656243ee170200e37b80761ca4e.jpg&f=1&ipt=6ff6229f4feb1547002e034feddb83e331b828562c4aa6eece8eb396886751dd" alt="Custom furniture design process" class="rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div class="bg-stone-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Custom Order Process</h2>
          
          <div class="relative">
            {/* Timeline line */}
            <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
            
            {/* Timeline steps */}
            <div class="space-y-12">
              {/* Step 1 */}
              <div class="relative">
                <div class="md:flex items-center md:space-x-12">
                  <div class="md:w-1/2 md:text-right md:pr-8">
                    <h3 class="text-xl font-semibold text-gray-900">1. Initial Consultation</h3>
                    <p class="mt-3 text-gray-600">
                      We begin with a conversation about your vision, needs, and space. Share your ideas, inspiration photos, and any specific requirements you have for your custom piece.
                    </p>
                  </div>
                  
                  <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div class="h-12 w-12 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">1</div>
                  </div>
                  
                  <div class="mt-4 md:mt-0 md:w-1/2 md:pl-8">
                    <img src="/api/placeholder/400/250" alt="Initial consultation" class="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div class="relative">
                <div class="md:flex items-center md:space-x-12">
                  <div class="md:w-1/2 md:text-right md:pr-8 md:order-last">
                    <h3 class="text-xl font-semibold text-gray-900">2. Material Selection</h3>
                    <p class="mt-3 text-gray-600">
                      We'll explore material options from our inventory of reclaimed wood, metal, and other sustainable materials. You're welcome to visit our workshop to see and touch potential materials in person.
                    </p>
                  </div>
                  
                  <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div class="h-12 w-12 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">2</div>
                  </div>
                  
                  <div class="mt-4 md:mt-0 md:w-1/2 md:pl-8 md:order-first">
                    <img src="/api/placeholder/400/250" alt="Material selection" class="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div class="relative">
                <div class="md:flex items-center md:space-x-12">
                  <div class="md:w-1/2 md:text-right md:pr-8">
                    <h3 class="text-xl font-semibold text-gray-900">3. Design & Proposal</h3>
                    <p class="mt-3 text-gray-600">
                      Based on our discussions, we'll create a detailed design proposal including sketches or renderings, dimensions, material specifications, and pricing. We'll refine this together until you're completely satisfied.
                    </p>
                  </div>
                  
                  <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div class="h-12 w-12 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  
                  <div class="mt-4 md:mt-0 md:w-1/2 md:pl-8">
                    <img src="/api/placeholder/400/250" alt="Design proposal" class="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div class="relative">
                <div class="md:flex items-center md:space-x-12">
                  <div class="md:w-1/2 md:text-right md:pr-8 md:order-last">
                    <h3 class="text-xl font-semibold text-gray-900">4. Crafting Your Piece</h3>
                    <p class="mt-3 text-gray-600">
                      Once the design is approved and the deposit is received, our artisans begin crafting your piece. We'll send you progress updates throughout the creation process.
                    </p>
                  </div>
                  
                  <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div class="h-12 w-12 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">4</div>
                  </div>
                  
                  <div class="mt-4 md:mt-0 md:w-1/2 md:pl-8 md:order-first">
                    <img src="/api/placeholder/400/250" alt="Crafting process" class="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div class="relative">
                <div class="md:flex items-center md:space-x-12">
                  <div class="md:w-1/2 md:text-right md:pr-8">
                    <h3 class="text-xl font-semibold text-gray-900">5. Delivery & Installation</h3>
                    <p class="mt-3 text-gray-600">
                      When your piece is complete, we'll schedule delivery and installation. We'll ensure everything fits perfectly in your space and provide care instructions for your new furniture.
                    </p>
                  </div>
                  
                  <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div class="h-12 w-12 rounded-full bg-amber-500 border-4 border-white shadow flex items-center justify-center text-white font-bold">5</div>
                  </div>
                  
                  <div class="mt-4 md:mt-0 md:w-1/2 md:pl-8">
                    <img src="/api/placeholder/400/250" alt="Delivery and installation" class="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Custom Projects */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Featured Custom Projects</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/api/placeholder/400/300" alt="Custom dining table" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Reclaimed Timber Dining Table</h3>
              <p class="mt-2 text-amber-600">For the Chen Family</p>
              <p class="mt-4 text-gray-600">
                A 10-person dining table created from timber salvaged from a 150-year-old barn in upstate New York, paired with a custom steel base designed to complement the clients' industrial-style loft.
              </p>
            </div>
          </div>
          
          {/* Project 2 */}
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/api/placeholder/400/300" alt="Custom bookshelf" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Modular Library Wall</h3>
              <p class="mt-2 text-amber-600">For Burlington Public Library</p>
              <p class="mt-4 text-gray-600">
                A series of interconnected shelving units crafted from reclaimed gymnasium flooring, featuring the original court markings and incorporating built-in seating and display areas.
              </p>
            </div>
          </div>
          
          {/* Project 3 */}
          <div class="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/api/placeholder/400/300" alt="Custom credenza" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">Media Credenza</h3>
              <p class="mt-2 text-amber-600">For the Williams Residence</p>
              <p class="mt-4 text-gray-600">
                A sleek media console incorporating wood from the client's family boat, carefully repurposed to create a meaningful piece with integrated cable management and hidden storage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div class="bg-stone-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="flex items-center mb-6">
                <div class="h-12 w-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/api/placeholder/100/100" alt="Client portrait" class="h-full w-full object-cover" />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-900">Sarah Thomas</h3>
                  <p class="text-gray-600">Burlington, VT</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "Working with Renewed Roots to create our dining table was a highlight of our home renovation. They took the time to understand exactly what we wanted and suggested materials we hadn't even considered. The finished piece is not just furniture—it's the heart of our home and a conversation starter at every gathering."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="flex items-center mb-6">
                <div class="h-12 w-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/api/placeholder/100/100" alt="Client portrait" class="h-full w-full object-cover" />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-900">Marcus Johnson</h3>
                  <p class="text-gray-600">Montpelier, VT</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "I brought Renewed Roots a challenging idea for a murphy bed that would transform into a desk when folded up. Not only did they solve all the engineering challenges, but they created a beautiful piece that makes my small apartment infinitely more functional. Their attention to detail is unmatched."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="flex items-center mb-6">
                <div class="h-12 w-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/api/placeholder/100/100" alt="Client portrait" class="h-full w-full object-cover" />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-900">Elena Rodriguez</h3>
                  <p class="text-gray-600">Boston, MA</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "When we were renovating our cafe, we wanted to showcase our commitment to sustainability through our furniture. Renewed Roots created custom tables and a stunning bar from reclaimed materials that tell a story. Our customers constantly ask about the furniture, which has become part of our brand identity."
              </p>
            </div>
            
            {/* Testimonial 4 */}
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="flex items-center mb-6">
                <div class="h-12 w-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/api/placeholder/100/100" alt="Client portrait" class="h-full w-full object-cover" />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-900">David & Kimberly Chen</h3>
                  <p class="text-gray-600">Portland, ME</p>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "We incorporated wood from my grandparents' old farmhouse into a custom kitchen island. The team at Renewed Roots handled these sentimental materials with such care and respect. Now we have a functional, beautiful piece that carries our family history into the next generation."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Your Custom Order */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div class="bg-amber-50 rounded-lg overflow-hidden shadow-md">
          <div class="lg:grid lg:grid-cols-2">
            <div class="p-8 lg:p-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Start Your Custom Project</h2>
              <p class="text-gray-600 mb-8">
                Ready to create something unique? Fill out the form below to begin the conversation about your custom furniture piece. We'll get back to you within 48 hours to schedule an initial consultation.
              </p>
              <CustomOrderForm />
            </div>
            <div class="relative h-64 lg:h-auto">
              <img src="https://rare-gallery.com/uploads/posts/5388942-tool-shed-rope-rustic-workshop-carpentry-worker-old-shed-woodworking-inside-wire-cloth-wood-brown-cabin-workbench-barn-farm-tool-coiled-rope-antique-creative-commons-images.jpg" alt="Workshop crafting process" class="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}