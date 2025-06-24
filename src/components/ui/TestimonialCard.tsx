import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, location, rating }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md relative">
      <div className="absolute -top-4 left-4 sm:left-6 text-4xl sm:text-6xl text-primary-200">"</div>
      <div className="relative z-10">
        <div className="flex mb-2 sm:mb-3">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic mb-3 sm:mb-4 text-sm sm:text-base line-clamp-6">{quote}</p>
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-gray-500 text-xs sm:text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;