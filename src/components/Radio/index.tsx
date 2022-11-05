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

const Radio: React.FC<Props> = (props) => {
  const [checked, setChecked] = React.useState(props.checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    props.onChange && props.onChange(e.target.checked);
  };

  return (
    <span
      className={`${styles.wrap} ${checked ? styles.checked : ""} ${
        props.className
      } ${props.disabled ? styles.disabled : ""}`}
    >
      <input
        id={props.id}
        name={props.name}
        type="radio"
        checked={checked}
        value={props.value}
        disabled={props.disabled}
        onChange={handleChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
      />
      <span className={styles.radioMock} />
    </span>
  );
};

Radio.defaultProps = {
  className: "",
  disabled: false,
  checked: false,
} as Partial<Props>;

export default Radio;
