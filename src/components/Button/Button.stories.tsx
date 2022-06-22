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
    type: {
      options: ["button", "submit", "reset"],
      control: { type: "select" },
    },
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

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  mode: "primary",
  label: "Primary",
  size: "default",
  tag: "a",
  disabled: false,
  busy: false,
  busyLabel: "",
  // target: text("label", "Hello Storybook"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "accent",
  label: "Accent",
  size: "default",
  tag: "a",
  disabled: false,
  busy: false,
  busyLabel: "",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  mode: "outline",
  label: "Outline",
  size: "default",
  tag: "a",
  disabled: false,
  busy: false,
  busyLabel: "",
};

export const Ghost = Template.bind({});
Ghost.args = {
  mode: "ghost",
  label: "Ghost",
  size: "default",
  tag: "a",
  disabled: false,
  busy: false,
  busyLabel: "",
};
