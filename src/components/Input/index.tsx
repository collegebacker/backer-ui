import Icon from "../Icon";
import React from "react";
import Text from "../Text";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  type?: "text" | "password" | "number" | "email";
  required?: boolean;
  name: string;
  label?: string;
  value?: string;
  autoFocus?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  helperText?: string;
  hideSpinButton?: boolean;
  icon?: {
    name: IconTypes;
    onClick?: () => void;
  };
  id?: string;
  tabIndex?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLInputElement>) => void;
  onEnterKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onInvalid?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<any, Props>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [val, setVal] = React.useState(props.value);

  React.useImperativeHandle(ref, () => ({
    getValue: () => val,
    setValue: (value: string) => setVal(value),
  }));

  React.useEffect(() => {
    if (props.isInvalid && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.isInvalid]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.componentWrap} ${props.className} ${
        props.isInvalid ? styles.error : ""
      } ${props.isInvalid ? styles.shake : ""}`}
    >
      <div
        className={`${styles.inputWrap}`}
        style={{
          height: props.label !== "" ? "68px" : "40px",
        }}
      >
        {props.icon ? (
          <div
            onClick={props.icon.onClick}
            className={styles.icon}
            style={{
              pointerEvents: props.icon.onClick !== undefined ? "auto" : "none",
            }}
          >
            <Icon name={props.icon.name} />
          </div>
        ) : null}
        <input
          ref={inputRef}
          tabIndex={props.tabIndex}
          autoFocus={props.autoFocus}
          type={props.type}
          id={props.id ? props.id : props.name}
          name={props.name}
          className={`${styles.input} ${
            props.hideSpinButton ? styles.hideSpinButton : ""
          }`}
          placeholder="&nbsp;"
          value={val}
          required={props.required}
          onChange={handleOnChange}
          onSubmit={props.onSubmit}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInvalid={props.onInvalid}
        />

        {props.label !== "" ? (
          <label className={styles.label} htmlFor={props.name}>
            {props.label}
          </label>
        ) : null}
      </div>
      {props.helperText && !props.isInvalid ? (
        <Text
          className={styles.helperText}
          tag="span"
          context="app"
          appStyle="body-caption"
        >
          {props.helperText}
        </Text>
      ) : null}
      {props.isInvalid ? (
        <Text
          className={styles.helperText}
          tag="span"
          context="app"
          appStyle="body-caption"
        >
          {props.errorMessage}
        </Text>
      ) : null}
    </div>
  );
});

Input.displayName = "Input";

Input.defaultProps = {
  className: "",
  label: "Label",
  type: "text",
  required: false,
  autoFocus: false,
  isInvalid: false,
  errorMessage: "",
  hideSpinButton: true,
} as Partial<Props>;

export default Input;
