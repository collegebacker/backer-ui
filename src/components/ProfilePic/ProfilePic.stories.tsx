import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ProfilePic } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Misc/ProfilePic",
  component: ProfilePic,
} as ComponentMeta<typeof ProfilePic>;

const Template: ComponentStory<typeof ProfilePic> = (args) => (
  <ProfilePic {...args} />
);

export const NoImage = Template.bind({});
NoImage.args = {
  className: "fundProfilePicClass",
  name: "Lily Sharpe’sEducation Fund 🐰🌿",
  style: {
    "--size": "80px",
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  className: "fundProfilePicClass",
  name: "Lily Sharpe’sEducation Fund 🐰🌿",
  imageSrc:
    "https://as2.ftcdn.net/jpg/01/25/81/33/220_F_125813372_Svy7YoB39fhaCM7kSlgQwunqBwB5yFEH.jpg",
  style: {
    "--size": "80px",
  },
};

const fundsArray = [
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
];

const ManyNoImageTemplate: ComponentStory<typeof ProfilePic> = (args) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {fundsArray.map((fund: any, index: number) => {
        return <ProfilePic {...args} key={index} name={fund} />;
      })}
    </div>
  );
};

export const ManyNoImage = ManyNoImageTemplate.bind({});

ManyNoImage.args = {
  style: {
    "--size": "80px",
    "margin-right": "-10px",
  },
};
