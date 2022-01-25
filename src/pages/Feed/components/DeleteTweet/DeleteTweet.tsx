import React, { useState } from "react";
import TweeterButton from "../../../../components/Button/Button";
import { MyModal } from "../../../../components/MyModal/MyModal";

export default function DeleteTweet() {
  const [open, setOpen] = useState(true); //todo
  return (
    <>
      <MyModal open={open}>
        <MyModal.Title>Title</MyModal.Title>
        <MyModal.Content>asdfasdf</MyModal.Content>
        <MyModal.Actions>
          <TweeterButton>Delete</TweeterButton>
          <TweeterButton onClick={() => setOpen(false)}>Cancel</TweeterButton>
        </MyModal.Actions>
      </MyModal>
    </>
  );
}
