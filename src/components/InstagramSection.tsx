import { useState } from "react";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import instagramVideo1 from "@/assets/instagram-video-1.mp4";
import instagramVideo2 from "@/assets/instagram-video-2.mp4";
import instagramVideo3 from "@/assets/instagram-video-3.mp4";
import instagramVideo4 from "@/assets/instagram-video-4.mp4";
import instagramVideo5 from "@/assets/instagram-video-5.mp4";
import instagramVideo6 from "@/assets/instagram-video-6.mp4";

interface InstagramPost {
  src: string;
  link: string;
}

const InstagramSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const instagramPosts: InstagramPost[] = [
    { src: instagramVideo1, link: 'https://www.instagram.com/p/DLelUmZo5ID/' },
    { src: instagramVideo2, link: 'https://www.instagram.com/p/DMbAuEwIQh0/' },
    { src: instagramVideo3, link: 'https://www.instagram.com/p/DL6wiPtIVZ1/' },
    { src: instagramVideo4, link: 'https://www.instagram.com/p/DL1mtTsIrHo/' },
    { src: instagramVideo5, link: 'https://www.instagram.com/p/DLrjG0sI77e/' },
    { src: instagramVideo6, link: 'https://www.instagram.com/p/DLmMqB6IcB0/' },
  ];

  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 4;
  const maxIndex = Math.max(0, instagramPosts.length - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-20 px-4 bg-[#f5e6e0]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Rotating Instagram Badge */}
          <div className="flex-shrink-0 relative self-center lg:self-start lg:mt-20">
            <div className="w-32 h-32 md:w-40 md:h-40 relative">
              {/* Rotating text */}
              <svg 
                className="w-full h-full animate-[spin_20s_linear_infinite]" 
                viewBox="0 0 200 200"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text className="fill-primary text-[13px] uppercase tracking-[0.3em] font-medium">
                  <textPath href="#circlePath">
                    · Oberkogler Alm @ Instagram · folge uns ·
                  </textPath>
                </text>
              </svg>
              {/* Center Instagram Icon */}
              <a 
                href="https://www.instagram.com/oberkogler_alm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-colors">
                  <Instagram className="w-8 h-8 md:w-10 md:h-10 text-primary" />
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
              {instagramPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 relative group"
                  style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 16 / visibleCount}px)` }}
                >
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block aspect-[9/16] overflow-hidden rounded-lg shadow-lg bg-black cursor-pointer"
                  >
                    <video 
                      src={post.src}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </a>
                  {/* Instagram Icon Overlay */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <Instagram className="w-5 h-5 text-white drop-shadow-lg" />
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
            className="p-2 text-primary hover:text-primary/70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="p-2 text-primary hover:text-primary/70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
