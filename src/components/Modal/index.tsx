import React from "react";

import BottomSheet from "./BottomSheet";
import Popup from "./Popup";

export interface Props {
  className?: string;
  isOpen?: boolean;
  popupClassName?: string;
  popupContentClassName?: string;
  title?: string;
  smallTitle?: boolean;
  children: React.ReactNode;
  customWidth?: number;
  isBottomSheet?: boolean;
  onCloseClick?: () => void;
}

const Modal = React.forwardRef<any, Props>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  const [isMobileBreakpoint, setIsMobileBreakpoint] = React.useState(false);

  //////////////
  // IMPERIAL //
  //////////////
  React.useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
  }));

  /////////////////
  // USE EFFECTS //
  /////////////////
  React.useEffect(() => {
    const resize = () => {
      // console.log(window.innerWidth, isMobileBreakpoint);
      setIsMobileBreakpoint(window.innerWidth < 620);
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleOnCloseClick = () => {
    if (props.onCloseClick) {
      props.onCloseClick();
    }

    setIsOpen(false);
  };

  return (
    <>
      <Popup
        {...props}
        isOpen={isOpen}
        smallTitle={props.smallTitle}
        popupClassName={props.popupClassName}
        popupContentClassName={props.popupContentClassName}
        onCloseClick={handleOnCloseClick}
        customWidth={props.customWidth}
        style={{
          visibility:
            props.isBottomSheet && isMobileBreakpoint ? "hidden" : "visible",
        }}
      />
      <BottomSheet
        {...props}
        isOpen={isOpen}
        smallTitle={props.smallTitle}
        onCloseClick={() => setIsOpen(false)}
        onCloseDrag={handleOnCloseClick}
        style={{
          visibility:
            props.isBottomSheet && isMobileBreakpoint ? "visible" : "hidden",
        }}
      />
    </>
  );
});

Modal.displayName = "Popup";

Modal.defaultProps = {
  className: "",
  isOpen: false,
  title: "",
  popupClassName: "",
  popupContentClassName: "",
  smallTitle: false,
  isBottomSheet: true,
  onCloseClick: () => {},
} as Partial<Props>;

export default Modal;
