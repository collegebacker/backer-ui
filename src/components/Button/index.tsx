import React from "react";
import Icon from "../Icon";

import styles from "./styles.module.scss";
import Spinner from "../Spinner";

export interface Props {
  className?: string;
  mode?: "primary" | "accent" | "outline" | "ghost";
  size?: "default" | "small";
  type?: "button" | "submit" | "reset";
  target?: TargetTypes;
  icon?: IconTypes;
  href?: string;
  disabled?: boolean;
  label?: string;
  maxWidth?: number;
  tabIndex?: number;
  form?: string;
  busy?: boolean;
  busyLabel?: string;
  tag?: "button" | "a";
  onClick?: (event: any) => void;
  onSubmit?: (event: any) => void;
  onKeyPress?: (event: any) => void;
}

const ButtonContent = ({ ...props }: Props) => {
  return (
    <>
      {props.label ? (
        <span className={`${styles.text}`}>
          {!props.busy ? props.label : props.busyLabel}
        </span>
      ) : null}
      {props.icon && !props.busy ? (
        <Icon
          name={props.icon}
          className={styles.icon}
          style={
            props.label
              ? {
                  marginLeft: "10px",
                }
              : {}
          }
        />
      ) : null}

      {props.busy ? (
        <Spinner
          className={styles.spinner}
          size="medium-small"
          style={
            props.busyLabel && props.label
              ? {
                  marginLeft: "10px",
                }
              : {}
          }
        />
      ) : null}
    </>
  );
};

const ButtonTag = (props: Props) => {
  const handleClick = (event: any) => {
    event.preventDefault();

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <button
      tabIndex={props.tabIndex}
      className={`${props.className} ${styles.button} ${styles[props.mode]} ${
        styles[props.size]
      } ${props.disabled ? styles.disabled : ""} ${
        props.label
          ? styles[`minWidth-${props.size}`]
          : styles[`fixedSize-${props.size}`]
      }`}
      style={{
        ...(props.maxWidth ? { maxWidth: props.maxWidth } : {}),
        ...(props.busy ? { pointerEvents: "none" } : {}),
      }}
      onClick={handleClick}
      onKeyPress={props.onKeyPress}
      onSubmit={props.onSubmit}
      //
      type={props.type}
      form={props.form}
    >
      <ButtonContent {...props} />
    </button>
  );
};

const LinkTag = (props: Props) => {
  return (
    <a
      tabIndex={props.tabIndex}
      className={`${props.className} ${styles.button} ${styles[props.mode]} ${
        styles[props.size]
      } ${props.disabled ? styles.disabled : ""} ${
        props.label
          ? styles[`minWidth-${props.size}`]
          : styles[`fixedSize-${props.size}`]
      }`}
      style={{
        ...(props.maxWidth ? { maxWidth: props.maxWidth } : {}),
        ...(props.busy ? { pointerEvents: "none" } : {}),
      }}
      onClick={props.onClick}
      onKeyPress={props.onKeyPress}
      //
      rel="noreferrer"
      href={props.href}
      target={props.target}
    >
      <ButtonContent {...props} />
    </a>
  );
};

const Button: React.FC<Props> = (props) => {
  return props.tag === "button" ? (
    <ButtonTag {...props} />
  ) : (
    <LinkTag {...props} />
  );
};

Button.defaultProps = {
  className: "",
  mode: "primary",
  size: "default",
  tag: "button",
  type: "button",
  href: "#",
  target: "_self",
  busy: false,
  busyLabel: "",
  disabled: false,
  label: "Button",
} as Partial<Props>;

export default Button;
