import React from 'react';

interface Props$b {
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
declare const Button: React.FC<Props$b>;

interface Props$a {
    className?: string;
    style?: React.CSSProperties;
    name: IconTypes;
    color?: string;
}
declare const Icon: React.FC<Props$a>;

interface Props$9 {
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
declare const Input: React.ForwardRefExoticComponent<Props$9 & React.RefAttributes<any>>;

interface Props$8 {
    className?: string;
    type?: "default" | "foundation" | "sign";
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Props$8 & React.RefAttributes<any>>;

declare type ItemType = {
    label: string;
    value: any;
    caption?: string;
};
interface Props$7 {
    containerClassName?: string;
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
declare const ChipsSlider: React.FC<Props$7>;

interface Props$6 {
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
    onChange?: (index: number) => void;
}
declare const SliderWrapper: React.FC<Props$6>;

interface Props$5 {
    tabIndex?: number;
    className?: string;
    disabled?: boolean;
    direction?: "left" | "right";
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}
declare const ArrowButton: React.ForwardRefExoticComponent<Props$5 & React.RefAttributes<any>>;

interface Props$4 {
    className?: string;
    totalAmount: number;
    activeIndex: number;
}
declare const DotPagination: React.FC<Props$4>;

interface Props$3 {
    className?: string;
}
declare const Divider: React.FC<Props$3>;

interface Props$2 {
    className?: string;
    style?: React.CSSProperties;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "ul" | "ol" | "li";
    context?: "app" | "marketing";
    appStyle?: "title-xlarge" | "title-large" | "title-medium" | "title-small" | "body-large-paragraph" | "body-main" | "body-paragraph" | "body-caption";
    marketingStyle?: "xlarge" | "large" | "lead" | "lead-bold" | "lead-small" | "lead-small-bold" | "accent-paragraph" | "accent-paragraph-bold" | "paragraph" | "paragraph-bold" | "caption" | "caption-bold";
    [key: string]: any;
}
declare const Text: React.FC<Props$2>;

interface Props$1 {
    className?: string;
    style?: React.CSSProperties;
    size?: "small" | "medium-small" | "medium" | "large";
    color?: string;
}
declare const Spinner: React.FC<Props$1>;

interface Props {
    className?: string;
    isOpen?: boolean;
    popupClassName?: string;
    popupContentClassName?: string;
    title?: string;
    smallTitle?: boolean;
    children: React.ReactNode;
    customWidth?: number;
    isBottomSheet?: boolean;
    onCloseClick?: () => void;
}
declare const Modal: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;

export { ArrowButton, Button, ChipsSlider, Divider, DotPagination, Icon, Input, Logo, Modal, SliderWrapper, Spinner, Text };
