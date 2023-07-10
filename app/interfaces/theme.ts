import { ThemeOptions } from "@mui/material";

export interface ExtendedThemeOptions extends ThemeOptions {
  custom: {
    IBBackground: {
      light: string;
      main: string;
    };
  };
}
