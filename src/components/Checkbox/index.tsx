import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  id: string;
  name: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  symbolClassName?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = (props) => {
  const [checked, setChecked] = React.useState(props.checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    props.onChange && props.onChange(e.target.checked);
  };

  return (
    <label
      htmlFor={props.id}
      className={`${styles.label} ${props.disabled ? styles.disabled : ""} ${
        props.className
      }`}
    >
      <span className={`${styles.wrap} ${props.symbolClassName}`}>
        <input
          id={props.id}
          name={props.name}
          type="checkbox"
          checked={checked}
          value={props.value}
          disabled={props.disabled}
          onChange={handleChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onKeyDown={props.onKeyDown}
        />
        <span className={styles.checkboxMock}>
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            className={styles.tick}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3.58333L3.86765 6.5L8.5 1.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      {props.label && (
        <span className={`${styles.labelText} ${props.labelClassName}`}>
          {props.label}
        </span>
      )}
    </label>
  );
};

Checkbox.defaultProps = {
  className: "",
  labelClassName: "",
  symbolClassName: "",
  disabled: false,
  checked: false,
} as Partial<Props>;

export default Checkbox;
