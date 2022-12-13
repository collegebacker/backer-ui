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
          "`Skeleton` component is a wrapper for `Skeleton.Bone`, `Skeleton.ProfilePic`, `Skeleton.Button` and `Skeleton.Text` components. It is used to create a skeleton loading effect for your components.",
      },
    },
  },
} as ComponentMeta<typeof SkeletonBody>;

const bodyeStyle = {
  width: "100%",
  maxWidth: "400px",
  padding: "40px",
} as React.CSSProperties;

const Template: ComponentStory<typeof SkeletonBody> = (args) => (
  <SkeletonBody {...args} />
);

export const Main = Template.bind({});
Main.args = {
  className: "",
  style: bodyeStyle,
  showBackground: true,
  children: (
    <>
      <SkeletonProfilePic
        style={{
          marginBottom: "20px",
        }}
      />
      <SkeletonText fontSize="body-main" lines={3} />
    </>
  ),
};
