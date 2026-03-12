import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductByHandle, formatPrice, type ShopifyProduct, type DeliveryMethod } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import Navigation from "@/components/Navigation";
import DeliveryMethodPicker from "@/components/DeliveryMethodPicker";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, ArrowLeft, Loader2, Plus, Minus } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const { addItem, isLoading: cartLoading } = useCartStore();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('pickup');

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['shopify-product', handle],
    queryFn: () => getProductByHandle(handle!),
    enabled: !!handle,
  });

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.variants.edges[selectedVariantIndex]?.node;
    if (!variant) return;

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
  const hasMultipleVariants = variants.length > 1;
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
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                        idx === selectedImageIndex ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img.node.url} alt={img.node.altText || ''} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{product.title}</h1>
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

              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.description}</p>

              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Lieferart</label>
                <DeliveryMethodPicker value={deliveryMethod} onChange={setDeliveryMethod} />
              </div>

              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale || cartLoading}
              >
                {cartLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <ShoppingCart className="w-4 h-4 mr-2" />
                )}
                {selectedVariant?.availableForSale ? 'In den Warenkorb' : 'Ausverkauft'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
