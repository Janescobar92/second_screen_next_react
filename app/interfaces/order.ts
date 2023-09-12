import { Center } from "./center";
import { Customer } from "./customer";
import { ExtraItem, SuggestedItem } from "./products";
import { Vehicle } from "./vehicle";

export interface Promos {
  id: number;
  name: string;
  nav_id: string;
  discount?: number;
  original_discount: number;
  formatted_discount?: string;
}

export interface CalculatePiece {
  amount: number;
  name: string;
  p: string;
  total_price: number;
  total_price_with_iva: number;
  unit_price: number;
  unit_price_iva: number;
}

export interface CalculateProductData {
  all_included_price: number;
  availability: string;
  availability_date: string | null;
  availability_days: string | number | null;
  brand: string | null;
  brand_image: string;
  category: string;
  description: string | null;
  formatted_all_included_price: string;
  formatted_listing_price: string | null;
  formatted_price: string;
  formatted_price_to_show: string;
  id: number;
  image: string;
  image_url: string;
  is_service: boolean;
  is_tag: boolean;
  label: string;
  listing_price: number | null;
  model: string;
  name: string;
  nav_id: string;
  price: number;
  price_to_show: number;
  promotions: Promos[];
  raw_name: string;
  season: string | null;
  show_from: boolean;
  slug: string | null;
  url: string;
}

export interface CalculateService {
  all_extra_items: ExtraItem[];
  center_stock: string | null;
  default_extra_items: string[];
  description: string;
  encargo: boolean;
  encargo_description?: string;
  encargo_price?: number;
  external_stock: string | null;
  extra_items: ExtraItem[];
  grp: string;
  id: number;
  is_service: boolean;
  is_promo?: boolean;
  is_commission?: boolean;
  item_id?: number;
  nav_id: string;
  outdated_stock: boolean;
  pa: Array<string | number>;
  pieces: CalculatePiece[];
  pieces_price: number;
  pieces_price_iva: number;
  platform_stock: number;
  price: number;
  price_iva: number;
  product_data: CalculateProductData;
  promo_parts_price?: number;
  promo_total_price?: number;
  promo_unit_price?: number;
  promo_work_price?: number;
  quantity: number;
  reference: string;
  stock_reservado: string | null;
  tag: boolean;
  type: string;
  unit_price: number;
  unit_price_iva: number;
  work_price: number;
  work_price_iva: number;
}

export interface CalculatePayload {
  discount: number;
  discount_code: string;
  has_moto_item?: boolean;
  formatted_additional_services_price: string;
  formatted_discount: string;
  formatted_iva: string;
  formatted_pieces_price: string;
  formatted_subtotal: string;
  formatted_total_discounts?: string; // CHECK!
  formatted_total_price: string;
  formatted_work_price: string;
  has_service: boolean;
  iva: number;
  has_carwash?: boolean;
  location_source: string;
  parts_price: number;
  price_to_show: string;
  promos: Array<Promos>;
  services: CalculateService[];
  subtotal: number;
  t?: string;
  tax_applied: string;
  tax_base?: string;
  total_before_discounts: number;
  total_discounts: number;
  total_price_with_discount: number;
  total_discounts_without_iva: number;
  total_discounts_iva: number;
  total_price: number;
  work_price: number;
}

export interface TerminalOrderAPI {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  inventory_terminal: boolean;
  center: number;
}

export interface ReturnCustomTimes {
  allow_return: number;
  id: string;
  nav_id: string;
  time: string;
}

export interface User {
  id: number;
  username: string;
  nav_id: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  clocked_in: boolean;
  clocked_in_garage?: boolean;
}

export interface QuoteInfoAPI {
  accepted: boolean;
  id: number;
  created_by: User;
  confirmation_number?: string;
  has_expired: boolean;
  nav_id?: string | null;
  has_reserved_stock?: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  order: number;
  comparative: number;
  status: number;
}

export interface AdvancePayments {
  amount_currency?: string;
  amount: string;
  can_be_returned?: boolean;
  can_void?: boolean;
  change_amount_currency?: string;
  change_amount?: string;
  created_at?: string;
  commerce_id?: string;
  expiration_date: string;
  /**
   *  @field if true means that this advance payment has expired.
   */
  expired: boolean;
  id?: number;
  id_return?: number;
  /**
   *  @field if true means that this advance payment was moved to another order.
   */
  moved_out: boolean;
  nav_id?: string;
  order: number;
  payment_name_eci?: string;
  payment_type: number;
  payment_token?: string;
  pin_pad_terminal_id?: string;
  received_currency?: string;
  received?: string;
  refund_nav_id?: string;
  related_return?: number;
  returned?: boolean;
  /**
   *  @field indicates the status of the payment, whether or not was moved due to an exchange.
   */
  status_change?: number;
  /**
   *  @field ticket used to identify clear one operations in local storage.
   */
  ticket?: string;
  ticket_path?: string;
  type?: string;
  updated_at?: string;
  void?: boolean;

