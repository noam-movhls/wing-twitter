import * as React from "react";
import { ButtonProps } from "@mui/material";
import { BtnTypes } from "../../pages/Feed/types";
import { StyledButton } from "./style";

export interface MyButtonProps extends ButtonProps {
  btntype: BtnTypes;
}

export default function TweeterButton(props: MyButtonProps) {
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
