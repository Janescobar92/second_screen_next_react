import { Dialog } from "@mui/material";

import styles from "./financeDialog.module.css";

import { DialogDividedTitle } from "../DialogDividedTitle";
import { MAIN_TITLE_TXT } from "./constants";

function FinanceDialog() {
  const handleClose = () => {
    console.log("close");
  };

  return (
    <Dialog
      id="ask-finance-dialog"
      open
      onClose={handleClose}
      classes={{ paper: styles.container }}
    >
      <DialogDividedTitle mainTitleTxt={MAIN_TITLE_TXT} headTitleTxt={""} />
    </Dialog>
  );
}

export default FinanceDialog;
