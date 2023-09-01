import { useContext } from "react";
import { PRODUCT_TYPE } from "@/app/components/ProductHCard/constants";
import ProductContext from "@/app/components/ProductHCard/context";
import { TireExtraData } from "./components";

function ProductExtraData() {
  const product = useContext(ProductContext);

  switch (product.item_type) {
    case PRODUCT_TYPE.TIRE:
      return <TireExtraData />;
    default:
      return null;
  }
}

export default ProductExtraData;
