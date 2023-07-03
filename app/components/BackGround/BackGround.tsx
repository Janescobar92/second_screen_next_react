"use client";
import { styled } from "@mui/material";
import { ThemeProvider } from "@mui/material";

import useCompanyAssets from "@/app/Hooks/useCompanyAssets";
import useAppTheme from "@/app/Hooks/useAppTheme";

const StyledBackground = styled("div", {
  shouldForwardProp: (prop) => prop !== "imageUrl",
})<{ imageUrl: string }>(({ imageUrl }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  pointerEvents: "none",
  zIndex: -99999,
  backgroundImage: `url(${imageUrl})`,
}));

function Background() {
  const theme = useAppTheme();
  const { backgroundImage } = useCompanyAssets();

  return (
    <ThemeProvider theme={theme}>
      <StyledBackground imageUrl={backgroundImage} />
    </ThemeProvider>
  );
}

export default Background;
