import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ContributionSuccessModal } from "..";
import React from "react";

localStorage.clear();

export default {
  title: "Shared/ContributionSuccessModal",
  component: ContributionSuccessModal,
  parameters: {
    docs: {
      description: {
        component:
          "Takes the place of the ContributionSuccessModal component in the application and will be show on in the application and the marketing site after a contribution/gift is made. Props include modalRef to open/close the modal, a contribution record and 'fund' a boolean used to distinguish whether it's a contribution (set to true) or a gift.",
      },
    },
  },
} as ComponentMeta<typeof ContributionSuccessModal>;

const Template: ComponentStory<typeof ContributionSuccessModal> = (args) => (
  <ContributionSuccessModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  fund: false,
  contribution: {
    amount: 100,
    frequency: "monthly",
    duration: "3months",
    gift: false,
    firstContribution: false,
    fundName: "Fund Name",
    recipientName: "Recipient Name",
    recipientParentName: "Recipient Parent Name",
    photoUrl: "https://picsum.photos/200",
  },
};
