import React, { useState } from 'react';

interface AnnouncementBarProps {
  announcements: string[];
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ announcements }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || announcements.length === 0) return null;

  return (
    <div className="bg-accent-500 text-white py-2 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="relative overflow-hidden w-full">
            <div className="whitespace-nowrap overflow-hidden text-center">
              <div className="inline-block animate-ticker">
                {announcements.map((announcement, index) => (
                  <span key={index} className="inline-block mx-8 text-sm md:text-base">
                    {announcement}
                  </span>
                ))}
                {/* Repeat the announcements to ensure smooth looping */}
                {announcements.map((announcement, index) => (
                  <span key={`repeat-${index}`} className="inline-block mx-8 text-sm md:text-base">
                    {announcement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-lg"
        aria-label="Close Announcement Bar"
      >
        &times;
      </button>
    </div>
  );
};

export default AnnouncementBar;