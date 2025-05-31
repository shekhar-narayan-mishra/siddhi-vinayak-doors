import React from 'react';

interface AnnouncementBarProps {
  announcements: string[];
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ announcements }) => {
  if (announcements.length === 0) return null;

  return (
    <div className="bg-accent-500 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="relative overflow-hidden w-full">
            <div className="whitespace-nowrap overflow-hidden text-center">
              <div className="animate-marquee inline-block">
                {[...announcements, ...announcements].map((announcement, index) => (
                  <span key={index} className="inline-block mx-8 text-sm md:text-base">
                    {announcement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;