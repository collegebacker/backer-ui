import React from "react";
import ReactDOM from "react-dom";

import BottomSheet from "./BottomSheet";
import Popup from "./Popup";
import { useOutsideClick } from "../../hooks";

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

  const [isMobileBreakpoint, setIsMobileBreakpoint] = React.useState(false);

  const handleOpen = (callback: () => void) => {
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    if (props.isBottomSheet && isMobileBreakpoint) {
      bottomSheetRef.current.onAnimationFinished(
        (isAnimationFinished: boolean) => {
          if (isAnimationFinished) {
            bottomSheetRef.current?.open();

            if (callback) {
              callback();
            }
          }
        }
      );
    } else {
      popupRef.current.onAnimationFinished((isAnimationFinished: boolean) => {
        if (isAnimationFinished) {
          popupRef.current?.open();

          if (callback) {
            callback();
          }
        }
      });
    }
  };

  const handleClose = (callback: () => void) => {
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("touch-action");

    if (props.isBottomSheet && isMobileBreakpoint) {
      bottomSheetRef.current.onAnimationFinished(
        (isAnimationFinished: boolean) => {
          if (isAnimationFinished) {
            bottomSheetRef.current?.close();

            if (callback) {
              callback();
            }
          }
        }
      );
    } else {
      popupRef.current.onAnimationFinished((isAnimationFinished: boolean) => {
        if (isAnimationFinished) {
          popupRef.current?.close();

          if (callback) {
            callback();
          }
        }
      });
    }
  };

  //////////////
  // IMPERIAL //
  //////////////
  React.useImperativeHandle(ref, () => ({
    open: (callback: () => void) => {
      handleOpen(callback);
    },
    close: (callback: () => void) => {
      handleClose(callback);
    },
    getPopupRef: () => {
      return popupRef.current.getRef();
    },
    getBottomSheetRef: () => {
      return bottomSheetRef.current.getRef();
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

  // React.useEffect(() => {
  //   // console.log("isAnimationFinished");
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //     document.body.style.touchAction = "none";
  //     // bottomSheetRef.current?.open();
  //     // popupRef.current?.open();
  //     if (props.isBottomSheet && isMobileBreakpoint) {
  //       bottomSheetRef.current?.open();
  //     } else {
  //       // console.log("bottomSheetRef.current", bottomSheetRef.current);
  //       popupRef.current?.open();
  //     }
  //   } else {
  //     document.body.style.removeProperty("overflow");
  //     document.body.style.removeProperty("touch-action");
  //     if (props.isBottomSheet && isMobileBreakpoint) {
  //       bottomSheetRef.current?.close();
  //     } else {
  //       popupRef.current?.close();
  //     }
  //   }
  // }, [isMobileBreakpoint, props.isBottomSheet]);

  const handleOnCloseClick = () => {
    handleClose(() => props.onCloseClick());
  };

  //////////////
  /// RENDER ///
  //////////////

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
  maxSheetHeight: null,
} as Partial<Props>;

export default Modal;
