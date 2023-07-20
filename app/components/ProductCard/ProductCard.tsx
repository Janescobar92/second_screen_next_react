"use client";
// Importing React hooks
import { useContext } from "react";

// Importing components from external libraries
import Image from "next/image";

// Material UI imports
import { Card, CardActions, CardContent, Typography } from "@mui/material";

// Importing hooks from the application
import useCompanyAssets from "@/app/Hooks/useCompanyAssets";
import useAppTheme from "@/app/Hooks/useAppTheme";

// Importing context providers
import { ConfigContext } from "@/app/providers";

// Importing components from the same directory
import { ProductDetailButton } from "./components";

// Importing interfaces
import { SuggestedItem } from "@/app/interfaces";

// Importing styles
import styles from "./productCard.module.css";

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

  // Using context to get the application state
  const { state } = useContext(ConfigContext);

  // Using custom hooks to get company assets and theme
  const { companyLogo } = useCompanyAssets(state.company);
  const theme = useAppTheme(state.company);

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
            variant="h6"
            component="div"
            className={styles.descriptionTag}
          >
            {suggestedItem.display_name}
          </Typography>
          <Typography
            className={styles.cardPriceContainer}
            variant="body2"
            color="text.secondary"
          >
            <Typography className={styles.priceDescriptionTag}>
              La unidad por:
            </Typography>
            <Typography
              color={theme.palette.primary.main}
              className={styles.priceTag}
            >{`${suggestedItem.total_cost}€`}</Typography>
          </Typography>
        </CardContent>
        <CardActions className={styles.cardActionsContianer}>
          <ProductDetailButton product={suggestedItem} />
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductCard;
