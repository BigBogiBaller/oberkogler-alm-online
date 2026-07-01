import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// Hero images
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";

// Gallery images batch 1
import galleryKuchen from "@/assets/gallery-kuchen.jpg";
import galleryWaldweg from "@/assets/gallery-waldweg.jpg";
import galleryDekoration from "@/assets/gallery-dekoration.jpg";
import galleryGarten from "@/assets/gallery-garten.jpg";
import galleryKuehe from "@/assets/gallery-kuehe.jpg";
import galleryWinterWolken from "@/assets/gallery-winter-wolken.jpg";
import galleryTeich from "@/assets/gallery-teich.jpg";
import gallerySonnenuntergang from "@/assets/gallery-sonnenuntergang.jpg";
import galleryHausWinter from "@/assets/gallery-haus-winter.jpg";
import galleryBerg from "@/assets/gallery-berg.jpg";

// Gallery images batch 2
import gallerySchild from "@/assets/gallery-schild.jpg";
import galleryBier from "@/assets/gallery-bier.jpg";
import galleryBlumen from "@/assets/gallery-blumen.jpg";
import galleryBerge from "@/assets/gallery-berge.jpg";
import galleryWinterSonnenuntergang from "@/assets/gallery-winter-sonnenuntergang.jpg";
import galleryHuette from "@/assets/gallery-huette.jpg";
import galleryBierAussicht from "@/assets/gallery-bier-aussicht.jpg";
import galleryTerrasse from "@/assets/gallery-terrasse.jpg";
import galleryBrettljause from "@/assets/gallery-brettljause.jpg";
import galleryPferd from "@/assets/gallery-pferd.jpg";

// Animated Section Component
const AnimatedSection = ({
  children,
  className = "",
  animation = "fade-in-up"
}: {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in";
}) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}>
      {children}
    </div>
  );
};

const Gallery = () => {
  const { t, language } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allGalleryImages = [
    { src: hero2, alt: "Alm Landschaft" },
    { src: hero3, alt: "Bergpanorama" },
    { src: hero4, alt: "Almwiese" },
    { src: hero5, alt: "Sonnenaufgang" },
    { src: hero6, alt: "Winterlandschaft" },
    { src: galleryKuchen, alt: "Hausgemachter Kuchen" },
    { src: galleryWaldweg, alt: "Waldweg" },
    { src: galleryDekoration, alt: "Dekoration" },
    { src: galleryGarten, alt: "Garten" },
    { src: galleryKuehe, alt: "Kühe auf der Weide" },
    { src: galleryWinterWolken, alt: "Winterwolken" },
    { src: galleryTeich, alt: "Teich" },
    { src: gallerySonnenuntergang, alt: "Sonnenuntergang" },
    { src: galleryHausWinter, alt: "Haus im Winter" },
    { src: galleryBerg, alt: "Bergblick" },
    { src: gallerySchild, alt: "Willkommensschild" },
    { src: galleryBier, alt: "Erfrischendes Bier" },
    { src: galleryBlumen, alt: "Blumen" },
    { src: galleryBerge, alt: "Bergpanorama" },
    { src: galleryWinterSonnenuntergang, alt: "Winter Sonnenuntergang" },
    { src: galleryHuette, alt: "Die Hütte" },
    { src: galleryBierAussicht, alt: "Bier mit Aussicht" },
    { src: galleryTerrasse, alt: "Gemütliche Terrasse" },
    { src: galleryBrettljause, alt: "Brettljause" },
    { src: galleryPferd, alt: "Pferd auf der Weide" },
  ];

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + allGalleryImages.length) % allGalleryImages.length));
  }, [allGalleryImages.length]);
  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % allGalleryImages.length));
  }, [allGalleryImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, showPrev, showNext, closeLightbox]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEO title={"Galerie – Oberkogler Alm in Bildern"} description={"Eindrücke von der Oberkogler Alm: Tiere, Landschaft, Hofladen und Almküche in den steirischen Bergen."} path="/gallery" />
            
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <AnimatedSection>
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              {t('gallery.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6">
              {t('gallery.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allGalleryImages.map((image, index) => (
              <AnimatedSection key={index} animation="scale-in">
                <Card
                  className="overflow-hidden border-border/50 shadow-sm card-hover group cursor-zoom-in"
                  onClick={() => setLightboxIndex(index)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={lightboxIndex !== null} onOpenChange={(o) => !o && closeLightbox()}>
        <DialogContent className="max-w-[95vw] w-fit p-0 border-none bg-transparent shadow-none [&>button]:hidden">
          {lightboxIndex !== null && (
            <div className="relative flex items-center justify-center">
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 z-10 rounded-full bg-black/60 text-white p-2 hover:bg-black/80 transition-colors"
                aria-label={language === "de" ? "Schließen" : "Close"}
              >
                <X className="w-5 h-5" />
              </button>
              <button
                onClick={showPrev}
                className="absolute left-2 md:-left-14 z-10 rounded-full bg-black/60 text-white p-3 hover:bg-black/80 transition-colors"
                aria-label={language === "de" ? "Vorheriges Bild" : "Previous image"}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <img
                src={allGalleryImages[lightboxIndex].src}
                alt={allGalleryImages[lightboxIndex].alt}
                className="max-h-[90vh] max-w-[95vw] w-auto h-auto object-contain rounded-md"
              />
              <button
                onClick={showNext}
                className="absolute right-2 md:-right-14 z-10 rounded-full bg-black/60 text-white p-3 hover:bg-black/80 transition-colors"
                aria-label={language === "de" ? "Nächstes Bild" : "Next image"}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                {lightboxIndex + 1} / {allGalleryImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2024 Oberkogler Alm. {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
