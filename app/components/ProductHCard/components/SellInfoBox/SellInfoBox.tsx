import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

import styles from "./sellInfoBox.module.css";

import { useAppTheme } from "@/app/Hooks";
import { PriceTag } from "@/app/components/PriceTag";
import { formatCurrency } from "@/app/utils";

import { SellInfoContentProps, SellInfoLayout } from "../../interfaces";

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

function SellInfoBox(props: SellInfoContentProps) {
  const { actionLabel, id, layout, price, showAction, onAction } = props;
  const theme = useAppTheme();

  const totalCost = formatCurrency(price);

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
        <PriceTag id={`${id}-sell-info-box-price-tag`} price={totalCost} />
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
