import * as React from "react";
import { ButtonProps } from "@mui/material";
import { StyledButton } from "./style";

export type BtnTypes = "primary" | "secondary" | "danger";
export interface MyButtonProps extends ButtonProps {
  btntype: BtnTypes;
}

export default function TwitterButton(props: MyButtonProps) {
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
