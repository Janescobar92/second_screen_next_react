"use client";
import { Button, Dialog, DialogActions, Typography } from "@mui/material";
import { useAppTheme } from "@/app/Hooks";
import { AppContext } from "@/app/providers";
import { askForFinance } from "@/app/providers/AppContextProvider/actions";

import styles from "./financeDialog.module.css";

import { useContext } from "react";

import { formatCurrency } from "@/app/utils";
import { WSServerContext, submitFinance } from "@/app/providers/WSProvider";

import { DialogDividedTitle } from "../DialogDividedTitle";
import { PriceTag } from "../PriceTag";

import { CANCEL_LABEL, MAIN_TITLE_TXT, SUBMIT_LABEL } from "./constants";

function FinanceDialog() {
  const theme = useAppTheme();
  const { state, dispatch } = useContext(AppContext);
  const { dispatch: wsDispatch } = useContext(WSServerContext);

  const { finance } = state;
  const order = finance?.order_to_finance;
  const open = !!finance?.show_fianance_dialog;
  const totalPrice = formatCurrency(order?.total_cost);

  const handleClose = () => {
    askForFinance(dispatch, undefined, false);
  };

  const handleCancel = () => {
    submitFinance(false, wsDispatch);
    handleClose();
  };

  const handleFinance = () => {
    if (order) submitFinance(order, wsDispatch);
    handleClose();
  };

  return (
    <Dialog
      id="ask-finance-dialog"
      open={open}
      onClose={handleCancel}
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
          onClick={handleCancel}
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
