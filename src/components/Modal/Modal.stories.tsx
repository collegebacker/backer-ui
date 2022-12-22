import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal, Button, ModalButtons, Accordion } from "..";

localStorage.clear();

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
];

export default {
  title: "Modal/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          "To trigger the component, you need to creare a `ref` to the component `const modalRef = React.useRef<any>(null)`. Then you can use the `open` method to open the modal like `() => modalRef.current.open(callback)`. To close the modal, you can use the `close` method `() => modalRef.current.close(callback)`",
      },
    },
  },
  argTypes: {
    disableHeaderMarginDesktop: {
      control: "boolean",
      description:
        "You can disable the header margin on the desktop breakpoint. It's useful when you want to use the modal without the header.",
    },
    disableHeaderMarginMobile: {
      control: "boolean",
      description:
        "You can disable the header margin on the mobile breakpoint. It's useful when you want to use the modal without the header.",
    },
    title: {
      control: "text",
      description:
        "Title of the modal. If the string is empty we don't render the title.",
    },
    largeTitle: {
      control: "boolean",
      description: "This prop disables the small title size on mobile.",
    },
    smallTitle: {
      control: "boolean",
      description: "You can switch the title to the small size.",
    },
    isBottomSheet: {
      control: "boolean",
      description:
        "You can switch the modal to bottom sheet type. Works only on the mobile breakpoint.",
    },
    isOpen: {
      control: "boolean",
      description:
        "The initial state of the modal. It doesn't switch the state on the fly — it's just a prop.",
    },
    customWidth: {
      control: { type: "number" },
      description:
        "Custom width of the popup window (desctop only). If the value is more than 0, the default layout size will be reseted. By default the maximum width of the popup is `660px` and the content is `420px`.",
    },
    hideHeader: {
      control: "boolean",
      description:
        "You can hide the header of the modal. It's useful when you want to use the modal as a bottom sheet.",
    },
    customPaddings: {
      control: { type: "text" },
      description:
        "You can set custom desktop paddings for the modal. Write it like the usual css style. For example: `20px 40px`",
    },
    customPaddingsMobile: {
      control: { type: "text" },
      description:
        "You can set custom mobile paddings for the modal. Write it like the usual css style. For example: `20px 40px`",
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const modalRef = React.useRef<any>(null);

  return (
    <div className="iconsWrap">
      <Modal
        ref={modalRef}
        {...args}
        dataAttrs={{
          "data-attr": "test",
        }}
      />
      <Button
        label="Trigger Modal"
        onClick={() => {
          modalRef.current.open();
        }}
      />
    </div>
  );
};

export const Popup = Template.bind({});
Popup.args = {
  title: "Modal Title",
  smallTitle: false,
  isBottomSheet: false,
  isOpen: false,
  closeOutside: true,
  hideHeader: false,
  children: (
    <>
      <p>
        Its expensive to raise a child. Make saving for education a team effort
        that’s fun and stress-free. Supercharge your savings with a tax-free 529
        investment account. You need support, and Backer is here to help.
      </p>
      <br />
      <p>
        Hi, Im the Dumi component. Use me when you need to show that any content
        can be in my place. You can replace me with any other component. Such
        components include, for example, popovers, which can have more than just
        a header and text inside. Here are the steps on how to replace the
        content inside of me: Create a content frame that you want to see
        instead of this placeholder. Create a local component (dont publish it).
        Click on this placeholder and replace it with the component you just
        created.
      </p>
      <br />
      <p>
        Its expensive to raise a child. Make saving for education a team effort
        that’s fun and stress-free. Supercharge your savings with a tax-free 529
        investment account. You need support, and Backer is here to help.
      </p>
    </>
  ),
  popupClassName: "",
  popupContentClassName: "",
};

export const BottomSheet = Template.bind({});
BottomSheet.args = {
  title: "Modal Title",
  smallTitle: true,
  isBottomSheet: true,
  isOpen: false,
  closeOutside: true,
  hideHeader: false,
  children: (
    <>
      <p>
        Its expensive to raise a child. Make saving for education a team effort
        that’s fun and stress-free. Supercharge your savings with a tax-free 529
        investment account. You need support, and Backer is here to help.
      </p>
      <br />
      <p>
        Hi, Im the Dumi component. Use me when you need to show that any content
        can be in my place. You can replace me with any other component. Such
        components include, for example, popovers, which can have more than just
        a header and text inside. Here are the steps on how to replace the
        content inside of me: Create a content frame that you want to see
        instead of this placeholder. Create a local component (dont publish it).
        Click on this placeholder and replace it with the component you just
        created.
      </p>
      <br />
      <p>
        Its expensive to raise a child. Make saving for education a team effort
        that’s fun and stress-free. Supercharge your savings with a tax-free 529
        investment account. You need support, and Backer is here to help.
      </p>
    </>
  ),
};

export const Buttons = Template.bind({});
Buttons.args = {
  title: "Funds",
  smallTitle: true,
  isBottomSheet: true,
  isOpen: false,
  closeOutside: true,
  customWidth: 420,
  hideHeader: false,
  children: (
    <>
      <p className="typo-app-body-main">
        Its expensive to raise a child. Make saving for education a team effort
        that’s fun and stress-free. Supercharge your savings with a tax-free 529
        investment account. You need support, and Backer is here to help.
      </p>

      <br />
      <p className="typo-app-body-main">
        Hi, Im the Dumi component. Use me when you need to show that any content
        can be in my place. You can replace me with any other component. Such
        components include, for example, popovers, which can have more than just
        a header and text inside. Here are the steps on how to replace the
        content inside of me: Create a content frame that you want to see
        instead of this placeholder.
      </p>

      <ModalButtons
        items={[
          {
            label: "Create a fund",
            onClick: () => {},
            icon: "plus-in-circle",
          },
          {
            label: "Send a gift",
            onClick: (event) => {
              console.log(event);
            },
            icon: "gift",
          },
        ]}
      />
    </>
  ),
};

const FocusTrapTemplate: ComponentStory<typeof Modal> = (args) => {
  const modalRef = React.useRef<any>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Modal ref={modalRef} {...args} />
      <p className="typo-app-body-paragraph">
        Hey there! We’ve started thinking about the future, and are putting
        together a team of people who want to support us along the way. We’d
        love to have you join us! You’ll be able to follow along as our kid
        grows up. And if you want to contribute to their college fund, you can
        do that too. 🎓 Hope you enjoy this first update! Tester Jr
      </p>
      <Button
        label="Trigger Modal"
        style={{
          maxWidth: "300px",
        }}
        onClick={() => {
          modalRef.current.open(() => {
            console.log("storybook, open");
          });
        }}
      />

      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h3>Other focus elements</h3>
        <button>some button</button>
        <input type="text" />
        <a href="https://github.com/focus-trap/focus-trap" target="_blank">
          focus-trap
        </a>
      </div>

      <p className="typo-app-body-paragraph">
        Hey there! We’ve started thinking about the future, and are putting
        together a team of people who want to support us along the way. We’d
        love to have you join us! You’ll be able to follow along as our kid
        grows up. And if you want to contribute to their college fund, you can
        do that too. 🎓 Hope you enjoy this first update! Tester Jr
      </p>
      <p className="typo-app-body-paragraph">
        We in Readymag are often asked how we choose to add exact features. In
        this landing page we shed light on the topic and wrap up the product
        updates rolled out in 2021. When deciding on the course of the
        development of Readymag, we lean on several sources of information:
        product interviews with all groups of users, customer support requests,
        feedback from our beta testers and communities in the social media along
        with the ideas of our design team. We use our tool for marketing
        purposes: all our landing pages, educational editorials, users stories
        and our main page are created with Readymag. Our slogan ‘Made by
        designers for designers’ is proven by practice every day.
      </p>

      <div
        style={{
          width: "100%",
          height: "600px",
          backgroundColor: "grey",
        }}
      >
        <span>div to create a scroll</span>
      </div>

      <p className="typo-app-body-paragraph">
        Hey there! We’ve started thinking about the future, and are putting
        together a team of people who want to support us along the way. We’d
        love to have you join us! You’ll be able to follow along as our kid
        grows up. And if you want to contribute to their college fund, you can
        do that too. 🎓 Hope you enjoy this first update! Tester Jr
      </p>

      <Button
        label="Trigger Modal"
        style={{
          maxWidth: "300px",
        }}
        onClick={() => {
          modalRef.current.open(() => {
            console.log("storybook, open");
          });
        }}
      />

      <p className="typo-app-body-paragraph">
        Hey there! We’ve started thinking about the future, and are putting
        together a team of people who want to support us along the way. We’d
        love to have you join us! You’ll be able to follow along as our kid
        grows up. And if you want to contribute to their college fund, you can
        do that too. 🎓 Hope you enjoy this first update! Tester Jr
      </p>
    </div>
  );
};

