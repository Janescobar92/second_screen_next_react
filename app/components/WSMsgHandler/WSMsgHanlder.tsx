"use client";
import { useContext } from "react";

import { WSServerContext } from "@/app/providers";
import { MessageBox } from "../MessageBox";
import { WSPayloadTypes } from "@/app/providers/WSProvider/interfaces";
import { ProductsContainer } from "../ProductsContainer";
import { ComparativeQuote, SuggestedItem } from "@/app/interfaces";
import { ComparativesContainer } from "../ComparativesContainer";

function WSMsgHandler() {
  const { state } = useContext(WSServerContext);
  const { data, type } = state.incoming || {};

  if (type === WSPayloadTypes.text) {
    return <MessageBox title={(data || "") as string} />;
  }

  if (type === WSPayloadTypes.comparative) {
    return <ComparativesContainer comparativeQuote={data as ComparativeQuote} />;
  }

  if (type === WSPayloadTypes.products) {
    return <ProductsContainer sugestedItems={data as SuggestedItem[]} />;
  }

  return <MessageBox title={"Tenemos las MEJORES OPCIONES para ti"} />;
}

export default WSMsgHandler;
