import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Navbar } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Misc/Navbar',
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: `
Navbar component is used to display a navigation bar with a back button and a close button. You can also add buttons to the navbar.
\n
- \`onCloseClick\` is used to close the navbar. If it is not defined, the button will not be displayed.
- \`backButtonClick\` is used to go back to the previous page. If it is not defined, the button will not be displayed. You can also add a custom label to the button with \`backButtonLabel\`. By default \`backButton\` is sticked to the third column of the grid. You can change this with \`backButtonStartColumn\`.
- \`buttons\` is an array of buttons to display on the right side of the navbar. Each button has a \`label\` and an \`icon\`. You can also add an \`onClick\` function to each button.
\n
`
      }
    }
  }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  className: '',
  style: {},
  backButtonClick: () => {
    console.log('Back button')
  },
  onCloseClick: () => {
    console.log('Close button')
  },
  onLogoClick: undefined,
  buttons: [
    {
      label: 'Button',
      icon: 'edit',
      onClick: () => {
        console.log('Button')
      }
    },
    {
      icon: 'analytics',
      onClick: () => {
        console.log('Button')
      }
    }
  ]
}
