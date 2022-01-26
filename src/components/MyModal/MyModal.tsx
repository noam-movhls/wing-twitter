import React from "react";
import { StyledDialog, StyledDialogActions, StyledDialogTitle } from "./style";
import { DialogContent, DialogProps } from "@mui/material";
import { JSXProps } from "../../pages/Feed/types";

export function MyModal(props: DialogProps) {
  const { maxWidth = "xs", children, ...rest } = props;
  return (
    <StyledDialog maxWidth={maxWidth} fullWidth {...rest}>
      {children}
    </StyledDialog>
  );
}

MyModal.Title = function ModalTitle(props: JSXProps) {
  return (
    <StyledDialogTitle id="form-dialog-title">
      {props.children}
    </StyledDialogTitle>
  );
};

MyModal.Content = function ModalContent(props: JSXProps) {
  return <DialogContent>{props.children}</DialogContent>;
};

MyModal.Actions = function ModalActions(props: JSXProps) {
  return <StyledDialogActions>{props.children}</StyledDialogActions>;
};
