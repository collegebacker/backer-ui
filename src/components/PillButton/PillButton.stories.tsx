import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PillButton } from "..";
import React from "react";
import icons from "../Icon/icons.json";
import logos from "../PaymentLogo/logosURLs.json";

localStorage.clear();

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/PillButton",
  component: PillButton,
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
    paymentIcon: {
      options: Object.keys(logos),
      control: { type: "select" },
    },
  },
  // More on argss: https://storybook.js.org/docs/react/api/argss
} as ComponentMeta<typeof PillButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PillButton> = (args) => (
  <PillButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Pill Button",
  tag: "button",
  isActive: false,
};
