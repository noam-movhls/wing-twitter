import React from "react";
import TweeterButton from "../../../../components/Button/Button";
import { MyModal } from "../../../../components/MyModal/MyModal";

export interface DeleteTweetModalProps {
  modalMode: boolean;
  closeModalFunc: () => void;
  deleteModalFunc: () => void;
}

export default function DeleteTweet(props: DeleteTweetModalProps) {
  const { modalMode, closeModalFunc, deleteModalFunc } = props;

  const handleDeleteTweet = () => {
    deleteModalFunc();
    closeModalFunc();
  };

  return (
    <>
      <MyModal open={modalMode}>
        <MyModal.Title>Delete Tweet?</MyModal.Title>
        <MyModal.Content>
          This can't be undone and it will be removed from your profile, the
          timeline of any accounts that follow you, and from Twitter search
          results.
        </MyModal.Content>
        <MyModal.Actions>
          <TweeterButton fullWidth onClick={() => handleDeleteTweet()}>
            Delete
          </TweeterButton>
          <TweeterButton fullWidth onClick={() => closeModalFunc()}>
            Cancel
          </TweeterButton>
        </MyModal.Actions>
      </MyModal>
    </>
  );
}
