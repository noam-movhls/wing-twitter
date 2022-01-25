import * as React from "react";
import { ButtonProps } from "@material-ui/core";
import { StyledButton } from "./style";

export default function TweeterButton(props: ButtonProps) {
  const { startIcon, children, onClick, ...rest } = props;

  return (
    <StyledButton
      variant="contained"
      onClick={onClick}
      startIcon={startIcon}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
