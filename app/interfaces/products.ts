interface ExtraItemDataProperties {
  property_name: string;
  property_value: string;
}

export interface ExtraItemData {
  nav_id: string;
  properties: ExtraItemDataProperties[];
}

export interface ExtraItem {
  carga_aa: number | null;
  custom_description: string;
  extra_items_data: ExtraItemData[];
  id: number;
  nav_id: string;
  name: string;
  description: string;
  display_description: string;
  display_name?: string;
  price: string;
  quantity: number;
  current_quantity: number;
  unit_price: string;
  item_type: string;
  mandatory?: boolean;
  isExtraItem?: boolean;
  total_cost: string;
}

export interface SuggestedItem {
  description: string;
  id: number;
  imge_url: string;
  price: string;
  all_included_price: number;
  item_type: string;
  name: string;
  nav_id: string;
  season: string;
  unit_price: string;
  total_cost: string;
  is_commission: boolean;
  reference: string;
  display_name: string;
  carga_aa: number;
  display_description: string;
  display_nav_id: string;
  is_service: boolean;
  tax_applied: string;
  tax_percentage: string;
  allow_automatic_order: boolean;
  extra_items: [];
}
