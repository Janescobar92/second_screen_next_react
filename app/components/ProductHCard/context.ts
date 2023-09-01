import { createContext } from "react";
import { SuggestedItem } from "@/app/interfaces";

const ProductContext = createContext<SuggestedItem>({
  description: "",
  id: 0,
  imge_url: "",
  price: "",
  all_included_price: 0,
  item_type: "",
  name: "",
  nav_id: "",
  season: "",
  unit_price: "",
  total_cost: "",
  is_commission: false,
  reference: "",
  display_name: "",
  carga_aa: 0,
  display_description: "",
  display_nav_id: "",
  is_service: false,
  tax_applied: "",
  tax_percentage: "",
  allow_automatic_order: false,
  extra_items: [],
  main_attributes: null,
});

export default ProductContext;
