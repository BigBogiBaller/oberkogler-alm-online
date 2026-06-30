import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
                <Card className="overflow-hidden border-border/50 shadow-sm card-hover group">
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
