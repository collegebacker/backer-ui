import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SkeletonButton } from "..";

localStorage.clear();

export default {
  title: "Misc/Skeleton",
  component: SkeletonButton,
  parameters: {
    docs: {
      description: {
        component:
          "`SkeletonButton` component represents a button skeleton. You can manipulate the size of the button. Available sizes are: `default`, `small`, `pill`.",
      },
    },
  },
  argTypes: {
    size: {
      options: ["default", "small", "pill"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof SkeletonButton>;

const ButtonTemplate: ComponentStory<typeof SkeletonButton> = (args) => (
  <SkeletonButton {...args} />
);

export const Button = ButtonTemplate.bind({});

Button.args = {
  className: "",
  style: {
    width: "200px",
  },
  size: "default",
};
