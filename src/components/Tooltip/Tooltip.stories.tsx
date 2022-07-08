import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { Tooltip } from "..";

localStorage.clear();

export default {
  title: "Misc/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {};
