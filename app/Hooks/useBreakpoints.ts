import { useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import useAppTheme from "./useAppTheme";
/**
 * Custom hook used to get current app device breakpoints.
 */
const useBreakpoints = () => {
  const theme = useAppTheme();
  let isSmallDevice = false;
  let isMediumDevice = false;
  let isLargeDevice = false;
  let isExtraLargeDevice = false;

  if (theme && theme?.breakpoints) {
    // true if sm devices
    isSmallDevice = useMediaQuery(theme?.breakpoints?.down?.("sm") || "sm");

    // true if md devices
    isMediumDevice = useMediaQuery(theme?.breakpoints?.down?.("md") || "md");

    // true if lg devices
    isLargeDevice = useMediaQuery(theme?.breakpoints?.down?.("lg") || "lg");

    // true if xl devices
    isExtraLargeDevice = useMediaQuery(
      theme?.breakpoints?.down?.("xl") || "xl"
    );
  }

  return useMemo(() => {
    return {
      isSmallDevice,
      isMediumDevice,
      isLargeDevice,
      isExtraLargeDevice,
    };
  }, [isSmallDevice, isMediumDevice, isLargeDevice, isExtraLargeDevice]);
};

export default useBreakpoints;
