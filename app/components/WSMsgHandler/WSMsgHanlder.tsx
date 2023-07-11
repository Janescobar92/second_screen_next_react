"use client";
import { useContext } from "react";

import { WSServerContext } from "@/app/providers";
import { MessageBox } from "../MessageBox";

function WSMsgHandler() {
  const { state } = useContext(WSServerContext);
  const msg = (state.incoming?.data || "Bienvenido a nuestra tienda") as string;

  return <MessageBox content={msg} />;
}

export default WSMsgHandler;
