import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Forms/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "checkbox",
  name: "checkbox",
  className: "",
  checked: false,
  disabled: false,
};
