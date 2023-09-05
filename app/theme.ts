"use client";
import { Lato } from "next/font/google";
import { createTheme } from "@mui/material/styles";
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
      light: "#d5e895",
      main: "#aed13b",
      dark: "#7d9d0f",
      contrastText: "#000000", // '#f5f5f5',
    },
    secondary: {
      light: "#81a9d8",
      main: "#1b4f89",
      dark: "#002a5f",
      contrastText: "#ffffff",
    },
    warning: {
      light: "#81a9d8",
      main: "#f0d700",
      dark: "#002a5f",
      contrastText: "#ffffff",
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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5f5f5", // Background color
            borderRadius: "6px", // Border radius
            color: "#002a5f", // Text color
            "& fieldset": {
              borderColor: "transparent", // Border color
            },
            "&:hover fieldset": {
              borderColor: "transparent", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f5f5f5", // Border color con focused
            },
          },
          "& .MuiFormLabel-root": {
            color: "#aed13b", // Label color
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          color: "#ffffff",
          minWidth: "8rem",
          height: "3rem",
          fontWeight: 600,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "20px",
        },
      },
    },
  },
} as ExtendedThemeOptions);

export const AURGI_THEME = createTheme({
  palette: {
    primary: {
      light: "#d5e895",
      main: "#aed13b",
      dark: "#7d9d0f",
      contrastText: "#000000", // '#f5f5f5',
    },
    secondary: {
      light: "#81a9d8",
      main: "#1b4f89",
      dark: "#002a5f",
      contrastText: "#ffffff",
    },
    warning: {
      light: "#81a9d8",
      main: "#f0d700",
      dark: "#002a5f",
      contrastText: "#000000",
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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5f5f5", // Background color
            borderRadius: "6px", // Border radius
            color: "#002a5f", // Text color
            "& fieldset": {
              borderColor: "transparent", // Border color
            },
            "&:hover fieldset": {
              borderColor: "transparent", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f5f5f5", // Border color con focused
            },
          },
          "& .MuiFormLabel-root": {
            color: "#aed13b", // Label color
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          color: "#ffffff",
          minWidth: "10rem",
          height: "3rem",
          fontWeight: 600,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "20px",
        },
      },
    },
  },
} as ExtendedThemeOptions);

// TODO: update colors.
export const MOTORTOWN_THEME = createTheme({
  palette: {
    primary: {
      light: "#d80013",
      main: "#b80010",
      dark: "#82000b",
      contrastText: "#ffffff", // '#f5f5f5',
    },
    secondary: {
      light: "#ffffff",
      main: "#12151a",
      dark: "#b1b1b1",
      contrastText: "#ffffff",
    },
    warning: {
      light: "#81a9d8",
      main: "#f0d700",
      dark: "#002a5f",
      contrastText: "#ffffff",
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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#f5f5f5", // Background color
            borderRadius: "6px", // Border radius
            color: "#002a5f", // Text color
            "& fieldset": {
              borderColor: "transparent", // Border color
            },
            "&:hover fieldset": {
              borderColor: "transparent", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f5f5f5", // Border color con focused
            },
          },
          "& .MuiFormLabel-root": {
            color: "#aed13b", // Label color
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          color: "#ffffff",
          minWidth: "10rem",
          height: "3rem",
          fontWeight: 600,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "20px",
        },
      },
    },
  },
} as ExtendedThemeOptions);

export default DEFAULT_THEME;
