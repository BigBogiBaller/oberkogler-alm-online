import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const STOREFRONT_URL = "https://utn4ey-gy.myshopify.com/api/2025-07/graphql.json";
const STOREFRONT_TOKEN = "2b681057ebd05be63b0cba68fca7cbf3";

const QUERY = `
  query ListProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          title
          handle
          description
          priceRange { minVariantPrice { amount currencyCode } }
        }
      }
    }
  }
`;

export default defineTool({
  name: "list_products",
  title: "List shop products",
  description: "List products from the Oberkogler Alm online shop (title, handle, price, short description).",
  inputSchema: {
    limit: z.number().int().min(1).max(50).default(20).describe("Maximum number of products to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ limit }) => {
    const res = await fetch(STOREFRONT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query: QUERY, variables: { first: limit } }),
    });
    if (!res.ok) {
      return { content: [{ type: "text", text: `Shopify error: HTTP ${res.status}` }], isError: true };
    }
    const data = await res.json();
    const products = (data?.data?.products?.edges ?? []).map((e: { node: { title: string; handle: string; description: string; priceRange: { minVariantPrice: { amount: string; currencyCode: string } } } }) => ({
      title: e.node.title,
      handle: e.node.handle,
      description: (e.node.description ?? "").slice(0, 400),
      price: `${e.node.priceRange.minVariantPrice.amount} ${e.node.priceRange.minVariantPrice.currencyCode}`,
      url: `https://alm-shop-bloom.lovable.app/product/${e.node.handle}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(products, null, 2) }],
      structuredContent: { products },
    };
  },
});