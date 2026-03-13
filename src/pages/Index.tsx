import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Mountain, ExternalLink, Heart, Utensils, ShoppingBag, Dog, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroSlideshow from "@/components/HeroSlideshow";
import InstagramSection from "@/components/InstagramSection";
import TikTokSection from "@/components/TikTokSection";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import MenuQRPopup from "@/components/MenuQRPopup";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import heroAlm from "@/assets/hero-alm.jpg";
import aboutVideo from "@/assets/about-video.mp4";
import oberkoglerLogo from "@/assets/oberkogler-logo.png";
import teamVideo from "@/assets/team-video.mp4";
import curvedArrow from "@/assets/curved-arrow.png";
import VideoPlayer from "@/components/VideoPlayer";
import dishKasnockerl from "@/assets/dish-kasnockerl.jpg";
import dishSteirerkaskropfn from "@/assets/dish-steirerkaskropfn.jpg";
import dishBratlbrot from "@/assets/dish-bratlbrot.jpg";
import dishSuppe from "@/assets/dish-suppe.jpg";
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
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return <div ref={ref} className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}>
      {children}
    </div>;
};
const Index = () => {
  const {
    t
  } = useLanguage();
  const heroImages = [hero2, hero3, hero4, hero5, hero6];
  // Show only first 12 images on homepage
  const galleryPreviewImages = [hero2, hero3, hero4, hero5, hero6, galleryKuchen, galleryWaldweg, galleryDekoration, galleryGarten, galleryKuehe, galleryWinterWolken, galleryTeich];

  // Stagger animations for team and animals
  const teamStagger = useStaggerAnimation(5, 150);
  const animalsStagger = useStaggerAnimation(3, 200);
  const culinaryStagger = useStaggerAnimation(4, 150);
  const shopStagger = useStaggerAnimation(5, 120);
  const teamMembers = [{
    key: 'max',
    icon: Heart
  }, {
    key: 'christa',
    icon: Utensils
  }, {
    key: 'hubert',
    icon: Mountain
  }, {
    key: 'petra',
    icon: Heart
  }, {
    key: 'ina',
    icon: Leaf
  }];
  const animals = [{
    key: 'dogs',
    icon: Dog
  }, {
    key: 'cattle',
    icon: Mountain
  }, {
    key: 'ponies',
    icon: Heart
  }];
  const culinaryHighlights = [{
    key: 'kasnockerl',
    price: '€9,50',
    image: dishKasnockerl
  }, {
    key: 'steirerkasnockerl',
    price: '€10,50',
    image: dishSteirerkaskropfn
  }, {
    key: 'bratlbrot',
    price: '€5,50',
    image: dishBratlbrot
  }, {
    key: 'suppen',
    price: 'ab €4,00',
    image: dishSuppe
  }];
  const shopProducts = [{
    key: 'salbe',
    price: '€6,00'
  }, {
    key: 'johanniskraut',
    price: '€8,50'
  }, {
    key: 'marmelade',
    price: '€3,00'
  }, {
    key: 'honig',
    price: '€6,50 - €16,50'
  }, {
    key: 'hartwuerstl',
    price: '€4,50'
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      <MenuQRPopup />
      
      {/* Hero Section with Ken Burns Effect - Fade Slideshow */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Fade-based image slideshow */}
        <HeroSlideshow images={heroImages} />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8">
          <img src={oberkoglerLogo} alt="Oberkogler Alm" className="w-64 md:w-80 lg:w-96 mx-auto mb-8 drop-shadow-2xl" />
          <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in-up drop-shadow-lg font-medium text-white" style={{
          animationDelay: '200ms'
        }}>
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator">
          
        </div>
      </section>

      {/* Welcome Section - Two Column Layout */}
      <section id="about" className="section-padding px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
      <div className="space-y-12">
            <AnimatedSection animation="fade-in-up" className="text-center space-y-6 max-w-3xl mx-auto">
              <span className="text-sm uppercase tracking-widest text-primary font-medium">
                {t('about.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                {t('about.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.text')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.text2')}
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Button variant="default" size="lg" onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }} className="hover-lift">
                  {t('about.visitButton')}
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up">
              <div className="relative max-w-3xl mx-auto">
                {/* Arrow + "mehr über uns" */}
                <div className="flex items-center gap-3 mb-4 justify-end pr-4">
                  <span className="text-primary font-medium text-sm uppercase tracking-wider">Mehr über uns</span>
                  <img src={curvedArrow} alt="" className="w-10 h-10 rotate-90 opacity-70" />
                </div>
                <a
                  href="https://www.instagram.com/p/DMbAuEwIQh0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-lg shadow-xl group cursor-pointer"
                >
                  <div className="aspect-[9/16] relative">
                    <VideoPlayer src={aboutVideo} className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                    <ExternalLink className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {['regional', 'tradition', 'quality'].map((feature, index) => <AnimatedSection key={feature} animation="fade-in-up">
                <Card className="border-border/50 shadow-sm card-hover h-full" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mountain className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{t(`about.${feature}`)}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`about.${feature}Text`)}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              {t('team.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-4">
              {t('team.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </AnimatedSection>
          
          <div ref={teamStagger.containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => {
            const Icon = member.icon;
            const slideDirection = index % 2 === 0 ? '-translate-x-12' : 'translate-x-12';
            return <Card key={member.key} className={`border-border/50 shadow-sm card-hover transition-all duration-700 ease-out ${teamStagger.visibleItems[index] ? 'opacity-100 translate-x-0' : `opacity-0 ${slideDirection}`}`}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{t(`team.${member.key}.name`)}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{t(`team.${member.key}.role`)}</p>
                    <p className="text-muted-foreground text-sm">{t(`team.${member.key}.desc`)}</p>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Curved Arrow pointing down to Team Video */}
          <AnimatedSection className="flex flex-col items-center mt-16">
            <img src={curvedArrow} alt="Arrow pointing to video" className="w-20 h-auto" />
          </AnimatedSection>

          {/* Team Video */}
          <AnimatedSection className="mt-8 flex justify-center">
            <a href="https://www.instagram.com/p/DLelUmZo5ID/" target="_blank" rel="noopener noreferrer" className="block max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="aspect-[9/16] relative bg-black">
                <VideoPlayer src={teamVideo} className="w-full h-full" />
              </div>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Animals Section */}
      <section className="section-padding px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              {t('animals.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-4">
              {t('animals.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('animals.subtitle')}
            </p>
          </AnimatedSection>
          
          <div ref={animalsStagger.containerRef} className="grid md:grid-cols-3 gap-8">
            {animals.map((animal, index) => {
            const Icon = animal.icon;
            const slideDirection = index % 2 === 0 ? '-translate-x-12' : 'translate-x-12';
            return <Card key={animal.key} className={`border-border/50 shadow-lg card-hover overflow-hidden transition-all duration-700 ease-out ${animalsStagger.visibleItems[index] ? 'opacity-100 translate-x-0' : `opacity-0 ${slideDirection}`}`}>
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-primary/50" />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-xl mb-2">{t(`animals.${animal.key}.name`)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`animals.${animal.key}.desc`)}
                    </p>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Feeding Notice */}
          <AnimatedSection className="mt-12">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="pt-6 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-2 text-primary">{t('animals.notice.title')}</h4>
                <p className="text-muted-foreground">{t('animals.notice.text')}</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Culinary Highlights Section - Parallax Background */}
      <section className="relative section-padding px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{
        backgroundImage: `url(${hero4})`
      }}>
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary-foreground/80 font-medium">
              {t('culinary.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-4">
              {t('culinary.title')}
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              {t('culinary.subtitle')}
            </p>
          </AnimatedSection>
          
          <div ref={culinaryStagger.containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culinaryHighlights.map((dish, index) => <Card key={dish.key} className={`bg-primary-foreground/95 border-0 shadow-xl card-hover transition-all duration-700 overflow-hidden ${culinaryStagger.visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="aspect-square overflow-hidden">
                  <img src={dish.image} alt={t(`culinary.${dish.key}.name`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="pt-4 text-center">
                  <h3 className="font-semibold text-lg mb-2">{t(`culinary.${dish.key}.name`)}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{t(`culinary.${dish.key}.desc`)}</p>
                  <span className="text-primary font-bold text-lg">{dish.price}</span>
                </CardContent>
              </Card>)}
          </div>
          
          <AnimatedSection className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="secondary" className="text-lg hover-lift">
                {t('culinary.button')}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Farm Shop Preview */}
      <section className="section-padding px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              {t('farmshop.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-4">
              {t('farmshop.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('farmshop.subtitle')}
            </p>
          </AnimatedSection>
          
          <div ref={shopStagger.containerRef} className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {shopProducts.map((product, index) => <Card key={product.key} className={`border-border/50 shadow-sm card-hover transition-all duration-700 ${shopStagger.visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base mb-1">{t(`farmshop.${product.key}.name`)}</h3>
                  <p className="text-muted-foreground text-xs mb-2">{t(`farmshop.${product.key}.desc`)}</p>
                  <span className="text-primary font-bold">{product.price}</span>
                </CardContent>
              </Card>)}
          </div>
          
          <AnimatedSection className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="default" className="text-lg hover-lift">
                <ShoppingBag className="w-5 h-5 mr-2" />
                {t('farmshop.button')}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 3D Virtual Tour Section */}
      <section className="section-padding px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              {t('tour.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-4">
              {t('tour.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('tour.text')}
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <Card className="overflow-hidden border-border/50 shadow-xl">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe src="https://my.matterport.com/show?play=1&lang=en-US&m=ACL5BLHHGgf" className="w-full h-full" allowFullScreen title="Oberkogler Alm 3D Tour" />
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="default" onClick={() => window.open('https://my.matterport.com/show?play=1&lang=en-US&m=ACL5BLHHGgf', '_blank')} className="hover-lift">
              <ExternalLink className="w-4 h-4 mr-2" />
              {t('tour.button')}
            </Button>
          </div>

        </div>
      </section>

      {/* Social Media Section */}
      <section className="pt-20 pb-0 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-8">
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-4">
              {t('social.title')}
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramSection />

      {/* TikTok Section */}
      <TikTokSection />

      {/* Gallery Section */}
      <section className="section-padding px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              {t('gallery.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('gallery.subtitle')}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryPreviewImages.map((image, index) => <AnimatedSection key={index} animation="scale-in">
                <Card className="overflow-hidden border-border/50 shadow-sm card-hover group">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden">
                      <img src={image} alt={`Oberkogler Alm ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>)}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/gallery">
              <Button size="lg" variant="default" className="text-lg hover-lift">
                {t('gallery.button')}
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              {t('contact.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4">
              {t('contact.title')}
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <AnimatedSection animation="fade-in-left">
              <Card className="border-border/50 h-full">
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
                    <div className="flex items-center gap-3 min-w-0">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href="mailto:maximilian_schwaiger@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors truncate text-sm sm:text-base">
                        maximilian_schwaiger@hotmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right">
              <Card className="border-border/50 h-full">
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
            </AnimatedSection>
          </div>
          
          {/* Google Maps */}
          <AnimatedSection>
            <Card className="border-border/50 overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.9642510758026!2d14.17117247626381!3d47.56848397118633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47716d88a3786ecd%3A0x8b4f23744d2c760a!2sOberkogler%20Alm!5e0!3m2!1sen!2srs!4v1763413665846!5m2!1sen!2srs" className="w-full h-[300px] sm:h-[450px]" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Oberkogler Alm Location" />
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={oberkoglerLogo} alt="Oberkogler Alm" className="h-24 cursor-pointer brightness-[0.3] sepia saturate-[3] hue-rotate-[350deg]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
            <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
              {t('footer.impressum')}
            </Link>
            <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
              {t('footer.datenschutz')}
            </Link>
            <Link to="/agb" className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
              {t('footer.agb')}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-muted-foreground">
            © 2026 Oberkogler Alm. {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;