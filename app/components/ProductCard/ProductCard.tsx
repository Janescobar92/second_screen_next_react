"use client";

// Importing components from external libraries
import Image from "next/image";

// Material UI imports
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";

// Importing hooks from the application
import { useCompanyAssets } from "@/app/Hooks";

// Importing components from the same directory
import { ProductDetailButton } from "./components";

// Importing interfaces
import { SuggestedItem } from "@/app/interfaces";

// Importing styles
import styles from "./productCard.module.css";

import { formatCurrency } from "@/app/utils";
import { PriceTag } from "../PriceTag";

interface Props {
  suggestedItem: SuggestedItem;
  personalization?: string;
}

/**
 * The ProductCard component displays a card with product information.
 * @param props { suggestedItem: SuggestedItem }
 * @returns JSX.Element.
 */
function ProductCard(props: Props) {
  // Destructuring props
  const { suggestedItem, personalization } = props;

  // Using custom hooks to get company assets and theme
  const { companyLogo } = useCompanyAssets();

  const totalCost = formatCurrency(suggestedItem.total_cost);

  return (
    <div className={personalization}>
      <Card
        className={`${styles.cardContainer}`}
        id={`product-card-${suggestedItem.nav_id}`}
      >
        <Image
          id="logo-container"
          className={styles.imgContainer}
          // src={suggestedItem.imge_url}
          src={companyLogo}
          alt="Logo"
          width={180}
          height={37}
          priority
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            color="text.secondary"
            className={styles.descriptionTag}
          >
            {suggestedItem.display_name}
          </Typography>
          <Box className={styles.cardPriceContainer}>
            <Typography className={styles.priceDescriptionTag}>
              La unidad por:
            </Typography>
            <PriceTag
              id={`product-card-${suggestedItem.nav_id}-price-tag`}
              price={totalCost}
            />
          </Box>
        </CardContent>
        <CardActions className={styles.cardActionsContianer}>
          <ProductDetailButton product={suggestedItem} />
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductCard;
