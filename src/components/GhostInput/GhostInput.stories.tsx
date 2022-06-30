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

export const Default = Template.bind({});

Default.args = {
  label: "Label",
  value: "",
  onChange: () => {},
  isInvalid: false,
  errorMessage: "Error message",
  helperText: "",
};
