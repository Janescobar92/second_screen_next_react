"use client";
import { styled } from "@mui/material/styles";

import { useCompanyAssets, useNavigation } from "@/app/Hooks";
import { ROUTES } from "@/app/constants";

/**
 * StyledBackground is a styled component that represents the background element.
 * It uses the provided image URL as the background image.
 */
const StyledBackground = styled("div", {
  shouldForwardProp: (prop) => prop !== "imageUrl" && prop !== "blurBackground",
})<{ imageUrl: string; blurBackground: boolean }>(
  ({ imageUrl, blurBackground }) => ({
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
    filter: blurBackground ? "blur(0.3rem)" : "blur(0px)",
  })
);

/**
 * Background is a React component that renders the background element.
 * It retrieves the background image URL using the useCompanyAssets hook.
 * @returns {JSX.Element} - The rendered component.
 */
function Background(): JSX.Element {
  const { backgroundImage } = useCompanyAssets();
  const { pathname } = useNavigation();

  return (
    <StyledBackground
      imageUrl={backgroundImage}
      blurBackground={pathname === ROUTES.settings}
    />
  );
}

export default Background;
