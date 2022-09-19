import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CountBadge } from "..";

localStorage.clear();

export default {
  title: "Misc/CountBadge",
  component: CountBadge,
} as ComponentMeta<typeof CountBadge>;

const Template: ComponentStory<typeof CountBadge> = (args) => (
  <CountBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  amount: 2,
  className: "",
};
