import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SliderWrapper } from "..";

localStorage.clear();

export default {
  title: "Sliders/SliderWrapper",
  component: SliderWrapper,
  parameters: {
    docs: {
      description: {
        component: `
## Breakpoints
The component has three breakpoints. Here are the sizes:
\`\`\`
breakpoints: [
  {
    breakpoint: 1024,
    cardsToShow: 3,
    sidePaddingOffset: 40,
    hideArrows: false,
    hidePagination: false,
  },
  {
    breakpoint: 768,
    cardsToShow: 2,
    sidePaddingOffset: 40,
    hideArrows: true,
    hidePagination: false,
  },
  {
    breakpoint: 480,
    cardsToShow: 1,
    sidePaddingOffset: 40,
    hideArrows: true,
    hidePagination: false,
  },
]
\`\`\`

And you can change these breakpoints. But if you want to change the breakpoints, you need to change all the breakpoints in the component. Fore example:

\`\`\`
breakpoints: [
  {
    breakpoint: 1400,
    cardsToShow: 3,
    sidePaddingOffset: 40,
    hideArrows: true,
    hidePagination: true,
  },
  {
    breakpoint: 1080,
    cardsToShow: 2,
  },
  {
    breakpoint: 680,
    cardsToShow: 1,
  },
]
\`\`\`

---

## showHiddenCard
With this property you can regulate the visibility of the hidden by the right edge card. There are two options:
- \`boolean\` - the card is visible or not, the default value is 40(px) if it's true
- \`number\` - if you set a number you can set the precise value of the card visibility
`,
      },
    },
  },
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
  <div className="pageWrap">
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
      // sidePaddingOffset: 40,
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
  disableSideFading: false,
  showHiddenCard: false,
  spaceBetween: 20,
  showGuidelines: false,
};
