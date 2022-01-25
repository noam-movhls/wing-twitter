import React from "react";
import { Meta, Story } from "@storybook/react";
import DeleteTweet from "./DeleteTweet";

export default {
  component: DeleteTweet,
  title: "Feed/DeleteTweet",
} as Meta;

const Template: Story = (args) => <DeleteTweet {...args} />;

export const Primary = Template.bind({});
