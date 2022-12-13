import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Skeleton } from "..";

localStorage.clear();

export default {
  title: "Misc/Skeleton/Button",
  component: Skeleton.Text,
  argTypes: {
    size: {
      options: ["default", "small", "pill"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Skeleton.Button>;

const buttonStyle = {
  width: "100%",
  maxWidth: "200px",
};

const Template: ComponentStory<typeof Skeleton.Button> = (args) => (
  <Skeleton.Button {...args} />
);

export const Button = Template.bind({});
Button.args = {
  className: "",
  size: "default",
  style: buttonStyle,
} as any;
