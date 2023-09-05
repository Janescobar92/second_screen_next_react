"use client";

import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import useAppTheme from "../Hooks/useAppTheme";

interface Props {
  children: ReactNode;
}

function AppThemeProvider({ children }: Props) {
  const theme = useAppTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
