import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import { QrCode, UtensilsCrossed } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Menu = () => {
  const { t } = useLanguage();

  const menuCategories = [
    {
      title: "Vorspeisen / Starters",
      items: [
        { name: "Almsuppe", nameEn: "Alpine Soup", price: "€ 6,50" },
        { name: "Knödel-Variation", nameEn: "Dumpling Variation", price: "€ 8,90" },
        { name: "Gebackener Camembert", nameEn: "Baked Camembert", price: "€ 9,50" }
      ]
    },
    {
      title: "Hauptspeisen / Main Courses",
      items: [
        { name: "Wiener Schnitzel mit Pommes", nameEn: "Viennese Schnitzel with Fries", price: "€ 16,90" },
        { name: "Schweinsbraten mit Knödel", nameEn: "Roast Pork with Dumpling", price: "€ 15,90" },
        { name: "Käsespätzle", nameEn: "Cheese Spätzle", price: "€ 13,50" },
        { name: "Forelle Müllerin", nameEn: "Trout Müllerin Style", price: "€ 17,90" }
      ]
    },
    {
      title: "Desserts / Desserts",
      items: [
        { name: "Apfelstrudel mit Vanillesauce", nameEn: "Apple Strudel with Vanilla Sauce", price: "€ 6,50" },
        { name: "Topfenknödel", nameEn: "Curd Cheese Dumplings", price: "€ 7,20" },
        { name: "Kaiserschmarrn", nameEn: "Shredded Pancake", price: "€ 8,90" }
      ]
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
              <UtensilsCrossed className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                {t('menu.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('menu.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* QR Code Section */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <QrCode className="h-5 w-5" />
                    {t('menu.qrTitle')}
                  </CardTitle>
                  <CardDescription>{t('menu.qrSubtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-background p-6 rounded-lg border-2 border-primary">
                    <div className="w-full aspect-square bg-muted flex items-center justify-center rounded">
                      <QrCode className="w-32 h-32 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {menuCategories.map((category, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex justify-between items-start border-b border-border pb-4 last:border-0">
                          <div>
                            <h3 className="font-semibold text-foreground">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.nameEn}</p>
                          </div>
                          <span className="font-semibold text-primary">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Menu;
