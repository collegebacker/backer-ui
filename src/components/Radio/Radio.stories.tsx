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
  },
  {
    name: "checkbox2",
    checked: false,
    label: "Pay bills",
  },
  {
    name: "checkbox3",
    checked: false,
    label: "Meet George",
  },
  {
    name: "checkbox4",
    checked: false,
    label: "Buy eggs",
  },
];

const RadiogroupTemplate: ComponentStory<typeof Radio> = () => {
  return (
    // radio group
    <form>
      {radiosArr.map((radio) => (
        <label
          key={radio.name}
          htmlFor={radio.name}
          style={{
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <Radio
            id={radio.name}
            name={"radio-group"}
            checked={radio.checked}
            value={radio.label}
          />
          <span
            style={{ marginTop: "4px", fontWeight: "300", fontSize: "16px" }}
          >
            {radio.label}
          </span>
        </label>
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
