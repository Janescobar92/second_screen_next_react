import { useContext } from "react";

import { Box, Typography, Button, styled } from "@mui/material";

import styles from "./sellInfoBox.module.css";

import useAppTheme from "@/app/Hooks/useAppTheme";
import { formatCurrency } from "@/app/utils";

import ProductContext from "../../context";
import { SellInfoLayout } from "../../interfaces";

interface Props {
  actionLabel: string;
  layout: SellInfoLayout;
  showAction: boolean;
  onAction: () => void;
}

const showButtonAndCol = {
  display: "grid",
};

const showButtonAndRow = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
};

const centered = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ContainerBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "layout" && prop !== "showAction",
})<{ layout: SellInfoLayout; showAction: boolean }>(
  ({ layout, showAction }) => {
    const isRow = layout === "row";
    const isColumn = layout === "column";
    if (!showAction) return centered;
    if (isColumn && showAction) return showButtonAndCol;
    if (isRow && showAction) return showButtonAndRow;
  }
);

function SellInfoBox(props: Props) {
  const { actionLabel, layout, showAction, onAction } = props;
  const product = useContext(ProductContext);
  const theme = useAppTheme();

  const { id } = product;
  const totalCost = formatCurrency(product?.total_cost);

  return (
    <ContainerBox
      id={`${id}-sell-info-box`}
      layout={layout}
      showAction={showAction}
    >
      <Box
        id={`${id}-sell-info-box-title-container`}
        className={`${styles.box} ${styles.priceContainer}`}
      >
        <Typography
          color={theme.palette.primary.contrastText}
          id={`${id}-sell-info-box-label`}
          variant="body1"
          sx={{ textAlign: "center" }}
        >
          La unidad por:
        </Typography>
        <Typography
          id={`${id}-sell-info-box-price`}
          color={theme.palette.primary.main}
          className={styles.priceTag}
        >{totalCost}</Typography>
      </Box>
      {showAction && (
        <Box id={`${id}-sell-info-box-action-container`} className={styles.box}>
          <Button
            className={styles.actionButton}
            id={`${id}-sell-info-box-action-button`}
            variant="contained"
            onClick={onAction}
          >
            {actionLabel}
          </Button>
        </Box>
      )}
    </ContainerBox>
  );
}

export default SellInfoBox;
