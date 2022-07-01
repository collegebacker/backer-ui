import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ChipsSlider } from "..";
import React from "react";

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
  defaultIndex: 0,
  hideOverlayGradients: true,
  alwaysShowOverlayGradients: false,
  showGuidelines: false,
  showCaption: true,
  items: [
    {
      label: "💸",
      value: "💸",
      caption: "Just planning",
    },
    {
      label: "⏰",
      value: "⏰",
      caption: "Baby on the way",
    },
    {
      label: "👶",
      value: "👶",
      caption: "Under a year",
    },
    {
      label: "1",
      value: "1",
      caption: "One year old",
    },
    {
      label: "2",
      value: "2",
      caption: "Two years old",
    },
    {
      label: "3",
      value: "3",
      caption: "Three years old",
    },
    {
      label: "4",
      value: "4",
      caption: "Four years old",
    },
    {
      label: "5",
      value: "5",
      caption: "Five years old",
    },
    {
      label: "6",
      value: "6",
      caption: "Six years old",
    },
    {
      label: "7",
      value: "7",
      caption: "Seven years old",
    },
    {
      label: "8",
      value: "8",
      caption: "Eight years old",
    },
    {
      label: "9",
      value: "9",
      caption: "Nine years old",
    },
    {
      label: "10",
      value: "10",
      caption: "Ten years old",
    },
    {
      label: "🦖",
      value: "🦖",
      caption: "Over eighteen",
    },
  ],
};
