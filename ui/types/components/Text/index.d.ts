import React from "react";
export interface Props {
    className?: string;
    style?: React.CSSProperties;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "ul" | "ol" | "li";
    context?: "app" | "marketing";
    appStyle?: "title-xlarge" | "title-large" | "title-medium" | "title-small" | "body-large-paragraph" | "body-main" | "body-paragraph" | "body-caption";
    marketingStyle?: "xlarge" | "large" | "lead" | "lead-bold" | "lead-small" | "lead-small-bold" | "accent-paragraph" | "accent-paragraph-bold" | "paragraph" | "paragraph-bold" | "caption" | "caption-bold";
    [key: string]: any;
}
declare const Text: React.FC<Props>;
export default Text;
