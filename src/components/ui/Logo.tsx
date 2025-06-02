import React, { useState, useEffect } from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const textColor = variant === 'dark' ? 'text-[#0057B8]' : 'text-white';
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'scale-100' : 'scale-125'}`}>
      <img 
        src={`${baseUrl}images/image.png`}
        alt="Siddhi Vinayak Logo" 
        className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'} w-auto object-contain mr-3`}
        onError={(e) => {
          console.error('Logo failed to load:', e);
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="flex flex-col justify-center">
        <span 
          className={`block font-bold leading-tight tracking-tight transition-all duration-300 ${textColor} ${
            isScrolled ? 'text-2xl' : 'text-4xl'
          }`}
        >
          SIDDHI VINAYAK
        </span>
        <span 
          className={`block font-medium leading-tight transition-all duration-300 ${textColor} ${
            isScrolled ? 'text-base mt-0.5' : 'text-xl mt-1'
          }`}
        >
          DOORS & WINDOWS
        </span>
      </div>
    </div>
  );
};

export default Logo;