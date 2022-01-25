import React from "react";
import { NewTweetContainer } from "../NewTweet/style";
import Button from "../../../../components/Button/Button";
import { ThisIs, Title, WelcomeContainer } from "./style";

export default function Header() {
  return (
    <>
      <WelcomeContainer>
        <Title>Welcome to Twitter!</Title>
        <ThisIs>
          This is the best place to see what's happening in your world. Find
          some people and topics to follow now.
        </ThisIs>
        <Button>Tweet something!</Button>
      </WelcomeContainer>
    </>
  );
}
