import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "checkbox",
  name: "checkbox",
  className: "",
  checked: false,
  disabled: false,
};

const checkboxesArr = [
  {
    name: "checkbox1",
    checked: false,
    label: "Hit the gym",
    disabled: false,
  },
  {
    name: "checkbox2",
    checked: false,
    label: "Pay bills",
    disabled: false,
  },
  {
    name: "checkbox3",
    checked: false,
    label: "Meet George",
    disabled: false,
  },
  {
    name: "checkbox4",
    checked: true,
    label: "Buy eggs",
    disabled: true,
  },
];

const LabelTemplate: ComponentStory<typeof Checkbox> = () => {
  return (
    <div>
      {checkboxesArr.map((checkbox) => (
        <label
          key={checkbox.name}
          htmlFor={checkbox.name}
          style={{
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <Checkbox
            name={checkbox.name}
            id={checkbox.name}
            checked={checkbox.checked}
            value={checkbox.label}
            disabled={checkbox.disabled}
          />
          <span
            style={{
              marginTop: "4px",
              fontWeight: "300",
              fontSize: "16px",
            }}
          >
            {checkbox.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export const MultipleAndLabel = LabelTemplate.bind({});
Default.args = {};