  // CLEARONE FIELDS
  aid?: string;
  arc?: string;
  acount_holder?: string;
  /**
   *  @field CardNumber used to identify clear one operations in local storage.
   */
  card_number?: string;
  bin?: string;
  bank_authorization_code?: string;
  bank_name?: string;
  bank_transaction_number?: string;
  card_brand?: string;
  card_network?: string;
  card_type?: string;
  clearone_amount?: string;
  country?: string;
  currency?: string;
  cvm?: string;
  date?: string;
  issuing_bank_id?: string;
  lbl?: string;
  /**
   *  @field NumOpBCO used to identify clear one operations in local storage.
   */
  num_op_bco?: string;
  operation_type?: string;
  old_payment_type: number;
  pinpad_read_mode?: string;
  reference_num_op?: string;
  response_code?: string;
  session_id?: string;
  tax_free?: string;
  terminal_id?: string;
  text_message?: string;
}

export interface Payments {
  amount: string | number;
  amount_currency?: string;
  change_amount?: string;
  /**
   *  @field ClearOne response: Commerce id (Bank wise)
   */
  commerce_id?: string;
  created_at?: string;
  id?: number | string;
  id_return?: number;
  invoice?: number;
  /**
   *  @field ClearOne response: Last four digits of the customer's credit/debir card
   */
  card_number?: string;
  /**
   *  @field NumOpBCO used to identify clear one operations in local storage.
   */
  nav_id?: string;
  num_op_bco?: string;
  /**
   *  @field if true means that this payment was moved to another order.
   */
  moved_out?: boolean;
  name?: string;
  payment_name_eci?: string;
  payment_token?: string;
  payment_type: number;
  /**
   *  @field ClearOne response: Terminal id
   */
  pin_pad_terminal_id?: string;
  returned?: boolean;
  remaining_to_return?: string;
  /**
   *  @field indicates the status of the payment, whether or not was moved due to an exchange.
   */
  status_change?: number;
  ticket_path?: string;
  /**
   *  @field ClearOne response: Ticket operation id.
   */
  ticket?: string;
  type?: string;
  updated_at?: string;
}

export interface PaymentAutorization {
  id: number;
  created_by: User;
  code: string;
  origin: number;
  order: number;
  created_at: string;
  updated_at: string;
}

export interface WorkOrderAPI {
  id: number;
  order: number;
  nav_id: string;
  notes: number[];
  orders: number[];
  otr_path: string;
  otr_path_hist: string;
  otr_status: number;
  vehicle: Vehicle;
}

export interface RelatedOrderNotes {
  created_at?: string;
  document_type: number;
  id: number;
  nav_id: string;
}

export interface NotesAPI {
  id?: number;
  created_by?: number;
  is_return_note?: boolean;
  note?: string; // msg
  is_internal: boolean;
  order?: RelatedOrderNotes;
  source: string;
}

export interface Collective {
  id: number;
  nav_id: string;
  name: string;
}

export interface CheckListGt {
  created_by: number;
  is_internal: boolean;
  note: string;
  source: string;
}

export interface InvoiceAPI {
  id: number;
  created_by: User;
  nav_id?: string;
  created_at: string;
  updated_at: string;
  order: number;
  terminal: number;
  status: number;
}

export interface AllPaymentsData {
  adv_payments_no_return: AdvancePayments[];
  payments_no_return: Payments[];
  returns_adv_payments: AdvancePayments[];
  returns_payments: Payments[];
}

export interface Order {
  advance_payments: Array<AdvancePayments>;
  advance_payments_total: number;
  all_payments_data: AllPaymentsData;
  allow_return_all_items: boolean;
  allow_returns_in_cash: boolean;
  allow_return_with_open_otr: boolean;
  allowed_return_with_open_otr: boolean;
  amount_paid?: number;
  calculate_payload: CalculatePayload;
  calculate_uuid?: string;
  can_be_recovered?: boolean;
  can_be_returned_special_customer: boolean;
  center: Center;
  check_list_gt?: CheckListGt[];
  child_nav_id?: string;
  collective?: Collective;
  convert_into_order_url?: string;
  created_by: User | number;
  created_at: string;
  customer: Customer;
  driver?: Customer | null;
  gt_request?: {
    id?: number;
  };
  has_exchange: boolean;
  has_expired?: boolean;
  id: number;
  invoice: InvoiceAPI | null;
  invoice_return_allowed: boolean;
  is_precaweb: boolean;
  items: SuggestedItem[];
  iva: string;
  name?: string;
  notes?: NotesAPI[];
  otr: WorkOrderAPI | null;
  parent: number | null;
  payments: Array<Payments>;
  payment_authorizations: PaymentAutorization[];
  payment_totals: Array<Payments>;
  quote: QuoteInfoAPI | null;
  quote_path?: string;
  remaining_total: string;
  requires_payment_authorization: boolean;
  reserved_stock?: boolean;
  return_custom_times: ReturnCustomTimes[];
  seller_id: string;
  shift: number;
  tax_base: string;
  terminal: TerminalOrderAPI;
  total_cost_currency: string;
  total_cost: string;
  type?: string;
  updated_at?: string;
  url?: string;
  vehicle: Vehicle | null;
}
