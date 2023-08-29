import { useContext } from "react";
import ProductInfoContext from "../context";

function ProductExtraData() {
  const product = useContext(ProductInfoContext);

  console.log({ product });

  return <div></div>;
}

export default ProductExtraData;
