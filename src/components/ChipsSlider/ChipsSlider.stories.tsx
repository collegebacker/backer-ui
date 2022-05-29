import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ChipsSlider } from "..";

localStorage.clear();

export default {
  title: "Sliders/ChipsSlider",
  component: ChipsSlider,
} as ComponentMeta<typeof ChipsSlider>;

const Template: ComponentStory<typeof ChipsSlider> = (args) => (
  <div className="pageWrap">
    <ChipsSlider {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "💸",
      caption: "Just planning",
    },
    {
      label: "⏰",
      caption: "Baby on the way",
    },
    {
      label: "👶",
      caption: "Under a year",
    },
    {
      label: "1",
      caption: "One year old",
    },
    {
      label: "2",
      caption: "Two years old",
    },
    {
      label: "3",
      caption: "Three years old",
    },
    {
      label: "4",
      caption: "Four years old",
    },
    {
      label: "5",
      caption: "Five years old",
    },
    {
      label: "6",
      caption: "Six years old",
    },
    {
      label: "7",
      caption: "Seven years old",
    },
    {
      label: "8",
      caption: "Eight years old",
    },
    {
      label: "9",
      caption: "Nine years old",
    },
    {
      label: "10",
      caption: "Ten years old",
    },
    {
      label: "🦖",
      caption: "Over eighteen",
    },
  ],
};
