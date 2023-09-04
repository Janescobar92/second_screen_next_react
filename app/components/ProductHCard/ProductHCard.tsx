// React imports
import { useContext, useMemo } from "react";

// Next.js imports
import Image from "next/image";

import { Box } from "@mui/material";

// Custom hooks
import useAppTheme from "@/app/Hooks/useAppTheme";
import useCompanyAssets from "@/app/Hooks/useCompanyAssets";

// Context imports
import { ConfigContext } from "@/app/providers";

// Styles imports
import styles from "./productHCard.module.css";

// Interface imports
import { SuggestedItem } from "@/app/interfaces";

import ProductContext from "./context";

import { ProductInfo, SellInfoBox } from "./components";
import { Label } from "./constants";

interface Props {
  id: string;
  product: SuggestedItem;
}

function ProductHCard(props: Props) {
  const { id, product } = props;

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

  // TODO REMOVE THIS MOCK.
  product.label = "price_ratio";

  // Use context to get state
  const { state } = useContext(ConfigContext);

  // Use custom hooks to get company assets and theme
  const { companyLogo } = useCompanyAssets(state.company);
  const theme = useAppTheme(state.company);

  const contextValue = useMemo(() => {
    return {
      ...product,
    };
  }, [product]);

  const handleBorder = () => {
    switch (product.label) {
      case Label.recommended:
        return `solid 0.2rem ${theme.palette.secondary.main}`;

      case Label.price_ratio:
        return `solid 0.2rem ${theme.palette.warning.main}`;
      default:
        return "";
    }
  };

  const borderStyle = handleBorder();

  return (
    <ProductContext.Provider value={contextValue}>
      <Box
        id={`${id}-product-horizontal-card`}
        className={styles.productHCardContainer}
        sx={{ border: borderStyle }}
      >
        <Image
          id="logo-container"
          src={companyLogo}
          alt="Logo"
          width={100}
          height={200}
          priority
        />
        <ProductInfo />
        <SellInfoBox
          layout="row"
          showAction
          onAction={() => console.log("Buy button clicked")}
        />
      </Box>
    </ProductContext.Provider>
  );
}

export default ProductHCard;
