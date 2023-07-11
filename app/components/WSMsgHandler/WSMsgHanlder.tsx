"use client";
import { useContext } from "react";

import { WSServerContext } from "@/app/providers";
import { MessageBox } from "../MessageBox";
import { WSPayloadTypes } from "@/app/providers/WSProvider/interfaces";

function WSMsgHandler() {
  const { state } = useContext(WSServerContext);
  const { data, type } = state.incoming || {};

  if (type === WSPayloadTypes.text) {
    return <MessageBox content={(data || "") as string} />;
  }

  return <MessageBox content={"Bienvenido a nuestra tienda"} />;
}

export default WSMsgHandler;
