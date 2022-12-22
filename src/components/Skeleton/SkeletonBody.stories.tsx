import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SkeletonBody, SkeletonProfilePic, SkeletonText } from "..";

localStorage.clear();

export default {
  title: "Misc/Skeleton",
  component: SkeletonBody,
  parameters: {
    docs: {
      description: {
        component:
          "`SkeletonBody` component is a wrapper for `SkeletonText`, `SkeletonProfilePic`, `SkeletonBone` and `SkeletonButton` components. It is used to create a skeleton loading screen for a page.",
      },
    },
  },
} as ComponentMeta<typeof SkeletonBody>;

const bodyeStyle = {
  width: "100%",
  maxWidth: "400px",
  padding: "40px",
} as React.CSSProperties;

// SkeletonBody

const BodyTemplate: ComponentStory<typeof SkeletonBody> = (args) => (
  <SkeletonBody {...args} />
);

export const Body = BodyTemplate.bind({});

Body.args = {
  className: "",
  style: bodyeStyle,
  showBackground: true,
  children: (
    <>
      <SkeletonProfilePic
        style={{
          "--size": "80px",
          marginBottom: "20px",
        }}
      />
      <SkeletonText fontSize="body-main" lines={3} />
    </>
  ),
};
