import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ReviewForm from "@/components/ReviewForm";
import Newsletter from "@/components/Newsletter";

const Reviews = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Maria S.",
      rating: 5,
      date: "2024-10",
      textDe: "Wunderschöne Alm mit herrlichem Ausblick! Das Essen war ausgezeichnet und die Atmosphäre einzigartig. Besonders der Kaiserschmarrn war ein Traum!",
      textEn: "Beautiful alpine hut with stunning views! The food was excellent and the atmosphere unique. The Kaiserschmarrn was especially delicious!"
    },
    {
      name: "Thomas K.",
      rating: 5,
      date: "2024-09",
      textDe: "Perfekte Lage für eine Wanderpause. Die hausgemachten Produkte sind ein Genuss. Service war sehr freundlich und aufmerksam.",
      textEn: "Perfect location for a hiking break. The homemade products are delicious. Service was very friendly and attentive."
    },
    {
      name: "Sophie M.",
      rating: 5,
      date: "2024-08",
      textDe: "Die authentische alpine Küche hat uns begeistert! Alles frisch und regional. Die Aussicht ist atemberaubend. Werden definitiv wiederkommen!",
      textEn: "The authentic alpine cuisine impressed us! Everything fresh and regional. The view is breathtaking. Will definitely come back!"
    },
    {
      name: "Franz W.",
      rating: 5,
      date: "2024-07",
      textDe: "Tolle Alm mit traditionellem Charme. Die Wirtsleute sind sehr herzlich. Das Bergkäse-Jausenbrett war köstlich!",
      textEn: "Great alpine hut with traditional charm. The hosts are very warm. The mountain cheese platter was delicious!"
    },
    {
      name: "Julia B.",
      rating: 5,
      date: "2024-06",
      textDe: "Ein Highlight unserer Wandertour! Gemütliche Atmosphäre und fantastisches Essen. Die hausgemachten Kuchen sind ein Traum.",
      textEn: "A highlight of our hiking tour! Cozy atmosphere and fantastic food. The homemade cakes are a dream."
    },
    {
      name: "Michael R.",
      rating: 4,
      date: "2024-05",
      textDe: "Sehr schöne Lage und gutes Essen. Preise sind angemessen für die Qualität. Kann ich nur empfehlen!",
      textEn: "Very nice location and good food. Prices are reasonable for the quality. I can only recommend it!"
    },
    {
      name: "Anna L.",
      rating: 5,
      date: "2024-04",
      textDe: "Wir waren zum ersten Mal hier und sind begeistert! Die Produkte aus eigener Herstellung sind fantastisch. Das Team ist super freundlich.",
      textEn: "We were here for the first time and are thrilled! The homemade products are fantastic. The team is super friendly."
    },
    {
      name: "Peter H.",
      rating: 5,
      date: "2024-03",
      textDe: "Absolute Empfehlung! Die Alm ist wunderschön gelegen und das Essen schmeckt hervorragend. Ein echter Geheimtipp!",
      textEn: "Absolute recommendation! The alpine hut is beautifully located and the food tastes excellent. A real insider tip!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
            {t('reviews.title')}
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-4">
            {t('reviews.subtitle')}
          </p>
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">4.9</span>
            <span className="text-muted-foreground">({reviews.length} {t('reviews.reviews')})</span>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Reviews Grid */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {reviews.map((review, index) => (
                  <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{review.name}</h3>
                          <p className="text-sm text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('reviews.language') === 'de' ? review.textDe : review.textEn}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Review Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ReviewForm />
                
                <Card className="border-border/50 mt-6">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">{t('reviews.visitUs')}</p>
                    <a 
                      href="https://www.google.com/maps/place/Oberkogler+Alm/@47.568484,14.1737474"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      {t('reviews.googleLink')}
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Newsletter */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-2">{t('newsletter.title')}</h3>
              <p className="text-primary-foreground/80 mb-4">{t('newsletter.subtitle')}</p>
              <Newsletter />
            </div>
            <div className="text-right">
              <h3 className="text-xl font-bold mb-4">Oberkogler Alm</h3>
              <p className="text-primary-foreground/80 text-sm">
                Wörschachberg 63<br />
                8942 Wörschach<br />
                Österreich
              </p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-sm text-primary-foreground/80">
              © 2024 Oberkogler Alm. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Reviews;
