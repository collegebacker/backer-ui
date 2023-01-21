import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RecurringDatePicker } from "..";

localStorage.clear();

export default {
  title: "Forms/RecurringDatePicker",
  component: RecurringDatePicker,
  
} as ComponentMeta<typeof RecurringDatePicker>;

const Template: ComponentStory<typeof RecurringDatePicker> = (args) => (
  <RecurringDatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  days: 31,
  dafaultValue: [1, 16],
  semimonthly: false,
  onChange: (date: number[]) => console.log(date),
};
