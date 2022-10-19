import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FundProfilePic } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Misc/FundProfilePic",
  component: FundProfilePic,
} as ComponentMeta<typeof FundProfilePic>;

const Template: ComponentStory<typeof FundProfilePic> = (args) => (
  <FundProfilePic {...args} />
);

export const NoImage = Template.bind({});
NoImage.args = {
  className: "fundProfilePicClass",
  name: "Lily Sharpe’sEducation Fund 🐰🌿",
};

export const WithImage = Template.bind({});
WithImage.args = {
  className: "fundProfilePicClass",
  name: "Lily Sharpe’sEducation Fund 🐰🌿",
  image:
    "https://as2.ftcdn.net/jpg/01/25/81/33/220_F_125813372_Svy7YoB39fhaCM7kSlgQwunqBwB5yFEH.jpg",
};

const ManyNoImageTemplate: ComponentStory<typeof FundProfilePic> = (args) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {args.fundsArray.map((fund: any, index: number) => {
        return (
          <FundProfilePic
            key={index}
            name={fund}
            className="fundProfilePicClass fundProfilePicClassShift"
          />
        );
      })}
    </div>
  );
};

export const ManyNoImage = ManyNoImageTemplate.bind({});
ManyNoImage.args = {
  fundsArray: [
    "Lily Sharpe’sEducation Fund 🐰🌿",
    "Sean's education fund",
    "🥁🔥 Ayala's College Funds",
    "Ahj’aee School Fund 🌟✨",
    "Jax 🤖",
    "Athena's college fund 💰",
    "Buddy Funds",
    "Kids place",
    "College funds 🔥",
    "Malachi’s education fund 👽",
    "Ariyana school funds",
    "My college fund",
  ],
};
