import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Plus, Minus, ExternalLink, Loader2, Package, Truck } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/shopify";
import { Badge } from "@/components/ui/badge";

const CartSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart, getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();
  const { amount, currencyCode } = getTotalPrice();

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl">Warenkorb</SheetTitle>
          <SheetDescription>
            {totalItems === 0 ? "Ihr Warenkorb ist leer" : `${totalItems} Artikel im Warenkorb`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground">Ihr Warenkorb ist leer</p>
          </div>
        ) : (
          <>
            <div className="flex-1 mt-8 space-y-4 min-h-0 overflow-y-auto">
              {items.map(item => (
                <div key={item.variantId} className="flex gap-4 border-b border-border pb-4">
                  {item.product.node.images.edges[0] && (
                    <img
                      src={item.product.node.images.edges[0].node.url}
                      alt={item.product.node.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{item.product.node.title}</h4>
                    {item.variantTitle !== "Default Title" && (
                      <p className="text-xs text-muted-foreground">{item.variantTitle}</p>
                    )}
                    <p className="text-sm font-medium text-primary mt-1">
                      {formatPrice(item.price.amount, item.price.currencyCode)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.variantId, item.quantity - 1)} disabled={isLoading}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.variantId, item.quantity + 1)} disabled={isLoading}>
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeItem(item.variantId)} disabled={isLoading}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex-shrink-0 pt-4 border-t space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Gesamt:</span>
                <span>{formatPrice(amount.toString(), currencyCode)}</span>
              </div>
              <Button className="w-full" size="lg" onClick={handleCheckout} disabled={isLoading || isSyncing}>
                {isLoading || isSyncing ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Zur Kasse
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Sie werden zu einem sicheren Checkout weitergeleitet
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
