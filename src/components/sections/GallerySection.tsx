import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetPath } from '../../utils/assetPath';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GalleryImage {
  src: string;
  alt: string;
}

const ImageModal: React.FC<{
  image: GalleryImage | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ image, isOpen, onClose }) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 p-2 bg-white rounded-full shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button 
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md"
    onClick={onClick}
  >
    <ChevronRight className="w-6 h-6" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button 
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md"
    onClick={onClick}
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
);

const GallerySection: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const galleryImages: GalleryImage[] = [
      { src: getAssetPath('/images/gallery/img23.png'), alt: "Gallery Image 23" },
      { src: getAssetPath('/images/gallery/img27.png'), alt: "Gallery Image 27" },
      { src: getAssetPath('/images/gallery/GIcover.png'), alt: "Gallery Image 0" },
      { src: getAssetPath('/images/gallery/image1.png'), alt: "Gallery Image 1" },
      { src: getAssetPath('/images/gallery/image2.png'), alt: "Gallery Image 2" },
      { src: getAssetPath('/images/gallery/image3.png'), alt: "Gallery Image 3" },
      { src: getAssetPath('/images/gallery/image4.png'), alt: "Gallery Image 4" },
      { src: getAssetPath('/images/gallery/image6.png'), alt: "Gallery Image 6" },
      { src: getAssetPath('/images/gallery/image7.png'), alt: "Gallery Image 7" },
      { src: getAssetPath('/images/gallery/image8.png'), alt: "Gallery Image 8" },
      { src: getAssetPath('/images/gallery/image9.png'), alt: "Gallery Image 9" }, // Changed extension to .png
      { src: getAssetPath('/images/gallery/image10.png'), alt: "Gallery Image 10" },
      { src: getAssetPath('/images/gallery/image11.png'), alt: "Gallery Image 11" },
      { src: getAssetPath('/images/gallery/image12.png'), alt: "Gallery Image 12" },
      { src: getAssetPath('/images/gallery/image13.png'), alt: "Gallery Image 13" },
      { src: getAssetPath('/images/gallery/image14.png'), alt: "Gallery Image 14" },
      { src: getAssetPath('/images/gallery/img19.png'), alt: "Gallery Image 19" },
      { src: getAssetPath('/images/gallery/img20.png'), alt: "Gallery Image 20" },
      { src: getAssetPath('/images/gallery/image15.png'), alt: "Gallery Image 15" },
      { src: getAssetPath('/images/gallery/img18.png'), alt: "Gallery Image 18" },
      { src: getAssetPath('/images/gallery/img28.png'), alt: "Gallery Image 28" },
      { src: getAssetPath('/images/gallery/image29.png'), alt: "Gallery Image 29" },

    ];

    setTimeout(() => {
      setImages(galleryImages);
      setLoading(false);
    }, 800);
  }, []);

  // Add image error handling function
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = getAssetPath('/images/fallback-image.png'); // Add a fallback image
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
        <p className="text-lg text-gray-600">Explore our gallery where expert craftsmanship meets flawless finishing</p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  onError={handleImageError}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                  draggable="false"
                />
              </motion.div>
            </div>
          ))}
        </Slider>
      </motion.div>

      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default GallerySection;