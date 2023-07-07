"use client";
import { MouseEvent } from "react";
import { IconButton, styled } from "@mui/material";

interface Props {
  id: string;
  children: string | JSX.Element;
  onClick: (e: MouseEvent) => void;
}

/**
 * A custom IconButton component with a contained style.
 * @param {Props} props - The component props.
 * @returns {JSX.Element} - The rendered component.
 */
function ContainedIconButton(props: Props): JSX.Element {
  const { children, id, onClick } = props;

  return (
    <StyledIconButton id={id} onClick={onClick}>
      {children}
    </StyledIconButton>
  );
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 20,
  background: theme.palette.background.paper,
}));

export default ContainedIconButton;
