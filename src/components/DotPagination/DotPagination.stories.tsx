import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DotPagination } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Forms/DotPagination",
  component: DotPagination,
  argTypes: {
    // activeIndex: {
    //   control: { type: "range", min: 1, max: 20, step: 1 },
    // },
  },
} as ComponentMeta<typeof DotPagination>;

const Template: ComponentStory<typeof DotPagination> = (args) => {
  return (
    <div
      style={{
        padding: "60px",
      }}
    >
      <DotPagination {...args} activeIndex={args.activeIndex} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  activeIndex: 0,
  totalAmount: 6,
  visibleAmount: 6,
};

export const WithLimit = Template.bind({});

WithLimit.args = {
  activeIndex: 0,
  totalAmount: 12,
  visibleAmount: 6,
};
