import React from "react";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  tag:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "a"
    | "ul"
    | "ol"
    | "li";
  context?: "app" | "marketing";
  appStyle?: AppTypographyTypes;
  marketingStyle?: MarketingTypographyTypes;
  [key: string]: any;
}

const Text: React.FC<Props> = (props) => {
  const { className, style, tag, context, appStyle, marketingStyle, ...rest } =
    props;

  return (
    <props.tag
      className={`${props.className} typo-${props.context}-${
        props.context === "app" ? props.appStyle : props.marketingStyle
      }`}
      style={{
        ...props.style,
      }}
      {...rest}
    >
      {props.children}
    </props.tag>
  );
};

Text.defaultProps = {
  className: "",
  tag: "p",
  context: "app",
  appStyle: "body-main",
  marketingStyle: "paragraph",
} as Partial<Props>;

export default Text;
