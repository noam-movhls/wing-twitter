import React from "react";
import { Meta, Story } from "@storybook/react";
import Welcome from "./Welcome";

export default {
  component: Welcome,
  title: "Feed/Welcome",
} as Meta;

const Template: Story = (args) => <Welcome {...args} />;

export const Primary = Template.bind({});
