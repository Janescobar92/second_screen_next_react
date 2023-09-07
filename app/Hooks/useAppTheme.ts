import { useState, useEffect, useMemo, useContext } from "react";
import useCompany from "./useCompany";

import DEFAULT_THEME, { AURGI_THEME, MOTORTOWN_THEME } from "../theme";
import { ExtendedThemeOptions } from "../interfaces/theme";
import { AppContext } from "../providers";

/**
 * Custom hook used to get current app theme.
 */
const useAppTheme = () => {
  const { state } = useContext(AppContext);
  const { isAurgiApp, isMTApp } = useCompany(state.config.company);
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const setThemeData = () => {
    if (isAurgiApp) {
      setTheme(AURGI_THEME);
    }
    if (isMTApp) {
      setTheme(MOTORTOWN_THEME);
    }
  };

  useEffect(() => {
    setThemeData();
  }, [state.config.company]);

  return useMemo(() => {
    return theme as unknown as ExtendedThemeOptions;
  }, [theme]);
};

export default useAppTheme;
