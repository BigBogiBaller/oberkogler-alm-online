import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import cheeseImage from "@/assets/cheese-product.jpg";
import honeyImage from "@/assets/honey-product.jpg";
import meatImage from "@/assets/meat-product.jpg";
import teaImage from "@/assets/tea-product.jpg";

const products = [
  {
    id: 1,
    name: "Bergkäse",
    description: "Traditioneller Alpenkäse, 6 Monate gereift",
    price: "12,90 €",
    image: cheeseImage,
  },
  {
    id: 2,
    name: "Alpen Honig",
    description: "Naturreiner Berghonig aus Wildblüten",
    price: "8,50 €",
    image: honeyImage,
  },
  {
    id: 3,
    name: "Almwurst",
    description: "Hausgemachte Wurst nach traditionellem Rezept",
    price: "15,90 €",
    image: meatImage,
  },
  {
    id: 4,
    name: "Kräutertee",
    description: "Mischung aus alpinen Wildkräutern",
    price: "6,90 €",
    image: teaImage,
  },
  {
    id: 5,
    name: "Bergbutter",
    description: "Cremige Butter aus Almmilch",
    price: "5,90 €",
    image: cheeseImage,
  },
  {
    id: 6,
    name: "Speck",
    description: "Geräucherter Speck aus eigener Produktion",
    price: "18,90 €",
    image: meatImage,
  },
];

const Shop = () => {
  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} wurde zum Warenkorb hinzugefügt`, {
      description: "Weiter einkaufen oder zur Kasse gehen",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Unser Shop
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere handverlesenen alpinen Spezialitäten, 
            hergestellt mit Liebe und Tradition auf unserer Alm.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {product.price}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => handleAddToCart(product.name)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    In den Warenkorb
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Kostenloser Versand ab 50€
          </h2>
          <p className="text-primary-foreground/90">
            Alle Produkte werden frisch verpackt und schnell zu Ihnen geliefert.
          </p>
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

export default Shop;
