"use client";
import { Box, Divider, Typography, styled } from "@mui/material";

import useAppTheme from "@/app/Hooks/useAppTheme";
import { formatCurrency } from "@/app/utils";

import styles from "../saleSummaryBox.module.css";

import { TOTAL_LABEL, IVA_LABEL } from "../constants";

const TypographyGreyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.grey?.[400],
}));

function TotalDivider(props: { price: number | string | undefined }) {
  const { price } = props;
  const theme = useAppTheme();
  const totalCost = formatCurrency(price);

  return (
    <Box className={styles.totalDividerContainer}>
      <Divider className={styles.dividerStyle} variant="fullWidth" />
      <Box className={styles.totalContianer}>
        <TypographyGreyStyled fontSize={"1.5rem"}>
          {TOTAL_LABEL}
        </TypographyGreyStyled>
        <Box className={styles.priceIVAContainer}>
          <Typography
            color={theme.palette.primary.main}
            className={styles.priceTag}
            fontSize={"1.7rem"}
          >
            {totalCost}
          </Typography>
          <TypographyGreyStyled>{IVA_LABEL}</TypographyGreyStyled>
        </Box>
      </Box>
    </Box>
  );
}

export default TotalDivider;
