import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, Loader2, Plus, Minus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProducts, formatPrice, type ShopifyProduct, type DeliveryMethod } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import DeliveryMethodPicker from "@/components/DeliveryMethodPicker";

const Shop = () => {
  const { addItem, isLoading: cartLoading } = useCartStore();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [deliveryMethods, setDeliveryMethods] = useState<Record<string, DeliveryMethod>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [gutscheinAmounts, setGutscheinAmounts] = useState<Record<string, number>>({});

  const getQuantity = (productId: string): number => quantities[productId] || 1;
  const setQuantity = (productId: string, qty: number) => {
    setQuantities(prev => ({ ...prev, [productId]: Math.max(1, qty) }));
  };

  const getDeliveryMethod = (productId: string): DeliveryMethod => deliveryMethods[productId] || 'pickup';
  const setDeliveryMethod = (productId: string, method: DeliveryMethod) => {
    setDeliveryMethods(prev => ({ ...prev, [productId]: method }));
  };

  const getGutscheinAmount = (productId: string): number => gutscheinAmounts[productId] || 25;
  const setGutscheinAmount = (productId: string, amount: number) => {
    setGutscheinAmounts(prev => ({ ...prev, [productId]: amount }));
  };

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['shopify-products'],
    queryFn: () => getProducts(),
  });

  const handleAddToCart = async (product: ShopifyProduct) => {
    const isGutschein = product.node.handle === 'oberkogler-alm-gutschein';
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    const amount = isGutschein ? getGutscheinAmount(product.node.id) : getQuantity(product.node.id);

    await addItem({
      product,
      variantId: variant.id,
      variantTitle: isGutschein ? `Gutschein ${amount}€` : variant.title,
      price: variant.price,
      quantity: amount,
      selectedOptions: variant.selectedOptions,
      deliveryMethod: getDeliveryMethod(product.node.id),
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('shop.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('shop.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {error && (
            <div className="text-center py-12">
              <p className="text-destructive mb-4">{t('shop.error')}</p>
              <p className="text-sm text-muted-foreground">{t('shop.tryAgain')}</p>
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
                const image = product.node.images.edges[0]?.node;
                const variant = product.node.variants.edges[0]?.node;
                const price = variant?.price || product.node.priceRange.minVariantPrice;
                const isGutschein = product.node.handle === 'oberkogler-alm-gutschein';

                return (
                  <Card
                    key={product.node.id}
                    className="border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(`/product/${product.node.handle}`)}
                  >
                    <CardHeader className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                        {image ? (
                          <img
                            src={image.url}
                            alt={image.altText || product.node.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                            {t('shop.noImage')}
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {product.node.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.node.description}
                      </p>
                      {isGutschein ? (
                        <p className="text-2xl font-bold text-primary">
                          {getGutscheinAmount(product.node.id)}€
                        </p>
                      ) : (
                        <p className="text-2xl font-bold text-primary">
                          {formatPrice(price.amount, price.currencyCode)}
                        </p>
                      )}
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3">
                      <DeliveryMethodPicker
                        value={getDeliveryMethod(product.node.id)}
                        onChange={(method) => setDeliveryMethod(product.node.id, method)}
                        compact
                      />
                      {isGutschein ? (
                        <div className="flex items-center gap-2 w-full" onClick={(e) => e.stopPropagation()}>
                          <span className="text-sm font-medium text-foreground">Betrag €:</span>
                          <Input
                            type="number"
                            min={1}
                            max={500}
                            value={getGutscheinAmount(product.node.id)}
                            onChange={(e) => {
                              const val = parseInt(e.target.value, 10);
                              if (!isNaN(val) && val >= 1 && val <= 500) {
                                setGutscheinAmount(product.node.id, val);
                              }
                            }}
                            className="w-24 h-8 text-sm"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 w-full" onClick={(e) => e.stopPropagation()}>
                          <span className="text-sm font-medium text-foreground">Anzahl:</span>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => setQuantity(product.node.id, getQuantity(product.node.id) - 1)}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">{getQuantity(product.node.id)}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => setQuantity(product.node.id, getQuantity(product.node.id) + 1)}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </div>
                      )}
                      <Button
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                        disabled={(!isGutschein && !variant?.availableForSale) || cartLoading}
                      >
                        {cartLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        ) : (
                          <ShoppingCart className="w-4 h-4 mr-2" />
                        )}
                        {(isGutschein || variant?.availableForSale) ? t('shop.addToCart') : t('shop.soldOut')}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">{t('shop.noProducts')}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold text-primary mb-2">
            {t('shop.freeShipping')}
          </h3>
          <p className="text-muted-foreground">
            {t('shop.freeShippingText')}
          </p>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Oberkogler Alm. {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
