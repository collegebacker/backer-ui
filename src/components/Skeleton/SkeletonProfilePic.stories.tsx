import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SkeletonProfilePic } from "..";

localStorage.clear();

export default {
  title: "Misc/Skeleton",
  component: SkeletonProfilePic,
  parameters: {
    docs: {
      description: {
        component:
          "`SkeletonProfilePic` component it's a skeleton for any profile pictures",
      },
    },
  },
} as ComponentMeta<typeof SkeletonProfilePic>;

const ProfilePicTemplate: ComponentStory<typeof SkeletonProfilePic> = (
  args
) => <SkeletonProfilePic {...args} />;

export const ProfilePic = ProfilePicTemplate.bind({});

ProfilePic.args = {
  className: "",
  style: {
    "--size": "110px",
  },
};
