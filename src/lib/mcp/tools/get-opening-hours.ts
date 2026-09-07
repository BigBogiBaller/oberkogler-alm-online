import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_opening_hours",
  title: "Get opening hours & contact",
  description: "Return the Oberkogler Alm opening hours, kitchen hours, seasonal info, address, phone and email.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Oberkogler Alm",
      address: {
        street: "Wörschachberg 63",
        postalCode: "8942",
        city: "Wörschach",
        country: "Österreich",
      },
      phone: "+43 677 61861537",
      website: "https://alm-shop-bloom.lovable.app",
      season: "Die Alm ist vorübergehend geschlossen.",
      openingHours: {
        Hinweis: "Vorübergehend geschlossen",
      },
      kitchenHours: "Vorübergehend geschlossen",
      status: "temporarily_closed",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});