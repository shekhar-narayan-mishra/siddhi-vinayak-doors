import React from 'react';
import { useParams } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import TestimonialCard from '../components/ui/TestimonialCard';

const ProductPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  // Product data based on category
  const productData: Record<string, any> = {
    'gi-doors-windows': {
      title: 'GI Doors & Windows (Japani Chaukhat)',
      description: 'Durable and cost-effective galvanized iron doors and windows for various applications.',
      mainImage: '/images/gallery/Topcover.png',
      features: [
        'Excellent durability and weather resistance',
        'Cost-effective solutions for various applications',
        'Customizable designs and finishes',
        'Low maintenance requirements',
        'Ideal for industrial and commercial applications',
        'Strong and sturdy construction'
      ],
      benefits: [
        'Long-lasting performance even in harsh conditions',
        'Significant cost savings compared to other materials',
        'Minimal maintenance requirements',
        'High resistance to corrosion and rusting'
      ],
      variants: [
        {
          name: 'GI Doors Frames',
          image: '/images/gallery/gidoorframe.png',
          description: 'Our standard GI doors are designed for everyday use in various settings.'
        },
        {
          name: 'GI Windows With Grill',
          image: '/images/gallery/giwindowframe.png',
          description: 'Premium GI windows offer enhanced aesthetics and functionality.'
        }
      ],
      testimonials: [
        {
          quote: "The GI doors installed in our warehouse have been extremely durable and require minimal maintenance. Great value for money!",
          author: "Amit Kumar",
          location: "Lucknow",
          rating: 5
        },
        {
          quote: "We chose GI windows for our factory and they've held up exceptionally well against the elements. Very satisfied with the quality.",
          author: "Sanjay Patel",
          location: "Kanpur",
          rating: 4
        }
      ]
    },
    'upvc-doors-windows': {
      title: 'UPVC Doors & Windows',
      description: 'Energy-efficient UPVC solutions with excellent insulation and soundproofing capabilities.',
      mainImage: '/images/gallery/Topcover.png',
      features: [
        'Superior thermal insulation properties',
        'Excellent soundproofing capabilities',
        'Energy-efficient design',
        'Low maintenance and long lifespan',
        'Wide range of design options',
        'Multi-point locking systems for enhanced security'
      ],
      benefits: [
        'Reduced energy costs through better insulation',
        'Enhanced comfort with noise reduction',
        'Improved security features',
        'UV resistant - won\'t fade or discolor over time'
      ],
      variants: [
        {
          name: 'Sliding UPVC Windows',
          image: '/images/gallery/upvcslider.png',
          description: 'Space-saving sliding windows with smooth operation.'
        },
        {
          name: 'Casement UPVC Windows',
          image: '/images/gallery/upvccasement.png',
          description: 'Outward opening windows for maximum ventilation.'
        },
        {
          name: 'UPVC French Doors',
          image: '/images/gallery/frenchdoor2.png',
          description: 'Elegant double doors that open from the center.'
        }
      ],
      testimonials: [
        {
          quote: "The UPVC windows have made a remarkable difference in our home's comfort. The noise reduction is incredible and our rooms stay cooler in summer.",
          author: "Meera Kapoor",
          location: "Varanasi",
          rating: 5
        },
        {
          quote: "We replaced all our old windows with UPVC and the difference in our energy bills was noticeable from the first month. Great investment!",
          author: "Rahul Saxena",
          location: "Agra",
          rating: 5
        }
      ]
    },
    'aluminium-system': {
      title: 'Aluminium System Windows & Doors',
      description: 'Modern, sleek aluminium systems with superior strength and design flexibility.',
      mainImage: '/images/gallery/Topcover.png',
      features: [
        'Contemporary aesthetics with slim profiles',
        'Excellent strength-to-weight ratio',
        'Variety of finish options',
        'Weather resistant and low maintenance',
        'Suitable for large openings',
        'Environmentally friendly and recyclable material'
      ],
      benefits: [
        'Modern, sleek appearance',
        'Structural strength allows for larger glass areas',
        'Variety of colors and finishes available',
        'Resistant to warping, rotting, and rusting'
      ],
      variants: [
        {
          name: 'Aluminium Sliding Doors',
          image: 'images/gallery/alluminiumslidingdoor1.png',
          description: 'Space-efficient doors that slide along tracks.'
        },
        {
          name: 'Aluminium Openable Doors',
          image: 'images/gallery/alluminiumopenable.png',
          description: 'Concertina-style folding doors for maximum opening.'
        },
        {
          name: 'Aluminium Slide and Fold',
          image: 'images/gallery/slideandfold.png',
          description: 'For Better Space Utilisation and Aesthetic Appeal.'
        }
      ],
      testimonials: [
        {
          quote: "The aluminium bifold doors we installed completely transformed our living room, creating a seamless connection to our garden. Absolutely worth every penny!",
          author: "Priya Malhotra",
          location: "Lucknow",
          rating: 5
        },
        {
          quote: "For our office building, we chose the aluminium curtain wall system. The installation was professional and the result is stunning. Our clients are impressed!",
          author: "Vikram Agarwal",
          location: "Prayagraj",
          rating: 4
        }
      ]
    }
  };

  // Default content in case category doesn't match
  const defaultContent = {
    title: 'Our Products',
    description: 'Please select a specific product category to view details.',
    mainImage: 'https://images.pexels.com/photos/3626589/pexels-photo-3626589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [],
    benefits: [],
    variants: [],
    testimonials: []
  };

  // Get content based on category parameter
  const content = productData[category ?? ''] || defaultContent;

  return (
    <div className="container mx-auto px-4 py-12"> {/* Removed extra padding-top */}
      <SectionHeader title={content.title} subtitle={content.description} />

      {/* Hero Image */}
      <div className="rounded-lg overflow-hidden mb-12">
        <img
          src={content.mainImage}
          alt={content.title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Features and Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Features</h3>
          <ul className="space-y-3">
            {content.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Benefits</h3>
          <ul className="space-y-3">
            {content.benefits.map((benefit: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-600 mr-2 mt-1">•</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Product Variants */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Product Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.variants.map((variant: any, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img
                  src={variant.image}
                  alt={variant.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{variant.name}</h4>
                <p className="text-gray-600">{variant.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Customer Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.testimonials.map((testimonial: any, index: number) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;