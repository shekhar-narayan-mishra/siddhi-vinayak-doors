import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SectionHeader from '../ui/SectionHeader';

// Fix for default marker icon
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapSection: React.FC = () => {
  const locations = [
    { name: "Lucknow", lat: 26.8467, lng: 80.9462, projects: 250 },
    { name: "Kanpur", lat: 26.4499, lng: 80.3319, projects: 180 },
    { name: "Varanasi", lat: 25.3176, lng: 82.9739, projects: 150 },
    { name: "Agra", lat: 27.1767, lng: 78.0081, projects: 120 },
    { name: "Prayagraj", lat: 25.4358, lng: 81.8463, projects: 110 },
    { name: "Gorakhpur", lat: 26.7606, lng: 83.3732, projects: 90 },
    { name: "Meerut", lat: 28.9845, lng: 77.7064, projects: 85 },
    { name: "Bareilly", lat: 28.3670, lng: 79.4304, projects: 75 },
    { name: "Aligarh", lat: 27.8974, lng: 78.0880, projects: 70 },
    { name: "Moradabad", lat: 28.8386, lng: 78.7733, projects: 65 },
    { name: "Raebareli", lat: 26.2345, lng: 81.2396, projects: 45 },
    { name: "Sultanpur", lat: 26.2648, lng: 82.0727, projects: 40 },
    { name: "Faizabad", lat: 26.7732, lng: 82.1442, projects: 55 },
    { name: "Jabalpur", lat: 23.1815, lng: 79.9864, projects: 35 },
    { name: "Amethi", lat: 26.1542, lng: 81.8142, projects: 30 },
    { name: "Pratapgarh", lat: 25.9121, lng: 81.9896, projects: 50 } // Added Pratapgarh
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Service Coverage"
          subtitle="Explore our completed projects across Uttar Pradesh"
        />
        
        <div className="h-[600px] rounded-lg overflow-hidden shadow-lg relative">
          <MapContainer
            center={[26.8467, 80.9462]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            className="z-0" // Ensure map has lower z-index
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
              <Marker key={index} position={[location.lat, location.lng]}>
                <Popup>
                  <div className="text-center">
                    <h3 className="font-bold text-lg">{location.name}</h3>
                    <p className="text-gray-600">{location.projects} Projects Completed</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default MapSection;