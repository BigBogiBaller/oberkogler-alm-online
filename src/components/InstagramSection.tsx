import { useState } from "react";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Import gallery images
import galleryKuchen from "@/assets/gallery-kuchen.jpg";
import galleryBier from "@/assets/gallery-bier.jpg";
import galleryKuehe from "@/assets/gallery-kuehe.jpg";
import galleryBrettljause from "@/assets/gallery-brettljause.jpg";
import galleryTerrasse from "@/assets/gallery-terrasse.jpg";
import galleryPferd from "@/assets/gallery-pferd.jpg";
import galleryBierAussicht from "@/assets/gallery-bier-aussicht.jpg";
import galleryBlumen from "@/assets/gallery-blumen.jpg";

const InstagramSection = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const instagramPosts = [
    { image: galleryKuchen, caption: language === 'de' ? 'Hausgemachte Köstlichkeiten' : 'Homemade delights' },
    { image: galleryBier, caption: language === 'de' ? 'Erfrischung pur' : 'Pure refreshment' },
    { image: galleryKuehe, caption: language === 'de' ? 'Unsere Almkühe' : 'Our alpine cows' },
    { image: galleryBrettljause, caption: language === 'de' ? 'Steirische Jause' : 'Styrian snack' },
    { image: galleryTerrasse, caption: language === 'de' ? 'Gemütliche Atmosphäre' : 'Cozy atmosphere' },
    { image: galleryPferd, caption: language === 'de' ? 'Tierische Freunde' : 'Animal friends' },
    { image: galleryBierAussicht, caption: language === 'de' ? 'Aussicht genießen' : 'Enjoy the view' },
    { image: galleryBlumen, caption: language === 'de' ? 'Alpenflora' : 'Alpine flora' },
  ];

  const visibleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 5;
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
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Rotating Instagram Badge */}
          <div className="flex-shrink-0 relative">
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

          {/* Image Carousel */}
          <div className="flex-1 overflow-hidden w-full">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount + 4)}%)` }}
            >
              {instagramPosts.map((post, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/oberkogler_alm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 relative group cursor-pointer"
                  style={{ width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 16 / visibleCount}px)` }}
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={post.image} 
                      alt={post.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Instagram Icon */}
                    <div className="absolute top-3 left-3">
                      <Instagram className="w-5 h-5 text-white drop-shadow-lg" />
                    </div>
                    
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium drop-shadow-lg">
                        {post.caption}
                      </p>
                    </div>
                  </div>
                </a>
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
