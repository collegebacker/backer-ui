import React, { useId } from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";

import ToastItem from "./ToastItem";

interface ItemProps {
  message: string;
  params?: ToastItemProps;
}

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4();
}

const Toast = React.forwardRef((_, ref) => {
  const [toasts, setToasts] = React.useState<Array<ItemProps>>([]);

  React.useImperativeHandle(ref, () => ({
    showToast: (message: string, params: ToastItemProps) => {
      const toastProps = {
        message,
        params: {
          closeOnClick: params?.closeOnClick ?? true,
          showCloseIcon: params?.showCloseIcon ?? false,
          dismissButton: params?.dismissButton ?? false,
          button: {
            label: params?.button?.label ?? null,
            onClick: params?.button?.onClick ?? null,
          },
          emoji: params?.emoji ?? "",
          type: params?.type ?? "info",
          timeout: params?.timeout ?? null,
        },
      };

      setToasts([...toasts, toastProps]);
    },
  }));

  return ReactDOM.createPortal(
    <aside id="backer-toast-container" className={styles.toastContainer}>
      {toasts.map((toast, index) => (
        <ToastItem key={index} message={toast.message} params={toast.params} />
      ))}
    </aside>,
    document.body
  );
});

Toast.displayName = "Toast";

export default Toast;
