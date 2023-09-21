import { Dispatch } from "react";
import { ActionType } from "../../interfaces";
import { FINANCE_ACTIONS } from "./actionTypes";
import { Order } from "@/app/interfaces";

// Action creator for setting the whole config
export const setShowDialog = (
  show: boolean,
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: FINANCE_ACTIONS.SET_SHOW_ASK_FOR_FINANCE_DIALOG,
    payload: show,
  });
};

export const askForFinance = (
  dispatch: Dispatch<ActionType>,
  order: Order | undefined,
  show = true
) => {
  dispatch({
    type: FINANCE_ACTIONS.SET_ORDER_TO_FINANCE,
    payload: order,
  });
  setShowDialog(show, dispatch);
};
