import React from "react";
import TweeterButton from "../../../../components/TweeterButton/TweeterButton";
import { ThisIs, Title, WelcomeContainer } from "./style";

export interface WelcomeProps {
  inputRef?: any;
}

export default function Welcome() {
  return (
    <>
      <WelcomeContainer>
        <Title>Welcome to Twitter!</Title>
        <ThisIs>
          This is the best place to see what's happening in your world. Find
          some people and topics to follow now.
        </ThisIs>
        <TweeterButton btntype="primary">Tweet something!</TweeterButton>
      </WelcomeContainer>
    </>
  );
}
