"use client";
import { Box, Typography, Divider } from "@mui/material";
import { useAppTheme } from "@/app/Hooks";

import styles from "./dialogDividedTitle.module.css";

function DialogDividedTitle(props: {
  headTitleTxt?: string;
  mainTitleTxt: string;
}) {
  const { headTitleTxt, mainTitleTxt } = props;
  const theme = useAppTheme();

  return (
    <Box id="services-selection-dialog-title" className={styles.container}>
      <Typography
        color={theme.palette.primary.main}
        textTransform={"uppercase"}
        fontSize={"1.2rem"}
        letterSpacing={3.51}
      >
        {headTitleTxt}
      </Typography>
      <Typography
        color={theme.palette.primary.main}
        textTransform={"uppercase"}
        fontSize={"1.7rem"}
        fontWeight={600}
        letterSpacing={3.51}
      >
        {mainTitleTxt}
      </Typography>
      <Divider style={{ width: "80%" }} variant="fullWidth" />
    </Box>
  );
}

export default DialogDividedTitle;
