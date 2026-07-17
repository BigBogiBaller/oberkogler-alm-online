import { toast } from 'sonner';

const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'utn4ey-gy.myshopify.com';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = '2b681057ebd05be63b0cba68fca7cbf3';

export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText: string | null;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          availableForSale: boolean;
          selectedOptions: Array<{
            name: string;
            value: string;
          }>;
        };
      }>;
    };
    options: Array<{
      name: string;
      values: string[];
    }>;
  };
}

type ShopifyImageNode = {
  url: string;
  altText: string | null;
};

const FALLBACK_IMAGES_BY_HANDLE: Record<string, ShopifyImageNode[]> = {
  'ringelblumen-salbe': [
    { url: '/products/ringelblumensalbe-4.jpg', altText: 'Ringelblumen Salbe' },
    { url: '/products/ringelblumensalbe-3.jpg', altText: 'Ringelblumen Salbe gestapelt' },
  ],
  'selbstgemachte-marmelade': [
    { url: '/products/marille-2.jpg', altText: 'Selbstgemachte Marmelade Detail' },
    { url: '/products/marille-3.jpg', altText: 'Selbstgemachte Marmelade Glas' },
    { url: '/products/brombeer-2.jpg', altText: 'Selbstgemachte Marmelade Brombeer-Variante' },
    { url: '/products/marmelade-sortiment-2.jpg', altText: 'Selbstgemachte Marmelade Auswahl' },
  ],
  honig: [
    { url: '/products/sommerhonig-2.jpg', altText: 'Sommerhonig' },
    { url: '/products/cremehonig-2.jpg', altText: 'Cremehonig' },
  ],
  'almhonig-mit-alpenrosen': [
    { url: '/products/cremehonig-2.jpg', altText: 'Almhonig mit Alpenrosen' },
    { url: '/products/cremehonig.jpg', altText: 'Almhonig mit Alpenrosen' },
  ],
  'oberkogler-alm-gutschein': [
    { url: '/products/gutschein.jpg', altText: 'Oberkogler Alm Gutschein' },
  ],
  'hartwurstl': [
    { url: '/products/hartwuerstl.jpg', altText: 'Hartwürstl' },
  ],
  'oberkogler-alm-trinkflasche-glas': [
    { url: '/products/trinkflasche.jpg', altText: 'Oberkogler Alm Trinkflasche' },
  ],
  'arnika-ol': [
    { url: '/products/arnika-oel.jpg', altText: 'Arnika Öl' },
  ],
  'oberkogler-alm-notizbuch': [
    { url: '/products/notizbuch.jpg', altText: 'Oberkogler Alm Notizbuch' },
  ],
  'johanniskraut-ol': [
    { url: '/products/johanniskraut-oel.jpg', altText: 'Johanniskraut Öl' },
  ],
  'oberkogler-alm-kappe': [
    { url: '/products/trinkflasche.jpg', altText: 'Oberkogler Alm Kappe' },
  ],
};

function applyFallbackImages(product: ShopifyProduct['node']): ShopifyProduct['node'] {
  if (product.images?.edges?.length) return product;

  const fallbackImages = FALLBACK_IMAGES_BY_HANDLE[product.handle];
  if (!fallbackImages?.length) return product;

  return {
    ...product,
    images: {
      edges: fallbackImages.map((image) => ({ node: image })),
    },
  };
}

// Storefront API helper
export async function storefrontApiRequest(query: string, variables: Record<string, unknown> = {}) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (response.status === 402) {
    toast.error("Shopify: Zahlung erforderlich", {
      description: "Ihr Shopify-Store benötigt einen aktiven Abrechnungsplan.",
    });
    return;
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(`Shopify Fehler: ${data.errors.map((e: { message: string }) => e.message).join(', ')}`);
  }

  return data;
}

const STOREFRONT_QUERY = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 50) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 50) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

export async function getProducts(query?: string): Promise<ShopifyProduct[]> {
  const data = await storefrontApiRequest(STOREFRONT_QUERY, { first: 20, query });
  if (!data) return [];

  return data.data.products.edges.map((edge: ShopifyProduct) => ({
    ...edge,
    node: applyFallbackImages(edge.node),
  }));
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct['node'] | null> {
  const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
  if (!data || !data.data.productByHandle) return null;

  return applyFallbackImages(data.data.productByHandle);
}

export function formatPrice(amount: string, currencyCode: string): string {
  return new Intl.NumberFormat('de-AT', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount));
}

