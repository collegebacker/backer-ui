import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DotPagination } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Forms/DotPagination",
  component: DotPagination,
  argTypes: {
    activeIndex: {
      control: { type: "range", min: 0, max: 7, step: 1 },
    },
    totalAmount: { control: { type: "range", min: 2, max: 8, step: 1 } },
  },
} as ComponentMeta<typeof DotPagination>;

const Template: ComponentStory<typeof DotPagination> = (args) => (
  <DotPagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  activeIndex: 0,
  totalAmount: 5,
};
