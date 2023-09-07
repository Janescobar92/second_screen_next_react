import { ThemeOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

export interface ExtendedThemeOptions extends ThemeOptions {
  palette: {
    grey?: ColorPartial;
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
    warning: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    error: {
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
