import { useMemo } from "react";

import { SuggestedItem } from "@/app/interfaces";
import { InfoContentHandler as ItemData } from "./components";
import ProductInfoContext from "./context";

function ProductInfo(props: { product: SuggestedItem }) {
  const { product } = props;

  const contextValue = useMemo(() => {
    return {
      ...product,
    };
  }, [product]);

  return (
    <ProductInfoContext.Provider value={contextValue}>
      <ItemData />
    </ProductInfoContext.Provider>
  );
}

export default ProductInfo;
