// React imports
import { useContext } from "react";

// Next.js imports
import Image from "next/image";

// Custom hooks
import useAppTheme from "@/app/Hooks/useAppTheme";
import useCompanyAssets from "@/app/Hooks/useCompanyAssets";

// Context imports
import { ConfigContext } from "@/app/providers";

// Material UI imports
import { Box, Typography, Button } from "@mui/material";

// Styles imports
import styles from "./productHCard.module.css";

// Interface imports
import { SuggestedItem } from "@/app/interfaces";

import { ProductInfo } from "./components/ProductInfo";

interface Props {
  id: string;
  product: SuggestedItem;
}

function ProductHCard(props: Props) {
  const { id, product } = props;

  // Use context to get state
  const { state } = useContext(ConfigContext);

  // Use custom hooks to get company assets and theme
  const { companyLogo } = useCompanyAssets(state.company);
  const theme = useAppTheme(state.company);

  return (
    <div
      id={`${id}-product-horizontal-card`}
      className={styles.productHCardContainer}
    >
      <Image
        id="logo-container"
        className={styles.imgContainer}
        src={companyLogo}
        alt="Logo"
        width={180}
        height={37}
        priority
      />
      <ProductInfo product={product} />
      <Box className={styles.priceContainer}>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          La unidad por:
        </Typography>
        <Typography
          color={theme.palette.primary.main}
          className={styles.priceTag}
        >{`${product.total_cost}€`}</Typography>
      </Box>
      <Box className={styles.priceContainer}>
        <Button id={`${id}-dialog-add-button`} variant="contained">
          Comprar
        </Button>
      </Box>
    </div>
  );
}

export default ProductHCard;
