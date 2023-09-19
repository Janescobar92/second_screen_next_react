import { useContext } from "react";

import { Typography } from "@mui/material";

import styles from "./productInfo.module.css";

import ProductContext from "../../context";

import { InfoContent } from "./components";
import { ProductSelectionLabel, ProductExtraData } from "./components";

function ProductInfo() {
  const product = useContext(ProductContext);

  return (
    <InfoContent>
      <InfoContent.SelectionLabel>
        <ProductSelectionLabel />
      </InfoContent.SelectionLabel>
      <InfoContent.PTitle>
        <Typography
          color="text.secondary"
          className={styles.productTitle}
          fontWeight={700}
        >
          {product.display_name}
        </Typography>
      </InfoContent.PTitle>
      <InfoContent.PExtraData>
        <ProductExtraData />
      </InfoContent.PExtraData>
    </InfoContent>
  );
}

export default ProductInfo;
