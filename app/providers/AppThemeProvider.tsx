"use client";
import { useContext } from "react";

import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import useAppTheme from "../Hooks/useAppTheme";
import { ConfigContext } from "./ConfigProvider";

interface Props {
  children: ReactNode;
}

function AppThemeProvider({ children }: Props) {
  const { state } = useContext(ConfigContext);
  const theme = useAppTheme(state.company);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
