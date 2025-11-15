import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProducts, formatPrice, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";

const Shop = () => {
  const { addItem } = useCartStore();
  
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['shopify-products'],
    queryFn: getProducts,
  });

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.variants.edges[0]?.node;
    if (!variant) return;

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions,
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
          {error && (
            <div className="text-center py-12">
              <p className="text-destructive mb-4">Fehler beim Laden der Produkte</p>
              <p className="text-sm text-muted-foreground">
                Bitte versuchen Sie es später erneut
              </p>
            </div>
          )}

          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="border-border/50">
                  <CardHeader className="p-0">
                    <Skeleton className="aspect-square w-full rounded-t-lg" />
                  </CardHeader>
                  <CardContent className="pt-6 space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-8 w-1/3" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-10 w-full" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : products && products.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => {
                const image = product.images.edges[0]?.node;
                const variant = product.variants.edges[0]?.node;
                const price = variant?.price || product.priceRange.minVariantPrice;

                return (
                  <Card key={product.id} className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                        {image ? (
                          <img
                            src={image.url}
                            alt={image.altText || product.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            Kein Bild verfügbar
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.description || "Traditionelle alpine Spezialität"}
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {formatPrice(price.amount, price.currencyCode)}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full"
                        onClick={() => handleAddToCart(product)}
                        disabled={!variant?.availableForSale}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {variant?.availableForSale ? 'In den Warenkorb' : 'Ausverkauft'}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                Derzeit sind keine Produkte verfügbar
              </p>
              <p className="text-sm text-muted-foreground">
                Schauen Sie bald wieder vorbei oder fügen Sie Produkte in Ihrem Shopify Store hinzu
              </p>
            </div>
          )}
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
