import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import { Calendar, Clock, MapPin, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  const { t } = useLanguage();

  const upcomingEvents = [
    {
      title: "Live Musik am Berg",
      titleEn: "Live Music on the Mountain",
      date: "15. Juni 2025",
      time: "14:00 - 18:00 Uhr",
      description: "Genießen Sie traditionelle österreichische Musik mit unserer Live-Band",
      descriptionEn: "Enjoy traditional Austrian music with our live band",
      category: "Musik"
    },
    {
      title: "Almfest",
      titleEn: "Alpine Festival",
      date: "20. Juli 2025",
      time: "11:00 - 20:00 Uhr",
      description: "Traditionelles Almfest mit regionalen Spezialitäten und Unterhaltung",
      descriptionEn: "Traditional alpine festival with regional specialties and entertainment",
      category: "Festival"
    },
    {
      title: "Sonnenaufgangswanderung",
      titleEn: "Sunrise Hike",
      date: "5. August 2025",
      time: "05:00 Uhr",
      description: "Geführte Wanderung zum Sonnenaufgang mit anschließendem Frühstück",
      descriptionEn: "Guided sunrise hike followed by breakfast",
      category: "Wanderung"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Music className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                {t('events.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('events.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                          <CardDescription className="text-base">{event.titleEn}</CardDescription>
                        </div>
                        <Badge variant="secondary">{event.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-1 text-primary" />
                          <div>
                            <p className="font-medium">Oberkogler Alm</p>
                            <p className="text-sm text-muted-foreground">
                              Wörschachberg 63, 8942 Wörschach
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <p className="text-foreground">{event.description}</p>
                          <p className="text-sm text-muted-foreground mt-2">{event.descriptionEn}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Music className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">{t('events.noEvents')}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Events;
