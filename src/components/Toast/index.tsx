import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";

import Text from "../Text";
import Button from "../Button";

export interface Props {
  className?: string;
}

interface ItemProps {
  message: string;
  params?: {
    autoClose?: number | false;
    closeOnClick?: boolean;
    showCloseIcon?: boolean;
    dismissButton?: boolean;
  };
  isShown?: boolean;
}

const ToastItem: React.FC<ItemProps> = (props) => {
  const [isShown, setIsShown] = React.useState(props.isShown);
  const [isHidden, setIsHidden] = React.useState(false);

  const handleCloseOnParentClick = () => {
    console.log(props);
    if (props.params?.closeOnClick && !props.params?.dismissButton) {
      console.log("closeOnClick");
      setIsShown(false);
    }
  };

  const handleClose = () => {
    console.log("crossClick");
    setIsShown(false);
  };

  return !isHidden ? (
    <div
      className={`${styles.toastItemWrap} ${
        isShown ? styles.toastIn : styles.toastOut
      }`}
      onClick={handleCloseOnParentClick}
      onAnimationEnd={() => {
        if (!isShown) {
          console.log("onAnimationEnd");
          setIsHidden(true);
        }
      }}
    >
      <div className={styles.toastItem}>
        <div className={styles.toastItem__content}>
          <Text tag="p" context="app" appStyle="body-main">
            {props.message}
          </Text>

          {props.params?.dismissButton ? (
            <div className={styles.toastItem__buttons}>
              {props.params?.dismissButton ? (
                <Button
                  label="Dismiss"
                  size="small"
                  mode="outline"
                  style={{
                    minWidth: "auto",
                  }}
                  onClick={handleClose}
                />
              ) : null}
            </div>
          ) : null}
        </div>

        {props.params?.showCloseIcon ? (
          <div className={styles.toastItem__closeIcon} onClick={handleClose} />
        ) : null}
      </div>
    </div>
  ) : null;
};

const Toast = React.forwardRef<any, Props>((props, ref) => {
  const [toasts, setToasts] = React.useState<Array<ItemProps>>([]);

  React.useImperativeHandle(ref, () => ({
    showToast: (
      message: string,
      params: {
        autoClose?: number | false;
        closeOnClick?: boolean;
        showCloseIcon?: boolean;
        dismissButton?: boolean;
      }
    ) => {
      setToasts([
        ...toasts,
        {
          message,
          params: {
            autoClose: params?.autoClose ?? false,
            closeOnClick: params?.closeOnClick ?? true,
            showCloseIcon: params?.showCloseIcon ?? false,
            dismissButton: params?.dismissButton ?? false,
          },
        },
      ]);
    },
  }));

  return ReactDOM.createPortal(
    <aside
      id="backer-toast-container"
      className={`${styles.toastContainer} ${props.className}`}
    >
      {toasts.map((toast, index) => (
        <ToastItem
          key={index}
          message={toast.message}
          isShown={true}
          params={toast.params}
        />
      ))}
    </aside>,
    document.body
  );
});

Toast.displayName = "Toast";

Toast.defaultProps = {
  className: "",
} as Partial<Props>;

export default Toast;
