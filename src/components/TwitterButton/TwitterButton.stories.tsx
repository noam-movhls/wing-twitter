import React from "react";
import { Meta, Story } from "@storybook/react";
import TwitterButton, { MyButtonProps } from "./TwitterButton";

export default {
  component: TwitterButton,
  title: "Component/TwitterButton",
} as Meta;

const Template: Story<MyButtonProps> = (args) => <TwitterButton {...args} />;

const buttonClick = () => {};

export const Primary = Template.bind({});
Primary.args = {
  children: "Tweet",
  onClick: () => buttonClick,
};
