import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Skeleton } from "..";

localStorage.clear();

export default {
  title: "Misc/Skeleton/Bone",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton.Bone>;

const boneStyle = {
  height: "100px",
  width: "100px",
} as React.CSSProperties;

const TemplateBone: ComponentStory<typeof Skeleton.Bone> = (args) => (
  <Skeleton.Bone {...args} />
);

export const Bone = TemplateBone.bind({});
Bone.args = {
  className: "",
  style: boneStyle,
};
