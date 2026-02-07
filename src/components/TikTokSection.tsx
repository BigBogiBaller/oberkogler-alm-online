import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const TikTokSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tiktokVideos = [
    "https://www.tiktok.com/embed/v2/7493827615282866449",
    "https://www.tiktok.com/embed/v2/7489579638741757201",
    "https://www.tiktok.com/embed/v2/7481987437543210257",
    "https://www.tiktok.com/embed/v2/7479023399863350545",
  ];

  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 4;
  const maxIndex = Math.max(0, tiktokVideos.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-20 px-4 bg-[#e6f0f5]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Rotating TikTok Badge */}
          <div className="flex-shrink-0 relative self-center lg:self-start lg:mt-20">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              {/* Rotating text */}
              <svg 
                className="w-full h-full animate-[spin_20s_linear_infinite]" 
                viewBox="0 0 200 200"
              >
                <defs>
                  <path
                    id="circlePathTikTok"
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text className="fill-[#010101] text-[13px] uppercase tracking-[0.3em] font-medium">
                  <textPath href="#circlePathTikTok">
                    · Oberkogler Alm @ TikTok · folge uns ·
                  </textPath>
                </text>
              </svg>
              {/* Center TikTok Icon */}
              <a 
                href="https://www.tiktok.com/@oberkogler_alm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg border-2 border-[#010101] flex items-center justify-center hover:bg-black/10 transition-colors">
                  <TikTokIcon className="w-8 h-8 md:w-10 md:h-10 text-[#010101]" />
                </div>
              </a>
            </div>
          </div>

          {/* Video Carousel */}
          <div className="flex-1 overflow-hidden w-full">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {tiktokVideos.map((url, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 relative group"
                  style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 16 / visibleCount}px)` }}
                >
                  <div className="aspect-[9/16] overflow-hidden rounded-lg shadow-lg bg-white">
                    <iframe 
                      src={url} 
                      className="w-full h-full" 
                      allowFullScreen 
                      title={`TikTok Video ${index + 1}`}
                    />
                  </div>
                  {/* TikTok Icon Overlay */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <TikTokIcon className="w-5 h-5 text-white drop-shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 text-[#010101] hover:text-black/70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-2 text-[#010101] hover:text-black/70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TikTokSection;
