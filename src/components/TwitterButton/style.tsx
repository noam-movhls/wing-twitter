import { Button } from "@mui/material";
import styled from "styled-components";
import { black, blue, gray, red, white } from "../../globalStyle";
import { MyButtonProps } from "./TwitterButton";

export const StyledButton = styled(Button)<MyButtonProps>`
  &.MuiButtonBase-root {
    box-shadow: unset;
  }

  &.MuiButton-contained {
    background-color: ${({ btntype }) =>
      btntype === "danger" ? red : btntype === "secondary" ? white : blue};
    color: ${({ btntype }) => (btntype === "secondary" ? black : white)};
    border: ${({ btntype }) =>
      btntype === "secondary" ? "1px solid " + gray : "unset"};
    font-weight: 700;
    text-transform: capitalize;
    font-size: 15px;
    line-height: 20px;
    border-radius: 999px;
    padding: 0 16px;
    min-height: 36px;
    min-width: 36px;
    margin: 4px;

    :hover {
      background-color: ${({ btntype }) =>
        btntype === "danger" ? red : btntype === "secondary" ? white : blue};
    }
  }
`;
