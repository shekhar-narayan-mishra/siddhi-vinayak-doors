import React from 'react';
import { getAssetPath } from '../../utils/assetPath';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'dark' ? 'text-[#0057B8]' : 'text-white';

  return (
    <div className="flex items-center">
      <img 
        src={getAssetPath('/images/image.png')}
        alt="Siddhi Vinayak Logo" 
        className="h-16 w-auto object-contain mr-2"
        onError={(e) => {
          console.error('Logo failed to load:', e);
          // Fallback for when image doesn't load
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="flex flex-col justify-center">
        <span className={`block text-2xl font-bold leading-none tracking-tight ${textColor}`}>
          SIDDHI VINAYAK
        </span>
        <span className={`block text-base font-medium leading-tight mt-0.5 ${textColor}`}>
          DOORS & WINDOWS
        </span>
      </div>
    </div>
  );
};

export default Logo;