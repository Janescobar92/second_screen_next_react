"use client";
import { useState } from "react";

import SettingsIcon from "@mui/icons-material/Settings";

import { LoginDialog } from "../LoginDialog";
import { ContainedIconButton } from "../ContainedIconButton";
import { AppThemeProvider } from "@/app/providers";

/**
 * SettingsButton is a React component that displays a settings button.
 * It opens a login dialog when clicked.
 * @returns {JSX.Element} - The rendered component.
 */
function SettingsButton(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  /**
   * Handles the click event of the settings button.
   * Toggles the state of `open`.
   */
  const handleClick = () => {
    setOpen(!open);
  };

  /**
   * Handles the show event of the login dialog.
   * @param {boolean} show - The flag indicating whether to show or hide the dialog.
   */
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
