import { useMemo } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
/**
 * Custom hook used to get current app device breakpoints.
 */
const useBreakpoints = () => {
  const theme = useTheme();

  // true if sm devices
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  // true if md devices
  const isMediumDevice = useMediaQuery(theme.breakpoints.down("md"));

  // true if lg devices
  const isLargeDevice = useMediaQuery(theme.breakpoints.down("md"));

  // true if xl devices
  const isExtraLargeDevice = useMediaQuery(theme.breakpoints.down("md"));

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
