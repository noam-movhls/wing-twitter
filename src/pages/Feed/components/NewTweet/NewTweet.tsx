import React, { useState } from "react";
import TweeterButton from "../../../../components/Button/Button";
import { NewTweetProps } from "../../types";
import {
  Author,
  CounterBLock,
  CustomInput,
  NewTweetContainer,
  TweetActions,
  TweetBody,
} from "./style";

export const MAX_TWEET_LENGTH = 280;

export default function NewTweet(props: NewTweetProps) {
  const { submitTweet } = props;
  const [newTweet, setNewTweet] = useState<string>("");

  const handleOnChange = (val: string) => {
    // todo debounce
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
          >
            Tweet
          </TweeterButton>
        </TweetActions>
      </NewTweetContainer>
    </>
  );
}
