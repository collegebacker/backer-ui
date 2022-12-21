import React from 'react';
import { CalendarProps } from 'react-calendar';

interface Props$v {
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
declare const Button: React.ForwardRefExoticComponent<Props$v & React.RefAttributes<any>>;

interface Props$u {
    className?: string;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset";
    icon?: IconTypes;
    paymentIcon?: PaymentLogoTypes;
    href?: string;
    target?: TargetTypes;
    label?: string;
    tag?: "button" | "a";
    isActive?: boolean;
    onClick?: (event: any) => void;
    onSubmit?: (event: any) => void;
    onKeyPress?: (event: any) => void;
    areaLabel?: string;
    areaLabelledBy?: string;
}
declare const PillButton: React.ForwardRefExoticComponent<Props$u & React.RefAttributes<any>>;

interface Props$t {
    className?: string;
    style?: React.CSSProperties;
    name: IconTypes;
    color?: string;
    onClick?: () => void;
}
declare const Icon: React.FC<Props$t>;

interface Props$s {
    className?: string;
    style?: React.CSSProperties;
    mode?: "light" | "dark";
    name: PaymentLogoTypes;
}
declare const PaymentLogo: React.FC<Props$s>;

interface Props$r {
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
declare const Input: React.ForwardRefExoticComponent<Props$r & React.RefAttributes<any>>;

interface Props$q {
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
declare const GhostInput: React.ForwardRefExoticComponent<Props$q & React.RefAttributes<any>>;

interface Props$p {
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
declare const CodeInput: React.ForwardRefExoticComponent<Props$p & React.RefAttributes<any>>;

interface Props$o {
    className?: string;
    type?: "default" | "foundation" | "sign";
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Props$o & React.RefAttributes<any>>;

declare type ItemType$1 = {
    label: string;
    value: any;
    caption?: string;
};
interface Props$n {
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
declare const ChipsSlider: React.FC<Props$n>;

declare type ItemType = {
    label: string;
    value: any;
};
interface Props$m {
    className?: string;
    defaultIndex?: number;
    items: Array<ItemType>;
    onChange?: (index: number) => void;
}
declare const ChipsSelector: React.FC<Props$m>;

interface Props$l {
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
declare const SliderWrapper: React.FC<Props$l>;

interface Props$k {
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
declare const ArrowButton: React.ForwardRefExoticComponent<Props$k & React.RefAttributes<any>>;

interface Props$j {
    className?: string;
    style?: React.CSSProperties;
    totalAmount: number;
    activeIndex: number;
    visibleAmount?: number;
}
declare const DotPagination: React.FC<Props$j>;

interface Props$i {
    className?: string;
}
declare const Divider: React.FC<Props$i>;

interface Props$h {
    className?: string;
    style?: React.CSSProperties;
    size?: "small" | "medium-small" | "medium" | "large";
    color?: string;
}
declare const Spinner: React.FC<Props$h>;

interface Props$g {
    isOpen?: boolean;
    popupClassName?: string;
    popupContentClassName?: string;
    title?: string;
    smallTitle?: boolean;
    hideHeader?: boolean;
    children: React.ReactNode;
    customWidth?: number;
    customPaddings?: string;
    customPaddingsMobile?: string;
    isBottomSheet?: boolean;
    closeOutside?: boolean;
    dataAttrs?: Record<string, string>;
    maxSheetHeight?: string;
    showBackButton?: boolean;
    disableHeaderMarginMobile?: boolean;
    disableHeaderMarginDesktop?: boolean;
    onBackClick?: () => void;
    onCloseClick?: () => void;
    animateSize?: (props: ModalAnimationSizeProps) => void;
}
declare const Modal: React.ForwardRefExoticComponent<Props$g & React.RefAttributes<any>>;

interface Props$f {
    className?: string;
    textClassName?: string;
    items: Array<{
        label: string;
        icon?: IconTypes;
        onClick: (event: any) => void;
    }>;
}
declare const ModalButtons: React.FC<Props$f>;

interface Props$e {
    className?: string;
    items: Array<{
        title: string;
        content: React.ReactElement;
    }>;
}
declare const Accordion: React.FC<Props$e>;

interface Props$d {
    className?: string;
    type?: "success" | "error" | "warning";
    outline?: boolean;
    text?: string | React.ReactNode;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage$1: React.FC<Props$d>;

interface Props$c {
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
declare const WarnMesssage: React.FC<Props$c>;

interface Props$b {
    className?: string;
    mode?: "outline" | "grey" | "velvet" | "peach";
    title?: string;
    caption?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const ActionMesssage: React.FC<Props$b>;

declare const Toast: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;

interface Props$a {
    isOpen?: boolean;
    zIndex?: number;
    delay?: number;
    text?: string;
    actions: Array<{
        label: string;
        onClick: () => void;
    }>;
}
declare const ActionSheet: React.ForwardRefExoticComponent<Props$a & React.RefAttributes<any>>;

interface BreakpointProps {
    breakpoint?: number;
    cardsToShow?: number;
    sidePaddingOffset?: number;
    shiftHiddenCard?: number;
    disableSideFading?: boolean;
    hideArrows?: boolean;
}
interface Props$9 {
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
declare const CSSSlider: React.FC<Props$9>;

interface Props$8 {
    className?: string;
    count?: number;
    limit?: number;
}
declare const CountBadge: React.FC<Props$8>;

interface Props$7 {
    className?: string;
    name: string;
    image?: string;
    onClick?: () => void;
}
declare const ProfilePic: React.FC<Props$7>;

interface Props$6 {
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
declare const Checkbox: React.FC<Props$6>;

interface Props$5 {
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
declare const Radio: React.FC<Props$5>;

interface Props$4 {
    className?: string;
    style?: React.CSSProperties;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "ul" | "ol" | "li" | "label";
    context?: "app" | "marketing";
    appStyle?: AppTypographyTypes;
    marketingStyle?: MarketingTypographyTypes;
    [key: string]: any;
}
declare const Text: React.ForwardRefExoticComponent<Pick<Props$4, keyof Props$4> & React.RefAttributes<any>>;

interface NewProps {
    hideYearArrows?: boolean;
}
declare type Props$3 = NewProps & Partial<CalendarProps>;
declare const Calendar: React.FC<Props$3>;

interface Props$2 {
    className?: string;
    style?: React.CSSProperties;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Slider: React.FC<Props$2>;

interface Props$1 {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    uploadMode?: boolean;
    imageSrc?: string | undefined;
    onChange?: (imageFile: File) => void;
}
declare const PolaroidPhoto: React.FC<Props$1>;

interface Props {
    className?: string;
    imageFile: string | File | undefined;
    isOpen?: boolean;
    onSubmit?: (imageData: string) => void;
    onClose?: () => void;
}
declare const ImageEditor: React.FC<Props>;

interface SkeletonBodyProps {
    className?: string;
    style?: React.CSSProperties;
    showBackground?: boolean;
    children?: React.ReactNode;
}
interface SkeletonBoneProps {
    className?: string;
    style?: React.CSSProperties;
}
interface SkeletonTextProps extends SkeletonBoneProps {
    fontSize: "title-xlarge" | "title-large" | "title-medium" | "title-medium-adaptive" | "title-small" | "body-large" | "body-large-adaptive" | "body-main" | "body-caption";
    lines: number;
}
interface SkeletonButtonProps extends SkeletonBoneProps {
    size?: "default" | "small" | "pill";
}
declare const SkeletonBody: React.FC<SkeletonBodyProps>;
declare const SkeletonBone: React.FC<SkeletonBoneProps>;
declare const SkeletonText: React.FC<SkeletonTextProps>;
declare const SkeletonButton: React.FC<SkeletonButtonProps>;
declare const SkeletonProfilePic: React.FC<SkeletonBoneProps>;

export { Accordion, ActionMesssage, ActionSheet, ArrowButton, Button, CSSSlider, Calendar, Checkbox, ChipsSelector, ChipsSlider, CodeInput, CountBadge, Divider, DotPagination, GhostInput, Icon, ImageEditor, WarnMesssage as InfoMesssage, Input, Logo, Modal, ModalButtons, PaymentLogo, PillButton, PolaroidPhoto, ProfilePic, Radio, SkeletonBody, SkeletonBone, SkeletonButton, SkeletonProfilePic, SkeletonText, Slider, SliderWrapper, Spinner, Text, Toast, WarnMesssage$1 as WarnMesssage };
