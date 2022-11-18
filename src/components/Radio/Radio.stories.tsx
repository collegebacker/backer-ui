import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Radio } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Forms/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "checkbox",
  name: "checkbox",
  className: "",
  checked: false,
  disabled: false,
};

const radiosArr = [
  {
    name: "checkbox1",
    checked: false,
    label: "Hit the gym",
    disabled: false,
  },
  {
    name: "checkbox2",
    checked: false,
    label: "Pay bills a React.KeyboardEvent<HTMLInputElement >",
    disabled: false,
  },
  {
    name: "checkbox3",
    checked: false,
    label: "Meet George",
    disabled: true,
  },
  {
    name: "checkbox4",
    checked: false,
    label: "Buy eggs",
    disabled: false,
  },
];

const RadiogroupTemplate: ComponentStory<typeof Radio> = () => {
  return (
    // radio group
    <form>
      {radiosArr.map((radio) => (
        <Radio
          key={radio.name}
          id={radio.name}
          name={"radio-group"}
          disabled={radio.disabled}
          checked={radio.checked}
          value={radio.label}
          label={radio.label}
        />
      ))}
    </form>
  );
};

export const RadioGroup = RadiogroupTemplate.bind({});
Default.args = {
  id: "checkbox",
  name: "checkbox",
  className: "",
  checked: false,
  disabled: false,
};
