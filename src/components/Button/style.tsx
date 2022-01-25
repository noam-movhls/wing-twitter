import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const StyledButton = styled(Button)`
  &.MuiButton-contained {
    background-color: rgb(29, 155, 240);
    color: rgb(255, 255, 255);
    font-weight: 700;
    text-transform: capitalize;
    font-size: 15px;
    line-height: 20px;
    border-radius: 999px;
    padding: 0 16px;
    min-height: 36px;
    min-width: 36px;
    margin: 4px;
  }
`;
