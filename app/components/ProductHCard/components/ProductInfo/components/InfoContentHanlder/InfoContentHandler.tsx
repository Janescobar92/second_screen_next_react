import { useContext } from "react";

import { Typography } from "@mui/material";

import styles from "../components.module.css";

import { PRODUCT_TYPE } from "@/app/components/ProductHCard/constants";

import ProductInfoContext from "../../context";

import ProductExtraData from "../ProductExtraData";
import { ProductSelectionLabel } from "../ProductSelectionLabel";
import { InfoContent } from "./components";

const { TIRE } = PRODUCT_TYPE;

function InfoContentHandler() {
  const product = useContext(ProductInfoContext);

  switch (product.item_type) {
    case TIRE:
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
    default:
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
            <Typography color="text.secondary" variant="body1">
              {product.display_description}
            </Typography>
          </InfoContent.PExtraData>
        </InfoContent>
      );
  }
}

export default InfoContentHandler;
