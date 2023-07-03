"use client";
import { useState } from "react";

import { ThemeProvider, useTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import { LoginDialog } from "../../LoginDialog";
import { ContainedIconButton } from "../../ContainedIconButton";

function SettingsButton() {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleShow = (show: boolean) => {
    setOpen(show);
  };

  return (
    <ThemeProvider theme={theme}>
      <div id="settings-container">
        <ContainedIconButton id="settings-button" onClick={handleClick}>
          <SettingsIcon id="settings-button-icon" />
        </ContainedIconButton>
        <LoginDialog open={open} onShow={handleShow} />
      </div>
    </ThemeProvider>
  );
}

export default SettingsButton;
