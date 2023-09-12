import { ComparativeQuote, Order } from "@/app/interfaces";
import { Dispatch } from "react";
import { ActionType } from "../../interfaces";
import { SALE_DETAIL_ACTIONS } from "./actionsTypes";

// Action to set the selected order for sale detail
export const setSelectedOrder = (
  selectedOrder: Order | undefined,
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: SALE_DETAIL_ACTIONS.SET_SELECTED_ORDER,
    payload: selectedOrder,
  });
};

// Action to set the comparative quote for sale detail
export const setComparativeQuote = (
  comparativeQuote: ComparativeQuote | undefined,
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: SALE_DETAIL_ACTIONS.SET_COMPARATIVE_QUOTE,
    payload: comparativeQuote,
  });
};
