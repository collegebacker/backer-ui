import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Calendar } from "..";

localStorage.clear();

export default {
  title: "Forms/Calendar",
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: `the calendar component is a wrapper around the [react-calendar](https://www.npmjs.com/package/react-calendar) library. It is a fully customizable calendar component that can be used to select a date. It also supports min and max dates. The omponent has same props as the react-calendar component. You can find the documentation for the react-calendar component [here](https://www.npmjs.com/package/react-calendar).`,
      },
    },
  },
  argTypes: {
    minDetail: {
      control: {
        type: "select",
        options: ["century", "decade", "year", "month", "date"],
      },
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  minDetail: "month",
  hideYearArrows: true,
  defaultValue: new Date(),
  className: "",
  onChange: (date: Date) => console.log(date),
  onClickDay: (value: Date) => {
    console.log(value);
  },
};
