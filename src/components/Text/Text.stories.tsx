import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "..";

localStorage.clear();

export default {
  title: "Misc/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component: `There are two different context of typography — \`app\` and \`marketing\`. Remember that when you use the \`Text\` component. By default the context is \`app\`. You can pass any property you want to the component — \`onClick\`, \`target\`, \`href\`, etc.

---

## \`appStyle\` 

Only for \`app\` context.

- "title-xlarge"
- "title-large"
- "title-medium"
- "title-medium-adaptive"
- "title-small"
- "body-large"
- "body-large-adaptive"
- "body-large-paragraph"
- "body-large-paragraph-adaptive"
- "body-main"
- "body-paragraph"
- "body-caption"

---

Only for \`marketing\` context.

## \`marketingStyle\`  
- "xlarge"
- "large"
- "lead"
- "lead-bold"
- "lead-small"
- "lead-small-bold"
- "accent-paragraph"
- "accent-paragraph-bold"
- "paragraph"
- "paragraph-bold"
- "caption"
- "caption-bold"
        `,
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => {
  const textRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log(textRef.current);
  }, [textRef]);

  return <Text {...args} ref={textRef} />;
};

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
