import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ModalButtons } from "..";

localStorage.clear();

export default {
  title: "Modal/Buttons",
  component: ModalButtons,
} as ComponentMeta<typeof ModalButtons>;

const Template: ComponentStory<typeof ModalButtons> = (args) => (
  <ModalButtons {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "Create a fund",
      onClick: () => {},
      icon: "plus-in-circle-left",
    },
    {
      label: "Send a gift",
      onClick: () => {},
      icon: "gift",
    },
  ],
};
