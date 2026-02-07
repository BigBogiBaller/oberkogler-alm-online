import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink, PenLine } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Reviews = () => {
  const { t } = useLanguage();
  const isGerman = t('reviews.language') === 'de';

  const totalReviews = 207;
  const averageRating = 4.9;

  // Google Review Link for Oberkogler Alm
  const googleReviewLink = "https://search.google.com/local/writereview?placeid=ChIJK8eP5GHvbUcRZDLk7TqxJak";
  const googleMapsLink = "https://www.google.com/maps/place/Oberkogler+Alm/@47.568484,14.1737474,17z/data=!4m8!3m7!1s0x476defb16489c72b:0xa925b13aede432645!8m2!3d47.568484!4d14.1763223!9m1!1b1!16s%2Fg%2F11c5r2_qz4";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedElement delay={0}>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              {isGerman ? 'Kundenstimmen' : 'Customer Voices'}
            </p>
          </AnimatedElement>
          
          <AnimatedElement delay={100}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
              {isGerman ? 'Was unsere Gäste sagen' : 'What our guests say'}
            </h1>
          </AnimatedElement>
          
          <AnimatedElement delay={200}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {isGerman 
                ? 'Echte Bewertungen von echten Gästen. Überzeugen Sie sich selbst von der Oberkogler Alm Erfahrung.' 
                : 'Real reviews from real guests. See for yourself the Oberkogler Alm experience.'}
            </p>
          </AnimatedElement>

          {/* Rating Summary */}
          <AnimatedElement delay={300}>
            <div className="inline-flex flex-col items-center bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-8 h-8 fill-primary text-primary" />
                ))}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-foreground">{averageRating}</span>
                <span className="text-2xl text-muted-foreground">/ 5</span>
              </div>
              <p className="text-muted-foreground">
                {isGerman ? 'Basierend auf' : 'Based on'} <span className="font-semibold text-foreground">{totalReviews}</span> {isGerman ? 'Google Bewertungen' : 'Google reviews'}
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <AnimatedElement>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <a 
                href={googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg font-medium"
              >
                <PenLine className="w-5 h-5" />
                {isGerman ? 'Bewertung schreiben' : 'Write a Review'}
              </a>
              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-full hover:bg-muted transition-all hover:scale-105 shadow-md border border-border font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                {isGerman ? `Alle ${totalReviews} Bewertungen auf Google` : `All ${totalReviews} reviews on Google`}
              </a>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                {isGerman ? 'Ausgewählte Bewertungen' : 'Featured Reviews'}
              </h2>
              <p className="text-muted-foreground">
                {isGerman ? 'Eine Auswahl unserer Google-Bewertungen' : 'A selection of our Google reviews'}
              </p>
            </div>
          </AnimatedElement>

          {/* Reviews Grid - Masonry Style */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <ReviewCard 
              name="Maria S."
              rating={5}
              date={isGerman ? "vor 2 Monaten" : "2 months ago"}
              text={isGerman 
                ? "Wunderschöne Alm mit herrlichem Ausblick! Das Essen war ausgezeichnet und die Atmosphäre einzigartig. Besonders der Kaiserschmarrn war ein Traum!" 
                : "Beautiful alpine hut with stunning views! The food was excellent and the atmosphere unique. The Kaiserschmarrn was especially delicious!"}
              delay={0}
            />
            <ReviewCard 
              name="Thomas K."
              rating={5}
              date={isGerman ? "vor 3 Monaten" : "3 months ago"}
              text={isGerman 
                ? "Perfekte Lage für eine Wanderpause. Die hausgemachten Produkte sind ein Genuss. Service war sehr freundlich und aufmerksam. Wir kommen definitiv wieder!" 
                : "Perfect location for a hiking break. The homemade products are delicious. Service was very friendly and attentive. We will definitely come back!"}
              delay={50}
            />
            <ReviewCard 
              name="Sophie M."
              rating={5}
              date={isGerman ? "vor 3 Monaten" : "3 months ago"}
              text={isGerman 
                ? "Die authentische alpine Küche hat uns begeistert! Alles frisch und regional." 
                : "The authentic alpine cuisine impressed us! Everything fresh and regional."}
              delay={100}
            />
            <ReviewCard 
              name="Franz W."
              rating={5}
              date={isGerman ? "vor 4 Monaten" : "4 months ago"}
              text={isGerman 
                ? "Tolle Alm mit traditionellem Charme. Die Wirtsleute sind sehr herzlich. Das Bergkäse-Jausenbrett war köstlich! Ein echter Geheimtipp in der Region." 
                : "Great alpine hut with traditional charm. The hosts are very warm. The mountain cheese platter was delicious! A real insider tip in the region."}
              delay={150}
            />
            <ReviewCard 
              name="Julia B."
              rating={5}
              date={isGerman ? "vor 5 Monaten" : "5 months ago"}
              text={isGerman 
                ? "Ein Highlight unserer Wandertour! Gemütliche Atmosphäre und fantastisches Essen. Die hausgemachten Kuchen sind ein Traum." 
                : "A highlight of our hiking tour! Cozy atmosphere and fantastic food. The homemade cakes are a dream."}
              delay={200}
            />
            <ReviewCard 
              name="Michael R."
              rating={5}
              date={isGerman ? "vor 5 Monaten" : "5 months ago"}
              text={isGerman 
                ? "Sehr schöne Lage und gutes Essen. Preise sind angemessen für die Qualität. Kann ich nur empfehlen!" 
                : "Very nice location and good food. Prices are reasonable for the quality. I can only recommend it!"}
              delay={250}
            />
            <ReviewCard 
              name="Anna L."
              rating={5}
              date={isGerman ? "vor 6 Monaten" : "6 months ago"}
              text={isGerman 
                ? "Wir waren zum ersten Mal hier und sind begeistert! Die Produkte aus eigener Herstellung sind fantastisch. Das Team ist super freundlich. Traumhafte Aussicht auf die Berge!" 
                : "We were here for the first time and are thrilled! The homemade products are fantastic. The team is super friendly. Stunning mountain views!"}
              delay={300}
            />
            <ReviewCard 
              name="Peter H."
              rating={5}
              date={isGerman ? "vor 7 Monaten" : "7 months ago"}
              text={isGerman 
                ? "Absolute Empfehlung! Die Alm ist wunderschön gelegen und das Essen schmeckt hervorragend." 
                : "Absolute recommendation! The alpine hut is beautifully located and the food tastes excellent."}
              delay={350}
            />
            <ReviewCard 
              name="Elisabeth G."
              rating={5}
              date={isGerman ? "vor 8 Monaten" : "8 months ago"}
              text={isGerman 
                ? "Traumhafte Aussicht und super nettes Personal. Die Brettljause war reichhaltig und lecker. Komme wieder!" 
                : "Stunning views and super friendly staff. The traditional platter was abundant and delicious. Will come back!"}
              delay={400}
            />
          </div>

          {/* View More on Google */}
          <AnimatedElement delay={450}>
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                {isGerman 
                  ? `...und ${totalReviews - 9} weitere Bewertungen auf Google` 
                  : `...and ${totalReviews - 9} more reviews on Google`}
              </p>
              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
              >
                {isGerman ? 'Alle Bewertungen lesen' : 'Read all reviews'}
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </AnimatedElement>
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

// Animated Element Component
const AnimatedElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Review Card Component
const ReviewCard = ({ 
  name, 
  rating, 
  date, 
  text,
  delay = 0
}: { 
  name: string; 
  rating: number; 
  date: string; 
  text: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "break-inside-avoid transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300 hover:border-primary/30">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold text-lg">{name[0]}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{name}</h3>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            </div>
            {/* Google Icon */}
            <svg className="w-5 h-5 text-muted-foreground/50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
          <div className="flex gap-0.5 mb-3">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm">
            "{text}"
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reviews;
