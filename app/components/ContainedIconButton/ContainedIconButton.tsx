"use client";
import { MouseEvent } from "react";
import { IconButton, styled } from "@mui/material";

interface Props {
  backGroundColor?: string;
  children: string | JSX.Element;
  hide?: boolean;
  id: string;
  onClick: (e: MouseEvent) => void;
}

/**
 * A custom IconButton component with a contained style.
 * @param {Props} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
function ContainedIconButton(props: Props): JSX.Element {
  const { backGroundColor, children, hide, id, onClick } = props;

  return (
    <StyledIconButton
      backGroundColor={backGroundColor}
      id={id}
      data-test={id}
      hide={hide}
      onClick={onClick}
    >
      {children}
    </StyledIconButton>
  );
}

const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "backGroundColor" && prop !== "hide",
})<{ backGroundColor?: string; hide?: boolean }>(
  ({ theme, backGroundColor, hide }) => ({
    borderRadius: 15,
    color: theme.palette.background.paper,
    background: backGroundColor || theme.palette.primary.dark,
    visibility: hide ? "hidden" : "visible",
  })
);

export default ContainedIconButton;
