import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SkeletonText } from "..";

localStorage.clear();

export default {
  title: "Misc/Skeleton",
  component: SkeletonText,
  parameters: {
    docs: {
      description: {
        component:
          "`SkeletonText` component represents a text skeleton. You can manipulate the number of lines and the font size. Available font sizes are: `title-xlarge`, `title-large`, `title-medium`, `title-medium-adaptive`, `title-small`, `body-large`, `body-large-adaptive`, `body-main`, `body-caption`.",
      },
    },
  },
  argTypes: {
    fontSize: {
      options: [
        "title-xlarge",
        "title-large",
        "title-medium",
        "title-medium-adaptive",
        "title-small",
        "body-large",
        "body-large-adaptive",
        "body-main",
        "body-caption",
      ],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof SkeletonText>;

const TextTemplate: ComponentStory<typeof SkeletonText> = (args) => (
  <SkeletonText {...args} />
);

export const Text = TextTemplate.bind({});

Text.args = {
  className: "",
  style: {},
  lines: 3,
  fontSize: "body-main",
};
