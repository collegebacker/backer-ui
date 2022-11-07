import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toast, Button } from "..";

localStorage.clear();

export default {
  title: "Misc/Toast",
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: `Invoke the component eith via Ref to show a toast message \`toastRef.current.showToast(message, params (optional), isShown (optional))\`. Let's break it down:

- \`message: string\`
- \`params: params object (optional)\`. See the params object below
- \`isShown: boolean (optional)\`. If set to true, the toast will be shown immediately. If not set, the toast will be shown when the component is mounted.

## Params keys

- \`closeOnClick?: boolean\`. If set to true, the toast will be closed when the user clicks on it. If not set, the toast will not be closed when the user clicks on it.
- \`showCloseIcon?: boolean\`
- \`dismissButton?: boolean\`
- \`button?: {label: string; onClick: () => void;}\`. If set, a button will be shown at the bottom of the toast. It has a label and a callback function.
- \`emoji?: string\`
- \`type?: "success" | "error" | "warning" | "info"\`. Yu can change emoji only ro the \`info\` type.
- \`timeout?: number\`. If set to a number, the toast will be automatically closed after the number of milliseconds. If set to false, the toast will not be automatically closed.
`,
      },
    },
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  const toastRef = React.useRef<any>();

  return (
    <>
      <Toast ref={toastRef} {...args} />

      <h2 className="typo-app-title-small" style={{ marginBottom: "20px" }}>
        Basic toasts
      </h2>
      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Close on click"
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

      <h2 className="typo-app-title-small" style={{ marginBottom: "20px" }}>
        Service toasts
      </h2>

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

      <h2 className="typo-app-title-small" style={{ marginBottom: "20px" }}>
        Timer toasts
      </h2>

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
          toastRef.current.showToast("Fund updated!", {
            type: "success",
            closeOnClick: true,
            timeout: 6000,
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

      <h2 className="typo-app-title-small" style={{ marginBottom: "20px" }}>
        Corner caases
      </h2>

      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Long message with cross"
        onClick={() =>
          toastRef.current.showToast(
            "`Aurbus_places_50csdk_longfilename_dicos_DMKKS-12122_canonDIGITAL_Canon_EOS_M.jpg` is a very long message",
            {
              type: "error",
              showCloseIcon: true,
              dismissButton: true,
            }
          )
        }
      />
      <Button
        size="small"
        style={{
          margin: "0 15px 15px 0",
        }}
        label="Long message. no cross"
        onClick={() =>
          toastRef.current.showToast(
            "`Aurbus_places_50csdk_longfilename_dicos_DMKKS-12122_canonDIGITAL_Canon_EOS_M.jpg` is a very long message",
            {
              type: "error",
              dismissButton: true,
            }
          )
        }
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
