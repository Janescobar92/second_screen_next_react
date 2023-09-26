"use client";
import { useContext } from "react";

import { WSServerContext } from "@/app/providers";
import { ComparativeQuote, Order } from "@/app/interfaces";
import { WSPayloadTypes } from "@/app/providers/WSProvider/interfaces";

import { MessageBox } from "../MessageBox";
import { ComparativesContainer } from "../ComparativesContainer";
import { SaleDetailBox } from "../SaleDetailBox";

function WSMsgHandler() {
  const { state } = useContext(WSServerContext);
  const { data, type } = state.incoming || {};

  if (type === WSPayloadTypes.text) {
    return <MessageBox id="text-payload-case" title={(data || "") as string} />;
  }

  if (type === WSPayloadTypes.comparative) {
    return (
      <ComparativesContainer comparativeQuote={data as ComparativeQuote} />
    );
  }

  if (type === WSPayloadTypes.sale) {
    return <SaleDetailBox order={data as Order} />;
  }

  return (
    <MessageBox id="welcome" title={"Tenemos las MEJORES OPCIONES para ti"} />
  );
}

export default WSMsgHandler;
