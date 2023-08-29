import { useContext } from "react";

// Next.js imports
import Image from "next/image";

import styles from "./productSelection.module.css";

import ProductInfoContext from "../../context";

import { Typography, styled } from "@mui/material";

import useAppTheme from "@/app/Hooks/useAppTheme";
import useCompanyAssets from "@/app/Hooks/useCompanyAssets";
import { ConfigContext } from "@/app/providers";

enum Label {
  recommended = "recommended",
  price_ratio = "price_ratio",
  offer = "offer",
}

type SelectionLabel = keyof typeof Label;

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "backgroundColor",
})<{ backgroundColor: string }>(({ backgroundColor }) => ({
  backgroundColor: backgroundColor,
}));

function ProductSelectionLabel() {
  const product = useContext(ProductInfoContext);

  //TODO: ADD REAL DATA.
  // const { id, logo, selectionLabel } = product;

  // Using context to get the application state
  const { state } = useContext(ConfigContext);

  // Using custom hooks to get company assets and theme
  const { companyLogo } = useCompanyAssets(state.company);
  const theme = useAppTheme(state.company);

  const { id } = product;
  //TODO: ADD REAL DATA.
  const selectionLabel = Label.offer as SelectionLabel;
  const isOffer = selectionLabel === Label.offer;
  const offer = "50% la segunda unidad";
  const logo = companyLogo;

  const labelStyle = () => {
    switch (selectionLabel) {
      case Label.recommended:
        return {
          classes: `${styles.tag} ${styles.recommended}`,
          color: theme.palette.secondary.main,
        };
      case Label.price_ratio:
        return {
          classes: `${styles.tag} ${styles.priceRatio}`,
          color: theme.palette.secondary.main,
        };
      case Label.offer:
        return {
          classes: `${styles.tag} ${styles.offer}`,
          color: theme.palette.primary.main,
        };
      default:
        return { classes: styles.tag, color: "" };
    }
  };

  const { classes, color } = labelStyle();

  return (
    <div id={`${id}-selection-label-container`} className={styles.container}>
      <div className={styles.container}>
        <StyledTypography
          backgroundColor={color}
          id={`${id}selection-label-text`}
          className={classes}
        >
          {selectionLabel.toUpperCase()}
        </StyledTypography>
        {isOffer && (
          <StyledTypography
            backgroundColor={theme.palette.primary.dark}
            id={`${id}selection-label-offer-text`}
            className={classes}
          >
            {offer.toUpperCase()}
          </StyledTypography>
        )}
      </div>
      <Image
        id={`${id}selection-label-logo-container`}
        src={logo}
        alt="Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}

export default ProductSelectionLabel;
