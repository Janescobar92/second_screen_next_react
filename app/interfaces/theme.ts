import { ThemeOptions } from "@mui/material";

export interface ExtendedThemeOptions extends ThemeOptions {
  palette: {
    primary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
  };
  custom: {
    IBBackground: {
      light: string;
      main: string;
    };
  };
}
