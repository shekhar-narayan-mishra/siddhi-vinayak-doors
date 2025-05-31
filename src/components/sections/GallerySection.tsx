import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const GallerySection: React.FC = () => {
  const projects = [
    {
      image: "https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg",
      title: "Modern Villa Windows",
      location: "Lucknow"
    },
    {
      image: "https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg",
      title: "Commercial Complex",
      location: "Kanpur"
    },
    {
      image: "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg",
      title: "Residential Project",
      location: "Varanasi"
    },
    {
      image: "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg",
      title: "Hotel Windows",
      location: "Agra"
    },
    {
      image: "https://images.pexels.com/photos/3935319/pexels-photo-3935319.jpeg",
      title: "Office Building",
      location: "Prayagraj"
    },
    {
      image: "https://images.pexels.com/photos/3935339/pexels-photo-3935339.jpeg",
      title: "Shopping Mall",
      location: "Gorakhpur"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Recent Projects"
          subtitle="Take a look at some of our recently completed installations across Uttar Pradesh"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                <p className="text-gray-200">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;