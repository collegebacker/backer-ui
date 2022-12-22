import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Slider } from "..";

localStorage.clear();

export default {
  title: "Forms/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  onChange: (event) => {
    console.log(event.target.valueAsNumber);
  },
  className: "",
  style: {
    width: "200px",
  },
};
