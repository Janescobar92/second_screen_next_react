"use client";
import { styled } from "@mui/material";
import { AppThemeProvider } from "@/app/providers";

import useCompanyAssets from "@/app/Hooks/useCompanyAssets";

/**
 * StyledBackground is a styled component that represents the background element.
 * It uses the provided image URL as the background image.
 */
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

/**
 * Background is a React component that renders the background element.
 * It retrieves the background image URL using the useCompanyAssets hook.
 * @returns {JSX.Element} - The rendered component.
 */
function Background(): JSX.Element {
  const { backgroundImage } = useCompanyAssets();

  return (
    <AppThemeProvider>
      <StyledBackground imageUrl={backgroundImage} />
    </AppThemeProvider>
  );
}

export default Background;
