"use client";

import useCompanyAssets from "@/app/Hooks/useCompanyAssets";
import { styled } from "@mui/material";

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
  const { backgroundImage } = useCompanyAssets();

  return <StyledBackground imageUrl={backgroundImage} />;
}

export default Background;
