import React, { useState } from "react";
import TweeterButton from "../../../../components/Button/Button";
import {
  Author,
  CounterBLock,
  CustomInput,
  NewTweetContainer,
  TweetActions,
  TweetBody,
} from "./style";

export default function NewTweet() {
  const [newTweet, setNewTweet] = useState<String>("");

  const handleOnChange = (val: string) => {
    // todo debounce
    setNewTweet(val);
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
          />
        </TweetBody>
        <TweetActions>
          <CounterBLock> {newTweet.length}</CounterBLock>
          <TweeterButton>Tweet</TweeterButton>
        </TweetActions>
      </NewTweetContainer>
    </>
  );
}
