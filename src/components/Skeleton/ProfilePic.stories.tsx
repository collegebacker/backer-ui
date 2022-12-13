import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Skeleton } from "..";

localStorage.clear();

export default {
  title: "Misc/Skeleton/ProfilePic",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton.ProfilePic>;

const boneStyle = {
  height: "140px",
  width: "140px",
} as React.CSSProperties;

const TemplateBone: ComponentStory<typeof Skeleton.ProfilePic> = (args) => (
  <Skeleton.ProfilePic {...args} />
);

export const ProfilePic = TemplateBone.bind({});
ProfilePic.args = {
  className: "",
  style: boneStyle,
};
