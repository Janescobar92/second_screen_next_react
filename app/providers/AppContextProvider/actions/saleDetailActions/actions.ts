import { SuggestedItem } from "@/app/interfaces";
import { Dispatch } from "react";
import { ActionType } from "../../interfaces";
import { SALE_DETAIL_ACTIONS } from "./actionsTypes";

// Action to set the selected product for sale detail
export const setSelectedProduct = (
  selectedProduct: SuggestedItem | undefined,
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: SALE_DETAIL_ACTIONS.SET_SELECTED_PRODUCT,
    payload: selectedProduct,
  });
};
