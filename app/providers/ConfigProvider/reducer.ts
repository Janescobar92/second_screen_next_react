import { CONFIG_ACTIONS } from "./actionsTypes";
import { ConfigState, ActionType } from "./interfaces";

const reducer = (state: ConfigState, action: ActionType) => {
  switch (action.type) {
    case CONFIG_ACTIONS.UPDATE_COMPANY:
      return { ...state, company: (action.payload as string) };
    case CONFIG_ACTIONS.UPDATE_WS_ROOM:
      return { ...state, ws_room: (action.payload as string) };
    case CONFIG_ACTIONS.UPDATE_WS_SERVER_PORT:
      return { ...state, ws_server_port: (action.payload as string) };
    case CONFIG_ACTIONS.UPDATE_WHOLE_CONFIG:
      return { ...state, ...(action.payload as ConfigState) };
    default:
      return state;
  }
};

export default reducer;
