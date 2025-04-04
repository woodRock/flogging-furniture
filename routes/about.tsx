// File: routes/about.tsx
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";

export default function About() {
  return (
    <div class="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <div class="relative bg-stone-800 text-white">
        <div class="absolute inset-0 opacity-40 bg-center bg-cover" style={{ backgroundImage: "url('/api/placeholder/1200/400')" }}></div>
        <div class="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">About Renewed Roots</h1>
          <p class="mt-6 max-w-lg mx-auto text-xl sm:max-w-3xl">
            Our journey of breathing new life into forgotten furniture
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900">Our Story</h2>
            <div class="mt-6 text-gray-600 space-y-6">
              <p>
                Renewed Roots began in 2025 when our founder, Jo Rongen, discovered an abandoned barn door while hiking in rural Vermont. Rather than seeing it as waste, she envisioned a dining table that would tell stories of the past while creating new memories for families.
              </p>
              <p>
                What started as a passion project in Jo's garage has grown into a dedicated workshop of craftspeople who share a vision: to rescue discarded materials and transform them into beautiful, functional pieces that bring character and sustainability into modern homes.
              </p>
              <p>
                Today, our team of seven artisans works from our studio in Burlington, where we source materials from old barns, factories, and buildings scheduled for demolition throughout New England. Each maker brings unique skills—from woodworking to metalsmithing to upholstery—allowing us to reimagine and repurpose nearly any material.
              </p>
            </div>
          </div>
          <div class="mt-10 lg:mt-0">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.architecturelab.net%2Fwp-content%2Fuploads%2F2024%2F03%2FClassic_Suburban_Garage_8-1-1024x1024.jpg&f=1&nofb=1&ipt=b888a40974682a07724caa2658181bcd814874ac5d78881e946752efebdc1b70&ipo=images" alt="Workshop" class="rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div class="bg-stone-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="h-12 w-12 flex items-center justify-center rounded-md bg-amber-600 text-white mb-5">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Craftsmanship</h3>
              <p class="text-gray-600">
                We believe in creating furniture that lasts for generations. Each piece receives meticulous attention from our skilled artisans who blend traditional woodworking techniques with modern design sensibilities.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="h-12 w-12 flex items-center justify-center rounded-md bg-amber-600 text-white mb-5">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p class="text-gray-600">
                Environmental responsibility drives everything we do. By reclaiming materials destined for landfills, we reduce waste while conserving the resources and energy required to produce new materials.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div class="h-12 w-12 flex items-center justify-center rounded-md bg-amber-600 text-white mb-5">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Storytelling</h3>
              <p class="text-gray-600">
                We honor the history embedded in our materials. Every piece comes with documentation of its origin, preserving the stories of its past life while beginning a new chapter in your home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h2>
        
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800 mb-4">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Source</h3>
            <p class="text-gray-600">
              We scout demolition sites, salvage yards, and abandoned buildings to rescue materials with character and potential.
            </p>
          </div>
          
          <div class="text-center">
            <div class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800 mb-4">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Design</h3>
            <p class="text-gray-600">
              Our designers study each material's unique properties to create furniture that highlights its history while serving modern needs.
            </p>
          </div>
          
          <div class="text-center">
            <div class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800 mb-4">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Craft</h3>
            <p class="text-gray-600">
              Our artisans carefully transform the materials, preserving original character while ensuring structural integrity and functionality.
            </p>
          </div>
          
          <div class="text-center">
            <div class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-800 mb-4">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Deliver</h3>
            <p class="text-gray-600">
              We personally deliver and install each piece, sharing its story and ensuring it becomes a meaningful part of your home.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div class="bg-stone-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F34%2F220234-050-000D4B0E%2FCate-Blanchett-2018.jpg&f=1&ipt=a914e224b382c27aaf5590f22593d001509ca2ea65a67a5cfb6d0e63e0885094" alt="Jo Rongen" class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">Jo Rongen</h3>
                <p class="text-amber-600 mb-4">Founder & Lead Designer</p>
                <p class="text-gray-600">
                  With a background in architecture and a passion for sustainability, Jo brings vision and purpose to every Renewed Roots creation.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fproud-fisherman-holding-fish-river-standing-fishing-rod-44219679.jpg&f=1&nofb=1&ipt=46611ba1ee91252acc337bc91e5b8e2f8e172699acd061de2edfd228e0f3784a&ipo=images" alt="David Wood" class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">David Wood</h3>
                <p class="text-amber-600 mb-4">Treasurer</p>
                <p class="text-gray-600">
                    David is a financial wizard who ensures our operations run smoothly, allowing us to focus on what we do best: creating beautiful furniture.
                </p>
              </div>
            </div>
            
            <div class="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F49%2FElon_Musk_2015.jpg%2F500px-Elon_Musk_2015.jpg&f=1&nofb=1&ipt=fdca9139c02f24f42dc681132cc6b0fc82809b112dbe88bd208fd2f28316a88d&ipo=images" alt="Jesse Wood" class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">Jesse Wood</h3>
                <p class="text-amber-600 mb-4">IT Department</p>
                <p class="text-gray-600">
                    Jesse is a tech enthusiast who ensures our digital presence reflects our commitment to sustainability and craftsmanship.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg overflow-hidden shadow-sm">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1f%2Fed%2F0f%2F1fed0fae18ba2e175093e540f50fdf82.jpg&f=1&nofb=1&ipt=2f0a5dc834ee55b9641a7a8bf8253d0037a73985ecf7f1f9f0c75cd15785713d&ipo=images" alt="Freya Wood" class="w-full h-64 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">Freya Wood</h3>
                <p class="text-amber-600 mb-4">Emotional Support</p>
                <p class="text-gray-600">
                    Freya is our beloved office dog, providing comfort and joy to our team. Her presence reminds us of the importance of balance and well-being in our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Us Section */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div class="bg-amber-50 rounded-lg overflow-hidden shadow-md">
          <div class="lg:grid lg:grid-cols-2">
            <div class="p-8 lg:p-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Visit Our Workshop</h2>
              <p class="text-gray-600 mb-6">
                We welcome visitors to our Burlington studio where you can see our craftspeople at work and explore our material library. Schedule a visit to discuss your custom project or simply to experience our process firsthand.
              </p>
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg class="h-6 w-6 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 class="text-lg font-medium text-gray-900">Address</h3>
                    <p class="text-gray-600">123 Pine Street, Burlington, VT 05401</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="h-6 w-6 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                    <p class="text-gray-600">Tuesday - Saturday: 10am - 6pm</p>
                    <p class="text-gray-600">Sunday & Monday: Closed</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <svg class="h-6 w-6 text-amber-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                    <p class="text-gray-600">Phone: (802) 555-0123</p>
                    <p class="text-gray-600">Email: hello@renewedroots.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative h-64 lg:h-auto">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc1.staticflickr.com%2F9%2F8010%2F7706591196_418994540f_b.jpg&f=1&nofb=1&ipt=ef41a49c5870c7b463fb192d67416f960f75377491464337d2576e945836a1dd&ipo=images" alt="Our workshop" class="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}