import * as React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "@material-ui/core";
import { StyledButton } from "./style";

export default function TweeterButton(props: ButtonProps) {
  const { startIcon, children, onClick } = props;

  return (
    <StyledButton variant="contained" onClick={onClick} startIcon={startIcon}>
      {children}
    </StyledButton>
  );
}
