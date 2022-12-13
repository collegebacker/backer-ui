import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Skeleton } from "..";

localStorage.clear();

export default {
  title: "Misc/Skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component:
          "`Skeleton` component is a wrapper for `Skeleton.Bone`, `Skeleton.ProfilePic`, `Skeleton.Button` and `Skeleton.Text` components. It is used to create a skeleton loading effect for your components.",
      },
      source: {
        code: `
<Skeleton>
  <Skeleton.ProfilePic
    style={{
      marginBottom: "20px",
    }}
  />
  <Skeleton.Text lines={3} fontSize="body-large" />
</Skeleton>
      `,
      },
    },
  },
} as ComponentMeta<typeof Skeleton>;

const bodyeStyle = {
  width: "100%",
  maxWidth: "400px",
  padding: "40px",
} as React.CSSProperties;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Main = Template.bind({});
Main.args = {
  className: "",
  style: bodyeStyle,
  showBackground: true,
  children: (
    <>
      <Skeleton.ProfilePic
        style={{
          marginBottom: "20px",
        }}
      />
      <Skeleton.Text lines={3} fontSize="body-large" />
    </>
  ),
};
