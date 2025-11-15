import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createCheckout } from '@/lib/shopify';
import type { ShopifyProduct } from '@/lib/shopify';
import { toast } from 'sonner';

export interface CartItem {
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  quantity: number;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
}

interface CartStore {
  items: CartItem[];
  cartId: string | null;
  checkoutUrl: string | null;
  isLoading: boolean;
  
  addItem: (item: CartItem) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  setCartId: (cartId: string) => void;
  setCheckoutUrl: (url: string) => void;
  setLoading: (loading: boolean) => void;
  createCheckout: () => Promise<void>;
  getTotalItems: () => number;
  getTotalPrice: () => { amount: number; currencyCode: string };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      cartId: null,
      checkoutUrl: null,
      isLoading: false,

      addItem: (item) => {
        const { items } = get();
        const existingItem = items.find(i => i.variantId === item.variantId);
        
        if (existingItem) {
          set({
            items: items.map(i =>
              i.variantId === item.variantId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            )
          });
        } else {
          set({ items: [...items, item] });
        }
        
        toast.success(`${item.product.title} wurde zum Warenkorb hinzugefügt`);
      },

      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(variantId);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.variantId === variantId ? { ...item, quantity } : item
          )
        });
      },

      removeItem: (variantId) => {
        const item = get().items.find(i => i.variantId === variantId);
        set({
          items: get().items.filter(item => item.variantId !== variantId)
        });
        
        if (item) {
          toast.success(`${item.product.title} wurde entfernt`);
        }
      },

      clearCart: () => {
        set({ items: [], cartId: null, checkoutUrl: null });
      },

      setCartId: (cartId) => set({ cartId }),
      setCheckoutUrl: (checkoutUrl) => set({ checkoutUrl }),
      setLoading: (isLoading) => set({ isLoading }),

      createCheckout: async () => {
        const { items, setLoading, setCartId, setCheckoutUrl, clearCart } = get();
        
        if (items.length === 0) {
          toast.error('Ihr Warenkorb ist leer');
          return;
        }

        setLoading(true);

        try {
          const lineItems = items.map(item => ({
            variantId: item.variantId,
            quantity: item.quantity,
          }));

          const { cartId, checkoutUrl } = await createCheckout(lineItems);
          
          setCartId(cartId);
          setCheckoutUrl(checkoutUrl);
          
          // Open checkout in new tab
          window.open(checkoutUrl, '_blank');
          
          // Clear cart after successful checkout
          clearCart();
          
          toast.success('Zur Kasse weitergeleitet');
        } catch (error) {
          console.error('Checkout error:', error);
          toast.error('Fehler beim Checkout. Bitte versuchen Sie es erneut.');
        } finally {
          setLoading(false);
        }
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const items = get().items;
        if (items.length === 0) {
          return { amount: 0, currencyCode: 'EUR' };
        }
        
        const total = items.reduce((sum, item) => {
          return sum + (parseFloat(item.price.amount) * item.quantity);
        }, 0);
        
        return {
          amount: total,
          currencyCode: items[0].price.currencyCode,
        };
      },
    }),
    {
      name: 'oberkogler-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
