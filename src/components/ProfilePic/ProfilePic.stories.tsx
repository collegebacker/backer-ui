import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ProfilePic, ImageEditor } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Misc/ProfilePic',
  component: ProfilePic
} as ComponentMeta<typeof ProfilePic>

const Template: ComponentStory<typeof ProfilePic> = (args) => (
  <ProfilePic {...args} />
)

const UploadTemplate: ComponentStory<typeof ProfilePic> = (args) => {
  const [currentImage, setCurrentImage] = React.useState<string | undefined>(
    null
  )
  const [newImage, setNewImage] = React.useState<string | undefined>(null)
  const [isEditorOpen, setIsEditorOpen] = React.useState<boolean>(false)

  const handleImageSelect = (imageFile: File) => {
    setIsEditorOpen(true)
    setNewImage(URL.createObjectURL(imageFile))
  }

  const handleSubmit = () => {
    // imulate image upload
    setTimeout(() => {
      setCurrentImage(newImage)
      setIsEditorOpen(false)
    }, 2000)
  }

  return (
    <>
      <ImageEditor
        imageFile={newImage}
        isOpen={isEditorOpen}
        onSubmit={handleSubmit}
        onClose={() => setIsEditorOpen(false)}
      />
      <ProfilePic
        {...args}
        imageSrc={currentImage}
        onChange={handleImageSelect}
      />
    </>
  )
}

export const UploadMode = UploadTemplate.bind({})
UploadMode.args = {
  uploadMode: true,
  className: 'fundProfilePicClass',
  name: 'Lily Sharpe’sEducation Fund 🐰🌿',
  style: {
    '--size': '80px'
  } as any
}

export const NoImage = Template.bind({})
NoImage.args = {
  uploadMode: false,
  className: 'fundProfilePicClass',
  name: 'Lily Sharpe’sEducation Fund 🐰🌿',
  style: {
    '--size': '80px'
  } as any
}

export const WithImage = Template.bind({})
WithImage.args = {
  uploadMode: false,
  className: 'fundProfilePicClass',
  name: 'Lily Sharpe’sEducation Fund 🐰🌿',
  imageSrc:
    'https://as2.ftcdn.net/jpg/01/25/81/33/220_F_125813372_Svy7YoB39fhaCM7kSlgQwunqBwB5yFEH.jpg',
  style: {
    '--size': '80px'
  } as any
}

const fundsArray = [
  'Lily Sharpe’sEducation Fund 🐰🌿',
  "Sean's education fund",
  "🥁🔥 Ayala's College Funds",
  'Ahj’aee School Fund 🌟✨',
  'Jax 🤖',
  "Athena's college fund 💰",
  'Buddy Funds',
  'Kids place',
  'College funds 🔥',
  'Malachi’s education fund 👽',
  'Ariyana school funds',
  'My college fund'
]

const ManyNoImageTemplate: ComponentStory<typeof ProfilePic> = (args) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {fundsArray.map((fund: any, index: number) => {
        return <ProfilePic {...args} key={index} name={fund} />
      })}
    </div>
  )
}

export const ManyNoImage = ManyNoImageTemplate.bind({})

ManyNoImage.args = {
  uploadMode: false,
  style: {
    '--size': '80px',
    'margin-right': '-10px'
  } as any
}
