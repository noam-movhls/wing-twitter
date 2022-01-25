import React from "react";
import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "@material-ui/core";
import TweeterButton from "./Button";

export default {
  component: TweeterButton,
  title: "Component/TweeterButton",
} as Meta;

const Template: Story<ButtonProps> = (args) => <TweeterButton {...args} />;

const buttonClick = () => {};

export const Primary = Template.bind({});
Primary.args = {
  children: "Tweet",
  onClick: () => buttonClick,
};
