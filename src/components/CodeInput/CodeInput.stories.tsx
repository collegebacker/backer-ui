import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CodeInput, Text, Button } from "..";

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

const Template: ComponentStory<typeof CodeInput> = (args) => {
  const testCode = "345629";

  const codeInputRef = React.useRef<any>(null);
  const [code, setCode] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (code === testCode) {
      codeInputRef.current.setIsInvalid(false);
      alert("Success!");
    } else {
      codeInputRef.current.setIsInvalid(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Text
          context="app"
          appStyle="body-caption"
          tag="span"
          style={{
            display: "block",
            marginBottom: "40px",
          }}
        >
          test code: {testCode}
        </Text>

        <CodeInput
          {...args}
          ref={codeInputRef}
          onChange={(code: string) => {
            setCode(code);
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

export const Default = Template.bind({});

Default.args = {
  length: 6,
  resendTimer: 60,
  resendText: "Haven't received?",
  onResend: () => {},
  onChange: () => {},
  errorMessage: "Confirmation failed. Please check the code and try again.",
};