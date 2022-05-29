import React from 'react';

interface Props$9 {
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
declare const Button: React.FC<Props$9>;

interface Props$8 {
    className?: string;
    style?: React.CSSProperties;
    name: IconTypes;
}
declare const Icon: React.FC<Props$8>;

interface Props$7 {
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
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (event: React.FormEvent<HTMLInputElement>) => void;
    onEnterKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onInvalid?: (event: React.FormEvent<HTMLInputElement>) => void;
}
declare const Input: React.ForwardRefExoticComponent<Props$7 & React.RefAttributes<any>>;

interface Props$6 {
    className?: string;
    type?: "default" | "foundation" | "sign";
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Props$6 & React.RefAttributes<any>>;

interface Props$5 {
    containterClassName?: string;
    arrowsClassName?: string;
    items: Array<ItemType>;
    defaultIndex?: number;
    showGuidelines?: boolean;
    cardWidth?: number;
    cardHeight?: number;
    activeCardScale?: number;
    spaceBetween?: number;
    caption?: boolean;
    cardFontSize?: number;
    onChange?: (index: number) => void;
}
declare const ChipsSlider: React.FC<Props$5>;

interface Props$4 {
    containterClassName?: string;
    paginationClassName?: string;
    arrowsClassName?: string;
    breakpoints?: Array<{
        breakpoint: number;
        cardsToShow: number;
    }>;
    spaceBetween?: number;
    showGuidelines?: boolean;
    hideArrows?: boolean;
    children: React.ReactNode;
    lastCard?: {
        label: string;
        onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    };
    onChange?: (index: number) => void;
}
declare const SliderWrapper: React.FC<Props$4>;

interface Props$3 {
    className?: string;
    disabled?: boolean;
    direction?: "left" | "right";
    style?: React.CSSProperties;
    onClick?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
}
declare const ArrowButton: React.ForwardRefExoticComponent<Props$3 & React.RefAttributes<any>>;

interface Props$2 {
    className?: string;
    totalAmount: number;
    activeIndex: number;
}
declare const DotPagination: React.FC<Props$2>;

interface Props$1 {
    className?: string;
}
declare const Divider: React.FC<Props$1>;

interface Props {
    className?: string;
    style?: React.CSSProperties;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "ul" | "ol" | "li";
    context?: "app" | "marketing";
    appStyle?: "title-xlarge" | "title-large" | "title-medium" | "title-small" | "body-large-paragraph" | "body-main" | "body-paragraph" | "body-caption";
    marketingStyle?: "xlarge" | "large" | "lead" | "lead-bold" | "lead-small" | "lead-small-bold" | "accent-paragraph" | "accent-paragraph-bold" | "paragraph" | "paragraph-bold" | "caption" | "caption-bold";
    [key: string]: any;
}
declare const Text: React.FC<Props>;

export { ArrowButton, Button, ChipsSlider, Divider, DotPagination, Icon, Input, Logo, SliderWrapper, Text };
