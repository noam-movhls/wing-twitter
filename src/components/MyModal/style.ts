import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import styled from "styled-components";

export const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: white;
    border: 1px solid #bbb;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 15px;
    min-height: 300px;
  }
`;

export const StyledDialogTitle = styled(DialogTitle)`
  .MuiDialogTitle-root {
    padding: 0 20px;
  }
  .MuiTypography-h6 {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.25px;
    font-weight: 600;
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
