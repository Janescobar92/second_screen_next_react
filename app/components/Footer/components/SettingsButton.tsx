"use client";
import { useState } from "react";

import SettingsIcon from "@mui/icons-material/Settings";

import { LoginDialog } from "../../LoginDialog";
import { ContainedIconButton } from "../../ContainedIconButton";
import { AppThemeProvider } from "@/app/providers";

function SettingsButton() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleShow = (show: boolean) => {
    setOpen(show);
  };

  return (
    <AppThemeProvider>
      <div id="settings-container">
        <ContainedIconButton id="settings-button" onClick={handleClick}>
          <SettingsIcon id="settings-button-icon" />
        </ContainedIconButton>
        <LoginDialog open={open} onShow={handleShow} />
      </div>
    </AppThemeProvider>
  );
}

export default SettingsButton;
