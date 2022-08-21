import React from 'react';

interface Props$k {
    className?: string;
    style?: React.CSSProperties;
    mode?: "primary" | "accent" | "outline" | "ghost";
    size?: "default" | "small";
    type?: "button" | "submit" | "reset";
    target?: TargetTypes;
    icon?: IconTypes;
    href?: string;
    disabled?: boolean;
    label?: string;
    maxWidth?: number;
    form?: string;
    busy?: boolean;
    busyLabel?: string;
    tag?: "button" | "a";
    onClick?: (event: any) => void;
    onSubmit?: (event: any) => void;
    onKeyPress?: (event: any) => void;
}
declare const Button: React.ForwardRefExoticComponent<Props$k & React.RefAttributes<any>>;

interface Props$j {
    className?: string;
    style?: React.CSSProperties;
    name: IconTypes;
    color?: string;
    onClick?: () => void;
}
declare const Icon: React.FC<Props$j>;

interface Props$i {
    className?: string;
    style?: React.CSSProperties;
    mode?: "light" | "dark";
    name: "visa" | "paypal" | "apple-pay" | "apple-pay-framed" | "g-pay" | "g-pay-framed" | "mastercard";
}
declare const PaymentLogo: React.FC<Props$i>;

interface Props$h {
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
declare const Input: React.ForwardRefExoticComponent<Props$h & React.RefAttributes<any>>;

interface Props$g {
    className?: string;
    type?: "text" | "password" | "number" | "email" | "money";
    allowCents?: boolean;
    maximumMoney?: number;
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
declare const GhostInput: React.ForwardRefExoticComponent<Props$g & React.RefAttributes<any>>;

interface Props$f {
    tabIndex?: number;
    className?: string;
    style?: React.CSSProperties;
    isInvalid?: boolean;
    errorMessage?: string;
    length?: number;
    resendText?: string;
    resendTimer?: number;
    onChange?: (nums: string) => void;
    onFocus?: (nums: string) => void;
    onResend?: (event: any) => void;
}
declare const CodeInput: React.ForwardRefExoticComponent<Props$f & React.RefAttributes<any>>;

interface Props$e {
    className?: string;
    type?: "default" | "foundation" | "sign";
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Props$e & React.RefAttributes<any>>;

declare type ItemType$1 = {
    label: string;
    value: any;
    caption?: string;
};
interface Props$d {
    containerClassName?: string;
    arrowsClassName?: string;
    items: Array<ItemType$1>;
    defaultIndex?: number;
    showGuidelines?: boolean;
    cardWidth?: number;
    cardHeight?: number;
    activeCardScale?: number;
    spaceBetween?: number;
    showCaption?: boolean;
    cardFontSize?: number;
    overlayGradientsClassName?: string;
    hideOverlayGradients?: boolean;
    alwaysShowOverlayGradients?: boolean;
    onChange?: (index: number) => void;
}
declare const ChipsSlider: React.FC<Props$d>;

declare type ItemType = {
    label: string;
    value: any;
};
interface Props$c {
    className?: string;
    defaultIndex?: number;
    items: Array<ItemType>;
    onChange?: (index: number) => void;
}
declare const ChipsSelector: React.FC<Props$c>;

interface Props$b {
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
declare const SliderWrapper: React.FC<Props$b>;

interface Props$a {
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
declare const ArrowButton: React.ForwardRefExoticComponent<Props$a & React.RefAttributes<any>>;

interface Props$9 {
    className?: string;
    totalAmount: number;
    activeIndex: number;
}
declare const DotPagination: React.FC<Props$9>;

interface Props$8 {
    className?: string;
}
declare const Divider: React.FC<Props$8>;

interface Props$7 {
    className?: string;
    style?: React.CSSProperties;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "ul" | "ol" | "li" | "label";
    context?: "app" | "marketing";
    appStyle?: AppTypographyTypes;
    marketingStyle?: MarketingTypographyTypes;
    [key: string]: any;
}
declare const Text: React.ForwardRefExoticComponent<Pick<Props$7, keyof Props$7> & React.RefAttributes<any>>;

interface Props$6 {
    className?: string;
    style?: React.CSSProperties;
    size?: "small" | "medium-small" | "medium" | "large";
    color?: string;
}
declare const Spinner: React.FC<Props$6>;

interface Props$5 {
    isOpen?: boolean;
    popupClassName?: string;
    popupContentClassName?: string;
    title?: string;
    smallTitle?: boolean;
    children: React.ReactNode;
    customWidth?: number;
    isBottomSheet?: boolean;
    closeOutside?: boolean;
    onCloseClick?: () => void;
}
declare const Modal: React.ForwardRefExoticComponent<Props$5 & React.RefAttributes<any>>;

interface Props$4 {
    className?: string;
    textClassName?: string;
    items: Array<{
        label: string;
        icon?: IconTypes;
        onClick: (event: any) => void;
    }>;
}
declare const ModalButtons: React.FC<Props$4>;

interface Props$3 {
    className?: string;
    items: Array<{
        title: string;
        content: React.ReactElement;
    }>;
}
declare const Accordion: React.FC<Props$3>;

interface Props$2 {
    className?: string;
    type?: "success" | "error" | "warning";
    outline?: boolean;
    text?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage$1: React.FC<Props$2>;

interface Props$1 {
    className?: string;
    orientation?: "left" | "right";
    mode?: "outline" | "grey" | "velvet" | "peach";
    icon?: IconTypes;
    emoji?: string;
    title?: string;
    caption?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage: React.FC<Props$1>;

interface Props {
    className?: string;
    mode?: "outline" | "grey" | "velvet" | "peach";
    title?: string;
    caption?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const ActionMesssage: React.FC<Props>;

declare const Toast: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;

export { Accordion, ActionMesssage, ArrowButton, Button, ChipsSelector, ChipsSlider, CodeInput, Divider, DotPagination, GhostInput, Icon, WarnMesssage as InfoMesssage, Input, Logo, Modal, ModalButtons, PaymentLogo, SliderWrapper, Spinner, Text, Toast, WarnMesssage$1 as WarnMesssage };
