import { Config } from "@/app/interfaces";
import { Dispatch } from "react";
import { ActionType } from "../../interfaces";
import { CONFIG_ACTIONS } from "./actionsTypes";

// Action creator for setting the whole config
export const setConfig = (
  newConfig: Config,
  dispatch: Dispatch<ActionType>
) => {
  dispatch({
    type: CONFIG_ACTIONS.UPDATE_WHOLE_CONFIG,
    payload: {
      company: newConfig.COMPANY,
      ws_room: newConfig.WS_ROOM,
      ws_server_port: newConfig.WS_SERVER_PORT,
      loading: false,
    },
  });
};
