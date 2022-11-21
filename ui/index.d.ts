import React from 'react';

interface Props$r {
    className?: string;
    style?: React.CSSProperties;
    mode?: "primary" | "accent" | "outline" | "ghost" | "outline-inverse";
    size?: "default" | "small";
    type?: "button" | "submit" | "reset";
    target?: TargetTypes;
    icon?: IconTypes;
    href?: string;
    disabled?: boolean;
    label?: string;
    maxWidth?: number;
    minWidth?: boolean;
    form?: string;
    busy?: boolean;
    busyLabel?: string;
    tag?: "button" | "a";
    onClick?: (event: any) => void;
    onSubmit?: (event: any) => void;
    onKeyPress?: (event: any) => void;
}
declare const Button: React.ForwardRefExoticComponent<Props$r & React.RefAttributes<any>>;

interface Props$q {
    className?: string;
    style?: React.CSSProperties;
    name: IconTypes;
    color?: string;
    onClick?: () => void;
}
declare const Icon: React.FC<Props$q>;

interface Props$p {
    className?: string;
    style?: React.CSSProperties;
    mode?: "light" | "dark";
    name: "visa" | "paypal" | "apple-pay" | "apple-pay-framed" | "g-pay" | "g-pay-framed" | "mastercard";
}
declare const PaymentLogo: React.FC<Props$p>;

