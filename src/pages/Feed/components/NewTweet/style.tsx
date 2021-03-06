import { InputBase } from "@material-ui/core";
import styled from "styled-components";
import { appFont, gray, red, strongGray } from "../../../../globalStyle";

export const NewTweetContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-family: ${appFont};
  font-size: 12px;
  line-height: 16px;
  border: 1px solid ${gray};
  border-radius: 5px;
  padding: 16px;
  box-sizing: border-box;
`;

export const CustomInput = styled(InputBase)`
  .MuiInputBase-root {
    width: 100%;
    padding: 8px;
  }

  &.MuiInputBase-multiline {
    width: 100%;
    font-size: 20px;
  }

  .MuiInputBase-input {
    width: 100%;
  }
`;

export const TweetBody = styled.div`
  border-bottom: 1px solid ${gray};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px 0;
`;

export const Author = styled.div`
  font-size: 12px;
  font-weight: bold;
  border-bottom: 1px dashed ${strongGray};
  padding-right: 16px;
  padding-bottom: 4px;
  width: fit-content;
`;

export const TweetActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  padding: 8px 0;
`;

interface CounterBlockProps {
  reachedLimit: boolean;
}

export const CounterBlock = styled.div<CounterBlockProps>`
  padding: 0px 16px 0px 0px;
  border-right: 1px solid ${gray};
  margin-right: 16px;
  font-size: 14px;
  color: ${({ reachedLimit }) => (reachedLimit ? red : strongGray)};
`;
