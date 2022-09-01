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
    title: "Withdrawal 1",
    description:
      "You’ll always be able to withdraw your contributions with no tax or penalties.",
  },
  {
    emoji: "🤖",
    title: "Save together 2",
    description:
      "Backer is a social fund: save 4x more with gifts from family & friends.",
  },
  {
    emoji: "🤖",
    title: "You win, we win 3",
    description: "We won’t charge our $5 monthly fee if you lose money.",
  },
  {
    emoji: "🤖",
    title: "Flexible 4",
    description:
      "You’ll always be able to withdraw your contributions with no tax or penalties.",
  },
  {
    emoji: "🤖",
    title: "Save together 5",
    description:
      "Backer is a social fund: save 4x more with gifts from family & friends.",
  },
  {
    emoji: "🤖",
    title: "You win 6",
    description: "We won’t charge our $5 monthly fee if you lose money.",
  },
  // {
  //   emoji: "🤖",
  //   title: "Save together 5",
  //   description:
  //     "Backer is a social fund: save 4x more with gifts from family & friends.",
  // },
  // {
  //   emoji: "🤖",
  //   title: "You win 6",
  //   description: "We won’t charge our $5 monthly fee if you lose money.",
  // },
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
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      padding: "40px",
      maxWidth: "1000px",
      margin: "0 auto",
      // overflow: "hidden",
    }}
  >
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.05)",
      }}
    >
      <SliderWrapper {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: itemsArray.map((item, index) => {
    return <CardExample key={index} {...item} />;
  }),
  // spaceBetween: 0
  breakpoints: [
    {
      breakpoint: 1600,
      cardsToShow: 3,
      // sidePaddingOffset: 50,
      // showHiddenCard: 120,
      hideArrows: true,
    },
    {
      breakpoint: 1000,
      cardsToShow: 2,
      // sidePaddingOffset: 20,
      // showHiddenCard: 40,
    },
    {
      breakpoint: 680,
      cardsToShow: 1,
      // showHiddenCard: 40,
    },
  ],
  // disableSideFading: true,
  // paginationAlignment: "left",
  // spaceBetween: 20,
  // showGuidelines: true,
};
