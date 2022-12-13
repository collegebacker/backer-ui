import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Skeleton } from "..";

localStorage.clear();

export default {
  title: "Misc/Skeleton/Text",
  component: Skeleton.Text,
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
} as ComponentMeta<typeof Skeleton.Text>;

const Template: ComponentStory<typeof Skeleton.Text> = (args) => (
  <Skeleton.Text {...args} />
);

export const Text = Template.bind({});
Text.args = {
  lines: 2,
  fontSize: "body-main",
} as any;
