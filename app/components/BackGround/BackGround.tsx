"use client";

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
  // TODO: add hook and use client, to render dynamicly the background.

  const smallDevices = "/img/backgrounds/aurgi/mobile_2@3x.webp";
  const mediumDevices = "/img/backgrounds/aurgi/tablet_2@3x.webp 2x";

  return <StyledBackground imageUrl={smallDevices} />;
}

export default Background;
