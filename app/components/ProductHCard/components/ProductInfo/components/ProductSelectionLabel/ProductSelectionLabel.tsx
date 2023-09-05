import { useContext } from "react";

// Next.js imports
import Image from "next/image";

import styles from "./productSelection.module.css";

import ProductContext from "../../../../context";

import { Typography, styled } from "@mui/material";

import useAppTheme from "@/app/Hooks/useAppTheme";
import useCompanyAssets from "@/app/Hooks/useCompanyAssets";
import { Label } from "@/app/components/ProductHCard/constants";

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) =>
    prop !== "backgroundColor" && prop !== "isPriceRatio",
})<{ backgroundColor: string; isPriceRatio: boolean }>(
  ({ theme, backgroundColor, isPriceRatio }) => ({
    backgroundColor: backgroundColor,
    ...(isPriceRatio && {
      color: theme.palette.warning.contrastText,
    }),
  })
);

function ProductSelectionLabel() {
  const product = useContext(ProductContext);

  //TODO: ADD REAL DATA.
  // const { id, logo, selectionLabel } = product;

  // Using custom hooks to get company assets and theme
  const { companyLogo } = useCompanyAssets();
  const theme = useAppTheme();

  //TODO: ADD REAL DATA.
  const { id, label } = product;
  const selectionLabel = label;
  const isOffer = selectionLabel === Label.offer;
  const isPriceRatio = selectionLabel === Label.price_ratio;
  const offer = "50% la segunda unidad";
  const logo = companyLogo;

  const handleLabelData = () => {
    switch (selectionLabel) {
      case Label.recommended:
        return {
          classes: `${styles.tag} ${styles.recommended}`,
          color: theme.palette.secondary.main,
          text: "RECOMENDADO",
        };
      case Label.price_ratio:
        return {
          classes: `${styles.tag} ${styles.priceRatio}`,
          color: theme.palette.warning.main,
          text: "MEJOR CALIDAD / PRECIO",
        };
      case Label.offer:
        return {
          classes: `${styles.tag} ${styles.offer}`,
          color: theme.palette.primary.main,
          text: "OFERTA",
        };
      default:
        return { classes: styles.tag, color: "" };
    }
  };

  const { classes, color, text } = handleLabelData();

  return (
    <div id={`${id}-selection-label-container`} className={styles.container}>
      <div className={styles.container}>
        <StyledTypography
          backgroundColor={color}
          fontWeight={600}
          id={`${id}selection-label-text`}
          isPriceRatio={isPriceRatio}
          className={classes}
        >
          {text}
        </StyledTypography>
        {isOffer && (
          <StyledTypography
            backgroundColor={theme.palette.primary.dark}
            fontWeight={600}
            id={`${id}selection-label-offer-text`}
            isPriceRatio={isPriceRatio}
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
