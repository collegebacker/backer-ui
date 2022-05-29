import React from "react";
import Icon from "../Icon";

import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  onClick?: (event: any) => void;
  mode?: "primary" | "accent" | "outline" | "ghost";
  size?: "default" | "small";
  type?: "button" | "link";
  behaviour?: "submit" | "reset";
  target?: TargetTypes;
  icon?: IconTypes;
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  maxWidth?: number;
}

// Description

const ButtonContent = ({ ...props }: Props) => {
  return (
    <>
      {props.children ? (
        <span className={`${styles.text}`}>{props.children}</span>
      ) : null}
      {props.icon ? (
        <Icon
          name={props.icon}
          className={styles.icon}
          style={
            props.children
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

const ButtonTag = ({ ...props }: Props) => {
  const handleClick = (event: any) => {
    event.preventDefault();

    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <button
      type={props.behaviour}
      className={`${props.className} ${styles.button} ${styles[props.mode]} ${
        styles[props.size]
      } ${props.disabled ? styles.disabled : ""} ${
        props.children
          ? styles[`minWidth-${props.size}`]
          : styles[`fixedSize-${props.size}`]
      }`}
      style={props.maxWidth ? { maxWidth: props.maxWidth } : {}}
      onClick={handleClick}
    >
      <ButtonContent {...props} />
    </button>
  );
};

const LinkTag = ({ ...props }: Props) => {
  return (
    <a
      className={`${props.className} ${styles.button} ${styles[props.mode]} ${
        styles[props.size]
      } ${props.disabled ? styles.disabled : ""} ${
        props.children
          ? styles[`minWidth-${props.size}`]
          : styles[`fixedSize-${props.size}`]
      }`}
      rel="noreferrer"
      href={props.href}
      style={
        props.maxWidth
          ? {
              maxWidth: props.maxWidth,
            }
          : {}
      }
      onClick={(e) => props.onClick(e)}
      target={props.target}
    >
      <ButtonContent {...props} />
    </a>
  );
};

const Button: React.FC<Props> = (props) => {
  return props.type === "button" ? (
    <ButtonTag {...props} />
  ) : (
    <LinkTag {...props} />
  );
};

Button.defaultProps = {
  className: "",
  mode: "primary",
  size: "default",
  type: "button",
  behaviour: "submit",
  href: "#",
  target: "_self",
  disabled: false,
  children: "Button",
} as Partial<Props>;

export default Button;
