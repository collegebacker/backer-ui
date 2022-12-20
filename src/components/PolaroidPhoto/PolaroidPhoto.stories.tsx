import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PolaroidPhoto } from "..";

localStorage.clear();

export default {
  title: "Misc/PolaroidPhoto",
  component: PolaroidPhoto,
} as ComponentMeta<typeof PolaroidPhoto>;

const Template: ComponentStory<typeof PolaroidPhoto> = (args) => (
  <PolaroidPhoto {...args} />
);

export const Default = Template.bind({});
Default.args = {
  uploadMode: false,
  className: "",
  style: {
    // @ts-ignore: Unreachable code error
    "--size": "200px",
    margin: "40px",
  },
  name: "Lily Sharpe’sEducation Fund 🐰🌿",
  imageSrc: "",
};
