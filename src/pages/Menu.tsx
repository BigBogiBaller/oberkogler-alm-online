import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { X, UtensilsCrossed, Coffee, Cake, Wine, Leaf, Milk, Wheat, Fish, Egg, Nut } from "lucide-react";

interface MenuItem {
  nameDe: string;
  nameEn: string;
  descDe: string;
  descEn: string;
  price: string;
  allergens: string[];
  vegetarian?: boolean;
  vegan?: boolean;
}

interface MenuCategory {
  keyDe: string;
  keyEn: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const allergenInfo: Record<string, { de: string; en: string; icon: React.ReactNode }> = {
  A: { de: "Gluten", en: "Gluten", icon: <Wheat className="w-3 h-3" /> },
  G: { de: "Milch", en: "Milk", icon: <Milk className="w-3 h-3" /> },
  C: { de: "Eier", en: "Eggs", icon: <Egg className="w-3 h-3" /> },
  D: { de: "Fisch", en: "Fish", icon: <Fish className="w-3 h-3" /> },
  H: { de: "Nüsse", en: "Nuts", icon: <Nut className="w-3 h-3" /> },
  L: { de: "Sellerie", en: "Celery", icon: <Leaf className="w-3 h-3" /> },
  M: { de: "Senf", en: "Mustard", icon: <Leaf className="w-3 h-3" /> },
  N: { de: "Sesam", en: "Sesame", icon: <Leaf className="w-3 h-3" /> },
};

const menuCategories: MenuCategory[] = [
  {
    keyDe: "Vorspeisen & Suppen",
    keyEn: "Starters & Soups",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    items: [
      { nameDe: "Almsuppe", nameEn: "Alpine Soup", descDe: "Herzhafte Rindsuppe mit Bergkräutern", descEn: "Hearty beef soup with mountain herbs", price: "€6,50", allergens: ["A", "G", "L"], vegetarian: false },
      { nameDe: "Kaspressknödelsuppe", nameEn: "Cheese Dumpling Soup", descDe: "Traditionelle Käseknödel in klarer Brühe", descEn: "Traditional cheese dumplings in clear broth", price: "€7,90", allergens: ["A", "G", "C"], vegetarian: true },
      { nameDe: "Speckknödelsuppe", nameEn: "Bacon Dumpling Soup", descDe: "Hausgemachte Speckknödel in Rindsbrühe", descEn: "Homemade bacon dumplings in beef broth", price: "€7,50", allergens: ["A", "G", "C"] },
      { nameDe: "Gemischter Salat", nameEn: "Mixed Salad", descDe: "Frischer Salat mit Kürbiskernöl", descEn: "Fresh salad with pumpkin seed oil", price: "€5,90", allergens: ["H"], vegetarian: true, vegan: true },
    ],
  },
  {
    keyDe: "Hauptgerichte",
    keyEn: "Main Courses",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    items: [
      { nameDe: "Wiener Schnitzel", nameEn: "Wiener Schnitzel", descDe: "Paniertes Kalbsschnitzel mit Petersilkartoffeln und Preiselbeeren", descEn: "Breaded veal cutlet with parsley potatoes and lingonberries", price: "€18,90", allergens: ["A", "G", "C"] },
      { nameDe: "Schweinsbraten", nameEn: "Roast Pork", descDe: "Knuspriger Schweinsbraten mit Kraut und Knödel", descEn: "Crispy roast pork with sauerkraut and dumplings", price: "€16,50", allergens: ["A", "G"] },
      { nameDe: "Almkäse Teller", nameEn: "Alpine Cheese Plate", descDe: "Auswahl an heimischen Käsesorten mit Trauben und Nüssen", descEn: "Selection of local cheeses with grapes and nuts", price: "€14,90", allergens: ["G", "H"], vegetarian: true },
      { nameDe: "Kaspressknödel", nameEn: "Cheese Pressed Dumplings", descDe: "3 Stück mit Sauerkraut und Salat", descEn: "3 pieces with sauerkraut and salad", price: "€13,50", allergens: ["A", "G", "C"], vegetarian: true },
      { nameDe: "Kaiserschmarrn", nameEn: "Emperor's Pancake", descDe: "Flaumiger Schmarrn mit Zwetschgenröster", descEn: "Fluffy shredded pancake with plum compote", price: "€12,90", allergens: ["A", "G", "C"], vegetarian: true },
      { nameDe: "Steirische Brettljause", nameEn: "Styrian Platter", descDe: "Aufschnitt, Käse, Aufstriche und Bauernbrot", descEn: "Cold cuts, cheese, spreads and farmhouse bread", price: "€15,90", allergens: ["A", "G", "M"] },
      { nameDe: "Bergforelle", nameEn: "Mountain Trout", descDe: "Gebratene Forelle mit Mandelbutter und Petersilkartoffeln", descEn: "Pan-fried trout with almond butter and parsley potatoes", price: "€19,50", allergens: ["D", "G", "H"] },
    ],
  },
  {
    keyDe: "Für Kinder",
    keyEn: "For Kids",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    items: [
      { nameDe: "Kleine Schnitzel", nameEn: "Small Schnitzel", descDe: "Mit Pommes und Ketchup", descEn: "With fries and ketchup", price: "€9,90", allergens: ["A", "G", "C"] },
      { nameDe: "Kasnocken", nameEn: "Cheese Spaetzle", descDe: "Hausgemachte Nockerl mit viel Käse", descEn: "Homemade spaetzle with lots of cheese", price: "€8,50", allergens: ["A", "G", "C"], vegetarian: true },
      { nameDe: "Palatschinken", nameEn: "Crepes", descDe: "Mit Nutella oder Marmelade", descEn: "With Nutella or jam", price: "€7,50", allergens: ["A", "G", "C", "H"], vegetarian: true },
    ],
  },
  {
    keyDe: "Süßspeisen",
    keyEn: "Desserts",
    icon: <Cake className="w-5 h-5" />,
    items: [
      { nameDe: "Apfelstrudel", nameEn: "Apple Strudel", descDe: "Warm serviert mit Vanillesauce", descEn: "Served warm with vanilla sauce", price: "€6,90", allergens: ["A", "G", "C"], vegetarian: true },
      { nameDe: "Topfenstrudel", nameEn: "Curd Strudel", descDe: "Mit Vanillesauce und Puderzucker", descEn: "With vanilla sauce and powdered sugar", price: "€6,90", allergens: ["A", "G", "C"], vegetarian: true },
      { nameDe: "Mohr im Hemd", nameEn: "Chocolate Soufflé", descDe: "Warmer Schokoladenkuchen mit Schlagobers", descEn: "Warm chocolate cake with whipped cream", price: "€7,50", allergens: ["A", "G", "C"], vegetarian: true },
      { nameDe: "Germknödel", nameEn: "Yeast Dumpling", descDe: "Mit Vanillesauce und Mohn", descEn: "With vanilla sauce and poppy seeds", price: "€8,50", allergens: ["A", "G", "C"], vegetarian: true },
    ],
  },
  {
    keyDe: "Getränke",
    keyEn: "Drinks",
    icon: <Coffee className="w-5 h-5" />,
    items: [
      { nameDe: "Almkaffee", nameEn: "Alpine Coffee", descDe: "Frisch gebrühter Bergkaffee", descEn: "Freshly brewed mountain coffee", price: "€3,50", allergens: [], vegetarian: true, vegan: true },
      { nameDe: "Wiener Melange", nameEn: "Viennese Melange", descDe: "Kaffee mit aufgeschäumter Milch", descEn: "Coffee with frothed milk", price: "€4,20", allergens: ["G"], vegetarian: true },
      { nameDe: "Heiße Schokolade", nameEn: "Hot Chocolate", descDe: "Mit Schlagobers", descEn: "With whipped cream", price: "€4,50", allergens: ["G"], vegetarian: true },
      { nameDe: "Kräutertee", nameEn: "Herbal Tea", descDe: "Aus heimischen Bergkräutern", descEn: "From local mountain herbs", price: "€3,90", allergens: [], vegetarian: true, vegan: true },
      { nameDe: "Almdudler", nameEn: "Almdudler", descDe: "Österreichische Kräuterlimonade", descEn: "Austrian herbal lemonade", price: "€3,50", allergens: [], vegetarian: true, vegan: true },
      { nameDe: "Apfelsaft gespritzt", nameEn: "Apple Spritzer", descDe: "Frischer Apfelsaft mit Mineralwasser", descEn: "Fresh apple juice with sparkling water", price: "€3,20", allergens: [], vegetarian: true, vegan: true },
    ],
  },
  {
    keyDe: "Weine & Spirituosen",
    keyEn: "Wines & Spirits",
    icon: <Wine className="w-5 h-5" />,
    items: [
      { nameDe: "Grüner Veltliner", nameEn: "Grüner Veltliner", descDe: "Steirischer Weißwein, 0,25l", descEn: "Styrian white wine, 0.25l", price: "€5,50", allergens: [], vegetarian: true, vegan: true },
      { nameDe: "Zweigelt", nameEn: "Zweigelt", descDe: "Österreichischer Rotwein, 0,25l", descEn: "Austrian red wine, 0.25l", price: "€5,90", allergens: [], vegetarian: true, vegan: true },
      { nameDe: "Schilcher", nameEn: "Schilcher", descDe: "Steirischer Roséwein, 0,25l", descEn: "Styrian rosé wine, 0.25l", price: "€5,50", allergens: [], vegetarian: true, vegan: true },
      { nameDe: "Obstler", nameEn: "Fruit Brandy", descDe: "Hausgemachter Obstbrand, 2cl", descEn: "Homemade fruit brandy, 2cl", price: "€4,50", allergens: [], vegetarian: true, vegan: true },
      { nameDe: "Zirbenschnaps", nameEn: "Pine Schnapps", descDe: "Alpiner Zirbengeist, 2cl", descEn: "Alpine stone pine spirit, 2cl", price: "€5,00", allergens: [], vegetarian: true, vegan: true },
    ],
  },
];

const Menu = () => {
  const { t, language } = useLanguage();
  const [showQRPopup, setShowQRPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("0");

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("menuQRPopupSeen");
    if (!hasSeenPopup) {
      setShowQRPopup(true);
      sessionStorage.setItem("menuQRPopupSeen", "true");
    }
  }, []);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* QR Code Popup */}
      <Dialog open={showQRPopup} onOpenChange={setShowQRPopup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl text-primary">
              {t('menu.qrTitle')}
            </DialogTitle>
            <DialogDescription className="text-center">
              {t('menu.qrDescription')}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center py-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <QRCodeSVG 
                value={currentUrl || "https://oberkogleralm.at/menu"} 
                size={200}
                level="H"
                includeMargin
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              {t('menu.qrScan')}
            </p>
          </div>
          <Button onClick={() => setShowQRPopup(false)} className="w-full">
            {t('menu.qrClose')}
          </Button>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <UtensilsCrossed className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">{t('menu.badge')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('menu.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {t('menu.subtitle')}
          </p>
          <Button 
            variant="outline" 
            onClick={() => setShowQRPopup(true)}
            className="gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            {t('menu.showQR')}
          </Button>
        </div>
      </section>

      {/* Allergen Legend */}
      <section className="py-6 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="font-semibold text-primary">{t('menu.allergens')}:</span>
            {Object.entries(allergenInfo).map(([key, info]) => (
              <div key={key} className="flex items-center gap-1 text-muted-foreground">
                <span className="w-5 h-5 flex items-center justify-center bg-primary/10 rounded text-xs font-bold text-primary">
                  {key}
                </span>
                <span>{language === 'de' ? info.de : info.en}</span>
              </div>
            ))}
            <div className="flex items-center gap-1 text-muted-foreground">
              <Leaf className="w-4 h-4 text-green-600" />
              <span>{t('menu.vegetarian')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8">
              {menuCategories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  value={index.toString()}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border data-[state=active]:border-primary transition-all"
                >
                  <span className="flex items-center gap-2">
                    {category.icon}
                    {language === 'de' ? category.keyDe : category.keyEn}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category, categoryIndex) => (
              <TabsContent key={categoryIndex} value={categoryIndex.toString()}>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow border-border/50">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold text-foreground">
                                {language === 'de' ? item.nameDe : item.nameEn}
                              </h3>
                              {item.vegetarian && (
                                <span title={t('menu.vegetarian')}>
                                  <Leaf className="w-4 h-4 text-green-600" />
                                </span>
                              )}
                              {item.vegan && (
                                <Badge variant="outline" className="text-xs border-green-600 text-green-600">
                                  Vegan
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {language === 'de' ? item.descDe : item.descEn}
                            </p>
                            {item.allergens.length > 0 && (
                              <div className="flex items-center gap-1">
                                <span className="text-xs text-muted-foreground mr-1">{t('menu.contains')}:</span>
                                {item.allergens.map((allergen) => (
                                  <span
                                    key={allergen}
                                    className="w-5 h-5 flex items-center justify-center bg-primary/10 rounded text-xs font-bold text-primary"
                                    title={language === 'de' ? allergenInfo[allergen]?.de : allergenInfo[allergen]?.en}
                                  >
                                    {allergen}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="text-xl font-bold text-primary whitespace-nowrap">
                            {item.price}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Opening Hours Reminder */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">{t('menu.hoursTitle')}</h3>
          <div className="text-muted-foreground space-y-2">
            <p><strong>{t('contact.monday')}:</strong> {t('contact.closed')}</p>
            <p><strong>{t('contact.tuesday')}:</strong> 10:00 - 18:00</p>
            <p><strong>{t('contact.kitchen')}:</strong> 10:00 - 17:00</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Oberkogler Alm. {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
