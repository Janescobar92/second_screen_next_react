import { useContext } from "react";
import { Typography } from "@mui/material";

import { PRODUCT_TYPE } from "@/app/constants/item";
import ProductContext from "@/app/components/ProductHCard/context";
import { TireExtraData } from "./components";

function ProductExtraData() {
  const product = useContext(ProductContext);

  switch (product.item_type) {
    case PRODUCT_TYPE.TIRE:
      return <TireExtraData />;
    default:
      return (
        <Typography
          sx={{ minWidth: "20rem" }}
          component={"div"}
          color="text.secondary"
          variant="body1"
        >
          {product.display_description}
        </Typography>
      );
  }
}

export default ProductExtraData;
