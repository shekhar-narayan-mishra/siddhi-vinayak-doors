import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  features,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{description}</p>
        <ul className="mb-4 sm:mb-6 space-y-1 sm:space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm sm:text-base">
              <span className="text-primary-600 mr-2">•</span>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          to={`/products/${category}`}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;