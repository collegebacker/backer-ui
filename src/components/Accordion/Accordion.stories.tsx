import { Accordion } from "..";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";

localStorage.clear();

export default {
  title: "Misc/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

const items = [
  {
    title: "Why should I use Backer?",
    content: (
      <>
        <p className="typo-marketing-paragraph">
          Backer is the easiest way to save for college with help from family
          and friends. We&apos;ll help you invest your savings with a tax-free
          529 Savings Plan, which is like a retirement account for your
          child&apos;s education. It&apos;s a government-sponsored account and
          is the smartest way to avoid future student debt.
        </p>
        <p className="typo-marketing-paragraph">
          With Backer, it&apos;s simple to involve family and friends in the
          process. These “backers” can quickly and easily contribute to your
          child&apos;s education fund and stay involved as your child gets
          closer to college. Our most active customers save 4x more by building
          a team of backers for their kids.
        </p>
      </>
    ),
  },
  {
    title: "How does Backer help me save more for college?",
    content: (
      <p className="typo-marketing-paragraph">
        Studies have shown that simply having a college fund can dramatically
        improve educational outcomes. Backer amplifies this effect by having
        your family and friends chip in, and then investing all of the savings
        tax-free. We&apos;ve also noticed parents on our platform contribute
        more&nbsp;
        <em>themselves</em> when they have a team of friends and relatives along
        for the ride. Just like it&apos;s helpful to have a gym buddy or study
        buddy, having a team of backers for your kids is super motivating and
        helps you make much faster progress toward your savings goals.
      </p>
    ),
  },
  {
    title: "Who can join the fund as a backer?",
    content: (
      <p className="typo-marketing-paragraph">
        Anyone you invite by sharing your unique fund link can join the fund as
        a backer and contribute gifts. We see lots of grandparents,
        uncles/aunts, and even family friends or the child&apos;s mentors at
        school and through other activities.
      </p>
    ),
  },
  {
    title: "What is Backer like for the backers I invite?",
    content: (
      <p className="typo-marketing-paragraph">
        With limited access to your child&apos;s fund page, backers can see that
        they&apos;re part of a team, but you choose how much of the fund&apos;s
        activity you want to be visible. We send reminders to your backers
        around the holidays and when your kid&apos;s birthday is coming up. We
        make it easy to link a bank account via online banking, or they can use
        a credit or debit card or digital wallet like Apple Pay or, Google Pay –
        so gifting is a breeze.
      </p>
    ),
  },
];

export const Default = Template.bind({});
Default.args = {
  items,
};
