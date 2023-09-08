import {
  Dialog,
  DialogTitle,
  Button,
  Typography,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { ExtraItem } from "@/app/interfaces";

import {
  CANCEL_LABEL,
  HEAD_TITLE_TXT,
  MAIN_TITLE_TXT,
  SUBMIT_LABEL,
} from "./constants";

function ServicesSelectionDialog(props: { service: ExtraItem }) {
  const { service } = props;
  const handleClose = () => {
    console.log("close");
  };

  return (
    <Dialog id="services-selection-dialog" open onClose={handleClose}>
      <DialogTitle id="services-selection-dialog-title">
        <Typography>{HEAD_TITLE_TXT}</Typography>
        <Typography>{MAIN_TITLE_TXT}</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography>
          ¿Desea Inflado Con Nitrógeno de una Rueada? (1,95€/u)
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          //   className={styles.button}
          color="primary"
          id="services-selection-dialog-cancel-button"
          variant="outlined"
          autoFocus
        >
          {CANCEL_LABEL}
        </Button>
        <Button
          //   className={styles.button}
          color="primary"
          id="services-selection-dialog-submit-button"
          variant="contained"
          onClick={handleClose}
        >
          {SUBMIT_LABEL}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ServicesSelectionDialog;
