import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Full viewport image that starts from the top of the page */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3773571/pexels-photo-3773571.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Modern home interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
      </div>

      {/* Adjusted content with top padding to account for navbar */}
      <div className="container mx-auto px-4 relative z-10 py-12 md:py-20 mt-10 md:mt-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 animate-fade-in">
            Elevate Your Space with Premium Doors & Windows
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-xl">
            Crafting exceptional door and window solutions for homes and businesses across Uttar Pradesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Get a Quote <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </Link>
            <Link
              to="/products/gi-doors-windows"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base w-full sm:w-auto"
            >
              Explore Products
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 w-full sm:w-auto">
              <p className="text-gray-100 text-base sm:text-lg font-medium">
                Trusted by{' '}
                <span className="text-primary-400 text-xl sm:text-2xl font-bold">
                  <CountUp end={2000} duration={2.5} /> +
                </span>{' '}
                customers across Uttar Pradesh
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 w-full sm:w-auto">
              <div className="flex items-center">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mr-2 sm:mr-3" />
                <div>
                  <span className="text-primary-400 text-2xl sm:text-3xl font-bold">
                    <CountUp end={11} duration={3} />+
                  </span>
                  <p className="text-gray-100 text-base sm:text-lg font-medium">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;