import { ComponentMeta, ComponentStory } from "@storybook/react";

import { DotPagination } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Forms/DotPagination",
  component: DotPagination,
  argTypes: {
    activeIndex: {
      control: { type: "range", min: 1, max: 20, step: 1 },
    },
  },
} as ComponentMeta<typeof DotPagination>;

const Template: ComponentStory<typeof DotPagination> = (args) => {
  return (
    <div
      style={{
        padding: "60px",
      }}
    >
      <DotPagination {...args} activeIndex={args.activeIndex - 1} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  activeIndex: 0,
  totalAmount: 10,
  visibleAmount: 6,
};
