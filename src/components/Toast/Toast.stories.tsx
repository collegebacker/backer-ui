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
        onClick={() => toastRef.current.showToast("hello", { emoji: "🤩" })}
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
      <Button
        label="With dismiss button"
        onClick={() =>
          toastRef.current.showToast("I'm a toast with a dismiss button", {
            // closeOnClick: false,
            showCloseIcon: true,
            dismissButton: true,
          })
        }
      />
      <Button
        label="With the second button"
        onClick={() =>
          toastRef.current.showToast("I'm a toast with a dismiss button", {
            showCloseIcon: true,
            dismissButton: true,
            button: {
              label: "Button",
              onClick: () => {
                console.log("Second button clicked");
              },
            },
          })
        }
      />
      <Button
        label="With emoji"
        onClick={() =>
          toastRef.current.showToast("I'm a toast with a dismiss button", {
            closeOnClick: false,
            showCloseIcon: true,
            emoji: "🤩",
          })
        }
      />

      <h1>Service toasts</h1>

      <Button
        label="Success"
        onClick={() =>
          toastRef.current.showToast("I'm a service toast message", {
            type: "success",
            closeOnClick: false,
            showCloseIcon: true,
            emoji: "🤩",
          })
        }
      />
      <Button
        label="Error"
        onClick={() =>
          toastRef.current.showToast("I'm a service toast message", {
            type: "error",
            closeOnClick: false,
            showCloseIcon: true,
            emoji: "🤩",
          })
        }
      />
      <Button
        label="Warning"
        onClick={() =>
          toastRef.current.showToast("I'm a service toast message", {
            type: "warning",
            closeOnClick: false,
            showCloseIcon: true,
            emoji: "🤩",
          })
        }
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
