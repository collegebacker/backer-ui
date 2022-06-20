import React from "react";
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
declare const Button: React.FC<Props>;
export default Button;
