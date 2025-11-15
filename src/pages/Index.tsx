import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-alm.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Mountain className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Oberkogler Alm
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Traditionelle Alpine Spezialitäten aus den Bergen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" variant="secondary" className="text-lg">
                Zum Shop
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-accent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">
            Willkommen auf der Oberkogler Alm
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
            Seit Generationen produzieren wir auf unserer Alm hochwertige alpine Spezialitäten. 
            Umgeben von den majestätischen Bergen, nutzen wir traditionelle Herstellungsmethoden 
            und die besten natürlichen Zutaten aus unserer Region.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">100% Regional</h3>
                <p className="text-muted-foreground text-sm">
                  Alle Produkte aus der Region und von unserer Alm
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Tradition</h3>
                <p className="text-muted-foreground text-sm">
                  Traditionelle Herstellung nach alten Rezepten
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Qualität</h3>
                <p className="text-muted-foreground text-sm">
                  Höchste Qualität durch sorgfältige Handarbeit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Kontakt
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-4">Besuchen Sie uns</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Oberkogler Alm</p>
                      <p className="text-muted-foreground text-sm">
                        Almweg 123<br />
                        5555 Bergdorf<br />
                        Österreich
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">+43 123 456 789</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">info@oberkogler-alm.at</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-4">Öffnungszeiten</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Montag - Freitag</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Samstag</span>
                    <span className="font-medium">9:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sonntag</span>
                    <span className="font-medium">Geschlossen</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2024 Oberkogler Alm. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
