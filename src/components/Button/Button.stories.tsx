import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "..";
import icons from "../Icon/icons.json";

localStorage.clear();

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Button",
  component: Button,
  argTypes: {
    target: {
      options: ["_self", "_blank", "_parent", "_top"],
      control: { type: "select" },
    },
    icon: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
  },
  // More on argss: https://storybook.js.org/docs/react/api/argss
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const options = {
  _self: "_self",
  _blank: "_blank",
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  mode: "primary",
  children: "Primary",
  size: "default",
  type: "link",
  disabled: false,
  // target: text("label", "Hello Storybook"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "accent",
  children: "Accent",
  size: "default",
  type: "link",

  disabled: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  mode: "outline",
  children: "Outline",
  size: "default",
  type: "link",
  disabled: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  mode: "ghost",
  children: "Ghost",
  size: "default",
  type: "link",
  disabled: false,
};
