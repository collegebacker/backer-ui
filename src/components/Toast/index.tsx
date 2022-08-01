import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.scss";

import Icon from "../Icon";
import Text from "../Text";

export interface Props {
  className?: string;
}

interface ItemProps {
  message: string;
  params?: {
    autoClose?: number | false;
    closeOnClick?: boolean;
    showCloseIcon?: boolean;
  };
}

const ToastItem: React.FC<ItemProps> = (props) => {
  const [isShown, setIsShown] = React.useState(true);

  const handleCloseOnClick = () => {
    if (props.params?.closeOnClick) {
      setIsShown(false);
    }
  };

  return (
    <section className={styles.item} onClick={handleCloseOnClick}>
      <Icon name="cross" className={styles.icon} />
      <h1>{props.message}</h1>
    </section>
  );
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
      }
    ) => {
      setToasts([...toasts, { message, params }]);
    },
  }));

  return ReactDOM.createPortal(
    <aside
      id="backer-toast-container"
      className={`${styles.toastContainer} ${props.className}`}
    >
      {toasts.map((toast, index) => (
        <ToastItem key={index} message={toast.message} />
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
