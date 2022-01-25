import React from "react";
import { Meta, Story } from "@storybook/react";
import NewTweet from "./NewTweet";

export default {
  component: NewTweet,
  title: "Feed/NewTweet",
} as Meta;

const Template: Story = (args) => <NewTweet {...args} />;

export const Primary = Template.bind({});
