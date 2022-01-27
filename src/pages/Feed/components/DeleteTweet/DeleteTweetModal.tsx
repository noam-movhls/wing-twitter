import React from "react";
import TwitterButton from "../../../../components/TwitterButton/TwitterButton";
import { Modal } from "../../../../components/Modal/Modal";

export interface DeleteTweetModalProps {
  modalMode: boolean;
  closeModalFunc: () => void;
  deleteModalFunc: () => void;
}

export default function DeleteTweetModal(props: DeleteTweetModalProps) {
  const { modalMode, closeModalFunc, deleteModalFunc } = props;

  const handleDeleteTweet = () => {
    deleteModalFunc();
    closeModalFunc();
  };

  return (
    <>
      <Modal open={modalMode}>
        <Modal.Title>Delete Tweet?</Modal.Title>
        <Modal.Content>
          This can't be undone and it will be removed from your profile, the
          timeline of any accounts that follow you, and from Twitter search
          results.
        </Modal.Content>
        <Modal.Actions>
          <TwitterButton
            btntype="danger"
            fullWidth
            onClick={() => handleDeleteTweet()}
          >
            Delete
          </TwitterButton>
          <TwitterButton
            btntype="secondary"
            fullWidth
            onClick={() => closeModalFunc()}
          >
            Cancel
          </TwitterButton>
        </Modal.Actions>
      </Modal>
    </>
  );
}
