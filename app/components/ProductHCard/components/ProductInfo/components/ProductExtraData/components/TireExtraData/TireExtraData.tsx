import { useContext } from "react";

// Next.js imports
import Image from "next/image";

import { Typography } from "@mui/material";

import { useAppTheme } from "@/app/Hooks";
import ProductContext from "@/app/components/ProductHCard/context";

import styles from "./tireExtraData.module.css";

function TireExtraData() {
  const product = useContext(ProductContext);
  const theme = useAppTheme();
  const { id } = product;

  const adherenceIcon = `/img/tires_specs/adherence_${product.main_attributes?.wet_grip}.svg`;
  const efficiencyIcon = `/img/tires_specs/efficiency_${product.main_attributes?.fuel_eficiency}.svg`;
  const noiseIcon = `/img/tires_specs/noise_${product.main_attributes?.noise}.svg`;
  const snowIcon = `/img/tires_specs/snow.svg`;
  const iceIcon = `/img/tires_specs/ice.svg`;
  const runFlatIcon = `/img/tires_specs/ic-runflat.svg`;

  const handleSeasonLabel = () => {
    switch (product.main_attributes?.season) {
      case "summer":
        return "Verano";
      case "winter":
        return "Invierno";
      case "all_season":
        return "All Season";
      default:
        return "";
    }
  };

  const season = handleSeasonLabel();

  return (
    <div>
      <div className={styles.container}>
        <Image
          className={styles.iconStyles}
          id={`${id}-efficience-img-container`}
          src={efficiencyIcon}
          alt="Logo"
          width={50}
          height={50}
          priority
        />
        <Image
          className={styles.iconStyles}
          id={`${id}-adherence-img-container`}
          src={adherenceIcon}
          alt="Logo"
          width={50}
          height={50}
          priority
        />
        <div className={styles.noiseContainer}>
          <Typography
            color={theme.palette.primary.contrastText}
            fontWeight={900}
            className={styles.noiseTextStyle}
          >
            {`${product.main_attributes?.dB}dB`}
          </Typography>
          <Image
            className={styles.noiseIconStyle}
            id={`${id}-noise-img-container`}
            src={noiseIcon}
            alt="Logo"
            width={50}
            height={50}
            priority
          />
        </div>
        {product.main_attributes?.snow && (
          <Image
            className={styles.snowIconStyle}
            id={`${id}-snow-img-container`}
            src={snowIcon}
            alt="Logo"
            width={50}
            height={50}
            priority
          />
        )}
        {product.main_attributes?.ice && (
          <Image
            className={styles.iceIconStyle}
            id={`${id}-ice-img-container`}
            src={iceIcon}
            alt="Logo"
            width={50}
            height={50}
            priority
          />
        )}
        {product.main_attributes?.runflat && (
          <div className={styles.runFlatIconContainer}>
            <Image
              className={styles.runFlatIcon}
              id={`${id}-runflat-img-container`}
              src={runFlatIcon}
              alt="Logo"
              width={50}
              height={50}
              priority
            />
            <Typography
              color={theme.palette.primary.contrastText}
              fontWeight={900}
              padding={"0 0.2rem"}
            >
              Runflat (Antipinchazos)
            </Typography>
          </div>
        )}
        <Typography
          color="primary"
          fontWeight={700}
          fontSize="1.5rem"
          padding={"0 0.2rem"}
        >
          {season.toUpperCase()}
        </Typography>
      </div>
    </div>
  );
}

export default TireExtraData;
