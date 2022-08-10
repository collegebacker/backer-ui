import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ChipsSelector } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Sliders/ChipsSelector",
  component: ChipsSelector,
} as ComponentMeta<typeof ChipsSelector>;

const Template: ComponentStory<typeof ChipsSelector> = (args) => (
  <div className="pageWrap">
    <ChipsSelector {...args} />
  </div>
);

const itemsArray = [
  {
    label: "💸",
    value: "💸",
  },
  {
    label: "⏰",
    value: "⏰",
  },
  {
    label: "👶",
    value: "👶",
  },
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
];

export const Default = Template.bind({});
Default.args = {
  defaultIndex: 2,
  items: itemsArray,
  onChange: (index) => {
    console.log(`current index is ${index}`);
    console.log(`current item is ${itemsArray[index]}`);
  },
};
