import { ComparativeQuote, Order } from "@/app/interfaces";
import { CONFIG_ACTIONS, SALE_DETAIL_ACTIONS } from "./actions";
import { AppState, ActionType, ConfigState } from "./interfaces";
import { TPV_LOADER_ACTIONS } from "./actions/tpvLoaderActions";
import { FINANCE_ACTIONS } from "./actions/financeActions/actionTypes";

const reducer = (state: AppState, action: ActionType) => {
  switch (action.type) {
    case CONFIG_ACTIONS.UPDATE_COMPANY:
      return {
        ...state,
        config: { ...state.config, company: action.payload as string },
      };
    case CONFIG_ACTIONS.UPDATE_WS_ROOM:
      return {
        ...state,
        config: { ...state.config, ws_room: action.payload as string },
      };
    case CONFIG_ACTIONS.UPDATE_WS_SERVER_PORT:
      return {
        ...state,
        config: { ...state.config, ws_server_port: action.payload as string },
      };
    case CONFIG_ACTIONS.UPDATE_WHOLE_CONFIG:
      return {
        ...state,
        config: { ...state.config, ...(action.payload as ConfigState) },
      };
    case SALE_DETAIL_ACTIONS.SET_SELECTED_ORDER:
      return {
        ...state,
        sale_details: {
          ...state.sale_details,
          selected_order: action.payload as Order,
        },
      };
    case SALE_DETAIL_ACTIONS.SET_COMPARATIVE_QUOTE:
      return {
        ...state,
        sale_details: {
          ...state.sale_details,
          comparative_quote: action.payload as ComparativeQuote,
        },
      };
    case FINANCE_ACTIONS.SET_ORDER_TO_FINANCE:
      return {
        ...state,
        finance: {
          ...state.finance,
          order_to_finance: action.payload as Order,
        },
      };
    case FINANCE_ACTIONS.SET_SHOW_ASK_FOR_FINANCE_DIALOG:
      return {
        ...state,
        finance: {
          ...state.finance,
          show_fianance_dialog: action.payload as boolean,
        },
      };
    case FINANCE_ACTIONS.SET_DIALOG_TIMEOUT:
      return {
        ...state,
        finance: {
          ...state.finance,
          timeout: action.payload as number,
        },
      };
    case TPV_LOADER_ACTIONS.SET_LOADER:
      return {
        ...state,
        tpv_loader: action.payload as boolean,
      };
    default:
      return state;
  }
};

export default reducer;
