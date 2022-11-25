import React from "react";
import Icon from "../Icon";
import PaymentLogo from "../PaymentLogo";

import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  icon?: IconTypes;
  paymentIcon?: PaymentLogoTypes;
  href?: string;
  target?: TargetTypes;
  label?: string;
  tag?: "button" | "a";
  isActive?: boolean;
  onClick?: (event: any) => void;
  onSubmit?: (event: any) => void;
  onKeyPress?: (event: any) => void;
}

const ButtonContent = ({ ...props }: Props) => {
  const iconStyles = props.label
    ? {
        marginLeft: "10px",
        marginRight: "-5px",
      }
    : {};

  return (
    <>
      {props.label ? (
        <span className={`${styles.text}`}>{props.label}</span>
      ) : null}

      {props.icon && (
        <Icon name={props.icon} className={styles.icon} style={iconStyles} />
      )}

      {props.paymentIcon && (
        <PaymentLogo
          className={styles.paymentLogo}
          style={iconStyles}
          name={props.paymentIcon}
        />
      )}
    </>
  );
};

const PillButton = React.forwardRef<any, Props>((props, ref) => {
  const classes = `${props.className} ${styles.button} ${
    props.isActive ? styles.active : ""
  }`;

  const style = {
    ...(props.style || {}),
  } as React.CSSProperties;

  const conditionalProps =
    props.tag === "a"
      ? {
          rel: "noreferrer",
          href: props.href,
          target: props.target,
          onSubmit: props.onSubmit,
        }
      : {
          type: props.type,
        };

  return (
    <props.tag
      ref={ref}
      className={classes}
      style={style}
      onClick={props.onClick}
      onKeyPress={props.onKeyPress}
      {...conditionalProps}
    >
      <ButtonContent {...props} />
    </props.tag>
  );
});

PillButton.defaultProps = {
  className: "",
  tag: "button",
  type: "button",
  href: "#",
  target: "_self",
  label: "Pill Button",
} as Partial<Props>;

export default PillButton;
