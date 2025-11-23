import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import { Calendar, Clock, Users, Mail, Phone, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Reservation = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('reservation.success'),
        description: "Wir werden uns bald bei Ihnen melden.",
      });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                {t('reservation.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('reservation.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>{t('reservation.title')}</CardTitle>
                  <CardDescription>
                    Füllen Sie das Formular aus und wir werden Ihre Reservierung bestätigen.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {t('reservation.name')}
                        </Label>
                        <Input id="name" name="name" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {t('reservation.email')}
                        </Label>
                        <Input id="email" name="email" type="email" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {t('reservation.phone')}
                        </Label>
                        <Input id="phone" name="phone" type="tel" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="guests" className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {t('reservation.guests')}
                        </Label>
                        <Input id="guests" name="guests" type="number" min="1" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date" className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {t('reservation.date')}
                        </Label>
                        <Input id="date" name="date" type="date" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time" className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {t('reservation.time')}
                        </Label>
                        <Input id="time" name="time" type="time" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t('reservation.message')}
                      </Label>
                      <Textarea id="message" name="message" rows={4} />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Wird gesendet..." : t('reservation.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-heading font-bold mb-4">Oder kontaktieren Sie uns direkt</h2>
              <p className="text-muted-foreground mb-6">
                Sie können uns auch telefonisch erreichen:
              </p>
              <a href="tel:+436645014429" className="text-2xl font-semibold text-primary hover:underline">
                +43 664 5014429
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reservation;