// Cart mutations
const CART_QUERY = `
  query cart($id: ID!) {
    cart(id: $id) { id totalQuantity }
  }
`;

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } }
      }
      userErrors { field message }
    }
  }
`;

const CART_LINES_ADD_MUTATION = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 100) { edges { node { id merchandise { ... on ProductVariant { id } } } } }
      }
      userErrors { field message }
    }
  }
`;

const CART_LINES_UPDATE_MUTATION = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { id }
      userErrors { field message }
    }
  }
`;

const CART_LINES_REMOVE_MUTATION = `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { id }
      userErrors { field message }
    }
  }
`;

function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    url.searchParams.set('channel', 'online_store');
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}

function isCartNotFoundError(userErrors: Array<{ field: string[] | null; message: string }>): boolean {
  return userErrors.some(e => e.message.toLowerCase().includes('cart not found') || e.message.toLowerCase().includes('does not exist'));
}

export type DeliveryMethod = 'pickup' | 'delivery';

export interface CartItem {
  lineId: string | null;
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: { amount: string; currencyCode: string };
  quantity: number;
  selectedOptions: Array<{ name: string; value: string }>;
  deliveryMethod: DeliveryMethod;
  attributes?: Array<{ key: string; value: string }>;
}

function buildLineAttributes(item: CartItem): Array<{ key: string; value: string }> {
  const base = [{ key: 'Lieferart', value: item.deliveryMethod === 'pickup' ? 'Abholung' : 'Lieferung' }];
  const extra = (item.attributes || []).filter(a => a.value && a.value.trim().length > 0);
  return [...base, ...extra];
}

export async function createShopifyCart(item: CartItem): Promise<{ cartId: string; checkoutUrl: string; lineId: string } | null> {
  const data = await storefrontApiRequest(CART_CREATE_MUTATION, {
    input: { lines: [{ quantity: item.quantity, merchandiseId: item.variantId, attributes: buildLineAttributes(item) }] },
  });

  if (data?.data?.cartCreate?.userErrors?.length > 0) {
    console.error('Cart creation failed:', data.data.cartCreate.userErrors);
    return null;
  }

  const cart = data?.data?.cartCreate?.cart;
  if (!cart?.checkoutUrl) return null;

  const lineId = cart.lines.edges[0]?.node?.id;
  if (!lineId) return null;

  return { cartId: cart.id, checkoutUrl: formatCheckoutUrl(cart.checkoutUrl), lineId };
}

export async function addLineToShopifyCart(cartId: string, item: CartItem): Promise<{ success: boolean; lineId?: string; cartNotFound?: boolean }> {
  const data = await storefrontApiRequest(CART_LINES_ADD_MUTATION, {
    cartId,
    lines: [{ quantity: item.quantity, merchandiseId: item.variantId, attributes: buildLineAttributes(item) }],
  });

  const userErrors = data?.data?.cartLinesAdd?.userErrors || [];
  if (isCartNotFoundError(userErrors)) return { success: false, cartNotFound: true };
  if (userErrors.length > 0) return { success: false };

  const lines = data?.data?.cartLinesAdd?.cart?.lines?.edges || [];
  const newLine = lines.find((l: { node: { id: string; merchandise: { id: string } } }) => l.node.merchandise.id === item.variantId);
  return { success: true, lineId: newLine?.node?.id };
}

export async function updateShopifyCartLine(cartId: string, lineId: string, quantity: number): Promise<{ success: boolean; cartNotFound?: boolean }> {
  const data = await storefrontApiRequest(CART_LINES_UPDATE_MUTATION, {
    cartId,
    lines: [{ id: lineId, quantity }],
  });

  const userErrors = data?.data?.cartLinesUpdate?.userErrors || [];
  if (isCartNotFoundError(userErrors)) return { success: false, cartNotFound: true };
  if (userErrors.length > 0) return { success: false };
  return { success: true };
}

export async function removeLineFromShopifyCart(cartId: string, lineId: string): Promise<{ success: boolean; cartNotFound?: boolean }> {
  const data = await storefrontApiRequest(CART_LINES_REMOVE_MUTATION, {
    cartId,
    lineIds: [lineId],
  });

  const userErrors = data?.data?.cartLinesRemove?.userErrors || [];
  if (isCartNotFoundError(userErrors)) return { success: false, cartNotFound: true };
  if (userErrors.length > 0) return { success: false };
  return { success: true };
}

export async function fetchCart(cartId: string) {
  return storefrontApiRequest(CART_QUERY, { id: cartId });
}
