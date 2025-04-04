// File: routes/contact.tsx
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import ContactForm from "../islands/ContactForm.tsx";
import MapComponent from "../islands/MapComponent.tsx";

export default function Contact() {
  return (
    <div class="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <div class="relative bg-stone-800 text-white">
        <div class="absolute inset-0 opacity-40 bg-center bg-cover" style={{ backgroundImage: "url('/api/placeholder/1200/400')" }}></div>
        <div class="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p class="mt-6 max-w-lg mx-auto text-xl sm:max-w-3xl">
            We'd love to hear from you. Get in touch with us about custom pieces, inquiries, or to schedule a visit.
          </p>
        </div>
      </div>

      {/* Contact Information & Form Section */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h2 class="text-3xl font-bold text-gray-900">Get In Touch</h2>
            <p class="mt-6 text-gray-600">
              Whether you're interested in a custom piece, have questions about our process, or want to schedule a visit to our workshop, we're here to help.
            </p>
            
            <div class="mt-10 space-y-8">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex h-12 w-12 items-center justify-center rounded-md bg-amber-600 text-white">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Phone</h3>
                  <p class="mt-1 text-gray-600">(802) 555-0123</p>
                  <p class="mt-1 text-gray-600">Monday-Friday, 9am-5pm EST</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex h-12 w-12 items-center justify-center rounded-md bg-amber-600 text-white">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Email</h3>
                  <p class="mt-1 text-gray-600">hello@renewedroots.com</p>
                  <p class="mt-1 text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex h-12 w-12 items-center justify-center rounded-md bg-amber-600 text-white">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Visit Our Workshop</h3>
                  <p class="mt-1 text-gray-600">123 Pine Street</p>
                  <p class="mt-1 text-gray-600">Burlington, VT 05401</p>
                  <p class="mt-2 text-gray-600">
                    <span class="font-medium">Hours:</span> Tuesday-Saturday, 10am-6pm
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex h-12 w-12 items-center justify-center rounded-md bg-amber-600 text-white">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">Follow Us</h3>
                  <div class="mt-1 flex space-x-6">
                    <a href="#" class="text-gray-600 hover:text-amber-600">
                      <span class="sr-only">Instagram</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-amber-600">
                      <span class="sr-only">Pinterest</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                      </svg>
                    </a>
                    <a href="#" class="text-gray-600 hover:text-amber-600">
                      <span class="sr-only">Facebook</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div class="mt-12 lg:mt-0">
            <div class="bg-white shadow-md rounded-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div class="bg-stone-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Find Us</h2>
          
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Interactive Map */}
            <MapComponent 
              latitude={44.480347}
              longitude={-73.212930}
              zoom={15}
              address="123 Pine Street, Burlington, VT 05401"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white shadow-sm rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Do you offer custom furniture pieces?</h3>
            <p class="text-gray-600">
              Yes! Custom orders are at the heart of what we do. We collaborate closely with clients to create pieces that match their vision while incorporating our sustainable approach and unique materials.
            </p>
          </div>
          
          <div class="bg-white shadow-sm rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">What is your turnaround time for custom pieces?</h3>
            <p class="text-gray-600">
              Most custom pieces are completed within 6-8 weeks, depending on complexity and our current workload. We'll provide a more specific timeline during our initial consultation.
            </p>
          </div>
          
          <div class="bg-white shadow-sm rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Do you ship furniture outside Vermont?</h3>
            <p class="text-gray-600">
              We ship throughout the Northeast and can arrange shipping nationwide for an additional fee. For local customers within 50 miles of Burlington, we offer complimentary white-glove delivery.
            </p>
          </div>
          
          <div class="bg-white shadow-sm rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Can I bring my own materials for a custom piece?</h3>
            <p class="text-gray-600">
              Absolutely! We love working with materials that have personal significance. We'll evaluate your materials and discuss how we can incorporate them into a functional, beautiful piece.
            </p>
          </div>
          
          <div class="bg-white shadow-sm rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Do you offer furniture restoration services?</h3>
            <p class="text-gray-600">
              Yes, we offer restoration for antique and vintage furniture. Our skilled craftspeople can repair, refinish, and revitalize your cherished pieces while preserving their character and history.
            </p>
          </div>
          
          <div class="bg-white shadow-sm rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">How do I care for my upcycled furniture?</h3>
            <p class="text-gray-600">
              Each piece comes with specific care instructions. Generally, we apply durable finishes that require minimal maintenance. For most pieces, regular dusting and occasional polishing with a recommended product is sufficient.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}