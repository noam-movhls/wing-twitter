import React from "react";
import { Meta, Story } from "@storybook/react";
import TweeterButton, { MyButtonProps } from "./TweeterButton";

export default {
  component: TweeterButton,
  title: "Component/TweeterButton",
} as Meta;

const Template: Story<MyButtonProps> = (args) => <TweeterButton {...args} />;

const buttonClick = () => {};

export const Primary = Template.bind({});
Primary.args = {
  children: "Tweet",
  onClick: () => buttonClick,
};
