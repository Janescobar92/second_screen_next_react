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

function ServicesStepper(props: { steps: ExtraItem[] }) {
  const { steps } = props;
  const theme = useAppTheme();
  const { nInflateAsset } = useServicesAssets();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleAdd = (extItem: ExtraItem) => {
    console.log({ extItem });
    handleNext();
  };

  const handleRemove = (extItem: ExtraItem) => {
    console.log({ extItem });
    // if (activeStep === 0) return;
    handleNext();
  };

  return useMemo(() => {
    return (
      <Box style={{ width: "100%", paddingTop: "0.5rem" }}>
        <>{SetepContent(nInflateAsset, steps[activeStep], theme)}</>
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
              onClick={() => handleRemove(steps[activeStep])}
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
              onClick={() => handleAdd(steps[activeStep])}
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
