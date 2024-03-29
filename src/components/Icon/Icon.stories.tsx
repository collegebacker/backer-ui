import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon } from "..";
import React from "react";
import iconJSON from "./icons.json";

localStorage.clear();

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Misc/Icon",
  component: Icon,
  // More on argss: https://storybook.js.org/docs/react/api/argss
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = () => {
  return (
    <div className="iconsWrap">
      {Object.keys(iconJSON).map((key, index) => {
        return (
          <div className="iconsWrap_card" key={index}>
            <Icon
              className="iconsWrap_icon"
              key={key}
              name={key as IconTypes}
            />
            <span className="iconsWrap_name">{key}</span>
          </div>
        );
      })}
    </div>
  );
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Default.args = {
//   name: "cross",
// };
