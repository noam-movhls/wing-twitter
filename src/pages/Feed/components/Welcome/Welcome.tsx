import React from "react";
import TwitterButton from "../../../../components/TwitterButton/TwitterButton";
import { ThisIs, Title, WelcomeContainer } from "./style";

export interface WelcomeProps {
  inputRef?: any;
}

export default function Welcome({ inputRef }: WelcomeProps) {
  return (
    <>
      <WelcomeContainer>
        <Title>Welcome to Twitter!</Title>
        <ThisIs>
          This is the best place to see what's happening in your world. Find
          some people and topics to follow now.
        </ThisIs>
        <TwitterButton
          btntype="primary"
          onClick={() => inputRef?.current.focus()}
        >
          Tweet something!
        </TwitterButton>
      </WelcomeContainer>
    </>
  );
}
