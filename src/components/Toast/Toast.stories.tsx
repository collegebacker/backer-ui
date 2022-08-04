import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toast, Button, Text } from "..";

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

      <Text
        tag="h2"
        appStyle="title-small"
        context="app"
        style={{ marginBottom: "20px" }}
      >
        Basic toasts
      </Text>
      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Show Toast"
        onClick={() => toastRef.current.showToast("hello", { emoji: "🤩" })}
      />
      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
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
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
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
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
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
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="With emoji"
        onClick={() =>
          toastRef.current.showToast("I'm a toast with a dismiss button", {
            closeOnClick: false,
            showCloseIcon: true,
            emoji: "🤩",
          })
        }
      />

      <Text
        tag="h2"
        appStyle="title-small"
        context="app"
        style={{ marginBottom: "20px" }}
      >
        Service toasts
      </Text>

      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Success"
        onClick={() =>
          toastRef.current.showToast("I'm a service toast message", {
            type: "success",
            closeOnClick: false,
            showCloseIcon: true,
          })
        }
      />
      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Error"
        onClick={() =>
          toastRef.current.showToast("I'm a service toast message", {
            type: "error",
            closeOnClick: false,
            showCloseIcon: true,
          })
        }
      />
      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Warning"
        onClick={() =>
          toastRef.current.showToast("I'm a service toast message", {
            type: "warning",
            closeOnClick: false,
            showCloseIcon: true,
          })
        }
      />

      <Text
        tag="h2"
        appStyle="title-small"
        context="app"
        style={{ marginBottom: "20px" }}
      >
        Timer toasts
      </Text>

      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Info"
        onClick={() =>
          toastRef.current.showToast(
            "This is a toast with a timer of 5 seconds",
            {
              closeOnClick: true,
              timeout: 5000,
            }
          )
        }
      />
      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Success"
        onClick={() =>
          toastRef.current.showToast(
            "This is a toast with a timer of 6 seconds",
            {
              type: "success",
              closeOnClick: true,
              timeout: 6000,
            }
          )
        }
      />
      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Warning"
        onClick={() =>
          toastRef.current.showToast(
            "This is a toast with a timer of 10 seconds",
            {
              type: "warning",
              closeOnClick: true,
              timeout: 10000,
            }
          )
        }
      />
      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Error"
        onClick={() =>
          toastRef.current.showToast(
            "This is a toast with a timer of 5 seconds",
            {
              type: "error",
              closeOnClick: true,
              timeout: 10000,
            }
          )
        }
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
