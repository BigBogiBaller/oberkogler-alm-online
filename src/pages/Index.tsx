import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Mountain, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import MenuPopup from "@/components/MenuPopup";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";

const Index = () => {
  const { t } = useLanguage();
  const [showMenuPopup, setShowMenuPopup] = useState(false);

  useEffect(() => {
    // Show menu popup after 2 seconds on first load
    const timer = setTimeout(() => {
      setShowMenuPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MenuPopup open={showMenuPopup} onOpenChange={setShowMenuPopup} />
      
      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Carousel 
          className="absolute inset-0"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div 
                  className="h-screen bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Mountain className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" variant="secondary" className="text-lg">
                {t('hero.toShop')}
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => {
                const aboutSection = document.getElementById('about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.learnMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-accent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed max-w-4xl mx-auto">
            {t('about.text')}
          </p>
          
          {/* Instagram Video Embed */}
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="overflow-hidden border-border/50 shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-[9/16] w-full max-w-md mx-auto">
                  <iframe
                    src="https://www.instagram.com/reel/DLelUmZo5ID/embed"
                    className="w-full h-full"
                    allowFullScreen
                    title="Oberkogler Alm Video"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t('about.regional')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('about.regionalText')}
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t('about.tradition')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('about.traditionText')}
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{t('about.quality')}</h3>
                <p className="text-muted-foreground text-sm">
                  {t('about.qualityText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">
            {t('team.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            {t('team.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 shadow-sm hover:shadow-lg transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Mountain className="w-16 h-16 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{t('team.owner')}</h3>
                <p className="text-muted-foreground text-sm mb-3">{t('team.ownerRole')}</p>
                <p className="text-sm">{t('team.ownerDesc')}</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 shadow-sm hover:shadow-lg transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <Mountain className="w-16 h-16 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{t('team.chef')}</h3>
                <p className="text-muted-foreground text-sm mb-3">{t('team.chefRole')}</p>
                <p className="text-sm">{t('team.chefDesc')}</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 shadow-sm hover:shadow-lg transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Mountain className="w-16 h-16 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{t('team.service')}</h3>
                <p className="text-muted-foreground text-sm mb-3">{t('team.serviceRole')}</p>
                <p className="text-sm">{t('team.serviceDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            {t('gallery.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {heroImages.map((image, index) => (
              <Card key={index} className="overflow-hidden border-border/50 shadow-sm hover:shadow-lg transition-all group">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Oberkogler Alm ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Virtual Tour Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">
            {t('tour.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            {t('tour.text')}
          </p>
          <Card className="overflow-hidden border-border/50 shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://my.matterport.com/show?play=1&lang=en-US&m=ACL5BLHHGgf"
                  className="w-full h-full"
                  allowFullScreen
                  title="Oberkogler Alm 3D Tour"
                />
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-6">
            <Button 
              size="lg" 
              variant="default"
              onClick={() => window.open('https://my.matterport.com/show?play=1&lang=en-US&m=ACL5BLHHGgf', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {t('tour.button')}
            </Button>
          </div>

          {/* Social Media Videos */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              {t('social.title')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="aspect-[9/16]">
                    <iframe
                      src="https://www.instagram.com/reel/DLelUmZo5ID/embed"
                      className="w-full h-full"
                      allowFullScreen
                      title="Instagram Video 1"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="aspect-[9/16]">
                    <iframe
                      src="https://www.instagram.com/reel/DMbAuEwIQh0/embed"
                      className="w-full h-full"
                      allowFullScreen
                      title="Instagram Video 2"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="aspect-[9/16]">
                    <iframe
                      src="https://www.instagram.com/reel/DL6wiPtIVZ1/embed"
                      className="w-full h-full"
                      allowFullScreen
                      title="Instagram Video 3"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="aspect-[9/16]">
                    <iframe
                      src="https://www.instagram.com/reel/DL1mtTsIrHo/embed"
                      className="w-full h-full"
                      allowFullScreen
                      title="Instagram Video 4"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            {t('contact.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-4">{t('contact.visit')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Oberkogler Alm</p>
                      <p className="text-muted-foreground text-sm">
                        Wörschachberg 63<br />
                        8942 Wörschach<br />
                        Österreich
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="tel:+436645014429" className="text-muted-foreground hover:text-primary transition-colors">
                      +43 664 5014429
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="mailto:maximilian_schwaiger@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      maximilian_schwaiger@hotmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-4">{t('contact.hours')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('contact.monday')}</span>
                    <span className="font-medium">{t('contact.closed')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('contact.tuesday')}</span>
                    <span className="font-medium">10:00 - 18:00</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      {t('contact.kitchen')}
                    </p>
                    <p className="text-sm text-muted-foreground">10:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Google Maps */}
          <Card className="border-border/50 overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.9642510758026!2d14.17117247626381!3d47.56848397118633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47716d88a3786ecd%3A0x8b4f23744d2c760a!2sOberkogler%20Alm!5e0!3m2!1sen!2srs!4v1763413665846!5m2!1sen!2srs"
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Oberkogler Alm Location"
              />
            </CardContent>
          </Card>
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

export default Index;
