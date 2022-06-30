import Icon from "../Icon";
import React from "react";
import Text from "../Text";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  type?: "text" | "password" | "number" | "email" | "money";
  required?: boolean;
  name: string;
  label?: string;
  value?: string;
  autoFocus?: boolean;
  placeholder?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  helperText?: string;
  id?: string;
  tabIndex?: number;
  currency?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLInputElement>) => void;
  onEnterKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onInvalid?: (event: React.FormEvent<HTMLInputElement>) => void;
}

const GhostInput = React.forwardRef<any, Props>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [val, setVal] = React.useState(props.value);

  React.useEffect(() => {
    if (props.isInvalid && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.isInvalid]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type === "money") {
      const value = e.target.value.replace(/[^0-9]/g, "");
      setVal(Number(value).toLocaleString("en-US"));
    }

    if (props.type === "text" || props.type === "password") {
      setVal(e.target.value);
    }

    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div
      ref={ref}
      className={`${styles.componentWrap} ${props.className} ${
        props.isInvalid ? styles.error : ""
      } ${props.type === "money" ? styles.money : ""} ${
        props.isInvalid ? styles.shake : ""
      }`}
    >
      <div className={`${styles.inputWrap}`}>
        {props.type === "money" ? (
          <span className={styles.moneySign}>{props.currency}</span>
        ) : null}

        {props.label !== "" ? (
          <Text
            tag="label"
            className={styles.label}
            htmlFor={props.name}
            context="app"
            appStyle="body-caption"
          >
            {props.label}
          </Text>
        ) : null}

        <input
          ref={inputRef}
          tabIndex={props.tabIndex}
          autoFocus={props.autoFocus}
          type={props.type}
          id={props.id ? props.id : props.name}
          name={props.name}
          className={`${styles.input}`}
          placeholder={props.placeholder}
          value={val}
          required={props.required}
          onChange={handleOnChange}
          onSubmit={props.onSubmit}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInvalid={props.onInvalid}
        />
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

GhostInput.displayName = "GhostInput";

GhostInput.defaultProps = {
  className: "",
  label: "Label",
  type: "text",
  value: "",
  currency: "$",
  required: false,
  autoFocus: false,
  isInvalid: false,
  errorMessage: "",
  placeholder: "Your name",
  hideSpinButton: true,
} as Partial<Props>;

export default GhostInput;
