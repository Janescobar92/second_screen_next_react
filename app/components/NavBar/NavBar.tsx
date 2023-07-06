"use client";

import { useRouter } from "next/navigation";

import { AppBar, Toolbar, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AppThemeProvider } from "@/app/providers";
import { SettingsButton } from "../SettingsButton";

function NavBar() {
  const router = useRouter();

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
