"use client";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

import { useAppTheme } from "@/app/Hooks";
import { formatCurrency } from "@/app/utils";

import { Box, Typography } from "@mui/material";

import styles from "./savingsLabel.module.css";

function SavingsLabel(props: { savingTotal: number }) {
  const { savingTotal } = props;
  const theme = useAppTheme();

  return (
    <Box
      className={styles.container}
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <LocalOfferOutlinedIcon style={{ transform: "scaleX(-1)" }} />
      <div className={styles.priceGrid}>
        <Typography>Ahorro</Typography>
        <Typography>{`-${formatCurrency(savingTotal)}`}</Typography>
      </div>
    </Box>
  );
}

export default SavingsLabel;
