"use client";
import { MouseEvent } from "react";

import { IconButton, styled } from "@mui/material";

interface Props {
  id: string;
  children: string | JSX.Element;
  onClick: (e: MouseEvent) => void;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: "4rem",
  minHeight: "3 rem",
  borderRadius: 20,
  background: theme.palette.background.paper,
}));

function ContainedIconButton(props: Props) {
  const { children, id, onClick } = props;
  return (
    <StyledIconButton id={id} onClick={onClick}>
      {children}
    </StyledIconButton>
  );
}

export default ContainedIconButton;
