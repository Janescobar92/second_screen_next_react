"use client";
import { Typography } from "@mui/material";

import useAppTheme from "@/app/Hooks/useAppTheme";

import styles from "./priceTag.module.css";

function PriceTag(props: { id: string; fontSize?: string; price: string }) {
  const { id, fontSize, price } = props;
  const theme = useAppTheme();

  return (
    <Typography
      id={id}
      color={theme.palette.primary.main}
      className={styles.priceTag}
      fontSize={fontSize || ""}
    >
      {price}
    </Typography>
  );
}

export default PriceTag;
