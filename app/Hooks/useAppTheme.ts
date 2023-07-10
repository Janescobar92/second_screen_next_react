import { useState, useEffect, useMemo } from "react";
import useCompany from "./useCompany";
// TODO: REMOVE MOCK
import { AURGI } from "../constants";
import DEFAULT_THEME, { AURGI_THEME, MOTORTOWN_THEME } from "../theme";
import { ExtendedThemeOptions } from "../interfaces/theme";

/**
 * Custom hook used to get current app theme.
 */
const useAppTheme = (tpvCompany = AURGI) => {
  const { isAurgiApp, isMTApp } = useCompany(tpvCompany);
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
  }, [tpvCompany]);

  return useMemo(() => {
    return theme as unknown as ExtendedThemeOptions;
  }, [theme]);
};

export default useAppTheme;
