import { SuggestedItem } from "@/app/interfaces";

export interface ConfigState {
  company: string;
  loading: boolean;
  ws_room: string;
  ws_server_port: string;
}

export interface SaleDetailsState {
  selected_product: SuggestedItem;
}

export interface AppState {
  config: ConfigState;
  sale_details?: SaleDetailsState;
}

export interface ActionType {
  type: string;
  payload: string | ConfigState | SuggestedItem;
}
