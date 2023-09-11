"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import {
  Box,
  DialogContent,
  Typography,
  MobileStepper,
  Button,
} from "@mui/material";

import styles from "../servicesSelectionDialog.module.css";

import { useAppTheme, useServicesAssets } from "@/app/Hooks";

import { PriceTag } from "../../PriceTag";
import { ExtraItem } from "@/app/interfaces";
import { ExtendedThemeOptions } from "@/app/interfaces/theme";
import { CANCEL_LABEL, SUBMIT_LABEL } from "../constants";

const SetepContent = (
  incon: string,
  service: ExtraItem,
  theme: ExtendedThemeOptions
) => {
  return (
    <DialogContent className={styles.contentContainer}>
      <Image
        id="logo-container"
        src={incon}
        alt="Logo"
        width={65.2}
        height={65.2}
        priority
      />
      <Typography
        component={"div"}
        textAlign={"center"}
        color={theme.palette.secondary.dark}
        fontSize={"2rem"}
      >
        ¿Desea <span className={styles.boldText}>Inflado Con Nitrógeno</span> de
        una Rueada? (1,95€/u)
        <PriceTag
          id={`${service?.id}-services-selection-dialog-price`}
          price="+7.98€"
        />
      </Typography>
    </DialogContent>
  );
};

function ServicesStepper(props: {
  steps: ExtraItem[];
  onAdd: (service: ExtraItem | undefined, isLast?: boolean) => void;
}) {
  const { steps, onAdd } = props;
  const theme = useAppTheme();
  const { nInflateAsset } = useServicesAssets();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (extItem?: ExtraItem) => {
    const isLastStep = activeStep === steps.length - 1;
    onAdd(extItem, isLastStep);
    if (!isLastStep) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return useMemo(() => {
    const service = steps[activeStep];

    return (
      <Box style={{ width: "100%", paddingTop: "0.5rem" }}>
        <>{SetepContent(nInflateAsset, service, theme)}</>
        <MobileStepper
          variant="text"
          steps={steps.length}
          position="static"
          activeStep={activeStep}
          backButton={
            <Button
              id="services-selection-dialog-cancel-button"
              sx={{ color: theme.palette.primary.main }}
              color="primary"
              variant="outlined"
              onClick={() => handleNext()}
            >
              {CANCEL_LABEL}
            </Button>
          }
          nextButton={
            <Button
              autoFocus
              id="services-selection-dialog-submit-button"
              color="primary"
              variant="contained"
              onClick={() => handleNext(service)}
            >
              {SUBMIT_LABEL}
            </Button>
          }
        />
      </Box>
    );
  }, [activeStep, steps]);
}

export default ServicesStepper;
