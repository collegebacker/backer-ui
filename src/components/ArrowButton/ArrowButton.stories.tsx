import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArrowButton } from "..";

localStorage.clear();

export default {
  title: "Forms/ArrowButton",
  component: ArrowButton,
} as ComponentMeta<typeof ArrowButton>;

const Template: ComponentStory<typeof ArrowButton> = (args) => (
  <ArrowButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  direction: "left",
  disabled: false,
};
