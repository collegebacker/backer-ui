import React from 'react';

interface Props$e {
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
declare const Button: React.ForwardRefExoticComponent<Props$e & React.RefAttributes<any>>;

interface Props$d {
    className?: string;
    style?: React.CSSProperties;
    name: IconTypes;
    color?: string;
}
declare const Icon: React.FC<Props$d>;

interface Props$c {
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
declare const Input: React.ForwardRefExoticComponent<Props$c & React.RefAttributes<any>>;

interface Props$b {
    className?: string;
    type?: "text" | "password" | "number" | "email" | "money";
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
declare const GhostInput: React.ForwardRefExoticComponent<Props$b & React.RefAttributes<any>>;

interface Props$a {
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
declare const CodeInput: React.ForwardRefExoticComponent<Props$a & React.RefAttributes<any>>;

interface Props$9 {
    className?: string;
    type?: "default" | "foundation" | "sign";
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Props$9 & React.RefAttributes<any>>;

declare type ItemType = {
    label: string;
    value: any;
    caption?: string;
};
interface Props$8 {
    containerClassName?: string;
    arrowsClassName?: string;
    items: Array<ItemType>;
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
declare const ChipsSlider: React.FC<Props$8>;

interface Props$7 {
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
declare const SliderWrapper: React.FC<Props$7>;

interface Props$6 {
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
declare const ArrowButton: React.ForwardRefExoticComponent<Props$6 & React.RefAttributes<any>>;

interface Props$5 {
    className?: string;
    totalAmount: number;
    activeIndex: number;
}
declare const DotPagination: React.FC<Props$5>;

interface Props$4 {
    className?: string;
}
declare const Divider: React.FC<Props$4>;

interface Props$3 {
    className?: string;
    style?: React.CSSProperties;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "ul" | "ol" | "li" | "label";
    context?: "app" | "marketing";
    appStyle?: AppTypographyTypes;
    marketingStyle?: MarketingTypographyTypes;
    [key: string]: any;
}
declare const Text: React.FC<Props$3>;

interface Props$2 {
    className?: string;
    style?: React.CSSProperties;
    size?: "small" | "medium-small" | "medium" | "large";
    color?: string;
}
declare const Spinner: React.FC<Props$2>;

interface Props$1 {
    className?: string;
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
declare const Modal: React.ForwardRefExoticComponent<Props$1 & React.RefAttributes<any>>;

interface Props {
    className?: string;
    textClassName?: string;
    items: Array<{
        label: string;
        icon?: IconTypes;
        onClick: (event: any) => void;
    }>;
}
declare const ModalButtons: React.FC<Props>;

export { ArrowButton, Button, ChipsSlider, CodeInput, Divider, DotPagination, GhostInput, Icon, Input, Logo, Modal, ModalButtons, SliderWrapper, Spinner, Text };
