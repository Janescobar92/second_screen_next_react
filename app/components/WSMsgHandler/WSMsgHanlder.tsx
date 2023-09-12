"use client";
import { useContext, useEffect } from "react";

import { AppContext, WSServerContext } from "@/app/providers";
import { MessageBox } from "../MessageBox";
import { WSPayloadTypes } from "@/app/providers/WSProvider/interfaces";
import { ProductsContainer } from "../ProductsContainer";
import { ComparativeQuote, SuggestedItem } from "@/app/interfaces";
import { ComparativesContainer } from "../ComparativesContainer";
import { setComparativeQuote } from "@/app/providers/AppContextProvider";

function WSMsgHandler() {
  const { state } = useContext(WSServerContext);
  const { dispatch: appContextDispatch } = useContext(AppContext);
  const { data, type } = state.incoming || {};

  const handleComparative = () => {
    setComparativeQuote(data as ComparativeQuote, appContextDispatch);
  };

  useEffect(() => {
    if (type === WSPayloadTypes.comparative) handleComparative();
  }, [state.incoming]);

  if (type === WSPayloadTypes.text) {
    return <MessageBox title={(data || "") as string} />;
  }

  if (type === WSPayloadTypes.comparative) {
    return (
      <ComparativesContainer comparativeQuote={data as ComparativeQuote} />
    );
  }

  if (type === WSPayloadTypes.products) {
    return <ProductsContainer sugestedItems={data as SuggestedItem[]} />;
  }

  return <MessageBox title={"Tenemos las MEJORES OPCIONES para ti"} />;
}

export default WSMsgHandler;
