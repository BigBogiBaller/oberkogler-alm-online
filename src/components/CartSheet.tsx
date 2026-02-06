import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice } from "@/lib/shopify";
import { Badge } from "@/components/ui/badge";
const CartSheet = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    createCheckout,
    isLoading
  } = useCartStore();
  const totalItems = getTotalItems();
  const {
    amount,
    currencyCode
  } = getTotalPrice();
  return <Sheet>
      <SheetTrigger asChild>
        
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl">Warenkorb</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground">Ihr Warenkorb ist leer</p>
          </div> : <div className="mt-8 space-y-4">
            {items.map(item => <div key={item.variantId} className="flex gap-4 border-b border-border pb-4">
                {item.product.images.edges[0] && <img src={item.product.images.edges[0].node.url} alt={item.product.title} className="w-20 h-20 object-cover rounded-md" />}
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm truncate">{item.product.title}</h4>
                  {item.variantTitle !== "Default Title" && <p className="text-xs text-muted-foreground">{item.variantTitle}</p>}
                  <p className="text-sm font-medium text-primary mt-1">
                    {formatPrice(item.price.amount, item.price.currencyCode)}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeItem(item.variantId)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>)}
            
            <div className="pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Gesamt:</span>
                <span>{formatPrice(amount.toString(), currencyCode)}</span>
              </div>
              
              <Button className="w-full" size="lg" onClick={createCheckout} disabled={isLoading}>
                {isLoading ? 'Wird geladen...' : 'Zur Kasse'}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Sie werden zu einem sicheren Shopify-Checkout weitergeleitet
              </p>
            </div>
          </div>}
      </SheetContent>
    </Sheet>;
};
export default CartSheet;