import React from "react";
export interface Props {
  className?: string;
  style?: React.CSSProperties;
  name: IconTypes;
  color?: string;
}
declare const Icon: React.FC<Props>;
export default Icon;
