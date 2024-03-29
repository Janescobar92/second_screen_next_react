"use client";
import { styled } from "@mui/material/styles";
import { Box, Divider, Typography } from "@mui/material";

import { formatCurrency } from "@/app/utils";

import styles from "../saleSummaryBox.module.css";

import { TOTAL_LABEL, IVA_LABEL } from "../constants";
import { PriceTag } from "../../PriceTag";

const TypographyGreyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.grey?.[400],
}));

function TotalDivider(props: { price: number | string | undefined }) {
  const { price } = props;
  const totalCost = formatCurrency(price);

  return (
    <Box id="total-divider" className={styles.totalDividerContainer}>
      <Divider className={styles.dividerStyle} variant="fullWidth" />
      <Box className={styles.totalContianer}>
        <TypographyGreyStyled fontSize={"1.5rem"}>
          {TOTAL_LABEL}
        </TypographyGreyStyled>
        <Box className={styles.priceIVAContainer}>
          <PriceTag
            id="total-divider-price-tag"
            fontSize={"1.7rem"}
            price={totalCost}
          />
          <TypographyGreyStyled>{IVA_LABEL}</TypographyGreyStyled>
        </Box>
      </Box>
    </Box>
  );
}

export default TotalDivider;
