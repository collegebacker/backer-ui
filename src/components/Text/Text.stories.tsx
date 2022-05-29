import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Description } from "@storybook/addon-docs";

import { Text } from "..";

localStorage.clear();

Description;

export default {
  title: "Misc/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          "There are two different context of typography — `app` and `marketing`. Remember that when you use the `Text` component. By default the context is `app`. You can pass any property you want to the component — `onClick`, `target`, `href`, etc.",
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const App = Template.bind({});
App.args = {
  children: "Text",
  tag: "h1",
  context: "app",
  appStyle: "title-xlarge",
  marketingStyle: "xlarge",
};

export const Marketing = Template.bind({});
Marketing.args = {
  children: "Text",
  tag: "h1",
  context: "marketing",
  appStyle: "title-xlarge",
  marketingStyle: "xlarge",
};
