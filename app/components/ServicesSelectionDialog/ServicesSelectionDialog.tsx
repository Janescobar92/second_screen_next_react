"use client";

import { Dialog } from "@mui/material";

import { ExtraItem } from "@/app/interfaces";

import styles from "./servicesSelectionDialog.module.css";

import { HEAD_TITLE_TXT, MAIN_TITLE_TXT } from "./constants";
import { DialogDividedTitle } from "../DialogDividedTitle";
import { ServicesStepper } from "./components";

function ServicesSelectionDialog(props: {
  open: boolean;
  services: ExtraItem[];
}) {
  const { open, services } = props;

  console.log({ services });

  const handleClose = () => {
    console.log("close");
  };

  // TODO: DELETE DIALOG ACTIONS COMPONENT
  return (
    <Dialog
      id="services-selection-dialog"
      open={open}
      onClose={handleClose}
      classes={{ paper: styles.container }}
    >
      <DialogDividedTitle
        headTitleTxt={HEAD_TITLE_TXT}
        mainTitleTxt={MAIN_TITLE_TXT}
      />
      <ServicesStepper steps={services} />
    </Dialog>
  );
}

export default ServicesSelectionDialog;
