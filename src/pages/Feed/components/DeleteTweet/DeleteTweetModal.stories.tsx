import React from "react";
import { Meta, Story } from "@storybook/react";
import DeleteTweetModal, { DeleteTweetModalProps } from "./DeleteTweetModal";

export default {
  component: DeleteTweetModal,
  title: "Feed/DeleteTweet",
} as Meta;

const Template: Story<DeleteTweetModalProps> = (args) => (
  <DeleteTweetModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  modalMode: false,
  closeModalFunc: () => {},
  deleteModalFunc: () => {},
};
