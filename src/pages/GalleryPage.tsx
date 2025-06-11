import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import Footer from '../components/layout/Footer';

interface GalleryImage {
  src: string;
  alt: string;
}

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Use the actual images from the public/images/gallery folder
    const galleryImages: GalleryImage[] = [
      { src: "/images/gallery/image1.png", alt: "Gallery Image 1" },
      { src: "/images/gallery/image2.png", alt: "Gallery Image 2" },
      { src: "/images/gallery/image3.jpg", alt: "Gallery Image 3" },
      { src: "/images/gallery/image4.png", alt: "Gallery Image 4" },
      { src: "/images/gallery/image5.png", alt: "Gallery Image 5" },
      { src: "/images/gallery/image6.png", alt: "Gallery Image 6" },
      // Repeat images to fill the gallery if needed
      { src: "/images/gallery/image7.png", alt: "Gallery Image 7" },
      { src: "/images/gallery/image8.png", alt: "Gallery Image 8" },
      { src: "/images/gallery/image9.jpg", alt: "Gallery Image 9" },
      { src: "/images/gallery/image10.png", alt: "Gallery Image 10" },
      { src: "/images/gallery/image5.png", alt: "Gallery Image 11" },
      { src: "/images/gallery/image6.png", alt: "Gallery Image 12" },
    ];

    // Simulate loading
    setTimeout(() => {
      setImages(galleryImages);
      setLoading(false);
    }, 800);
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      <div className="container mx-auto px-4 py-16 mt-12"> {/* Added margin-top */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Project Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of completed projects showcasing our quality workmanship and attention to detail.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="mb-4 overflow-hidden rounded-lg shadow-md cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = '/images/gallery/image1.png'; // Use local fallback image
                  }}
                />
              </motion.div>
            ))}
          </Masonry>
        )}

        {/* Lightbox for enlarged image view */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh]"
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryPage;
