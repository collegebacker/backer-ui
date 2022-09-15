import React from "react";
import ReactDOM from "react-dom";

import BottomSheet from "./BottomSheet";
import Popup from "./Popup";

export interface Props {
  isOpen?: boolean;
  popupClassName?: string;
  popupContentClassName?: string;
  title?: string;
  smallTitle?: boolean;
  hideHeader?: boolean;
  children: React.ReactNode;
  customWidth?: number;
  customPaddings?: string;
  customPaddingsMobile?: string;
  isBottomSheet?: boolean;
  closeOutside?: boolean;
  dataAttrs?: Record<string, string>;
  onCloseClick?: () => void;
}

const Modal = React.forwardRef<any, Props>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  const [isMobileBreakpoint, setIsMobileBreakpoint] = React.useState(false);

  //////////////
  // IMPERIAL //
  //////////////
  React.useImperativeHandle(ref, () => ({
    open: (callback: () => void) => {
      setIsOpen(true);

      // console.log("open from inside");
      if (callback) {
        callback();
      }
    },
    close: (callback: () => void) => {
      setIsOpen(false);

      // console.log("close");
      if (callback) {
        callback();
      }
    },
  }));

  /////////////////
  // USE EFFECTS //
  /////////////////

  const mobilebreakpoint = 621;

  React.useEffect(() => {
    const resize = () => {
      setIsMobileBreakpoint(window.innerWidth < mobilebreakpoint);
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
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("width");
    }
  }, [isOpen]);

  const handleOnCloseClick = () => {
    if (props.onCloseClick) {
      props.onCloseClick();
    }

    setIsOpen(false);
  };

  return ReactDOM.createPortal(
    <>
      {props.isBottomSheet && isMobileBreakpoint ? (
        <BottomSheet
          {...props}
          isMobileBreakpoint={isMobileBreakpoint}
          isOpen={isOpen}
          onCloseClick={handleOnCloseClick}
        />
      ) : (
        <Popup
          {...props}
          isMobileBreakpoint={isMobileBreakpoint}
          isOpen={isOpen}
          onCloseClick={handleOnCloseClick}
        />
      )}
    </>,
    document.body
  );
});

Modal.displayName = "Modal";

Modal.defaultProps = {
  isOpen: false,
  title: "",
  popupClassName: "",
  popupContentClassName: "",
  hideHeader: false,
  smallTitle: false,
  isBottomSheet: false,
  closeOutside: true,
  onCloseClick: () => {},
} as Partial<Props>;

export default Modal;
