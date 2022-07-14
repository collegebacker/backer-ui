import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { InfoMesssage } from "..";

localStorage.clear();

export default {
  title: "Messages/InfoMesssage",
  component: InfoMesssage,
} as ComponentMeta<typeof InfoMesssage>;

const Template: ComponentStory<typeof InfoMesssage> = (args) => (
  <InfoMesssage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
