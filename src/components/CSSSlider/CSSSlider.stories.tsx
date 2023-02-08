import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CSSSlider } from '..'

localStorage.clear()

export default {
  title: 'Sliders/CSSSlider',
  component: CSSSlider,
  parameters: {
    docs: {
      description: {
        component: `
## Common props

- \`containterClassName?: string\`. The class name for the container.
- \`spaceBetween?: number\`. The space between cards in pixels.
- \`arrowsOffset?: number\`. The offset for arrows in pixels.
- \`paginationAlignment?: "center" | "left" | "right"\`. The alignment of the pagination.
- \`onChange?: (index: number) => void\`. The callback function that is called when the active index changes.
- \`desktopBreakpoint?: BreakpointProps\`. The props for the desktop breakpoint.
- \`tabletBreakpoint?: BreakpointProps\`. The props for the tablet breakpoint.
- \`mobileBreakpoint?: BreakpointProps\`. The props for the mobile breakpoint.
- \`children: React.ReactNode\`. The children of the component.

## BreakpointProps

- \`cardsToShow: number\`. How many cards to show
- \`sidePaddingOffset?: number\`. Offset from the sides. If you need to add paddings to the slider but want to keep cards visible, you can use this prop.
- \`shiftHiddenCard?: number\`. How much to shift the next hidden card. 
- \`disableSideFading?: boolean\`. Disable side fading. By default it's \`true\`.
- \`hideArrows?: boolean\`. Hide arrows. By default it's \`false\` and \`true\` for mobile.

`
      }
    }
  }
} as ComponentMeta<typeof CSSSlider>

const itemsArray = [
  {
    emoji: '🤖',
    title: 'Withdrawal 1',
    description:
      'You’ll always be able to withdraw your contributions with no tax or penalties.'
  },
  {
    emoji: '🤖',
    title: 'Save together 2',
    description:
      'Backer is a social fund: save 4x more with gifts from family & friends.'
  },
  {
    emoji: '🤖',
    title: 'You win, we win 3',
    description: 'We won’t charge our $5 monthly fee if you lose money.'
  },
  {
    emoji: '🤖',
    title: 'Flexible 4',
    description:
      'You’ll always be able to withdraw your contributions with no tax or penalties.'
  }
  // {
  //   emoji: '🤖',
  //   title: 'Save together 5',
  //   description:
  //     'Backer is a social fund: save 4x more with gifts from family & friends.'
  // },
  // {
  //   emoji: '🤖',
  //   title: 'You win 6',
  //   description: 'We won’t charge our $5 monthly fee if you lose money.'
  // }
  // {
  //   emoji: "🤖",
  //   title: "Flexible 7",
  //   description:
  //     "You’ll always be able to withdraw your contributions with no tax or penalties.",
  // },
  // {
  //   emoji: "🤖",
  //   title: "Save together 8",
  //   description:
  //     "Backer is a social fund: save 4x more with gifts from family & friends.",
  // },
]

interface CardExampleProps {
  title: string
  description: string
  emoji: string
}

const CardExample: React.FC<CardExampleProps> = (props) => {
  return (
    <div className='sliderWrapper_card'>
      <h1>{props.emoji}</h1>
      <h2>{props.title}</h2>
      <button>button</button>
    </div>
  )
}

const Template: ComponentStory<typeof CSSSlider> = (args) => (
  <div
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      padding: '40px 0',
      maxWidth: '1000px',
      margin: '0 auto'
    }}
  >
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* <div
        style={{
          height: "800px",
        }}
      /> */}
      <CSSSlider {...args} />
      {/* <div
        style={{
          height: "800px",
        }}
      /> */}
    </div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: itemsArray.map((item, index) => {
    return <CardExample key={index} {...item} />
  }),
  // desktopBreakpoint: {
  //   cardsToShow: 2,
  //   sidePaddingOffset: 0,
  // },
  // tabletBreakpoint: {
  //   sidePaddingOffset: 0,
  // },
  mobileBreakpoint: {
    sidePaddingOffset: 0,
    disableSideFading: false
  }
  // spaceBetween: 0,

  // disableSideFading: true,
  // paginationAlignment: "left",
  // spaceBetween: 20,
  // showGuidelines: true,
}
