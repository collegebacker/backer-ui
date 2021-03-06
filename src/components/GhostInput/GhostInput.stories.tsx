import { ComponentMeta, ComponentStory } from "@storybook/react";

import { GhostInput } from "..";
import React from "react";

export default {
  title: "Forms/GhostInput",
  component: GhostInput,
} as ComponentMeta<typeof GhostInput>;

const Template: ComponentStory<typeof GhostInput> = (args) => (
  <GhostInput {...args} />
);

export const Text = Template.bind({});

Text.args = {
  label: "Label",
  value: "",
  type: "text",
  placeholder: "Placeholder",
  onChange: () => {},
  isInvalid: false,
  errorMessage: "Error message",
  helperText: "",
};

export const Money = Template.bind({});

Money.args = {
  label: "Add your amount",
  value: "",
  placeholder: "0",
  type: "money",
  onChange: () => {},
  isInvalid: false,
  errorMessage: "Error message",
  helperText: "",
};
