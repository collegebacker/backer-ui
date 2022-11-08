import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import gsap from "gsap";

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
          modalRef.current.open(() => {
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

const getContentHeight = (
  parentEl: HTMLDialogElement,
  contentEl: any,
  width: number
) => {
  // get parent paddings
  const parentElStyles = window.getComputedStyle(parentEl);
  const parentElPaddings =
    parseInt(parentElStyles.paddingLeft, 10) +
    parseInt(parentElStyles.paddingRight, 10);

  const newContentEl = contentEl.cloneNode(true);

  newContentEl.style.position = "absolute";
  newContentEl.style.top = "-9999px";
  newContentEl.style.left = "-9999px";
  newContentEl.style.height = "auto";
  newContentEl.style.width = `${width - parentElPaddings}px`;
  newContentEl.style.visibility = "hidden";
  newContentEl.style.overflow = "auto";

  document.body.appendChild(newContentEl);

  const height = newContentEl.offsetHeight;

  document.body.removeChild(newContentEl);

  // console.log("height", height);
  console.log("paddings", parentElPaddings);

  return height;
};

const isMobileBreakpoint = () => {
  return window.innerWidth < 621;
};

const SizeAnimationTemplate: ComponentStory<typeof Modal> = (args) => {
  const modalRef = React.useRef<any>(null);
  const contentRefs = React.useRef<any>([]);

  const animateModalContent = (
    fadeInIndex: number,
    fadeOutIndex: number,
    modalWidth: number
  ) => {
    const previousContent = contentRefs.current[fadeInIndex];
    const nextContent = contentRefs.current[fadeOutIndex];

    const animDuration = 0.4;
    const animEase = "power1.out";

    if (!isMobileBreakpoint()) {
      gsap.to(previousContent, {
        opacity: 0,
        duration: animDuration,
        ease: animEase,
        onComplete: () => {
          gsap.to(previousContent, {
            height: 0,
            duration: animDuration,
            ease: animEase,
          });

          modalRef.current.animateSize({
            size: {
              width: modalWidth,
            },
            delay: animDuration,
          });
        },
      });

      gsap.to(nextContent, {
        height: getContentHeight(
          modalRef.current.getPopupRef(),
          nextContent,
          modalWidth
        ),
        delay: animDuration,
        duration: animDuration,
        onComplete: () => {
          gsap.to(nextContent, {
            opacity: 1,
            duration: animDuration,
            delay: animDuration + 0.1,
            ease: animEase,

            onComplete: () => {
              gsap.to(nextContent, {
                height: "auto",
              });
            },
          });
        },
      });
    } else {
      gsap.to(previousContent, {
        opacity: 0,
        height: 0,
        x: -5,
        duration: animDuration,

        onComplete: () => {
          gsap.set(previousContent, {
            overflow: "hidden",
          });

          gsap.fromTo(
            nextContent,
            {
              x: 5,
            },
            {
              overflow: "visible",
              opacity: 1,
              height: "auto",
              duration: animDuration,
            }
          );
        },
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Modal ref={modalRef} {...args}>
        <div
          ref={(el) => {
            contentRefs.current[0] = el;
          }}
        >
          <p
            className="typo-app-body-paragraph"
            style={{ marginBottom: "30px" }}
          >
            Hey there! We’ve started thinking about the future, and are putting
            together a team of people who want to support us along the way. We’d
            love to have you join us! You’ll be able to follow along as our kid
            grows up. And if you want to contribute to their college fund, you
            can do that too. 🎓 Hope you enjoy this first update! Tester Jr Hey
            there! We’ve started thinking about the future, and are putting
            together a team of people who want to support us along the way. We’d
            love to have you join us! You’ll be able to follow along as our kid
            grows up. And if you want to contribute to their college fund, you
            can do that too. 🎓 Hope you enjoy this first update! Tester Jr
          </p>
          <Button
            label="animate to 400px"
            onClick={() => {
              animateModalContent(0, 1, 400);
            }}
            size="small"
          />
        </div>

        <div
          ref={(el) => {
            contentRefs.current[1] = el;
          }}
          style={{
            height: 0,
            opacity: 0,
            overflow: "hidden",
          }}
        >
          <p
            className="typo-app-body-paragraph"
            style={{ marginBottom: "30px" }}
          >
            The age-old saying goes: it takes a village. But today’s parents are
            more likely than ever to be raising their kid in isolation. We no
            longer have grandparents living just down the road, and new parents
            instead juggle full-time baby-raising alongside dual incomes, and
            little material or face-to-face support.
          </p>
          <Button
            label="animate to 800px"
            onClick={() => {
              animateModalContent(1, 2, 800);
            }}
            size="small"
          />
        </div>

        <div
          ref={(el) => {
            contentRefs.current[2] = el;
          }}
          style={{
            height: 0,
            opacity: 0,
            overflow: "hidden",
          }}
        >
          <p
            className="typo-app-body-paragraph"
            style={{ marginBottom: "30px" }}
          >
            The items are evenly distributed within the alignment container
            along the cross axis. The spacing between each pair of adjacent
            items is the same. The first item is flush with the start edge of
            the alignment container in the cross axis, and the last item is
            flush with the end edge of the alignment container in the cross
            axis.
          </p>
          <Button
            label="animate to 600px"
            onClick={() => {
              animateModalContent(2, 0, 600);
            }}
            size="small"
          />
        </div>
      </Modal>

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
    </div>
  );
};

export const SizeAnimation = SizeAnimationTemplate.bind({});
SizeAnimation.args = {
  title: "Funds",
  smallTitle: true,
  isBottomSheet: false,
  showBackButton: true,
  isOpen: false,
  closeOutside: true,
  customWidth: 420,
  minHeight: "300px",
  hideHeader: false,
};
