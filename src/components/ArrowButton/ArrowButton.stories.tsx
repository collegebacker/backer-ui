import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArrowButton } from "..";
import React from "react";

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
