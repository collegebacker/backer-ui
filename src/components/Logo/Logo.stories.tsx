import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo } from "..";

localStorage.clear();

export default {
  title: "Misc/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "default",
  hoverAnimation: true,
};

export const Foundation = Template.bind({});
Foundation.args = {
  type: "foundation",
  hoverAnimation: true,
};

export const Sign = Template.bind({});
Sign.args = {
  type: "sign",
  hoverAnimation: true,
};
