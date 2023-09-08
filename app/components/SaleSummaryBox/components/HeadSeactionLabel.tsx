"use client";
import { Typography } from "@mui/material";

import { useAppTheme } from "@/app/Hooks";

import styles from "../saleSummaryBox.module.css";

function HeadSectionLabel(props: { text: string }) {
  const { text } = props;
  const theme = useAppTheme();
  return (
    <Typography
      fontWeight={600}
      className={styles.gradientLabel}
      sx={{
        background: `linear-gradient(to right, ${theme.palette.primary.dark} 10%, ${theme.palette.primary.main})`,
      }}
    >
      {text}
    </Typography>
  );
}

export default HeadSectionLabel;
