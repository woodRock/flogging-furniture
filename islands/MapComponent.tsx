// File: islands/MapComponent.tsx
import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

interface MapComponentProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  address?: string;
}

export default function MapComponent({
  latitude = 44.480347, // Default to Burlington, VT coordinates
  longitude = -73.212930,
  zoom = 15,
  address = "123 Pine Street, Burlington, VT 05401"
}: MapComponentProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Leaflet CSS
    const leafletCss = document.createElement('link');
    leafletCss.rel = 'stylesheet';
    leafletCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    document.head.appendChild(leafletCss);

    // Load Leaflet JS
    const loadLeaflet = async () => {
      // Check if Leaflet is already loaded
      if (window.L) return window.L;

      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        script.onload = () => resolve(window.L);
        document.head.appendChild(script);
      });
    };

    // Initialize map
    const initMap = async () => {
      const L = await loadLeaflet();
      
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      // Create map instance
      mapInstanceRef.current = L.map(mapContainerRef.current).setView([latitude, longitude], zoom);

      // Add tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);

      // Add marker
      const marker = L.marker([latitude, longitude]).addTo(mapInstanceRef.current);
      
      // Add popup with address
      marker.bindPopup(`
        <div style="text-align: center;">
          <strong>Renewed Roots Workshop</strong><br>
          ${address}
        </div>
      `).openPopup();
    };

    initMap();

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, zoom, address]);

  return (
    <div>
      <div ref={mapContainerRef} style={{ height: '400px', width: '100%' }} />
      <div class="bg-white p-4 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-bold">Renewed Roots Workshop</h3>
            <p class="text-gray-600 text-sm">{address}</p>
          </div>
          <a 
            href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            class="text-amber-600 hover:text-amber-700 font-medium flex items-center"
          >
            Get Directions
            <svg class="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}