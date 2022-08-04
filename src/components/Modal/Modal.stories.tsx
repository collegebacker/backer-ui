import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal, Button, Text, ModalButtons, Accordion } from "..";

localStorage.clear();

const items = [
  {
    title: "Why should I use Backer?",
    content: (
      <>
        <Text tag="p" context="marketing" marketingStyle="paragraph">
          Backer is the easiest way to save for college with help from family
          and friends. We&apos;ll help you invest your savings with a tax-free
          529 Savings Plan, which is like a retirement account for your
          child&apos;s education. It&apos;s a government-sponsored account and
          is the smartest way to avoid future student debt.
        </Text>
        <Text tag="p" context="marketing" marketingStyle="paragraph">
          With Backer, it&apos;s simple to involve family and friends in the
          process. These “backers” can quickly and easily contribute to your
          child&apos;s education fund and stay involved as your child gets
          closer to college. Our most active customers save 4x more by building
          a team of backers for their kids.
        </Text>
      </>
    ),
  },
  {
    title: "How does Backer help me save more for college?",
    content: (
      <Text tag="p" context="marketing" marketingStyle="paragraph">
        Studies have shown that simply having a college fund can dramatically
        improve educational outcomes. Backer amplifies this effect by having
        your family and friends chip in, and then investing all of the savings
        tax-free. We&apos;ve also noticed parents on our platform contribute
        more&nbsp;
        <em>themselves</em> when they have a team of friends and relatives along
        for the ride. Just like it&apos;s helpful to have a gym buddy or study
        buddy, having a team of backers for your kids is super motivating and
        helps you make much faster progress toward your savings goals.
      </Text>
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
          "To trigger the component, you need to creare a `ref` to the component `const ModalRef = React.useRef<any>(null)`. Then you can use the `open` method to open the modal like `() => ModalRef.current.open(callback)`. To close the modal, you can use the `close` method `() => ModalRef.current.close(callback)`",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description:
        "Title of the modal. If the string is empty we don't render the title.",
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
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const ModalRef = React.useRef<any>(null);

  return (
    <div className="iconsWrap">
      <Modal ref={ModalRef} {...args} />
      <Button
        label="Trigger Modal"
        onClick={() => {
          ModalRef.current.open(() => {
            // console.log("open");
          });
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
  children: (
    <>
      <Text tag="p" context="app" appStyle="body-main">
        Its expensive to raise a child. Make saving for education a team effort
        that’s fun and stress-free. Supercharge your savings with a tax-free 529
        investment account. You need support, and Backer is here to help.
      </Text>

      <br />
      <Text tag="p" context="app" appStyle="body-main">
        Hi, Im the Dumi component. Use me when you need to show that any content
        can be in my place. You can replace me with any other component. Such
        components include, for example, popovers, which can have more than just
        a header and text inside. Here are the steps on how to replace the
        content inside of me: Create a content frame that you want to see
        instead of this placeholder.
      </Text>

      <ModalButtons
        items={[
          {
            label: "Create a fund",
            onClick: () => {},
            icon: "plus-in-circle-left",
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
  const ModalRef = React.useRef<any>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Modal ref={ModalRef} {...args} />
      <Button
        label="Trigger Modal"
        style={{
          maxWidth: "300px",
        }}
        onClick={() => {
          ModalRef.current.open(() => {
            console.log("open");
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
  children: (
    <>
      <Text tag="p" context="app" appStyle="body-main">
        Its expensive to raise a child. Make saving for education a team effort
        that’s fun and stress-free. Supercharge your savings with a tax-free 529
        investment account. You need support, and Backer is here to help.
      </Text>

      <Accordion items={items} />

      <ModalButtons
        items={[
          {
            label: "Create a fund",
            onClick: () => {},
            icon: "plus-in-circle-left",
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
