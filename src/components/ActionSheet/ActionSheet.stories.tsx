import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ActionSheet, Button, Text } from "..";

localStorage.clear();

export default {
  title: "Modal/ActionSheet",
  component: ActionSheet,
  parameters: {
    docs: {
      description: {
        component: `Invoke the component eith via Ref to show a toast message \`ActionSheet.current.open()\`.

## Props
- \`isOpen?: boolean\`: If set to true, the action sheet will be shown immediately.
- \`zIndex?: number\`: The z-index of the action sheet.
- \`delay?: number\`: The delay before the action sheet is shown.
- \`text?: string\`: The text to be shown at the top of actions buttons.
- \`actions: Array<{label: string; onClick: () => void; }>\`: The actions to be shown in the action sheet. Each action has a label and a callback function.

## Example
\`\`\`tsx
<ActionSheet
  ref={actionSheetRef}
  text="Are you sure you want to delete this item?"
  actions={[
    {
      label: "Show alert",
      onClick: () => {
        alert("I'm the onClick proprty");
      },
    },
    {
      label: "Close",
      onClick: () => {
        ActionSheetRef.current.close();
      },
    },
  ]}
/>
\`\`\`
`,
      },
    },
  },
} as ComponentMeta<typeof ActionSheet>;

const Template: ComponentStory<typeof ActionSheet> = (args) => {
  const ActionSheetRef = React.useRef<any>();

  return (
    <>
      <ActionSheet
        ref={ActionSheetRef}
        {...args}
        actions={[
          {
            label: "Show alert",
            onClick: () => {
              alert("I'm the onClick proprty");
            },
          },
          {
            label: "Close",
            onClick: () => {
              ActionSheetRef.current.close();
            },
          },
        ]}
      />

      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Show ActionSheet"
        onClick={() => ActionSheetRef.current.open()}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  text: "I'm the text proprty",
};
