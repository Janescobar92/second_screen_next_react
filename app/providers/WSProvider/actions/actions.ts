import { Dispatch } from "react";
import { ActionType, WSPayload, WSPayloadTypes } from "../interfaces";
import { WS_SERVER_ACTIONS } from "../actionTypes";
import { Order } from "@/app/interfaces";

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

export const getTPVStatus = (dispatch: Dispatch<ActionType>) => {
  // TODO: SET AS A COSNTANT.
  setOutgoingMsg(
    {
      data: "get-tpv-status",
      room: "TPV",
      roomEvent: "sent_from_second_screen",
      trasnmitter: "second_screen",
      type: WSPayloadTypes.text,
    },
    dispatch
  );
};

// TODO CHECK PAYLOAD TYPE.
const comparativeOutGoingMsg = (type: string, payload: unknown) => {
  return {
    data: {
      type: type,
      payload,
    },
    room: "TPV",
    roomEvent: "sent_from_second_screen",
    trasnmitter: "second_screen",
    type: WSPayloadTypes.comparative,
  };
};

export const setTPVComparativeTab = (
  order: Order,
  dispatch: Dispatch<ActionType>
) => {
  // TODO: SET AS A COSNTANT.
  const msg = comparativeOutGoingMsg("set-comparative-active-tap", {
    order_id: order.id,
  });

  setOutgoingMsg(msg, dispatch);
};

export const updateTPVComparativeTab = (
  order: Order,
  dispatch: Dispatch<ActionType>
) => {
  // TODO: SET AS A COSNTANT.

  const msg = comparativeOutGoingMsg("update-comparative-tap", {
    order: order,
  });
  setOutgoingMsg(msg, dispatch);
};

export const resetState = (dispatch: Dispatch<ActionType>) =>
  dispatch({
    type: WS_SERVER_ACTIONS.RESET,
  });
