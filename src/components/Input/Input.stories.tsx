import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input, Button } from "..";
import React from "react";

export default {
  title: "Forms/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

const SetValueUseImperativeHandleTemplate: ComponentStory<typeof Input> = (
  args
) => {
  const ref = React.useRef<any>(null);

  return (
    <>
      <Input ref={ref} {...args} />

      <Button
        label="Set Value"
        style={{
          marginTop: "40px",
        }}
        onClick={() => {
          ref.current.setValue("Hello");
        }}
      />
    </>
  );
};

export const useImperativeHandle = SetValueUseImperativeHandleTemplate.bind({});

useImperativeHandle.args = {
  isInvalid: false,
  autoFocus: false,
  required: false,
  value: "",
  hideSpinButton: true,
  helperText: "Hello! I'm a helper text",
  icon: {
    name: "question",
    onClick: () => {},
  },
};
