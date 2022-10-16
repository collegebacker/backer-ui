import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FundContributionSection } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Shared/FundContributionSection",
  component: FundContributionSection,
  parameters: {
    docs: {
      description: {
        component:
          "Will be show on the public fund page for all users and in the application fund page for non-owners/non-managers. It takes the fund handle and an appUrl (ex. config.APP_URL for the marketings site or '/' for the application) as props.",
      },
    },
  },
} as ComponentMeta<typeof FundContributionSection>;

const Template: ComponentStory<typeof FundContributionSection> = (args) => (
  <FundContributionSection {...args} />
);

export const Default = Template.bind({});
Default.args = {};
