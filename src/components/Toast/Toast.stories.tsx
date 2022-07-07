import { Button, Toast } from "..";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";

localStorage.clear();

export default {
  title: "Misc/Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  return (
    <div>
      <Button label="Show Toast" />
      <Toast {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
