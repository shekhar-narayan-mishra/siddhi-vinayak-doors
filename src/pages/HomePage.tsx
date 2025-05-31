import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AnnouncementBar from '../components/ui/AnnouncementBar';
import ProductsSection from '../components/sections/ProductsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import GallerySection from '../components/sections/GallerySection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import MapSection from '../components/sections/MapSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  const announcements = [
    "New offices in Ayodhya and Prayagraj please visit us there",
    "20 Years of Warranty on all UPVC Windows and Doors",
    "FREE Installation on all UPVC Windows and Doors",
    "⭐ Celebrating 11 years of excellence in door and window solutions"
  ];

  return (
    <>
      <HeroSection />
      <AnnouncementBar announcements={announcements} />
      <ProductsSection />
      <FeaturesSection />
      <GallerySection />
      <TestimonialsSection />
      <MapSection />
      <ContactSection />
    </>
  );
};

export default HomePage;