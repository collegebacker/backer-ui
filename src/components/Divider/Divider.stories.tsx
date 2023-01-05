import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  isMobile,
  computeYearsUntilCollege,
  calculateExternalContribution,
  hello,
  Forecast
} from '@collegebacker/shared/utils'

import { Divider } from '..'

localStorage.clear()

export default {
  title: 'Misc/Divider',
  component: Divider
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = args => {
  console.log(
    Forecast,
    computeYearsUntilCollege,
    calculateExternalContribution,
    hello,
    isMobile
  )

  return <Divider {...args} />
}
export const Default = Template.bind({})
Default.args = {}
