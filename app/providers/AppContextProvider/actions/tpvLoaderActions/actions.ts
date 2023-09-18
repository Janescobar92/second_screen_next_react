import { Dispatch } from "react";
import { ActionType } from "../../interfaces";
import { TPV_LOADER_ACTIONS } from "./actionTypes";

// Action to set the tpv loader.
export const setTPVLoader = (
  loading: boolean,
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: TPV_LOADER_ACTIONS.SET_LOADER,
    payload: loading,
  });
};
