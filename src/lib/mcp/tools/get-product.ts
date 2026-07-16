import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const STOREFRONT_URL = "https://utn4ey-gy.myshopify.com/api/2025-07/graphql.json";
const STOREFRONT_TOKEN = "2b681057ebd05be63b0cba68fca7cbf3";

const QUERY = `
  query GetProduct($handle: String!) {
    productByHandle(handle: $handle) {
      title
      handle
      description
      priceRange { minVariantPrice { amount currencyCode } }
      variants(first: 50) {
        edges { node { title price { amount currencyCode } availableForSale } }
      }
      images(first: 5) { edges { node { url altText } } }
    }
  }
`;

export default defineTool({
  name: "get_product",
  title: "Get product details",
  description: "Get full details for a single Oberkogler Alm shop product by its handle (slug).",
  inputSchema: {
    handle: z.string().min(1).describe("The product handle, e.g. 'ringelblumen-salbe'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ handle }) => {
    const res = await fetch(STOREFRONT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query: QUERY, variables: { handle } }),
    });
    if (!res.ok) {
      return { content: [{ type: "text", text: `Shopify error: HTTP ${res.status}` }], isError: true };
    }
    const data = await res.json();
    const p = data?.data?.productByHandle;
    if (!p) {
      return { content: [{ type: "text", text: `No product found with handle '${handle}'.` }], isError: true };
    }
    const product = {
      title: p.title,
      handle: p.handle,
      description: p.description,
      price: `${p.priceRange.minVariantPrice.amount} ${p.priceRange.minVariantPrice.currencyCode}`,
      variants: p.variants.edges.map((e: { node: { title: string; price: { amount: string; currencyCode: string }; availableForSale: boolean } }) => ({
        title: e.node.title,
        price: `${e.node.price.amount} ${e.node.price.currencyCode}`,
        availableForSale: e.node.availableForSale,
      })),
      images: p.images.edges.map((e: { node: { url: string; altText: string | null } }) => e.node.url),
      url: `https://alm-shop-bloom.lovable.app/product/${p.handle}`,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(product, null, 2) }],
      structuredContent: { product },
    };
  },
});