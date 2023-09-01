import { useContext } from "react";

// Next.js imports
import Image from "next/image";

import { Typography } from "@mui/material";
import ProductContext from "@/app/components/ProductHCard/context";

function TireExtraData() {
  const product = useContext(ProductContext);
  const { id } = product;

  // TODO REMOVE THIS MOCK.
  product.main_attributes = {
    rim: "16",
    brand: "1PRECIO",
    model: "TOYO",
    noise: "C",
    dB: "70",
    waves: "2",
    width: "205",
    family: "RUEDAS",
    season: "summer",
    runflat: "0",
    universe: "RUEDAS",
    wet_grip: "B",
    load_index: "094",
    speed_index: "H",
    aspect_ratio: "55",
    fuel_eficiency: "C",
    snow: true,
    ice: true,
  };

  const adherenceIcon = `/img/tires_specs/adherence_${product.main_attributes.wet_grip}.svg`;
  const efficiencyIcon = `/img/tires_specs/efficiency_${product.main_attributes.fuel_eficiency}.svg`;
  const noiseIcon = `/img/tires_specs/noise_${product.main_attributes.noise}.svg`;
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: "6rem", padding: "0 0.2rem" }}
          id={`${id}-efficience-img-container`}
          src={efficiencyIcon}
          alt="Logo"
          width={50}
          height={50}
          priority
        />
        <Image
          style={{ width: "6rem", padding: "0 0.2rem" }}
          id={`${id}-adherence-img-container`}
          src={adherenceIcon}
          alt="Logo"
          width={50}
          height={50}
          priority
        />
        <div>
          <Typography
            fontWeight={900}
            style={{
              position: "absolute",
              fontSize: "0.7rem",
              transform: "translate(75%, 10px)",
            }}
          >
            {`${product.main_attributes.dB}dB`}
          </Typography>
          <Image
            style={{ width: "5rem", padding: "0 0.2rem" }}
            id={`${id}-noise-img-container`}
            src={noiseIcon}
            alt="Logo"
            width={50}
            height={50}
            priority
          />
        </div>
        {product.main_attributes.runflat && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Image
              style={{ width: "3rem" }}
              id={`${id}-runfla-img-container`}
              src={runFlatIcon}
              alt="Logo"
              width={50}
              height={50}
              priority
            />
            <Typography fontWeight={900} padding={"0 0.2rem"}>
              Runflat (Antipinchazos)
            </Typography>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {product.main_attributes.snow && (
          <Image
            style={{ width: "2rem", padding: "0 0.2rem" }}
            id={`${id}-snow-img-container`}
            src={snowIcon}
            alt="Logo"
            width={50}
            height={50}
            priority
          />
        )}
        {product.main_attributes.ice && (
          <Image
            style={{ width: "1.7rem", padding: "0 0.2rem" }}
            id={`${id}-ice-img-container`}
            src={iceIcon}
            alt="Logo"
            width={50}
            height={50}
            priority
          />
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
