import { SuggestedItem } from "@/app/interfaces";
import { CONFIG_ACTIONS, SALE_DETAIL_ACTIONS } from "./actions";
import { AppState, ActionType, ConfigState } from "./interfaces";

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
    case SALE_DETAIL_ACTIONS.SET_SELECTED_PRODUCT:
      return {
        ...state,
        sale_details: { selected_product: action.payload as SuggestedItem },
      };
    default:
      return state;
  }
};

export default reducer;
