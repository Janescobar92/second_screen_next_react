"use client";
import { useContext } from "react";
import Image from "next/image";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import styles from "./productCard.module.css";

import { ConfigContext } from "@/app/providers";
import { SuggestedItem } from "@/app/interfaces";
import useCompanyAssets from "@/app/Hooks/useCompanyAssets";
import useAppTheme from "@/app/Hooks/useAppTheme";

interface Props {
  suggestedItem: SuggestedItem;
}

function ProductCard(props: Props) {
  const { suggestedItem } = props;
  const { state } = useContext(ConfigContext);
  const { companyLogo } = useCompanyAssets(state.company);
  const theme = useAppTheme(state.company);

  return (
    <Card
      className={styles.cardContainer}
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
        <Typography gutterBottom variant="h5" component="div">
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
        <Button size="small" variant="contained">
          Ver Producto
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
