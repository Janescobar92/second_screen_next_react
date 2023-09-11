"use client";

import { Dialog } from "@mui/material";

import { ExtraItem } from "@/app/interfaces";

import styles from "./servicesSelectionDialog.module.css";

import { HEAD_TITLE_TXT, MAIN_TITLE_TXT } from "./constants";
import { DialogDividedTitle } from "../DialogDividedTitle";
import { ServicesStepper } from "./components";
import { useState } from "react";

function ServicesSelectionDialog(props: {
  open: boolean;
  services: ExtraItem[];
  onClose: () => void;
  onSubmit: (services: ExtraItem[]) => void;
}) {
  const { open, services, onClose, onSubmit } = props;
  const [addedServices, setAddedServices] = useState<ExtraItem[]>([]);

  const handleSubmitServices = (extItems: ExtraItem[]) => {
    onSubmit(extItems);
    handleClose();
  };

  const handleManageServices = (
    service: ExtraItem | undefined,
    isLast = false
  ) => {
    if (service) {
      setAddedServices((state) => {
        const newState = [...state, service];
        if (isLast) handleSubmitServices(newState);
        return newState;
      });
    } else {
      if (isLast) handleSubmitServices(addedServices);
    }
  };

  const handleClose = () => {
    onClose();
  };

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
      <ServicesStepper steps={services} onAdd={handleManageServices} />
    </Dialog>
  );
}

export default ServicesSelectionDialog;
