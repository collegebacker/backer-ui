import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ImageEditor, Button } from "..";

localStorage.clear();

export default {
  title: "Modal/ImageEditor",
  component: ImageEditor,
} as ComponentMeta<typeof ImageEditor>;

const Template: ComponentStory<typeof ImageEditor> = (args) => {
  return <ImageEditor {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "",
  isOpen: false,
  onSubmit: (imageFile) => {
    console.log(imageFile);
  },
  imageFile: "",
  isLoaded: false,
};