interface Props$o {
    className?: string;
    type?: "text" | "password" | "number" | "email";
    required?: boolean;
    disabled?: boolean;
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
declare const Input: React.ForwardRefExoticComponent<Props$o & React.RefAttributes<any>>;

interface Props$n {
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
declare const GhostInput: React.ForwardRefExoticComponent<Props$n & React.RefAttributes<any>>;

interface Props$m {
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
declare const CodeInput: React.ForwardRefExoticComponent<Props$m & React.RefAttributes<any>>;

interface Props$l {
    className?: string;
    type?: "default" | "foundation" | "sign";
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Props$l & React.RefAttributes<any>>;

declare type ItemType$1 = {
    label: string;
    value: any;
    caption?: string;
};
interface Props$k {
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
    showArrows?: boolean;
    cardFontSize?: number;
    overlayGradientsClassName?: string;
    hideOverlayGradients?: boolean;
    alwaysShowOverlayGradients?: boolean;
    onChange?: (index: number) => void;
}
declare const ChipsSlider: React.FC<Props$k>;

declare type ItemType = {
    label: string;
    value: any;
};
interface Props$j {
    className?: string;
    defaultIndex?: number;
    items: Array<ItemType>;
    onChange?: (index: number) => void;
}
declare const ChipsSelector: React.FC<Props$j>;

interface Props$i {
    containterClassName?: string;
    paginationClassName?: string;
    arrowsClassName?: string;
    breakpoints?: Array<{
        breakpoint: number;
        cardsToShow: number;
        sidePaddingOffset?: number;
        hideArrows?: boolean;
        hidePagination?: boolean;
        showHiddenCard?: number | boolean;
        disableSideFading?: boolean;
    }>;
    spaceBetween?: number;
    showGuidelines?: boolean;
    paginationAlignment?: "left" | "right" | "center";
    children: React.ReactNode;
    onChange?: (index: number) => void;
}
declare const SliderWrapper: React.FC<Props$i>;

interface Props$h {
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
declare const ArrowButton: React.ForwardRefExoticComponent<Props$h & React.RefAttributes<any>>;

interface Props$g {
    className?: string;
    style?: React.CSSProperties;
    totalAmount: number;
    activeIndex: number;
    visibleAmount?: number;
}
declare const DotPagination: React.FC<Props$g>;

interface Props$f {
    className?: string;
}
declare const Divider: React.FC<Props$f>;

interface Props$e {
    className?: string;
    style?: React.CSSProperties;
    size?: "small" | "medium-small" | "medium" | "large";
    color?: string;
}
declare const Spinner: React.FC<Props$e>;

interface Props$d {
    isOpen?: boolean;
    popupClassName?: string;
    popupContentClassName?: string;
    title?: string;
    smallTitle?: boolean;
    hideHeader?: boolean;
    children: React.ReactNode;
    customWidth?: number;
    minHeight?: string;
    customPaddings?: string;
    customPaddingsMobile?: string;
    isBottomSheet?: boolean;
    closeOutside?: boolean;
    dataAttrs?: Record<string, string>;
    maxSheetHeight?: string;
    showBackButton?: boolean;
    onBackClick?: () => void;
    onCloseClick?: () => void;
    animateSize?: (props: ModalAnimationSizeProps) => void;
}
declare const Modal: React.ForwardRefExoticComponent<Props$d & React.RefAttributes<any>>;

interface Props$c {
    className?: string;
    textClassName?: string;
    items: Array<{
        label: string;
        icon?: IconTypes;
        onClick: (event: any) => void;
    }>;
}
declare const ModalButtons: React.FC<Props$c>;

interface Props$b {
    className?: string;
    items: Array<{
        title: string;
        content: React.ReactElement;
    }>;
}
declare const Accordion: React.FC<Props$b>;

interface Props$a {
    className?: string;
    type?: "success" | "error" | "warning";
    outline?: boolean;
    text?: string | React.ReactNode;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage$1: React.FC<Props$a>;

interface Props$9 {
    className?: string;
    orientation?: "left" | "right";
    mode?: "outline" | "grey" | "velvet" | "peach";
    icon?: IconTypes;
    emoji?: string;
    title?: string;
    caption?: string | React.ReactNode;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage: React.FC<Props$9>;

interface Props$8 {
    className?: string;
    mode?: "outline" | "grey" | "velvet" | "peach";
    title?: string;
    caption?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const ActionMesssage: React.FC<Props$8>;

declare const Toast: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;

interface Props$7 {
    isOpen?: boolean;
    zIndex?: number;
    delay?: number;
    text?: string;
    actions: Array<{
        label: string;
        onClick: () => void;
    }>;
}
declare const ActionSheet: React.ForwardRefExoticComponent<Props$7 & React.RefAttributes<any>>;

interface BreakpointProps {
    breakpoint?: number;
    cardsToShow?: number;
    sidePaddingOffset?: number;
    shiftHiddenCard?: number;
    disableSideFading?: boolean;
    hideArrows?: boolean;
}
interface Props$6 {
    containterClassName?: string;
    spaceBetween?: number;
    arrowsOffset?: number;
    paginationAlignment?: "center" | "left" | "right";
    children: React.ReactNode;
    onChange?: (index: number) => void;
    desktopBreakpoint?: BreakpointProps;
    tabletBreakpoint?: BreakpointProps;
    mobileBreakpoint?: BreakpointProps;
}
declare const CSSSlider: React.FC<Props$6>;

interface Props$5 {
    className?: string;
    count?: number;
    limit?: number;
}
declare const CountBadge: React.FC<Props$5>;

interface Props$4 {
    className?: string;
    name: string;
    image?: string;
    onClick?: () => void;
}
declare const FundProfilePic: React.FC<Props$4>;

interface Props$3 {
    id: string;
    name: string;
    value?: string;
    label?: string;
    disabled?: boolean;
    className?: string;
    labelClassName?: string;
    symbolClassName?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const Checkbox: React.FC<Props$3>;

interface Props$2 {
    id: string;
    name: string;
    value?: string;
    label?: string;
    disabled?: boolean;
    className?: string;
    labelClassName?: string;
    symbolClassName?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const Radio: React.FC<Props$2>;

interface Props$1 {
    className?: string;
    style?: React.CSSProperties;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "ul" | "ol" | "li" | "label";
    context?: "app" | "marketing";
    appStyle?: AppTypographyTypes;
    marketingStyle?: MarketingTypographyTypes;
    [key: string]: any;
}
declare const Text: React.ForwardRefExoticComponent<Pick<Props$1, keyof Props$1> & React.RefAttributes<any>>;

declare type durationType = "onetime" | "3months" | "6months" | "1year" | "untilcollege";
declare type frequencyType = "onetime" | "monthly" | "semimonthly";
interface Props {
    onCloseClick?: any;
    contribution: {
        amount: number;
        duration: durationType;
        frequency: frequencyType;
        gift?: boolean;
        firstContribution?: boolean;
        fundName: string;
        recipientName?: string;
        recipientParentName?: string;
        photoUrl?: string;
    };
    fund?: boolean;
    ref: React.RefObject<any>;
}
declare const ContributionSuccessModal: React.ForwardRefExoticComponent<Pick<Props, "onCloseClick" | "contribution" | "fund"> & React.RefAttributes<any>>;

interface ContributionProps {
    handle: string;
    appUrl: string;
}
declare const FundContributionSection: React.FC<ContributionProps>;

export { Accordion, ActionMesssage, ActionSheet, ArrowButton, Button, CSSSlider, Checkbox, ChipsSelector, ChipsSlider, CodeInput, ContributionSuccessModal, CountBadge, Divider, DotPagination, FundContributionSection, GhostInput, Icon, WarnMesssage as InfoMesssage, Input, Logo, Modal, ModalButtons, PaymentLogo, FundProfilePic as ProfilePic, Radio, SliderWrapper, Spinner, Text, Toast, WarnMesssage$1 as WarnMesssage };
