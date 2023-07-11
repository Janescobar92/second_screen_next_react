import { Dispatch } from "react";
import { ActionType, WSPayload } from "../interfaces";
import { WS_SERVER_ACTIONS } from "../actionTypes";

export const setIncomingMsg = (
  data: WSPayload,
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: WS_SERVER_ACTIONS.SET_INCOMING_PAYLOAD,
    payload: data,
  });
};

export const setOutgoingMsg = (
  data: WSPayload,
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: WS_SERVER_ACTIONS.SET_OUTGOING_PAYLOAD,
    payload: data,
  });
};
