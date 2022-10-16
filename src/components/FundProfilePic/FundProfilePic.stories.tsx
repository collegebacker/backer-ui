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
