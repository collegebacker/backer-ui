import React from 'react';
import { CalendarProps } from 'react-calendar';

interface Props$x {
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
declare const Button: React.ForwardRefExoticComponent<Props$x & React.RefAttributes<any>>;

interface Props$w {
    className?: string;
    style?: React.CSSProperties;
    type?: 'button' | 'submit' | 'reset';
    icon?: IconTypes;
    paymentIcon?: PaymentLogoTypes;
    href?: string;
    target?: TargetTypes;
    label?: string;
    tag?: 'button' | 'a';
    isActive?: boolean;
    onClick?: (event: any) => void;
    onSubmit?: (event: any) => void;
    onKeyPress?: (event: any) => void;
    areaLabel?: string;
    areaLabelledBy?: string;
}
declare const PillButton: React.ForwardRefExoticComponent<Props$w & React.RefAttributes<any>>;

interface Props$v {
    className?: string;
    style?: React.CSSProperties;
    name: IconTypes;
    color?: string;
    onClick?: () => void;
}
declare const Icon: React.FC<Props$v>;

interface Props$u {
    className?: string;
    style?: React.CSSProperties;
    mode?: "light" | "dark";
    name: PaymentLogoTypes;
}
declare const PaymentLogo: React.FC<Props$u>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isInvalid?: boolean;
    label?: string;
    name: string;
    errorMessage?: string;
    helperText?: string;
    errorAnimation?: boolean;
    hideSpinButton?: boolean;
    icon?: {
        name: IconTypes;
        onClick?: () => void;
    };
    isUncontrolled?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<any>>;

interface Props$t {
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
declare const GhostInput: React.ForwardRefExoticComponent<Props$t & React.RefAttributes<any>>;

interface Props$s {
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
declare const CodeInput: React.ForwardRefExoticComponent<Props$s & React.RefAttributes<any>>;

interface Props$r {
    className?: string;
    type?: "default" | "foundation" | "sign";
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Props$r & React.RefAttributes<any>>;

type ItemType$1 = {
    label: string;
    value: any;
    caption?: string;
};
interface Props$q {
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
declare const ChipsSlider: React.FC<Props$q>;

type ItemType = {
    label: string;
    value: any;
};
interface Props$p {
    className?: string;
    defaultIndex?: number;
    items: Array<ItemType>;
    onChange?: (index: number) => void;
}
declare const ChipsSelector: React.FC<Props$p>;

interface Props$o {
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
    paginationAlignment?: 'left' | 'right' | 'center';
    children: React.ReactNode;
    onChange?: (index: number) => void;
}
declare const SliderWrapper: React.FC<Props$o>;

interface Props$n {
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
declare const ArrowButton: React.ForwardRefExoticComponent<Props$n & React.RefAttributes<any>>;

interface Props$m {
    className?: string;
    style?: React.CSSProperties;
    totalAmount: number;
    activeIndex: number;
    visibleAmount?: number;
}
declare const DotPagination: React.FC<Props$m>;

interface Props$l {
    className?: string;
}
declare const Divider: React.FC<Props$l>;

interface Props$k {
    className?: string;
    style?: React.CSSProperties;
    size?: "small" | "medium-small" | "medium" | "large";
    color?: string;
}
declare const Spinner: React.FC<Props$k>;

interface Props$j {
    isOpen?: boolean;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    closeOnClickOutside?: boolean;
    showBackButton?: boolean;
    showCloseButton?: boolean;
    dataAttrs?: Record<string, string>;
    isBottomSheet?: boolean;
    onBackClick?: () => void;
    onCloseClick?: () => void;
}
declare const Modal: React.ForwardRefExoticComponent<Props$j & React.RefAttributes<any>>;

interface Props$i {
    className?: string;
    textClassName?: string;
    style?: React.CSSProperties;
    items: Array<{
        label: string;
        icon?: IconTypes;
        onClick: (event: any) => void;
    }>;
}
declare const ModalButtons: React.FC<Props$i>;

interface Props$h {
    className?: string;
    items: Array<{
        title: string;
        content: React.ReactElement;
    }>;
}
declare const Accordion: React.FC<Props$h>;

interface Props$g {
    className?: string;
    type?: "success" | "error" | "warning";
    outline?: boolean;
    text?: string | React.ReactNode;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage$1: React.FC<Props$g>;

interface Props$f {
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
declare const WarnMesssage: React.FC<Props$f>;

interface Props$e {
    className?: string;
    mode?: "outline" | "grey" | "velvet" | "peach";
    title?: string;
    caption?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const ActionMesssage: React.FC<Props$e>;

declare const Toast: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;

interface Props$d {
    isOpen?: boolean;
    zIndex?: number;
    delay?: number;
    text?: string;
    actions: Array<{
        label: string;
        onClick: () => void;
    }>;
}
declare const ActionSheet: React.ForwardRefExoticComponent<Props$d & React.RefAttributes<any>>;

interface BreakpointProps {
    breakpoint?: number;
    cardsToShow?: number;
    sidePaddingOffset?: number;
    shiftHiddenCard?: number;
    disableSideFading?: boolean;
    hideArrows?: boolean;
}
interface Props$c {
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
declare const CSSSlider: React.FC<Props$c>;

interface Props$b {
    className?: string;
    count?: number;
    limit?: number;
}
declare const CountBadge: React.FC<Props$b>;

interface Props$a {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    imageSrc?: string;
    onClick?: () => void;
}
declare const ProfilePic: React.FC<Props$a>;

interface Props$9 {
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
declare const Checkbox: React.FC<Props$9>;

interface Props$8 {
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
declare const Radio: React.FC<Props$8>;

interface NewProps {
    hideYearArrows?: boolean;
}
type Props$7 = NewProps & Partial<CalendarProps>;
declare const Calendar: React.FC<Props$7>;

interface Props$6 {
    days?: number;
    className?: string;
    dafaultValue?: number[];
    semimonthly?: boolean;
    showSwitcher?: boolean;
    onChange?: (date: {
        value: number[];
        isSemimonthly: boolean;
    }) => void;
}
declare const RecurringDatePicker: React.FC<Props$6>;

interface Props$5 {
    className?: string;
    style?: React.CSSProperties;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Slider: React.FC<Props$5>;

interface Props$4 {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    uploadMode?: boolean;
    imageSrc?: string | undefined;
    onChange?: (imageFile: File) => void;
}
declare const PolaroidPhoto: React.FC<Props$4>;

interface Props$3 {
    className?: string;
    imageFile: string | File | undefined;
    isOpen?: boolean;
    onSubmit?: (imageData: string) => void;
    onClose?: () => void;
}
declare const ImageEditor: React.FC<Props$3>;

interface Props$2 {
    className?: string;
    style?: React.CSSProperties;
    onClick: () => void;
}
declare const BackButton$1: React.FC<Props$2>;

interface Props$1 {
    className?: string;
    style?: React.CSSProperties;
    onClick: () => void;
}
declare const BackButton: React.FC<Props$1>;

interface Props extends InputProps {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    label?: string;
}
declare const DateInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;

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

export { Accordion, ActionMesssage, ActionSheet, ArrowButton, BackButton$1 as BackButton, Button, CSSSlider, Calendar, Checkbox, ChipsSelector, ChipsSlider, BackButton as CloseButton, CodeInput, CountBadge, DateInput, Divider, DotPagination, GhostInput, Icon, ImageEditor, WarnMesssage as InfoMesssage, Input, Logo, Modal, ModalButtons, PaymentLogo, PillButton, PolaroidPhoto, ProfilePic, Radio, RecurringDatePicker, SkeletonBody, SkeletonBone, SkeletonButton, SkeletonProfilePic, SkeletonText, Slider, SliderWrapper, Spinner, Toast, WarnMesssage$1 as WarnMesssage };
