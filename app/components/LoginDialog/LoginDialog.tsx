"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

interface Props {
  open: boolean;
  onShow: (show: boolean) => void;
}

function LoginDialog(props: Props) {
  const { open, onShow } = props;

  const handleClose = () => {
    onShow(false);
  };

  return (
    <Dialog id="login-dialog" open={open} onClose={handleClose}>
      <DialogTitle id="login-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent id="login-dialog-content-container"></DialogContent>
      <DialogActions id="login-dialog-actions-container">
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginDialog;
