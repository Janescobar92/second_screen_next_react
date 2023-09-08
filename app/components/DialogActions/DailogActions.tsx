"use client";
import { Button, DialogActions as DActions } from "@mui/material";

import { useAppTheme } from "@/app/Hooks";

import styles from "./dialogActions.module.css";

function DialogActions(props: {
  leftActionTxt: string;
  rightActionTxt: string;
  leftActionHandler: () => void;
  rightActionHandler: () => void;
}) {
  const {
    leftActionTxt,
    rightActionTxt,
    leftActionHandler,
    rightActionHandler,
  } = props;
  const theme = useAppTheme();

  return (
    <DActions className={styles.container}>
      <Button
        sx={{ color: theme.palette.primary.main }}
        color="primary"
        id="services-selection-dialog-cancel-button"
        variant="outlined"
        onClick={leftActionHandler}
        autoFocus
      >
        {leftActionTxt}
      </Button>
      <Button
        color="primary"
        id="services-selection-dialog-submit-button"
        variant="contained"
        onClick={rightActionHandler}
      >
        {rightActionTxt}
      </Button>
    </DActions>
  );
}

export default DialogActions;
