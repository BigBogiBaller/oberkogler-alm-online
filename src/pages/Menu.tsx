import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { Download, UtensilsCrossed, Coffee, Beer, Wine, Soup, Sandwich, Leaf, Milk, Wheat, Egg } from "lucide-react";
import speisekarteQR from "@/assets/speisekarte-qr.png";
import imgKaesekrapfen from "@/assets/dishes/steirerkaesekrapfen.jpg";
import imgKaesenockerl from "@/assets/dishes/steirerkaesenockerl.jpg";
import imgStrudel from "@/assets/dishes/topfenschwarzbeerstrudel.jpg";
import imgSpeckknoedel from "@/assets/dishes/speckknoedelsuppe.jpg";
import imgKaspress from "@/assets/dishes/kaspressknoedelsuppe.jpg";
import imgFleischkrapfen from "@/assets/dishes/fleischkrapfen.jpg";
import imgGemischtesBrot from "@/assets/dishes/gemischtes-brot.jpg";

interface MenuItem {
  nameDe: string;
  nameEn: string;
  descDe?: string;
  descEn?: string;
  price: string;
  allergens?: string[];
  vegetarian?: boolean;
  image?: string;
}

interface MenuCategory {
  keyDe: string;
  keyEn: string;
  icon: React.ReactNode;
  items: MenuItem[];
  note?: string;
}

const allergenInfo: Record<string, { de: string; en: string }> = {
  A: { de: "Gluten", en: "Gluten" },
  C: { de: "Eier", en: "Eggs" },
  F: { de: "Fisch", en: "Fish" },
  G: { de: "Milch", en: "Milk" },
  L: { de: "Sellerie", en: "Celery" },
  M: { de: "Senf", en: "Mustard" },
  O: { de: "Sulfite", en: "Sulfites" },
};

