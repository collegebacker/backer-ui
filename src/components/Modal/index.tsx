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
  minHeight?: string;
  customPaddings?: string;
  customPaddingsMobile?: string;
  isBottomSheet?: boolean;
  closeOutside?: boolean;
  dataAttrs?: Record<string, string>;
  maxSheetHeight?: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  onCloseClick?: () => void;
  animateSize?: (props: ModalAnimationSizeProps) => void;
}

const Modal = React.forwardRef<any, Props>((props, ref) => {
  const popupRef = React.useRef<any>(null);
  const bottomSheetRef = React.useRef<any>(null);

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
    getPopupRef: () => {
      return popupRef.current.getRef();
    },
    getBottomSheetRef: () => {
      return bottomSheetRef.current.getRef();
    },
    animateSize: (props: ModalAnimationSizeProps) => {
      popupRef.current.animateSize(props);
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
      document.body.style.touchAction = "none";

      bottomSheetRef.current?.open();
      popupRef.current?.open();

      if (props.isBottomSheet && isMobileBreakpoint) {
        bottomSheetRef.current?.open();
      } else {
        popupRef.current?.open();
      }
    } else {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("touch-action");

      if (props.isBottomSheet && isMobileBreakpoint) {
        bottomSheetRef.current?.close();
      } else {
        popupRef.current?.close();
      }
    }
  }, [isOpen, isMobileBreakpoint, props.isBottomSheet]);

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
          onCloseClick={handleOnCloseClick}
          ref={bottomSheetRef}
        />
      ) : (
        <Popup
          {...props}
          isMobileBreakpoint={isMobileBreakpoint}
          onCloseClick={handleOnCloseClick}
          ref={popupRef}
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
  maxSheetHeight: null,
} as Partial<Props>;

export default Modal;
