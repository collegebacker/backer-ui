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
    button?: {
      label: string;
      onClick: () => void;
    };
    emoji?: string;
    type?: "success" | "error" | "warning" | "info";
  };
  isShown?: boolean;
}

const addEmoji = (
  type: "success" | "error" | "warning" | "info",
  emoji: string
) => {
  switch (type) {
    case "success":
      return "🎉";
    case "error":
      return "⛔";
    case "warning":
      return "⚠️";
    case "info":
      return emoji;
    default:
      return emoji;
  }
};

const ToastItem: React.FC<ItemProps> = (props) => {
  const [isShown, setIsShown] = React.useState(props.isShown);
  const [isHidden, setIsHidden] = React.useState(false);

  const handleCloseOnParentClick = () => {
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
    <section
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
      <div className={`${styles.toastItem} ${styles[props.params?.type]}`}>
        {props.params?.emoji !== "" ? (
          <div className={styles.emoji}>
            {addEmoji(props.params?.type, props.params?.emoji)}
          </div>
        ) : null}

        <div className={styles.toastItem__content}>
          <Text tag="p" context="app" appStyle="body-main">
            {props.message}
          </Text>

          {props.params?.dismissButton || props.params?.button.label ? (
            <div className={styles.toastItem__buttons}>
              {props.params?.button.label ? (
                <Button
                  className={styles.toastItem__button}
                  onClick={props.params?.button.onClick}
                  label={props.params?.button.label}
                  size="small"
                  mode="outline"
                  style={{
                    minWidth: "auto",
                  }}
                />
              ) : null}

              {props.params?.dismissButton ? (
                <Button
                  className={styles.toastItem__button}
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
    </section>
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
        button?: {
          label: string | null;
          onClick: () => void | null;
        };
        emoji?: string;
        type?: "success" | "error" | "warning" | "info";
      }
    ) => {
      console.log(params);

      const toastProps = {
        message,
        params: {
          autoClose: params?.autoClose ?? false,
          closeOnClick: params?.closeOnClick ?? true,
          showCloseIcon: params?.showCloseIcon ?? false,
          dismissButton: params?.dismissButton ?? false,
          button: {
            label: params?.button?.label ?? null,
            onClick: params?.button?.onClick ?? null,
          },
          emoji: params?.emoji ?? "",
          type: params?.type ?? "info",
        },
      };

      setToasts([...toasts, toastProps]);
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
