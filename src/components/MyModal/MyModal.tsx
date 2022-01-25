import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import { StyledDialog, StyledDialogTitle } from "./style";
import { DialogActions, DialogProps } from "@material-ui/core";

export interface JSXProps {
  children: JSX.Element[] | JSX.Element | string | false;
}

export function MyModal(props: DialogProps) {
  const { maxWidth = "sm", children, ...rest } = props;
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
  return <DialogActions>{props.children}</DialogActions>;
};
