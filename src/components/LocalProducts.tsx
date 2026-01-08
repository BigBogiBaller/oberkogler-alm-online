import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import honeyProduct from "@/assets/honey-product.jpg";
import cheeseProduct from "@/assets/cheese-product.jpg";
import meatProduct from "@/assets/meat-product.jpg";
import bergkaeseProduct from "@/assets/bergkaese-product.jpg";
import teaProduct from "@/assets/tea-product.jpg";

interface LocalProduct {
  id: string;
  nameDe: string;
  nameEn: string;
  descDe: string;
  descEn: string;
  price: number;
  image: string;
}

const LocalProducts = () => {
  const { t, language } = useLanguage();

  const products: LocalProduct[] = [
    {
      id: "honey",
      nameDe: "Alm-Honig",
      nameEn: "Alpine Honey",
      descDe: "Naturreiner Blütenhonig aus eigener Imkerei",
      descEn: "Pure blossom honey from our own apiary",
      price: 12.90,
      image: honeyProduct,
    },
    {
      id: "bergkaese",
      nameDe: "Bergkäse",
      nameEn: "Mountain Cheese",
      descDe: "Würziger Bergkäse aus Heumilch, 6 Monate gereift",
      descEn: "Spicy mountain cheese from hay milk, aged 6 months",
      price: 18.50,
      image: bergkaeseProduct,
    },
    {
      id: "speck",
      nameDe: "Hausspeck",
      nameEn: "House-Cured Bacon",
      descDe: "Nach traditionellem Rezept geräuchert",
      descEn: "Smoked according to traditional recipe",
      price: 24.90,
      image: meatProduct,
    },
    {
      id: "kaese-sortiment",
      nameDe: "Käse-Sortiment",
      nameEn: "Cheese Selection",
      descDe: "Drei ausgewählte Almkäse-Sorten",
      descEn: "Three selected alpine cheese varieties",
      price: 32.00,
      image: cheeseProduct,
    },
    {
      id: "kraeutertee",
      nameDe: "Alm-Kräutertee",
      nameEn: "Alpine Herbal Tea",
      descDe: "Handgepflückte Bergkräuter aus unserer Region",
      descEn: "Hand-picked mountain herbs from our region",
      price: 8.90,
      image: teaProduct,
    },
  ];

  const handleAddToCart = (product: LocalProduct) => {
    toast.success(
      language === "de"
        ? `${product.nameDe} wurde zum Warenkorb hinzugefügt`
        : `${product.nameEn} added to cart`
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          {t('products.title')}
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {t('products.subtitle')}
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="border-border/50 shadow-sm hover:shadow-lg transition-all group overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={language === "de" ? product.nameDe : product.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">
                    {language === "de" ? product.nameDe : product.nameEn}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {language === "de" ? product.descDe : product.descEn}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">
                      €{product.price.toFixed(2)}
                    </span>
                    <Button size="sm" onClick={() => handleAddToCart(product)}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {t('products.addToCart')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalProducts;
