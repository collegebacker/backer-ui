import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ActionMesssage } from "..";

localStorage.clear();

export default {
  title: "Messages/ActionMesssage",
  component: ActionMesssage,
  argTypes: {
    mode: {
      control: {
        type: "radio",
        options: ["outline", "grey", "velvet", "peach"],
      },
    },
  },
} as ComponentMeta<typeof ActionMesssage>;

const Template: ComponentStory<typeof ActionMesssage> = (args) => (
  <ActionMesssage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: "",
  mode: "outline",
  title: "Hi! I'm the info message. I show you things you need to know",
  caption:
    "This is a caption. You can use it to explain more about the message",
  onClick: () => {
    console.log("clicked");
  },
  tabIndex: 0,
};
