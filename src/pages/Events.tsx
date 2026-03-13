import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, PartyPopper } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  date: string;
  time: string;
  locationDe: string;
  locationEn: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    titleDe: "Almfest mit Live-Musik",
    titleEn: "Alpine Festival with Live Music",
    descriptionDe: "Genießen Sie einen unvergesslichen Abend mit traditioneller Volksmusik, regionalen Spezialitäten und Tanz unter freiem Himmel auf der Oberkogler Alm.",
    descriptionEn: "Enjoy an unforgettable evening with traditional folk music, regional specialties and dancing under the open sky at Oberkogler Alm.",
    date: "2026-06-21",
    time: "14:00 – 22:00",
    locationDe: "Oberkogler Alm Terrasse",
    locationEn: "Oberkogler Alm Terrace",
  },
  {
    id: 2,
    titleDe: "Kräuterwanderung & Workshop",
    titleEn: "Herb Walk & Workshop",
    descriptionDe: "Entdecken Sie die heimische Kräutervielfalt bei einer geführten Wanderung rund um die Alm. Anschließend stellen wir gemeinsam Salben und Tees her.",
    descriptionEn: "Discover the local variety of herbs on a guided walk around the alm. Afterwards, we'll make salves and teas together.",
    date: "2026-07-12",
    time: "10:00 – 14:00",
    locationDe: "Treffpunkt: Oberkogler Alm",
    locationEn: "Meeting point: Oberkogler Alm",
  },
  {
    id: 3,
    titleDe: "Sommerfest für Familien",
    titleEn: "Summer Festival for Families",
    descriptionDe: "Ein Tag voller Spaß für die ganze Familie! Ponyreiten, Kinderschminken, Hüpfburg und natürlich unsere berühmten Alm-Schmankerl.",
    descriptionEn: "A day full of fun for the whole family! Pony rides, face painting, bouncy castle and of course our famous alpine treats.",
    date: "2026-08-02",
    time: "11:00 – 18:00",
    locationDe: "Oberkogler Alm & Umgebung",
    locationEn: "Oberkogler Alm & Surroundings",
  },
  {
    id: 4,
    titleDe: "Käseverkostung & Almbrunch",
    titleEn: "Cheese Tasting & Alpine Brunch",
    descriptionDe: "Probieren Sie unsere hauseigenen Käsesorten und genießen Sie einen ausgiebigen Brunch mit Produkten direkt von der Alm.",
    descriptionEn: "Try our homemade cheeses and enjoy an extensive brunch with products straight from the alm.",
    date: "2026-08-16",
    time: "09:30 – 13:00",
    locationDe: "Oberkogler Alm Gaststube",
    locationEn: "Oberkogler Alm Dining Room",
  },
  {
    id: 5,
    titleDe: "Erntedankfest",
    titleEn: "Harvest Festival",
    descriptionDe: "Wir feiern die Ernte mit einem festlichen Programm: Erntedank-Messe, traditionelle Musik, Marktstände und herbstliche Kulinarik.",
    descriptionEn: "We celebrate the harvest with a festive program: harvest mass, traditional music, market stalls and autumn cuisine.",
    date: "2026-09-27",
    time: "10:00 – 20:00",
    locationDe: "Oberkogler Alm",
    locationEn: "Oberkogler Alm",
  },
];

const formatDate = (dateStr: string, isGerman: boolean) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString(isGerman ? 'de-AT' : 'en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

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

const EventCard = ({ event, isGerman, delay = 0 }: { event: Event; isGerman: boolean; delay?: number }) => {
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
      <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300 bg-card">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col gap-4">
            {/* Date badge */}
            <div className="flex items-start justify-between">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-center min-w-[80px]">
                <span className="text-2xl font-bold block leading-tight">
                  {new Date(event.date).getDate()}
                </span>
                <span className="text-xs uppercase tracking-wider">
                  {new Date(event.date).toLocaleDateString(isGerman ? 'de-AT' : 'en-US', { month: 'short' })}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
              {isGerman ? event.titleDe : event.titleEn}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {isGerman ? event.descriptionDe : event.descriptionEn}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" />
                {formatDate(event.date, isGerman)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                {isGerman ? event.locationDe : event.locationEn}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Events = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedElement delay={0}>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              {isGerman ? 'Was kommt als Nächstes' : 'What\'s Coming Up'}
            </p>
          </AnimatedElement>
          <AnimatedElement delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              {isGerman ? 'Nächste Veranstaltungen' : 'Upcoming Events'}
            </h1>
          </AnimatedElement>
          <AnimatedElement delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {isGerman
                ? 'Erleben Sie besondere Momente auf der Oberkogler Alm. Ob Almfest, Wanderung oder kulinarisches Erlebnis – hier finden Sie unsere kommenden Veranstaltungen.'
                : 'Experience special moments at Oberkogler Alm. Whether alpine festival, hike or culinary experience – find our upcoming events here.'}
            </p>
          </AnimatedElement>
          <AnimatedElement delay={300}>
            <div className="flex items-center justify-center gap-2 mt-8 text-primary">
              <PartyPopper className="w-5 h-5" />
              <span className="font-medium">
                {isGerman ? `${upcomingEvents.length} Veranstaltungen geplant` : `${upcomingEvents.length} events planned`}
              </span>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl space-y-6">
          {upcomingEvents.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              isGerman={isGerman}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Oberkogler Alm. {isGerman ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-primary transition-colors">
              {isGerman ? 'Impressum' : 'Imprint'}
            </Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">
              {isGerman ? 'Datenschutz' : 'Privacy'}
            </Link>
            <Link to="/agb" className="hover:text-primary transition-colors">
              {isGerman ? 'AGB' : 'Terms'}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Events;
