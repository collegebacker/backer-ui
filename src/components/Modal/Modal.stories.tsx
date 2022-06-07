import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal, Button } from "..";

localStorage.clear();

export default {
  title: "Misc/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          "To trigger the component, you need to creare a `ref` to the component `const ModalRef = React.useRef<any>(null)`. Then you can use the `open` method to open the modal like `() => ModalRef.current.open()`. To close the modal, you can use the `close` method.",
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

  const triggerPopup = () => {
    ModalRef.current.open();
  };

  return (
    <div className="iconsWrap">
      <Modal ref={ModalRef} {...args} />
      <Button onClick={triggerPopup}>Trigger Popup</Button>
    </div>
  );
};

export const Popup = Template.bind({});
Popup.args = {
  title: "Modal Title",
  smallTitle: false,
  isBottomSheet: false,
  isOpen: false,
  customWidth: 0,
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
  customWidth: 0,
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
