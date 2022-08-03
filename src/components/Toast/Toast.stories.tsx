import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toast, Button } from "..";

localStorage.clear();

export default {
  title: "Misc/Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const toastRef = React.useRef<any>();

  return (
    <>
      <Toast ref={toastRef} {...args} />
      <Button
        label="Show Toast"
        onClick={() => toastRef.current.showToast("hello")}
      />
      <Button
        label="Say Toast!"
        onClick={() =>
          toastRef.current.showToast(
            "I authorize Backer to debit the bank account indicated in this web form, for the noted amount on the schedule indicated.",
            {
              closeOnClick: false,
              showCloseIcon: true,
            }
          )
        }
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
