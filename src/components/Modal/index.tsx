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
  children: React.ReactNode;
  customWidth?: number;
  isBottomSheet?: boolean;
  closeOutside?: boolean;
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
    } else {
      document.body.style.removeProperty("overflow");
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
          closeOutside={props.closeOutside}
          smallTitle={props.smallTitle}
          popupClassName={props.popupClassName}
          popupContentClassName={props.popupContentClassName}
          onCloseClick={handleOnCloseClick}
          onCloseDrag={handleOnCloseClick}
        />
      ) : (
        <Popup
          {...props}
          isMobileBreakpoint={isMobileBreakpoint}
          isOpen={isOpen}
          closeOutside={props.closeOutside}
          smallTitle={props.smallTitle}
          popupClassName={props.popupClassName}
          popupContentClassName={props.popupContentClassName}
          onCloseClick={handleOnCloseClick}
          customWidth={props.customWidth}
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
  smallTitle: false,
  isBottomSheet: false,
  closeOutside: true,
  onCloseClick: () => {},
} as Partial<Props>;

export default Modal;
