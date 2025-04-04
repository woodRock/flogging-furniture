// File: routes/sustainability.tsx
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

export default function Sustainability() {
  return (
    <div class="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <div class="relative bg-stone-800 text-white">
        <div class="absolute inset-0 opacity-40 bg-center bg-cover" style={{ backgroundImage: "url('/api/placeholder/1200/400')" }}></div>
        <div class="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Our Sustainability Commitment</h1>
          <p class="mt-6 max-w-lg mx-auto text-xl sm:max-w-3xl">
            Creating beautiful furniture without compromising our planet's future.
          </p>
        </div>
      </div>

      {/* Our Approach Section */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900">Our Approach to Sustainability</h2>
            <div class="mt-6 text-gray-600 space-y-6">
              <p>
                At Renewed Roots, sustainability isn't just a buzzword—it's the foundation of everything we do. We believe that beautiful furniture shouldn't come at the expense of our environment, which is why we've built our entire business model around reducing waste and promoting circularity.
              </p>
              <p>
                Each piece of furniture we create diverts materials from landfills, reduces the demand for virgin resources, and preserves the embodied energy of existing materials. By choosing reclaimed and upcycled furniture, you're not just furnishing your home—you're making a positive environmental impact.
              </p>
              <p>
                Our commitment extends beyond our products to our workshop practices, community engagement, and ongoing efforts to reduce our carbon footprint. We believe that small businesses have a big role to play in building a more sustainable future.
              </p>
            </div>
          </div>
          <div class="mt-10 lg:mt-0">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F7434%2F9205725816_4c91789b98.jpg&f=1&nofb=1&ipt=966f493a0517575f8c21eefe3789bf492b1361b47cb87b8d5f192c0ae18dc398&ipo=images" alt="Sustainable workshop practices" class="rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      {/* Environmental Impact Statistics */}
      <div class="bg-stone-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-16">Our Environmental Impact</h2>
          
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-sm text-center">
              <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-700 mb-4">
                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="text-4xl font-bold text-gray-900">4+</div>
              <p class="mt-2 text-gray-600">Local artisans and craftspeople employed</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm text-center">
              <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-700 mb-4">
                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div class="text-4xl font-bold text-gray-900">30+</div>
              <p class="mt-2 text-gray-600">Tons of material diverted from landfills annually</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm text-center">
              <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-700 mb-4">
                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div class="text-4xl font-bold text-gray-900">75%</div>
              <p class="mt-2 text-gray-600">Reduction in carbon footprint compared to new furniture</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm text-center">
              <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-700 mb-4">
                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div class="text-4xl font-bold text-gray-900">1,500+</div>
              <p class="mt-2 text-gray-600">Trees saved through reclaimed wood usage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sourcing & Materials */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Responsible Materials Sourcing</h2>
        
        <div class="space-y-16">
          {/* Reclaimed Wood */}
          <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div class="lg:order-last">
              <h3 class="text-2xl font-bold text-gray-900">Reclaimed Wood</h3>
              <div class="mt-4 text-gray-600 space-y-4">
                <p>
                  The heart of our furniture comes from wood that has already lived one life and is ready for another. We source our reclaimed wood from:
                </p>
                <ul class="space-y-2 list-disc pl-5">
                  <li>Barns and agricultural buildings being dismantled (100+ years old)</li>
                  <li>Urban trees removed due to disease or development</li>
                  <li>Industrial sites and factories undergoing renovation</li>
                  <li>Old flooring, ceiling beams, and structural timbers</li>
                  <li>Discarded furniture that can be disassembled and reused</li>
                </ul>
                <p>
                  Each piece of wood is carefully evaluated, cleaned, and processed in our workshop. The character and history visible in reclaimed wood—nail holes, weathering, saw marks—are preserved whenever possible to tell the story of its previous life.
                </p>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F06%2F12%2F18%2F28%2Fwood-1452655_640.jpg&f=1&nofb=1&ipt=9697c7eea6a25e642a6d071ab702e586e7692f579214edfc98945c630d20ce5f&ipo=images" alt="Reclaimed wood materials" class="rounded-lg shadow-md" />
            </div>
          </div>
          
          {/* Metal & Hardware */}
          <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Metal & Hardware</h3>
              <div class="mt-4 text-gray-600 space-y-4">
                <p>
                  We complement our reclaimed wood with sustainable metal elements:
                </p>
                <ul class="space-y-2 list-disc pl-5">
                  <li>Recycled steel and iron from local metal yards</li>
                  <li>Repurposed industrial components (pipes, fittings, etc.)</li>
                  <li>Hardware from buildings being demolished</li>
                  <li>Locally-forged custom metal pieces when needed</li>
                </ul>
                <p>
                  When we need to purchase new hardware, we prioritize suppliers who use recycled content and maintain ethical manufacturing standards. We work with local metalworkers whenever possible to reduce transportation emissions and support our local economy.
                </p>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpublicdomainpictures.net%2Fpictures%2F30000%2Fvelka%2Fmetallstangen.jpg&f=1&nofb=1&ipt=8fbe835241bfe3efbc172edef734b09767fd6c82ed17b91be86066550c969140&ipo=images" alt="Sustainable metal and hardware" class="rounded-lg shadow-md" />
            </div>
          </div>
          
          {/* Finishes & Adhesives */}
          <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div class="lg:order-last">
              <h3 class="text-2xl font-bold text-gray-900">Sustainable Finishes</h3>
              <div class="mt-4 text-gray-600 space-y-4">
                <p>
                  The finishing touches matter just as much as the main materials. We use:
                </p>
                <ul class="space-y-2 list-disc pl-5">
                  <li>Low-VOC and zero-VOC water-based finishes</li>
                  <li>Natural oils and waxes derived from renewable resources</li>
                  <li>Non-toxic adhesives and glues free from harmful chemicals</li>
                  <li>Natural fabric options for upholstered pieces, including organic cotton, hemp, and recycled textiles</li>
                </ul>
                <p>
                  These choices ensure that your furniture is not only environmentally responsible but also creates a healthier indoor environment in your home, free from off-gassing and harmful chemicals.
                </p>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F3885%2F14329312300_ea81280954.jpg&f=1&nofb=1&ipt=c20dc250ecb4040b9cf21c6dc555be8ae32ddf7fcc032cec2071494aec0d2d27&ipo=images" alt="Eco-friendly finishes" class="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Practices */}
      <div class="bg-stone-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Sustainable Workshop Practices</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="h-12 w-12 flex items-center justify-center rounded-md bg-amber-600 text-white mb-5">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Zero Waste Philosophy</h3>
              <p class="text-gray-600">
                We operate on a zero-waste principle. Wood scraps become smaller products, sawdust is composted or used as animal bedding at local farms, and metal scraps are recycled. Even our sawdust is repurposed as bedding for local farms or as material for our wood-fired heating system.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="h-12 w-12 flex items-center justify-center rounded-md bg-amber-600 text-white mb-5">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Renewable Energy</h3>
              <p class="text-gray-600">
                Our workshop is powered by 100% renewable energy through a combination of rooftop solar panels and participation in our local utility's renewable energy program. Our wood-fired heating system uses scraps from our manufacturing process to heat our space during Vermont winters.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="h-12 w-12 flex items-center justify-center rounded-md bg-amber-600 text-white mb-5">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Local Supply Chain</h3>
              <p class="text-gray-600">
                We prioritize local sourcing to reduce transportation emissions. Most of our materials come from within a 100-mile radius of our workshop. We've developed relationships with local demolition companies, arborists, and property owners to source materials that would otherwise be discarded.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Partnerships */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Certifications & Partnerships</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="h-24 flex items-center justify-center mb-4">
              <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_njj92Psgl_w%2FTDyUVigeWxI%2FAAAAAAAAAQI%2FV1r1qVBzWmo%2Fs1600%2Ffsc_logo.jpg&f=1&nofb=1&ipt=2426abc7af17e4f73b50664dc2a72375bbb1766cd632340e8f85e1d79defbb28&ipo=images" alt="FSC Certification" class="h-16" />
            </div>
            <h3 class="text-lg font-medium text-gray-900">FSC Certified</h3>
            <p class="mt-2 text-sm text-gray-600">
              For our occasional new wood purchases
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="h-24 flex items-center justify-center mb-4">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwholechampion.org%2Fwp-content%2Fuploads%2F1ftp_Primary_Horizontal_Navy-800x335.png&f=1&nofb=1&ipt=2024b07a2e6dba4def4d647fce3423dc8f9c3921658eb2ed0876e61571a58b79&ipo=images" alt="1% For The Planet" class="h-16" />
            </div>
            <h3 class="text-lg font-medium text-gray-900">1% For The Planet</h3>
            <p class="mt-2 text-sm text-gray-600">
              Member since 2019
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="h-24 flex items-center justify-center mb-4">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F12%2F04%2F20%2F27%2Fkea-557097_960_720.jpg&f=1&nofb=1&ipt=768f7ba1c7f879f3140ec8960aac77eb3c667f0b793a28a16d3b7168a7def667&ipo=images" alt="Green New Zealand Certified" class="h-16" />
            </div>
            <h3 class="text-lg font-medium text-gray-900">Green New Zealand</h3>
            <p class="mt-2 text-sm text-gray-600">
              Certified Business
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm text-center">
            <div class="h-24 flex items-center justify-center mb-4">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.eoi.es%2Fblogs%2Fimsd%2Ffiles%2F2017%2F03%2FPPP-300x273.png&f=1&nofb=1&ipt=6241b7eb62b30ed48cb19d1f94fc81eb612c94bc79e25a6d4a30b78a161b7533&ipo=images" alt="Wellington Businesses for Social Responsibility" class="h-16" />
            </div>
            <h3 class="text-lg font-medium text-gray-900">VBSR Member</h3>
            <p class="mt-2 text-sm text-gray-600">
              Wellington Businesses for Social Responsibility
            </p>
          </div>
        </div>
        
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Community Partners</h3>
          
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <div class="space-y-8">
              <div class="grid md:grid-cols-3 gap-8 items-start">
                <div>
                  <h4 class="text-xl font-semibold text-gray-900">Vermont Forest Products Association</h4>
                  <p class="mt-2 text-gray-600">
                    We work with the VFPA to promote sustainable forestry practices and support the local wood products economy.
                  </p>
                </div>
                
                <div>
                  <h4 class="text-xl font-semibold text-gray-900">Local Schools</h4>
                  <p class="mt-2 text-gray-600">
                    We offer workshops and apprenticeships to local high school and technical college students, teaching sustainable woodworking skills to the next generation.
                  </p>
                </div>
                
                <div>
                  <h4 class="text-xl font-semibold text-gray-900">Burlington Tree Keepers</h4>
                  <p class="mt-2 text-gray-600">
                    We partner with this urban forestry group to salvage wood from trees that must be removed, turning urban wood into beautiful furniture.
                  </p>
                </div>
              </div>
              
              <div class="grid md:grid-cols-3 gap-8 items-start">
                <div>
                  <h4 class="text-xl font-semibold text-gray-900">ReSource Vermont</h4>
                  <p class="mt-2 text-gray-600">
                    We collaborate with this building material reuse center to source materials and donate unused items, keeping more materials in circulation.
                  </p>
                </div>
                
                <div>
                  <h4 class="text-xl font-semibold text-gray-900">Local Architects & Designers</h4>
                  <p class="mt-2 text-gray-600">
                    We work with environmentally-conscious design professionals to integrate sustainable furniture into green building projects.
                  </p>
                </div>
                
                <div>
                  <h4 class="text-xl font-semibold text-gray-900">Habitat for Humanity</h4>
                  <p class="mt-2 text-gray-600">
                    We donate custom furniture pieces to Habitat homes and source materials from their ReStore locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Goals Section */}
      <div class="bg-stone-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Looking Forward: Our Sustainability Goals</h2>
          
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <div class="md:grid md:grid-cols-2 md:gap-16">
              <div>
                <h3 class="text-xl font-semibold text-amber-600 mb-4">Short-Term Goals (1-2 Years)</h3>
                <ul class="space-y-4">
                  <li class="flex">
                    <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-600">Achieve carbon neutrality for all delivery and installation services</span>
                  </li>
                  <li class="flex">
                    <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-600">Transition to 100% plastic-free packaging and shipping materials</span>
                  </li>
                  <li class="flex">
                    <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-600">Expand our workshop education program to reach 200+ community members annually</span>
                  </li>
                  <li class="flex">
                    <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-600">Launch a furniture repair service to extend the life of existing pieces</span>
                  </li>
                </ul>
              </div>
              
              <div class="mt-8 md:mt-0">
                <h3 class="text-xl font-semibold text-amber-600 mb-4">Long-Term Vision (3-5 Years)</h3>
                <ul class="space-y-4">
                  <li class="flex">
                    <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-600">Develop a circular business model with a furniture take-back program</span>
                  </li>
                  <li class="flex">
                    <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-600">Expand our reclaimed material sourcing network throughout New England</span>
                  </li>
                  <li class="flex">
                    <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-600">Achieve B Corp certification and set science-based climate targets</span>
                  </li>
                  <li class="flex">
                    <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-600">Pilot innovative new processes for processing and preserving reclaimed materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div class="bg-amber-600">
        <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span class="block">Ready to make a sustainable choice?</span>
            <span class="block text-amber-100 text-2xl mt-1">Every piece of furniture we create helps build a more circular future.</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <a href="/contact" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50">
                Contact Us
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a href="/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-800 hover:bg-amber-900">
                Browse Collection
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}