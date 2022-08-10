import { ComponentMeta, ComponentStory } from "@storybook/react";

import logosURLs from "./logosURLs.json";
import { PaymentLogo } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Misc/PaymentLogo",
  component: PaymentLogo,
} as ComponentMeta<typeof PaymentLogo>;

const Template: ComponentStory<typeof PaymentLogo> = (args) => {
  return (
    <div
      className="iconsWrap"
      style={{
        backgroundColor: args.mode === "dark" ? "#000" : "#fff",
      }}
    >
      {Object.keys(logosURLs).map((key) => {
        return (
          <div
            style={{
              margin: "20px",
            }}
          >
            <PaymentLogo
              className="iconsWrap_icon"
              key={key}
              mode={args.mode}
              name={key as keyof typeof logosURLs}
            />
            <span
              className="iconsWrap_name"
              style={{
                color: args.mode === "dark" ? "#fff" : "#000",
              }}
            >
              {key}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  mode: "light",
};
