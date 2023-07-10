"use client";
import { Lato } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { ExtendedThemeOptions } from "./interfaces/theme";

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const DEFAULT_THEME = createTheme({
  palette: {
    primary: {
      main: "#aed13b",
    },
    secondary: {
      main: "#1b4f89",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: lato.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  custom: {
    IBBackground: {
      light: "#a9d136",
      main: "#9cc32c",
    },
  },
} as ExtendedThemeOptions);

export const AURGI_THEME = createTheme({
  palette: {
    primary: {
      main: "#aed13b",
      dark: "#9cc32c",
    },
    secondary: {
      main: "#1b4f89",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: lato.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  custom: {
    IBBackground: {
      light: "#a9d136",
      main: "#9cc32c",
    },
  },
} as ExtendedThemeOptions);

// TODO: update colors.
export const MOTORTOWN_THEME = createTheme({
  palette: {
    primary: {
      main: "#aed13b",
    },
    secondary: {
      main: "#1b4f89",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: lato.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  custom: {
    IBBackground: {
      light: "#a9d136",
      main: "#9cc32c",
    },
  },
} as ExtendedThemeOptions);

export default DEFAULT_THEME;