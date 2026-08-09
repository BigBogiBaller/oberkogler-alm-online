import { useState, useEffect } from "react";

interface HeroSlideshowProps {
  images: string[];
  interval?: number;
}

const HeroSlideshow = ({ images, interval = 6000 }: HeroSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadRest, setLoadRest] = useState(false);

  useEffect(() => {
    const idle = window.setTimeout(() => setLoadRest(true), 2000);
    return () => window.clearTimeout(idle);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat animate-ken-burns"
            style={{
              backgroundImage:
                index === 0 || loadRest || index === currentIndex ? `url(${image})` : undefined,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        </div>
      ))}
    </div>
  );
};

export default HeroSlideshow;
