import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  controls?: boolean;
}

const VideoPlayer = ({ src, className = "", controls = true }: VideoPlayerProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Load the video as soon as it comes anywhere near the viewport
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "600px" }
    );

    observer.observe(wrapper);

    // Safety net: make sure every video loads even if it never intersects
    const fallback = window.setTimeout(() => setShouldLoad(true), 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  // Play/pause based on visibility, only once a source exists
  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper || !shouldLoad) return;

    video.load();

    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay blocked; ignore.
      });
    };

    if (typeof IntersectionObserver === "undefined") {
      tryPlay();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0.2 }
    );

    observer.observe(wrapper);
    video.addEventListener("loadeddata", tryPlay);

    return () => {
      observer.disconnect();
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, [shouldLoad]);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload={shouldLoad ? "auto" : "none"}
      />

      {controls && (
        <button
          onClick={toggleMute}
          className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors z-10"
          aria-label={isMuted ? "Ton einschalten" : "Ton ausschalten"}
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
