import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ProductCard from '../ui/ProductCard';

const ProductsSection: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'GI Doors & Windows',
      description: 'Durable and affordable galvanized iron doors and windows for various applications.',
      image: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Excellent durability and weather resistance',
        'Cost-effective solutions for various applications',
        'Customizable designs and finishes',
        'Low maintenance requirements'
      ],
      category: 'gi-doors-windows'
    },
    {
      id: 2,
      title: 'UPVC Doors & Windows',
      description: 'Energy-efficient UPVC solutions with excellent insulation and soundproofing.',
      image: 'https://images.pexels.com/photos/6444267/pexels-photo-6444267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Superior thermal insulation properties',
        'Excellent soundproofing capabilities',
        'Energy-efficient design',
        'Low maintenance and long lifespan'
      ],
      category: 'upvc-doors-windows'
    },
    {
      id: 3,
      title: 'Aluminium System Windows & Doors',
      description: 'Modern, sleek aluminium systems with superior strength and design flexibility.',
      image: 'https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      features: [
        'Contemporary aesthetics with slim profiles',
        'Excellent strength-to-weight ratio',
        'Variety of finish options',
        'Weather resistant and low maintenance'
      ],
      category: 'aluminium-system'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Premium Solutions"
          subtitle="Discover our range of high-quality doors and windows designed to enhance your space"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              features={product.features}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;