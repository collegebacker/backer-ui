import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
}

const Toast: React.FC<Props> = (props) => {
  const toastRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const toastWrapper = document.querySelector(`#toast-wrapper`);

    if (toastWrapper) {
      toastWrapper.appendChild(toastRef.current);
    } else {
      const wrapper = document.createElement("div");
      wrapper.id = "toast-wrapper";
      wrapper.className = styles.wrapper;
      document.body.appendChild(wrapper);
      wrapper.appendChild(toastRef.current);
    }
  }, []);

  return (
    <div className={`${styles.toast} ${props.className}`} ref={toastRef}>
      hello
    </div>
  );
};

Toast.defaultProps = {
  className: "",
} as Partial<Props>;

export default Toast;
