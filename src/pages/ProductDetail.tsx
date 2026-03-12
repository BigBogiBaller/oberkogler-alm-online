import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductByHandle, formatPrice, type ShopifyProduct, type DeliveryMethod } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import Navigation from "@/components/Navigation";
import DeliveryMethodPicker from "@/components/DeliveryMethodPicker";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, ArrowLeft, Loader2, Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const { addItem, isLoading: cartLoading } = useCartStore();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('pickup');
  const [quantity, setQuantity] = useState(1);
  const [gutscheinAmount, setGutscheinAmount] = useState('25');

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['shopify-product', handle],
    queryFn: () => getProductByHandle(handle!),
    enabled: !!handle,
  });

  const isGutschein = handle === 'oberkogler-alm-gutschein';

  // Find the best matching variant for the entered gutschein amount
  const matchedGutscheinVariant = useMemo(() => {
    if (!isGutschein || !product) return null;
    const amount = parseFloat(gutscheinAmount);
    if (isNaN(amount) || amount <= 0) return null;
    
    const availableVariants = product.variants.edges
      .filter(v => v.node.availableForSale)
      .map(v => ({ ...v, price: parseFloat(v.node.price.amount) }));
    
    // Find exact match
    const exact = availableVariants.find(v => v.price === amount);
    if (exact) return exact;
    
    // Find closest available variant
    const sorted = [...availableVariants].sort(
      (a, b) => Math.abs(a.price - amount) - Math.abs(b.price - amount)
    );
    return sorted[0] || null;
  }, [isGutschein, product, gutscheinAmount]);

  const gutscheinAmountNum = parseFloat(gutscheinAmount);
  const isExactMatch = matchedGutscheinVariant && 
    parseFloat(matchedGutscheinVariant.node.price.amount) === gutscheinAmountNum;

  const handleAddToCart = async () => {
    if (!product) return;

    if (isGutschein) {
      if (!matchedGutscheinVariant || !isExactMatch) return;
      const variant = matchedGutscheinVariant.node;

      const shopifyProduct: ShopifyProduct = { node: product };
      await addItem({
        product: shopifyProduct,
        variantId: variant.id,
        variantTitle: variant.title,
        price: variant.price,
        quantity: 1,
        selectedOptions: variant.selectedOptions,
        deliveryMethod,
      });
      return;
    }

    const variant = product.variants.edges[selectedVariantIndex]?.node;
    if (!variant) return;

    const shopifyProduct: ShopifyProduct = { node: product };
    await addItem({
      product: shopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions,
      deliveryMethod,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 px-4 container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Skeleton className="aspect-square w-full rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 px-4 container mx-auto max-w-6xl text-center">
          <p className="text-destructive text-lg">Produkt nicht gefunden</p>
          <Button variant="outline" className="mt-4" onClick={() => navigate('/shop')}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zum Shop
          </Button>
        </div>
      </div>
    );
  }

  const images = product.images.edges;
  const variants = product.variants.edges;
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const price = selectedVariant?.price || product.priceRange.minVariantPrice;
  const hasMultipleVariants = !isGutschein && variants.length > 1;
  const optionName = product.options?.[0]?.name || 'Variante';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button variant="ghost" className="mb-8" onClick={() => navigate('/shop')}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Zurück zum Shop
          </Button>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                {images[selectedImageIndex] ? (
                  <img
                    src={images[selectedImageIndex].node.url}
                    alt={images[selectedImageIndex].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Kein Bild
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{product.title}</h1>

              {isGutschein ? (
                <>
                  <p className="text-3xl font-bold text-primary">
                    {isExactMatch && matchedGutscheinVariant
                      ? formatPrice(matchedGutscheinVariant.node.price.amount, matchedGutscheinVariant.node.price.currencyCode)
                      : gutscheinAmountNum > 0 ? `${gutscheinAmountNum} €` : ''}
                  </p>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground">Betrag eingeben (€)</label>
                    <Input
                      type="number"
                      min="1"
                      max="500"
                      value={gutscheinAmount}
                      onChange={(e) => setGutscheinAmount(e.target.value)}
                      placeholder="z.B. 50"
                      className="text-lg font-medium max-w-[200px]"
                    />
                    <div className="flex flex-wrap gap-2">
                      {variants.filter(v => v.node.availableForSale).map((v) => {
                        const vAmount = parseFloat(v.node.price.amount);
                        const isSelected = gutscheinAmountNum === vAmount;
                        return (
                          <Button
                            key={v.node.id}
                            variant={isSelected ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setGutscheinAmount(vAmount.toString())}
                          >
                            {v.node.title}
                          </Button>
                        );
                      })}
                    </div>
                    {gutscheinAmountNum > 0 && !isExactMatch && (
                      <p className="text-sm text-destructive">
                        Bitte wählen Sie einen der verfügbaren Beträge: {variants.filter(v => v.node.availableForSale).map(v => v.node.title).join(', ')}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-3xl font-bold text-primary">
                    {formatPrice(price.amount, price.currencyCode)}
                  </p>

                  {hasMultipleVariants && (
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-foreground">{optionName}</label>
                      <div className="flex flex-wrap gap-2">
                        {variants.map((v, idx) => (
                          <button
                            key={v.node.id}
                            onClick={() => setSelectedVariantIndex(idx)}
                            className={`px-4 py-2 rounded-md border-2 text-sm font-medium transition-colors ${
                              idx === selectedVariantIndex
                                ? 'border-primary bg-primary text-primary-foreground'
                                : 'border-border bg-background text-foreground hover:border-primary/50'
                            } ${!v.node.availableForSale ? 'opacity-50 line-through' : ''}`}
                            disabled={!v.node.availableForSale}
                          >
                            {v.node.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.description}</p>

              {!isGutschein && (
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Anzahl</label>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Lieferart</label>
                <DeliveryMethodPicker value={deliveryMethod} onChange={setDeliveryMethod} />
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
                disabled={cartLoading || (isGutschein && !isExactMatch)}
              >
                {cartLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <ShoppingCart className="w-4 h-4 mr-2" />
                )}
                In den Warenkorb
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
