import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { SliderWrapper } from "..";

localStorage.clear();

export default {
  title: "Sliders/SliderWrapper",
  component: SliderWrapper,
} as ComponentMeta<typeof SliderWrapper>;

const itemsArray = [
  {
    emoji: "🤖",
    title: "Flexible withdrawals",
    description:
      "You’ll always be able to withdraw your contributions with no tax or penalties.",
  },
  {
    emoji: "🤖",
    title: "Save more together",
    description:
      "Backer is a social fund: save 4x more with gifts from family & friends.",
  },

  {
    emoji: "🤖",
    title: "You win, we win",
    description: "We won’t charge our $5 monthly fee if you lose money.",
  },
  {
    emoji: "🤖",
    title: "Flexible withdrawals",
    description:
      "You’ll always be able to withdraw your contributions with no tax or penalties.",
  },
  {
    emoji: "🤖",
    title: "Save more together",
    description:
      "Backer is a social fund: save 4x more with gifts from family & friends.",
  },
  {
    emoji: "🤖",
    title: "You win, we win",
    description: "We won’t charge our $5 monthly fee if you lose money.",
  },
];

interface CardExampleProps {
  title: string;
  description: string;
  emoji: string;
}

const CardExample: React.FC<CardExampleProps> = (props) => {
  return (
    <div className="sliderWrapper_card">
      <h1>{props.emoji}</h1>
      <h2>{props.title}</h2>
      <button>button</button>
    </div>
  );
};

const Template: ComponentStory<typeof SliderWrapper> = (args) => (
  <div
    className="pageWrap"
    style={{
      backgroundColor: "rgba(0,0,0,0.1)",
    }}
  >
    <SliderWrapper {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: itemsArray.map((item, index) => {
    return <CardExample key={index} {...item} />;
  }),
  breakpoints: [
    {
      breakpoint: 1424,
      cardsToShow: 3,
      // hideArrows: true,
      // hidePagination: true,
    },
    {
      breakpoint: 1068,
      cardsToShow: 2,
      // hideArrows: false,
      // hidePagination: true,
    },
    {
      breakpoint: 480,
      cardsToShow: 1,
    },
  ],
  spaceBetween: 20,
  showGuidelines: false,
};
