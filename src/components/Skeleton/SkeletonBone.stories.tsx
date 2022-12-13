import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SkeletonBone } from "..";

localStorage.clear();

export default {
  title: "Misc/Skeleton",
  component: SkeletonBone,
  parameters: {
    docs: {
      description: {
        component:
          "`SkeletonBone` component is a simple div with a skeleton animation. It's used when you need to create a custom skeleton shape.",
      },
    },
  },
} as ComponentMeta<typeof SkeletonBone>;

const BoneTemplate: ComponentStory<typeof SkeletonBone> = (args) => (
  <SkeletonBone {...args} />
);

export const Bone = BoneTemplate.bind({});

Bone.args = {
  className: "",
  style: {
    width: "100px",
    height: "100px",
  },
};
