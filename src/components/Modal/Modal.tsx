import React from "react";
import { StyledDialog, StyledDialogActions, StyledDialogTitle } from "./style";
import { DialogContent, DialogProps } from "@mui/material";

export function Modal(props: DialogProps) {
  const { maxWidth = "xs", children, ...rest } = props;
  return (
    <StyledDialog maxWidth={maxWidth} fullWidth {...rest}>
      {children}
    </StyledDialog>
  );
}

export interface TitleProps {
  children: React.ReactNode;
}

Modal.Title = function ModalTitle({ children }: TitleProps) {
  return (
    <StyledDialogTitle id="form-dialog-title">{children}</StyledDialogTitle>
  );
};

export interface ContentProps {
  children: React.ReactNode;
}

Modal.Content = function ModalContent({ children }: ContentProps) {
  return <DialogContent>{children}</DialogContent>;
};

export interface ActionProps {
  children: React.ReactNode;
}

Modal.Actions = function ModalActions({ children }: ActionProps) {
  return <StyledDialogActions>{children}</StyledDialogActions>;
};
