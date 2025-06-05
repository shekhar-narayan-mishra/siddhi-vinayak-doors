import React, { useState, useEffect } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

interface Project {
  image: string;
  title: string;
  location: string;
}

const GallerySection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const projects: Project[] = [
    {
      image: "https://images.pexels.com/photos/3626589/pexels-photo-3626589.jpeg",
      title: "UPV Door Installation",
      location: "Uttar Pradesh"
    },
    {
      image: "https://images.pexels.com/photos/3255245/pexels-photo-3255245.jpeg",
      title: "Commercial Complex",
      location: "Kanpur"
    },
    {
      image: "https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg",
      title: "Residential Project",
      location: "Varanasi"
    },
    {
      image: "https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg",
      title: "Hotel Windows",
      location: "Agra"
    },
    {
      image: "https://images.pexels.com/photos/6444159/pexels-photo-6444159.jpeg",
      title: "Office Building",
      location: "Prayagraj"
    },
    {
      image: "https://images.pexels.com/photos/8134827/pexels-photo-8134827.jpeg",
      title: "Shopping Mall",
      location: "Gorakhpur"
    }
  ];

  useEffect(() => {
    // Preload images to prevent glitches
    const preloadImages = async () => {
      try {
        const promises = projects.map((project) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = project.image;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error("Error preloading images:", error);
        setIsLoading(false);
      }
    };
    
    preloadImages();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="gallery-section">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Recent Projects"
          subtitle="Take a look at some of our recently completed installations across Uttar Pradesh"
        />
        
        {isLoading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="relative w-full max-w-6xl mx-auto mt-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={`project-${index}`}>
                  <div className="h-[60vh] w-full relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = 'https://images.pexels.com/photos/3626589/pexels-photo-3626589.jpeg';
                      }}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className="flex justify-center mt-8">
              <Link 
                to="/gallery" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;