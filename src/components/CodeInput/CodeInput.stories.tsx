import React from "react";

import { Button, CodeInput } from "..";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Forms/CodeInput",
  component: CodeInput,
  parameters: {
    docs: {
      description: {
        component:
          "The component also contains two methods `reset` and `setIsInvalid` that can be used to reset the input and set the input to invalid state. Youcan reach these methods from the ref of the component.",
      },
    },
  },
} as ComponentMeta<typeof CodeInput>;

const ConfirmTemplate: ComponentStory<typeof CodeInput> = (args) => {
  const testCode = "345629";

  const [code, setCode] = React.useState("");
  const [isInvalid, setIsInvalid] = React.useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (code === testCode) {
      setIsInvalid(false);
      alert("Success!");
    } else {
      setIsInvalid(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span
          className="typo-app-body-caption"
          style={{
            display: "block",
            marginBottom: "40px",
          }}
        >
          test code: {testCode}
        </span>

        <CodeInput
          {...args}
          isInvalid={isInvalid}
          onChange={(code: string) => {
            setCode(code);

            if (code.length !== testCode.length) {
              setIsInvalid(false);
            }
          }}
          onResend={() => {
            alert("resend");
          }}
        />

        <Button
          label="Confirm"
          disabled={code.length !== testCode.length}
          type="submit"
          style={{
            marginTop: "50px",
          }}
        />
      </form>
    </div>
  );
};

export const ConfirmButton = ConfirmTemplate.bind({});

ConfirmButton.args = {
  length: 6,
  resendTimer: 60,
  resendText: "Haven't received?",
  onResend: () => {},
  onChange: () => {},
  errorMessage: "Confirmation failed. Please check the code and try again.",
};

//

const WithoutButtonTemplate: ComponentStory<typeof CodeInput> = (args) => {
  const testCode = "345629";

  const [isInvalid, setIsInvalid] = React.useState(false);

  return (
    <div>
      <span
        className="typo-app-body-caption"
        style={{
          display: "block",
          marginBottom: "40px",
        }}
      >
        test code: {testCode}
      </span>

      <CodeInput
        {...args}
        isInvalid={isInvalid}
        onChange={(code: string) => {
          console.log(`testCode: ${testCode}`, `code: ${code}`);
          if (code.length === testCode.length) {
            if (code === testCode) {
              setIsInvalid(false);
              console.log("Success!");
            } else {
              setIsInvalid(true);
            }
          } else {
            setIsInvalid(false);
          }
        }}
        onResend={() => {
          alert("resend");
        }}
      />
    </div>
  );
};

export const WithoutButton = WithoutButtonTemplate.bind({});

WithoutButton.args = {
  length: 6,
  resendTimer: 60,
  resendText: "Haven't received?",
  onResend: () => {},
  onChange: () => {},
  errorMessage: "Confirmation failed. Please check the code and try again.",
};
