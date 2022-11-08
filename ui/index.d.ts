import React from 'react';

interface Props$q {
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
    form?: string;
    busy?: boolean;
    busyLabel?: string;
    tag?: "button" | "a";
    onClick?: (event: any) => void;
    onSubmit?: (event: any) => void;
    onKeyPress?: (event: any) => void;
}
declare const Button: React.ForwardRefExoticComponent<Props$q & React.RefAttributes<any>>;

interface Props$p {
    className?: string;
    style?: React.CSSProperties;
    name: IconTypes;
    color?: string;
    onClick?: () => void;
}
declare const Icon: React.FC<Props$p>;

interface Props$o {
    className?: string;
    style?: React.CSSProperties;
    mode?: "light" | "dark";
    name: "visa" | "paypal" | "apple-pay" | "apple-pay-framed" | "g-pay" | "g-pay-framed" | "mastercard";
}
declare const PaymentLogo: React.FC<Props$o>;

interface Props$n {
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
declare const Input: React.ForwardRefExoticComponent<Props$n & React.RefAttributes<any>>;

interface Props$m {
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
declare const GhostInput: React.ForwardRefExoticComponent<Props$m & React.RefAttributes<any>>;

interface Props$l {
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
declare const CodeInput: React.ForwardRefExoticComponent<Props$l & React.RefAttributes<any>>;

interface Props$k {
    className?: string;
    type?: "default" | "foundation" | "sign";
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Props$k & React.RefAttributes<any>>;

declare type ItemType$1 = {
    label: string;
    value: any;
    caption?: string;
};
interface Props$j {
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
declare const ChipsSlider: React.FC<Props$j>;

declare type ItemType = {
    label: string;
    value: any;
};
interface Props$i {
    className?: string;
    defaultIndex?: number;
    items: Array<ItemType>;
    onChange?: (index: number) => void;
}
declare const ChipsSelector: React.FC<Props$i>;

interface Props$h {
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
declare const SliderWrapper: React.FC<Props$h>;

interface Props$g {
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
declare const ArrowButton: React.ForwardRefExoticComponent<Props$g & React.RefAttributes<any>>;

interface Props$f {
    className?: string;
    style?: React.CSSProperties;
    totalAmount: number;
    activeIndex: number;
    visibleAmount?: number;
}
declare const DotPagination: React.FC<Props$f>;

interface Props$e {
    className?: string;
}
declare const Divider: React.FC<Props$e>;

interface Props$d {
    className?: string;
    style?: React.CSSProperties;
    size?: "small" | "medium-small" | "medium" | "large";
    color?: string;
}
declare const Spinner: React.FC<Props$d>;

interface Props$c {
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
declare const Modal: React.ForwardRefExoticComponent<Props$c & React.RefAttributes<any>>;

interface Props$b {
    className?: string;
    textClassName?: string;
    items: Array<{
        label: string;
        icon?: IconTypes;
        onClick: (event: any) => void;
    }>;
}
declare const ModalButtons: React.FC<Props$b>;

interface Props$a {
    className?: string;
    items: Array<{
        title: string;
        content: React.ReactElement;
    }>;
}
declare const Accordion: React.FC<Props$a>;

interface Props$9 {
    className?: string;
    type?: "success" | "error" | "warning";
    outline?: boolean;
    text?: string | React.ReactNode;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage$1: React.FC<Props$9>;

interface Props$8 {
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
declare const WarnMesssage: React.FC<Props$8>;

interface Props$7 {
    className?: string;
    mode?: "outline" | "grey" | "velvet" | "peach";
    title?: string;
    caption?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const ActionMesssage: React.FC<Props$7>;

declare const Toast: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;

interface Props$6 {
    isOpen?: boolean;
    zIndex?: number;
    delay?: number;
    text?: string;
    actions: Array<{
        label: string;
        onClick: () => void;
    }>;
}
declare const ActionSheet: React.ForwardRefExoticComponent<Props$6 & React.RefAttributes<any>>;

interface BreakpointProps {
    breakpoint?: number;
    cardsToShow?: number;
    sidePaddingOffset?: number;
    shiftHiddenCard?: number;
    disableSideFading?: boolean;
    hideArrows?: boolean;
}
interface Props$5 {
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
declare const CSSSlider: React.FC<Props$5>;

interface Props$4 {
    className?: string;
    count?: number;
    limit?: number;
}
declare const CountBadge: React.FC<Props$4>;

interface Props$3 {
    className?: string;
    name: string;
    image?: string;
    onClick?: () => void;
}
declare const FundProfilePic: React.FC<Props$3>;

interface Props$2 {
    id: string;
    name: string;
    value?: string;
    disabled?: boolean;
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const Checkbox: React.FC<Props$2>;

interface Props$1 {
    id: string;
    name: string;
    value?: string;
    disabled?: boolean;
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const Radio: React.FC<Props$1>;

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

export { Accordion, ActionMesssage, ActionSheet, ArrowButton, Button, CSSSlider, Checkbox, ChipsSelector, ChipsSlider, CodeInput, ContributionSuccessModal, CountBadge, Divider, DotPagination, FundContributionSection, GhostInput, Icon, WarnMesssage as InfoMesssage, Input, Logo, Modal, ModalButtons, PaymentLogo, FundProfilePic as ProfilePic, Radio, SliderWrapper, Spinner, Toast, WarnMesssage$1 as WarnMesssage };
