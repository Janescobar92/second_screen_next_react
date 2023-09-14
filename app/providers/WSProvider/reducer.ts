import { WS_SERVER_ACTIONS } from "./actionTypes";
import { WS_INTINIATL_STATE } from "./constants";
import { WSState, ActionType } from "./interfaces";

const reducer = (state: WSState, action: ActionType) => {
  switch (action.type) {
    case WS_SERVER_ACTIONS.SET_INCOMING_PAYLOAD:
      return { ...state, incoming: action.payload };
    case WS_SERVER_ACTIONS.SET_OUTGOING_PAYLOAD:
      return { ...state, outgoing: action.payload };
    case WS_SERVER_ACTIONS.RESET:
      return WS_INTINIATL_STATE;
    default:
      return state;
  }
};

export default reducer;
