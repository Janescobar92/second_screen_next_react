import { Dispatch } from "react";
import { ActionType, WSPayload, WSPayloadTypes } from "../interfaces";
import { WS_SERVER_ACTIONS } from "../actionTypes";
import { Order } from "@/app/interfaces";
import {
  GET_TPV_STATUS,
  SET_COMPARATIVE_ACTIVE_TAB,
  UPDATE_COMPARATIVE_TAB,
} from "../constants";

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
  setOutgoingMsg(
    {
      data: GET_TPV_STATUS,
      room: "TPV",
      roomEvent: "sent_from_second_screen",
      trasnmitter: "second_screen",
      type: WSPayloadTypes.text,
    },
    dispatch
  );
};

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
  const msg = comparativeOutGoingMsg(SET_COMPARATIVE_ACTIVE_TAB, {
    order_id: order.id,
  });

  setOutgoingMsg(msg, dispatch);
};

export const updateTPVComparativeTab = (
  order: Order,
  dispatch: Dispatch<ActionType>
) => {
  const msg = comparativeOutGoingMsg(UPDATE_COMPARATIVE_TAB, {
    order: order,
  });
  setOutgoingMsg(msg, dispatch);
};

export const resetState = (dispatch: Dispatch<ActionType>) =>
  dispatch({
    type: WS_SERVER_ACTIONS.RESET,
  });
