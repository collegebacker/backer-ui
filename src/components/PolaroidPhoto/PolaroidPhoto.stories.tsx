import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PolaroidPhoto, ImageEditor } from "..";

localStorage.clear();

export default {
  title: "Misc/PolaroidPhoto",
  component: PolaroidPhoto,
} as ComponentMeta<typeof PolaroidPhoto>;

const Template: ComponentStory<typeof PolaroidPhoto> = (args) => {
  const [currentImage, setCurrentImage] = React.useState<string | undefined>(
    null
  );
  const [newImage, setNewImage] = React.useState<string | undefined>(null);
  const [isEditorOpen, setIsEditorOpen] = React.useState<boolean>(false);

  const handleImageSelect = (imageFile: File) => {
    setIsEditorOpen(true);
    setNewImage(URL.createObjectURL(imageFile));
  };

  const handleSubmit = () => {
    // imulate image upload
    setTimeout(() => {
      setCurrentImage(newImage);
      setIsEditorOpen(false);
    }, 2000);
  };

  return (
    <>
      <ImageEditor
        imageFile={newImage}
        isOpen={isEditorOpen}
        onSubmit={handleSubmit}
        onClose={() => setIsEditorOpen(false)}
      />
      <PolaroidPhoto
        {...args}
        imageSrc={currentImage}
        onChange={handleImageSelect}
      />
    </>
  );
};
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