const menuCategories: MenuCategory[] = [
  {
    keyDe: "Kalte Speisen",
    keyEn: "Cold Dishes",
    icon: <Sandwich className="w-5 h-5" />,
    items: [
      { nameDe: "Bratlbrot", nameEn: "Roast Pork Bread", price: "€8,00", allergens: ["A", "M"] },
      { nameDe: "Brot mit geselchtem Fleisch", nameEn: "Bread with Smoked Meat", price: "€8,00", allergens: ["A", "M"] },
      { nameDe: "Bratlfettbrot", nameEn: "Lard Bread", price: "€4,40", allergens: ["A", "M"] },
      { nameDe: "Steirerkas-Brot", nameEn: "Styrian Cheese Bread", price: "€5,00", allergens: ["A", "G", "M"], vegetarian: true },
      { nameDe: "Käse Brot mit Schnittkäse", nameEn: "Cheese Bread", price: "€7,00", allergens: ["A", "G", "M"], vegetarian: true },
      { nameDe: "Gemischtes Brot", nameEn: "Mixed Bread Platter", descDe: "Käse, Bratl und Speck", descEn: "Cheese, roast pork and bacon", price: "€8,90", allergens: ["A", "G", "M"], image: imgGemischtesBrot },
      { nameDe: "Belegte Platte", nameEn: "Cold Cut Platter", descDe: "Ab 4 Personen, nur auf Bestellung", descEn: "From 4 persons, on request only", price: "€13,00/Pers." },
    ],
  },
  {
    keyDe: "Warme Speisen",
    keyEn: "Hot Dishes",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    items: [
      { nameDe: "Kasnockerl mit Krautsalat", nameEn: "Cheese Spaetzle with Coleslaw", price: "€12,50", allergens: ["A", "M", "O", "C", "G"], vegetarian: true, image: imgKaesenockerl },
      { nameDe: "Steirerkäsnockerl mit Krautsalat", nameEn: "Styrian Cheese Spaetzle with Coleslaw", price: "€12,50", allergens: ["A", "C", "G", "M", "O"], vegetarian: true, image: imgKaesenockerl },
      { nameDe: "Eiernockerl mit Krautsalat", nameEn: "Egg Spaetzle with Coleslaw", price: "€11,50", allergens: ["A", "M", "O", "C", "G"], vegetarian: true },
      { nameDe: "Fleischkrapfen mit Sauerkraut", nameEn: "Meat Dumplings with Sauerkraut", price: "€9,50", allergens: ["A", "C", "G"], image: imgFleischkrapfen },
      { nameDe: "Fleischkrapfen", nameEn: "Meat Dumplings", price: "€5,80", allergens: ["A", "C", "G"], image: imgFleischkrapfen },
      { nameDe: "Käsekrainer", nameEn: "Cheese Sausage", descDe: "Mit Senf, Ketchup, Kren und Brot", descEn: "With mustard, ketchup, horseradish and bread", price: "€8,50" },
    ],
    note: "Alle Speisen nur solange der Vorrat reicht",
  },
  {
    keyDe: "Für den kleinen Hunger",
    keyEn: "Small Bites",
    icon: <Sandwich className="w-5 h-5" />,
    items: [
      { nameDe: "Frankfurter", nameEn: "Frankfurter Sausage", descDe: "Mit Senf, Kren und Brot", descEn: "With mustard, horseradish and bread", price: "€5,20" },
      { nameDe: "Schinken-Käse Toast", nameEn: "Ham & Cheese Toast", price: "€4,20" },
    ],
  },
  {
    keyDe: "Suppen",
    keyEn: "Soups",
    icon: <Soup className="w-5 h-5" />,
    items: [
      { nameDe: "Kräftige Rindsuppe mit Leberknödel", nameEn: "Beef Broth with Liver Dumpling", price: "€5,00", allergens: ["A", "G", "C", "F", "L", "M"] },
      { nameDe: "Kräftige Rindsuppe mit Kaspressknödel", nameEn: "Beef Broth with Cheese Dumpling", price: "€5,00", allergens: ["A", "G", "C", "F", "L", "M"], vegetarian: true, image: imgKaspress },
      { nameDe: "Kräftige Rindsuppe mit Frittaten", nameEn: "Beef Broth with Pancake Strips", price: "€4,40", allergens: ["A", "G", "C", "F", "L", "M"] },
      { nameDe: "Speckknödel und weitere Suppen", nameEn: "Bacon Dumpling & more soups", descDe: "Auf Anfrage oder nach Saison", descEn: "On request or seasonal", price: "Auf Anfrage", image: imgSpeckknoedel },
    ],
    note: "Alle Speisen nur solange der Vorrat reicht",
  },
  {
    keyDe: "Steirerkrapfen (Samstags)",
    keyEn: "Styrian Krapfen (Saturdays)",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    items: [
      { nameDe: "Steirerkrapfen ohne Käse", nameEn: "Styrian Krapfen without Cheese", price: "€2,20", vegetarian: true, image: imgKaesekrapfen },
      { nameDe: "Steirerkrapfen mit Käse", nameEn: "Styrian Krapfen with Cheese", price: "€2,80", vegetarian: true, image: imgKaesekrapfen },
      { nameDe: "Steirerkrapfen mit Kraut und Erdäpfel", nameEn: "Styrian Krapfen with Cabbage & Potato", price: "€4,80", vegetarian: true, image: imgKaesekrapfen },
      { nameDe: "Steirerkrapfen mit Kraut, Erdäpfel und Käse", nameEn: "Styrian Krapfen with Cabbage, Potato & Cheese", price: "€5,80", vegetarian: true, image: imgKaesekrapfen },
    ],
    note: "Immer Samstags bei schönem Wetter, solange der Vorrat reicht",
  },
  {
    keyDe: "Bier & Most",
    keyEn: "Beer & Cider",
    icon: <Beer className="w-5 h-5" />,
    items: [
      { nameDe: "Most pur/gespritzt", nameEn: "Cider pure/spritzer", descDe: "0,50l", descEn: "0.50l", price: "€3,70" },
      { nameDe: "Most pur/gespritzt", nameEn: "Cider pure/spritzer", descDe: "0,33l", descEn: "0.33l", price: "€3,20" },
      { nameDe: "Gösser Märzen", nameEn: "Gösser Märzen Beer", descDe: "Fl. 0,50l", descEn: "Bottle 0.50l", price: "€4,20" },
      { nameDe: "Gösser Naturradler", nameEn: "Gösser Radler", descDe: "Fl. 0,50l", descEn: "Bottle 0.50l", price: "€4,50" },
      { nameDe: "Gösser Alkoholfrei", nameEn: "Gösser Non-Alcoholic", descDe: "Fl. 0,50l", descEn: "Bottle 0.50l", price: "€4,50" },
      { nameDe: "Weizen / Weizen Alkoholfrei", nameEn: "Wheat Beer / Non-Alcoholic", descDe: "Fl. 0,50l", descEn: "Bottle 0.50l", price: "€4,90" },
      { nameDe: "Gösser Bio Stoff", nameEn: "Gösser Bio Stoff", descDe: "Fl. 0,33l", descEn: "Bottle 0.33l", price: "€3,40" },
    ],
    note: "Alle Getränke nur solange der Vorrat reicht",
  },
  {
    keyDe: "Wein",
    keyEn: "Wine",
    icon: <Wine className="w-5 h-5" />,
    items: [
      { nameDe: "Landwein weiß/rot", nameEn: "House Wine white/red", descDe: "1/8l", descEn: "1/8l", price: "€2,40" },
      { nameDe: "G'spritzter weiß/rot", nameEn: "Wine Spritzer white/red", descDe: "1/4l", descEn: "1/4l", price: "€3,00" },
      { nameDe: "G'spritzter süß", nameEn: "Sweet Wine Spritzer", descDe: "1/4l", descEn: "1/4l", price: "€3,60" },
      { nameDe: "Sommerspritzer", nameEn: "Summer Spritzer", descDe: "1/4l", descEn: "1/4l", price: "€2,60" },
      { nameDe: "Sommerspritzer", nameEn: "Summer Spritzer", descDe: "1/2l", descEn: "1/2l", price: "€4,80" },
      { nameDe: "Aperol Spritz", nameEn: "Aperol Spritz", descDe: "1/4l", descEn: "1/4l", price: "€4,50" },
      { nameDe: "Beeren Schilerol", nameEn: "Berry Schilerol", descDe: "1/4l", descEn: "1/4l", price: "€4,50" },
    ],
    note: "Weißwein: Landwein | Rotwein: Blaufränkisch",
  },
  {
    keyDe: "Warme Getränke",
    keyEn: "Hot Drinks",
    icon: <Coffee className="w-5 h-5" />,
    items: [
      { nameDe: "Häfer'l Kaffee", nameEn: "Mug of Coffee", price: "€3,40" },
      { nameDe: "Kakao", nameEn: "Hot Cocoa", price: "€3,50" },
      { nameDe: "Portion Schlagobers", nameEn: "Portion of Whipped Cream", price: "€0,90" },
      { nameDe: "Tee", nameEn: "Tea", descDe: "Kräuter, Früchte, Schwarz", descEn: "Herbal, Fruit, Black", price: "€2,90" },
      { nameDe: "Schnapstee", nameEn: "Tea with Schnapps", price: "€4,50" },
    ],
    note: "Alle Getränke nur solange der Vorrat reicht",
  },
  {
    keyDe: "Alkoholfreie Getränke",
    keyEn: "Soft Drinks",
    icon: <Coffee className="w-5 h-5" />,
    items: [
      { nameDe: "Limo", nameEn: "Soft Drink", descDe: "Almdudler, Fanta, Coca-Cola, Coca-Cola Zero (0,33l)", descEn: "Almdudler, Fanta, Coca-Cola, Coca-Cola Zero (0.33l)", price: "€3,60" },
      { nameDe: "Eistee", nameEn: "Iced Tea", descDe: "Pfirsich oder Zitrone (0,33l)", descEn: "Peach or Lemon (0.33l)", price: "€3,60" },
      { nameDe: "Holunder mit Wasser", nameEn: "Elderflower with Water", descDe: "0,25l / gespritzt", descEn: "0.25l / sparkling", price: "€2,20 / €2,50" },
      { nameDe: "Holunder mit Wasser", nameEn: "Elderflower with Water", descDe: "0,50l / gespritzt", descEn: "0.50l / sparkling", price: "€3,20 / €3,90" },
      { nameDe: "Mineral", nameEn: "Mineral Water", descDe: "0,25l", descEn: "0.25l", price: "€2,50" },
      { nameDe: "Mineral", nameEn: "Mineral Water", descDe: "0,50l", descEn: "0.50l", price: "€3,70" },
      { nameDe: "Leitungswasser", nameEn: "Tap Water", descDe: "0,25l / 0,50l", descEn: "0.25l / 0.50l", price: "€0,50 / €1,00" },
      { nameDe: "Mit Zitrone", nameEn: "With Lemon", price: "+ €0,50" },
    ],
    note: "Alle Getränke nur solange der Vorrat reicht",
  },
  {
    keyDe: "Fruchtsäfte vom Ferdl",
    keyEn: "Fruit Juices by Ferdl",
    icon: <Coffee className="w-5 h-5" />,
    items: [
      { nameDe: "Fruchtsaft mit Wasser", nameEn: "Fruit Juice with Water", descDe: "Johannisbeere, Marille, Erdbeere, Pfirsich, Apfel (0,33l / 0,50l)", descEn: "Currant, Apricot, Strawberry, Peach, Apple (0.33l / 0.50l)", price: "€3,00 / €4,00" },
      { nameDe: "Fruchtsaft mit Mineral", nameEn: "Fruit Juice with Sparkling Water", descDe: "0,33l / 0,50l", descEn: "0.33l / 0.50l", price: "€3,60 / €4,60" },
      { nameDe: "Fruchtsaft pur", nameEn: "Pure Fruit Juice", descDe: "0,25l", descEn: "0.25l", price: "€3,40" },
    ],
    note: "Ferdl Litzellachner – Alle Getränke nur solange der Vorrat reicht",
  },
  {
    keyDe: "Schnäpse",
    keyEn: "Schnapps",
    icon: <Wine className="w-5 h-5" />,
    items: [
      { nameDe: "Zwetschke", nameEn: "Plum Schnapps", price: "€3,20" },
      { nameDe: "Birne", nameEn: "Pear Schnapps", price: "€3,20" },
      { nameDe: "Spenling", nameEn: "Wild Plum Schnapps", price: "€3,20" },
      { nameDe: "Zirbe", nameEn: "Stone Pine Schnapps", price: "€3,20" },
      { nameDe: "Honig", nameEn: "Honey Schnapps", price: "€3,20" },
    ],
    note: "Alle Getränke nur solange der Vorrat reicht",
  },
  {
    keyDe: "Desserts",
    keyEn: "Desserts",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    items: [
      { nameDe: "Topfen-Schwarzbeerstrudel", nameEn: "Curd & Blueberry Strudel", descDe: "Hausgemacht, saisonal", descEn: "Homemade, seasonal", price: "Saisonal", allergens: ["A", "C", "G"], vegetarian: true, image: imgStrudel },
    ],
    note: "Solange der Vorrat reicht",
  },
];

