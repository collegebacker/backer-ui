import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "..";
import React from "react";

export default {
  title: "Forms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  isInvalid: false,
  autoFocus: false,
  required: false,
  value: "",
  hideSpinButton: true,
  helperText: "Hello! I'm a helper text",
  icon: {
    name: "question",
    onClick: () => {},
  },
};
