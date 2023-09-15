"use client";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Box, Typography } from "@mui/material";

import { useAppTheme } from "@/app/Hooks";
import { formatCurrency } from "@/app/utils";

import styles from "./savingsLabel.module.css";

import { SAVINGS_LABEL } from "./constants";

function SavingsLabel(props: { savingTotal: number }) {
  const { savingTotal } = props;
  const theme = useAppTheme();

  return (
    <Box
      className={styles.container}
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <div className={styles.labelContainer}>
        <LocalOfferOutlinedIcon style={{ transform: "scaleX(-1)" }} />
        <Typography>{SAVINGS_LABEL}</Typography>
      </div>
      <Typography component={"div"} textAlign={"right"}>
        {`-${formatCurrency(savingTotal)}`}
      </Typography>
    </Box>
  );
}

export default SavingsLabel;
