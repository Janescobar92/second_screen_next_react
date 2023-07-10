"use client";
import { usePathname, useRouter } from "next/navigation";

import { AppBar, Toolbar } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { AppThemeProvider } from "@/app/providers";
import { SettingsButton } from "../SettingsButton";
import { ContainedIconButton } from "../ContainedIconButton";
import { ROUTES } from "@/app/constants";
import useAppTheme from "@/app/Hooks/useAppTheme";

/**
 * Navigation bar component.
 * Renders a responsive navigation bar with a back button and a settings button.
 * Uses Next.js useRouter hook to handle navigation.
 * @returns {JSX.Element} - The rendered component.
 */
function NavBar(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useAppTheme();

  /**
   * Handles the go back action.
   * Navigates back to the previous page using Next.js router.
   */
  const handleGoBack = () => {
    router.back();
  };

  return (
    <AppThemeProvider>
      <AppBar
        id="app-nav-bar"
        position="sticky"
        color="transparent"
        elevation={0}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <ContainedIconButton
            backGroundColor={theme.custom.IBBackground.light}
            id="go-back-button"
            hide={pathname === ROUTES.home}
            onClick={handleGoBack}
          >
            <ArrowBackIosIcon sx={{ ml: 1 }} />
          </ContainedIconButton>
          <SettingsButton hide={pathname === ROUTES.settings} />
        </Toolbar>
      </AppBar>
    </AppThemeProvider>
  );
}

export default NavBar;
