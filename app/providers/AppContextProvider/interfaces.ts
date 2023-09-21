import { ComparativeQuote, Order, SuggestedItem } from "@/app/interfaces";

export interface ConfigState {
  company: string;
  loading: boolean;
  ws_room: string;
  ws_server_port: string;
}

export interface SaleDetailsState {
  selected_order: Order;
  comparative_quote: ComparativeQuote;
}

export interface FinanceState {
  show_fianance_dialog: boolean;
  order_to_finance?: Order;
}

export interface AppState {
  config: ConfigState;
  tpv_loader: boolean;
  sale_details?: SaleDetailsState;
  finance?: FinanceState;
}

export interface ActionType {
  type: string;
  payload:
    | string
    | undefined
    | boolean
    | ConfigState
    | SuggestedItem
    | Order
    | ComparativeQuote;
}
