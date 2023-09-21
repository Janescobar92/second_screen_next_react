"use client";
import { Button, Dialog, DialogActions, Typography } from "@mui/material";
import { useAppTheme } from "@/app/Hooks";

import styles from "./financeDialog.module.css";

import { DialogDividedTitle } from "../DialogDividedTitle";
import { CANCEL_LABEL, MAIN_TITLE_TXT, SUBMIT_LABEL } from "./constants";
import { PriceTag } from "../PriceTag";

function FinanceDialog() {
  const theme = useAppTheme();

  const handleClose = () => {
    console.log("close");
  };

  const handleFinance = () => {
    console.log("finance");
  };

  return (
    <Dialog
      id="ask-finance-dialog"
      open
      onClose={handleClose}
      classes={{ paper: styles.container }}
    >
      <DialogDividedTitle mainTitleTxt={MAIN_TITLE_TXT} headTitleTxt={""} />
      <Typography
        component={"div"}
        textAlign={"center"}
        color={theme.palette.secondary.dark}
        fontSize={"2rem"}
      >
        ¿Desea <span className={styles.boldText}>Financiar su compra</span> a 24
        meses, por 10,95€/mes?
        <PriceTag id="ask-finance-dialog-price-tag" price="+7.98€" />
      </Typography>
      <DialogActions className={styles.actionsContainer}>
        <Button
          id={`ask-finance-dialog-cancel-button`}
          sx={{ color: theme.palette.primary.main }}
          color="primary"
          variant="outlined"
          onClick={handleClose}
        >
          {CANCEL_LABEL}
        </Button>
        <Button
          id={`ask-finance-dialog-submit-button`}
          size="small"
          variant="contained"
          onClick={handleFinance}
        >
          {SUBMIT_LABEL}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FinanceDialog;
