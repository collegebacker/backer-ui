import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  id: string;
  name: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = (props) => {
  const [checked, setChecked] = React.useState(props.checked);

  return (
    <span className={`${styles.wrap} ${props.className}`}>
      <input
        id={props.id}
        name={props.name}
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        value={props.value}
        disabled={props.disabled}
        onChange={(e) => {
          setChecked(e.target.checked);
          props.onChange?.(e.target.checked);
        }}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
      />
      <span
        className={`${styles.checkboxMock} ${checked ? styles.checked : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="8"
          fill="none"
        >
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M11.0426.48219c.2859.299647.2749.77439-.0248 1.06037l-6.28675 6c-.14572.13907-.34125.21368-.54257.20703-.20131-.00665-.3915-.09399-.52772-.24237l-3.213236-3.5c-.280126-.30513-.25986-.77957.045266-1.0597.305127-.28013.77957-.25986 1.05969.04527l2.69611 2.93672L9.98219.457441c.29961-.285979.77441-.274899 1.06041.024749Z"
          />
        </svg>
      </span>
    </span>
  );
};

Checkbox.defaultProps = {
  className: "",
  disabled: false,
  checked: false,
} as Partial<Props>;

export default Checkbox;