const Menu = () => {
  const { language } = useLanguage();
  const [showQRPopup, setShowQRPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("0");

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("menuQRPopupSeen");
    if (!hasSeenPopup) {
      setShowQRPopup(true);
      sessionStorage.setItem("menuQRPopupSeen", "true");
    }
  }, []);

  const handleDownload = () => {
    window.open("/speisekarte.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEO title={"Speisekarte – Almküche der Oberkogler Alm"} description={"Kasnockerl, Steirerkaskropfn, Bratlbrot, Suppen und mehr – die traditionelle Speisekarte der Oberkogler Alm."} path="/menu" />
      
      {/* QR Code Popup */}
      <Dialog open={showQRPopup} onOpenChange={setShowQRPopup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl text-primary">
              {language === 'de' ? 'Unsere Speisekarte' : 'Our Menu'}
            </DialogTitle>
            <DialogDescription className="text-center">
              {language === 'de' 
                ? 'Scannen Sie den QR-Code oder laden Sie unsere Speisekarte herunter' 
                : 'Scan the QR code or download our menu'}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center py-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={speisekarteQR} 
                alt="Speisekarte QR Code" 
                className="w-48 h-48 object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              {language === 'de' 
                ? 'Scannen Sie den Code mit Ihrem Smartphone' 
                : 'Scan the code with your smartphone'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleDownload} className="flex-1 gap-2" variant="default">
              <Download className="w-4 h-4" />
              {language === 'de' ? 'PDF herunterladen' : 'Download PDF'}
            </Button>
            <Button onClick={() => setShowQRPopup(false)} variant="outline" className="flex-1">
              {language === 'de' ? 'Speisekarte ansehen' : 'View Menu'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <UtensilsCrossed className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              {language === 'de' ? 'Speisekarte' : 'Menu'}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {language === 'de' ? 'Unsere Speisekarte' : 'Our Menu'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {language === 'de' 
              ? 'Regionale Schmankerl aus der steirischen Almküche' 
              : 'Regional delicacies from the Styrian alpine kitchen'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => setShowQRPopup(true)} variant="outline" className="gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
              {language === 'de' ? 'QR-Code anzeigen' : 'Show QR Code'}
            </Button>
            <Button onClick={handleDownload} variant="default" className="gap-2">
              <Download className="w-4 h-4" />
              {language === 'de' ? 'PDF herunterladen' : 'Download PDF'}
            </Button>
          </div>
        </div>
      </section>

      {/* Allergen Legend */}
      <section className="py-6 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="font-semibold text-primary">
              {language === 'de' ? 'Allergene' : 'Allergens'}:
            </span>
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
              <span>{language === 'de' ? 'Vegetarisch' : 'Vegetarian'}</span>
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
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 py-2 rounded-full border border-border data-[state=active]:border-primary transition-all text-sm"
                >
                  <span className="flex items-center gap-2">
                    {category.icon}
                    <span className="hidden sm:inline">{language === 'de' ? category.keyDe : category.keyEn}</span>
                    <span className="sm:hidden">{language === 'de' ? category.keyDe.split(' ')[0] : category.keyEn.split(' ')[0]}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category, categoryIndex) => (
              <TabsContent key={categoryIndex} value={categoryIndex.toString()}>
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-primary text-center mb-2">
                    {language === 'de' ? category.keyDe : category.keyEn}
                  </h2>
                  {category.note && (
                    <p className="text-sm text-muted-foreground text-center italic">
                      {language === 'de' ? category.note : category.note}
                    </p>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow border-border/50">
                      <CardContent className="p-5">
                        {item.image && (
                          <div className="mb-4 -mx-5 -mt-5 aspect-[16/10] overflow-hidden rounded-t-lg">
                            <img
                              src={item.image}
                              alt={language === 'de' ? item.nameDe : item.nameEn}
                              loading="lazy"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold text-foreground">
                                {language === 'de' ? item.nameDe : item.nameEn}
                              </h3>
                              {item.vegetarian && (
                                <span title={language === 'de' ? 'Vegetarisch' : 'Vegetarian'}>
                                  <Leaf className="w-4 h-4 text-green-600" />
                                </span>
                              )}
                            </div>
                            {(item.descDe || item.descEn) && (
                              <p className="text-sm text-muted-foreground mb-2">
                                {language === 'de' ? item.descDe : item.descEn}
                              </p>
                            )}
                            {item.allergens && item.allergens.length > 0 && (
                              <div className="flex items-center gap-1 flex-wrap">
                                <span className="text-xs text-muted-foreground mr-1">
                                  {language === 'de' ? 'Enthält' : 'Contains'}:
                                </span>
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
          <h3 className="text-2xl font-bold text-primary mb-4">
            {language === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}
          </h3>
          <div className="text-muted-foreground space-y-2">
            <p><strong>{language === 'de' ? 'Mittwoch' : 'Wednesday'}:</strong> {language === 'de' ? 'Ruhetag' : 'Closed'}</p>
            <p><strong>{language === 'de' ? 'Mo, Di, Do–So' : 'Mon, Tue, Thu–Sun'}:</strong> 10:00 - 18:00</p>
            <p><strong>{language === 'de' ? 'Warme Küche' : 'Hot Kitchen'}:</strong> 10:00 - 17:00</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Oberkogler Alm. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