export const FocusTrap = FocusTrapTemplate.bind({});
FocusTrap.args = {
  title: "Funds",
  smallTitle: true,
  isBottomSheet: true,
  isOpen: false,
  closeOutside: true,
  customWidth: 420,
  hideHeader: false,
  children: (
    <>
      <p className="typo-app-body-main">
        Its expensive to raise a child. Make saving for education a team effort
        that’s fun and stress-free. Supercharge your savings with a tax-free 529
        investment account. You need support, and Backer is here to help.
      </p>

      <Accordion items={items} />

      <ModalButtons
        items={[
          {
            label: "Create a fund",
            onClick: () => {},
            icon: "plus-in-circle",
          },
          {
            label: "Send a gift",
            onClick: (event) => {
              console.log(event);
            },
            icon: "gift",
          },
        ]}
      />
    </>
  ),
};

const PlaygroundTemplate: ComponentStory<typeof Modal> = (args) => {
  const modalRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  }, [modalRef.current]);

  // console.log("rerender");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Modal ref={modalRef} {...args}>
        <div>
          <p
            className="typo-app-body-paragraph"
            style={{ marginBottom: "30px" }}
          >
            Hey there! We’ve started thinking about the future, and are putting
            together a team of people who want to support us along the way. We’d
            love to have you join us! You’ll be able to follow along as our kid
            grows up. And if you want to contribute to their college fund, you
            can do that too. 🎓
          </p>
        </div>
      </Modal>

      {/* <Modal ref={modalRef2} {...args}>
        <div>
          <h1>Hello!</h1>
          <p
            className="typo-app-body-paragraph"
            style={{ marginBottom: "30px" }}
          >
            The react developer tool used to show why a component was rendered,
            e.g. due to state change, context update or because of a rerender of
            the parent. This information can not be found in the flamegraph
            anymore.
          </p>
        </div>
      </Modal> */}

      <Button
        label="Trigger Modal"
        style={{
          maxWidth: "300px",
        }}
        onClick={() => {
          modalRef.current.open();
        }}
      />

      {/* <Button
        label="Trigger Modal"
        style={{
          maxWidth: "300px",
        }}
        onClick={() => {
          modalRef2.current.open();
        }}
      /> */}
    </div>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  title: "Funds",
  disableHeaderMarginDesktop: false,
  disableHeaderMarginMobile: false,
  smallTitle: true,
  isBottomSheet: true,
  showBackButton: true,
  isOpen: false,
  closeOutside: false,
  minHeight: "300px",
  hideHeader: false,
};
