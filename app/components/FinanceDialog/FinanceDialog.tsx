"use client";
import { Button, Dialog, DialogActions, Typography } from "@mui/material";
import { useAppTheme } from "@/app/Hooks";
import { AppContext } from "@/app/providers";
import { askForFinance } from "@/app/providers/AppContextProvider/actions";

import styles from "./financeDialog.module.css";

import { DialogDividedTitle } from "../DialogDividedTitle";
import { CANCEL_LABEL, MAIN_TITLE_TXT, SUBMIT_LABEL } from "./constants";
import { PriceTag } from "../PriceTag";
import { useContext } from "react";
import { formatCurrency } from "@/app/utils";

function FinanceDialog() {
  const { state, dispatch } = useContext(AppContext);
  const theme = useAppTheme();
  const { finance } = state;
  const totalPrice = formatCurrency(finance?.order_to_finance?.total_cost);

  const handleClose = () => {
    askForFinance(dispatch, undefined, false);
  };

  const handleFinance = () => {
    console.log("finance");
  };

  return (
    <Dialog
      id="ask-finance-dialog"
      open={!!finance?.show_fianance_dialog}
      onClose={handleClose}
      classes={{ paper: styles.container }}
    >
      <DialogDividedTitle mainTitleTxt={MAIN_TITLE_TXT} />
      <Typography
        component={"div"}
        textAlign={"center"}
        color={theme.palette.secondary.dark}
        fontSize={"2rem"}
      >
        ¿Desea <span className={styles.boldText}>Financiar su compra</span> a 24
        meses, por 10,95€/mes?
        <PriceTag id="ask-finance-dialog-price-tag" price={totalPrice} />
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
