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
      season: "Die Alm ist von April bis Ende September geöffnet.",
      openingHours: {
        Montag: "10:00–18:00",
        Dienstag: "10:00–18:00",
        Mittwoch: "Ruhetag",
        Donnerstag: "10:00–18:00",
        Freitag: "10:00–18:00",
        Samstag: "10:00–18:00",
        Sonntag: "10:00–18:00",
      },
      kitchenHours: "10:00–17:00 (Mittwoch Ruhetag)",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});