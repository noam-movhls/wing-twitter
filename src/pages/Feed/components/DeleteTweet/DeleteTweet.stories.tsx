import React from "react";
import { Meta, Story } from "@storybook/react";
import DeleteTweet, { DeleteTweetModalProps } from "./DeleteTweet";

export default {
  component: DeleteTweet,
  title: "Feed/DeleteTweet",
} as Meta;

const Template: Story<DeleteTweetModalProps> = (args) => (
  <DeleteTweet {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  modalMode: false,
  closeModalFunc: () => {},
  deleteModalFunc: () => {},
};
