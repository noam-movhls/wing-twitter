import React from "react";
import { Meta, Story } from "@storybook/react";
import NewTweet from "./NewTweet";
import { NewTweetProps } from "../../types";

export default {
  component: NewTweet,
  title: "Feed/NewTweet",
} as Meta;

const Template: Story<NewTweetProps> = (args) => <NewTweet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  submitTweet: (val) => console.log(val),
};
