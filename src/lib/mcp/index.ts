import { defineMcp } from "@lovable.dev/mcp-js";
import listProducts from "./tools/list-products";
import getProduct from "./tools/get-product";
import getOpeningHours from "./tools/get-opening-hours";

export default defineMcp({
  name: "oberkogler-alm-mcp",
  title: "Oberkogler Alm",
  version: "0.1.0",
  instructions:
    "Tools for the Oberkogler Alm (a mountain hut in Wörschach, Austria). Use `list_products` and `get_product` to browse the online shop (jams, honey, salves, vouchers, merchandise). Use `get_opening_hours` for opening hours, kitchen times, seasonal info and contact details.",
  tools: [listProducts, getProduct, getOpeningHours],
});