import React, { useState, useRef } from "react";
import TweeterButton from "../../../../components/TweeterButton/TweeterButton";
import {
  Author,
  CounterBLock,
  CustomInput,
  NewTweetContainer,
  TweetActions,
  TweetBody,
} from "./style";

export const MAX_TWEET_LENGTH = 280;

export interface NewTweetProps {
  submitTweet: (newTweet: string) => void;
  inputRef?: any;
}

export default function NewTweet(props: NewTweetProps) {
  const { submitTweet, inputRef } = props;
  const [newTweet, setNewTweet] = useState<string>("");

  const handleOnChange = (val: string) => {
    setNewTweet(val);
  };

  const handleSubmitNewTweet = () => {
    submitTweet(newTweet);
    setNewTweet("");
  };

  return (
    <>
      <NewTweetContainer>
        <TweetBody>
          <Author>Noam Domovich</Author>
          <CustomInput
            inputRef={inputRef}
            placeholder=""
            multiline
            onChange={(e) => handleOnChange(e.target.value)}
            value={newTweet}
          />
        </TweetBody>
        <TweetActions>
          <CounterBLock overflow={newTweet.length > MAX_TWEET_LENGTH ? 1 : 0}>
            {newTweet.length}
          </CounterBLock>
          <TweeterButton
            onClick={() => handleSubmitNewTweet()}
            disabled={newTweet.length > MAX_TWEET_LENGTH}
            btntype="primary"
          >
            Tweet
          </TweeterButton>
        </TweetActions>
      </NewTweetContainer>
    </>
  );
}
