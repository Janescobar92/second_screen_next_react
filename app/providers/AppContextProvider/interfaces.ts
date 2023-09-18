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

export interface AppState {
  config: ConfigState;
  tpv_loader: boolean;
  sale_details?: SaleDetailsState;
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
