import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import styled from "styled-components";

export const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: white;
    border: 1px solid #{gray};
    padding: 20px;
    box-sizing: border-box;
    border-radius: 15px;
  }
`;

export const StyledDialogTitle = styled(DialogTitle)`
  &.MuiDialogTitle-root {
    padding: 0 20px;
    font-weight: bold;
  }
  .MuiTypography-h6 {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.25px;
  }
`;

export const StyledDialogActions = styled(DialogActions)`
  &.MuiDialogActions-root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
