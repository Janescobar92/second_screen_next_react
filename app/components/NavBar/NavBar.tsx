"use client";
import { useRouter } from "next/navigation";

import { AppBar, Toolbar, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { AppThemeProvider } from "@/app/providers";
import { SettingsButton } from "../SettingsButton";

/**
 * Navigation bar component.
 * Renders a responsive navigation bar with a back button and a settings button.
 * Uses Next.js useRouter hook to handle navigation.
 * @returns {JSX.Element} - The rendered component.
 */
function NavBar(): JSX.Element {
  const router = useRouter();

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
          <IconButton
            id="go-back-button"
            size="large"
            edge="start"
            color="secondary"
            aria-label="go back"
            sx={{ mr: 2 }}
            onClick={handleGoBack}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <SettingsButton />
        </Toolbar>
      </AppBar>
    </AppThemeProvider>
  );
}

export default NavBar;
