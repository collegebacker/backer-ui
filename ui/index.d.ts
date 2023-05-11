import React from 'react';
import { CleaveOptions } from 'cleave.js/options';
import { CalendarProps } from 'react-calendar';

interface Props$F {
    className?: string;
    style?: React.CSSProperties;
    mode?: 'primary' | 'outline' | 'ghost' | 'outline-inverse';
    size?: 'default' | 'small';
    type?: 'button' | 'submit' | 'reset';
    target?: TargetTypes;
    rel?: string;
    icon?: IconTypes;
    href?: string;
    form?: string;
    disabled?: boolean;
    label?: string;
    maxWidth?: number;
    minWidth?: number;
    hasMinWidth?: boolean;
    busy?: boolean;
    busyLabel?: string;
    tag?: 'button' | 'a';
    onClick?: (event: any) => void;
    onSubmit?: (event: any) => void;
    onKeyDown?: (event: any) => void;
}
declare const Button: React.ForwardRefExoticComponent<Props$F & React.RefAttributes<any>>;

interface Props$E {
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
    allowPointerEvents?: boolean;
    onClick?: (event: any) => void;
    onSubmit?: (event: any) => void;
    onKeyDown?: (event: any) => void;
    areaLabel?: string;
    areaLabelledBy?: string;
}
declare const PillButton: React.ForwardRefExoticComponent<Props$E & React.RefAttributes<any>>;

interface Props$D {
    className?: string;
    style?: React.CSSProperties;
    name: IconTypes;
    color?: string;
    onClick?: () => void;
}
declare const Icon: React.FC<Props$D>;

interface Props$C {
    className?: string;
    style?: React.CSSProperties;
    mode?: 'light' | 'dark';
    name: PaymentLogoTypes;
}
declare const PaymentLogo: React.FC<Props$C>;

interface InputProps {
    cursor?: string;
    name: string;
    id?: string;
    label?: string;
    value?: string;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    pattern?: string;
    type?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    required?: boolean;
    tabIndex?: number;
    readOnly?: boolean;
    maxLength?: number;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    errorMessage?: string;
    helperText?: string;
    hideSpinButton?: boolean;
    noAutocomplete?: boolean;
    icon?: {
        name: IconTypes;
        onClick?: () => void;
    };
    cleaveOptions?: CleaveOptions;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface Props$B {
    className?: string;
    type?: 'text' | 'password' | 'number' | 'email' | 'money';
    allowCents?: boolean;
    maximumMoney?: number;
    required?: boolean;
    name: string;
    label?: string;
    value?: string;
    autoFocus?: boolean;
    placeholder?: string;
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
declare const GhostInput: React.ForwardRefExoticComponent<Props$B & React.RefAttributes<any>>;

interface Props$A {
    tabIndex?: number;
    className?: string;
    style?: React.CSSProperties;
    isInvalid?: boolean;
    errorMessage?: string;
    length?: number;
    resendText?: string;
    resendTimer?: number;
    autoFocus?: boolean;
    onChange?: (nums: string) => void;
    onFocus?: (nums: string) => void;
    onResend?: (event: any) => void;
}
declare const CodeInput: React.ForwardRefExoticComponent<Props$A & React.RefAttributes<any>>;

interface Props$z {
    className?: string;
    type?: 'default' | 'foundation' | 'sign' | 'text';
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Props$z & React.RefAttributes<any>>;

type ItemType$2 = {
    label: string;
    value: any;
    caption?: string;
};
interface Props$y {
    containerClassName?: string;
    arrowsClassName?: string;
    items: Array<ItemType$2>;
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
declare const ChipsSlider: React.FC<Props$y>;

type ItemType$1 = {
    label: string;
    value: any;
};
interface Props$x {
    className?: string;
    defaultIndex?: number;
    items: Array<ItemType$1>;
    onChange?: (index: number) => void;
}
declare const ChipsSelector: React.FC<Props$x>;

interface Props$w {
    tabIndex?: number;
    className?: string;
    disabled?: boolean;
    direction?: 'left' | 'right';
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}
declare const ArrowButton: React.ForwardRefExoticComponent<Props$w & React.RefAttributes<any>>;

interface Props$v {
    className?: string;
    style?: React.CSSProperties;
    totalAmount: number;
    activeIndex: number;
    visibleAmount?: number;
}
declare const DotPagination: React.FC<Props$v>;

interface Props$u {
    className?: string;
}
declare const Divider: React.FC<Props$u>;

interface Props$t {
    className?: string;
    style?: React.CSSProperties;
    size?: 'small' | 'medium-small' | 'medium' | 'large';
    color?: string;
}
declare const Spinner: React.FC<Props$t>;

interface Props$s {
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
declare const Modal: React.ForwardRefExoticComponent<Props$s & React.RefAttributes<any>>;

interface Props$r {
    className?: string;
    textClassName?: string;
    style?: React.CSSProperties;
    items: Array<{
        label: string;
        icon?: IconTypes;
        onClick: (event: any) => void;
    }>;
}
declare const ModalButtons: React.FC<Props$r>;

interface Props$q {
    className?: string;
    items: Array<{
        title: string;
        content: React.ReactElement;
    }>;
}
declare const Accordion: React.FC<Props$q>;

interface Props$p {
    className?: string;
    type?: 'success' | 'error' | 'warning';
    outline?: boolean;
    text?: string | React.ReactNode | undefined | null;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage$1: React.FC<Props$p>;

interface LabelTagProps {
    className?: string;
    style?: React.CSSProperties;
    icon?: IconTypes;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    color?: 'primary' | 'danger' | 'warning' | 'success' | 'peach' | 'velvet' | 'gray';
    widthLock?: boolean;
    outline?: boolean;
}
declare const LabelTag: React.FC<LabelTagProps>;

interface Props$o {
    className?: string;
    orientation?: 'left' | 'right';
    mode?: 'outline' | 'grey' | 'velvet' | 'peach';
    icon?: IconTypes;
    emoji?: string;
    title?: string;
    labelTag?: LabelTagProps;
    caption?: string | React.ReactNode;
    tabIndex?: number;
    undertitleContent?: React.ReactNode;
    undertitleContentClassName?: string;
    onClick?: () => void;
}
declare const WarnMesssage: React.FC<Props$o>;

interface Props$n {
    className?: string;
    undertitleContentClassName?: string;
    mode?: 'outline' | 'grey' | 'velvet' | 'peach';
    title?: string;
    undertitleContent?: React.ReactNode;
    caption?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const ActionMesssage: React.FC<Props$n>;

declare const Toast: React.ForwardRefExoticComponent<React.RefAttributes<ToastRef>>;

interface Props$m {
    isOpen?: boolean;
    zIndex?: number;
    delay?: number;
    text?: string;
    actions: Array<{
        label: string;
        disabled?: boolean;
        onClick: () => void;
    }>;
}
declare const ActionSheet: React.ForwardRefExoticComponent<Props$m & React.RefAttributes<any>>;

interface BreakpointProps {
    breakpoint?: number;
    cardsToShow?: number;
    sidePaddingOffset?: number;
    shiftHiddenCard?: number;
    disableSideFading?: boolean;
    hideArrows?: boolean;
}
interface Props$l {
    containterClassName?: string;
    paginationClassName?: string;
    spaceBetween?: number;
    arrowsOffset?: number;
    paginationAlignment?: 'center' | 'left' | 'right';
    children: React.ReactNode;
    onChange?: (index: number) => void;
    desktopBreakpoint?: BreakpointProps;
    tabletBreakpoint?: BreakpointProps;
    mobileBreakpoint?: BreakpointProps;
    defaultActiveCardIndex?: number;
}
declare const CSSSlider: React.FC<Props$l>;

interface Props$k {
    className?: string;
    count?: number;
    limit?: number;
}
declare const CountBadge: React.FC<Props$k>;

interface Props$j {
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    imageSrc?: string;
    uploadMode?: boolean;
    onChange?: (imageFile: File) => void;
}
declare const ProfilePic: React.FC<Props$j>;

interface Props$i {
    id: string;
    name: string;
    value?: string;
    disabled?: boolean;
    className?: string;
    checked?: boolean;
    children?: React.ReactNode;
    onChange?: (checked: boolean) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const Checkbox: React.FC<Props$i>;

interface Props$h {
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
    children?: React.ReactNode;
}
declare const Radio: React.FC<Props$h>;

interface NewProps {
    hideYearArrows?: boolean;
}
type Props$g = NewProps & Partial<CalendarProps>;
declare const Calendar: React.FC<Props$g>;

interface Props$f {
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
declare const RecurringDatePicker: React.FC<Props$f>;

interface Props$e {
    className?: string;
    style?: React.CSSProperties;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    autofocus?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const RangeInput: React.FC<Props$e>;

interface Props$d {
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    uploadMode?: boolean;
    imageSrc?: string | undefined;
    onChange?: (imageFile: File) => void;
    onClick?: () => void;
    noHoverEffect?: boolean;
}
declare const PolaroidPhoto: React.FC<Props$d>;

interface Props$c {
    className?: string;
    imageFile: string | File | undefined;
    isOpen?: boolean;
    onSubmit?: (imageData: string) => void;
    onClose?: () => void;
}
declare const ImageEditor: React.FC<Props$c>;

interface Props$b {
    className?: string;
    style?: React.CSSProperties;
    label?: string;
    hasBackground?: boolean;
    onClick: () => void;
}
declare const BackButton$1: React.FC<Props$b>;

interface Props$a {
    className?: string;
    style?: React.CSSProperties;
    onClick: () => void;
    hasBackground?: boolean;
}
declare const BackButton: React.FC<Props$a>;

type DateInputProps = Omit<InputProps, 'onChange'> & {
    onChange: (value: string) => void;
};
declare const DateInput: React.FC<DateInputProps>;

declare const PasswordInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const SSNInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const PhoneInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const ZipInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

declare const StateInput: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<unknown>>;

interface DropdownProps extends InputProps {
    label: string;
    modalTitle?: string;
    modalDescription?: string;
    options: Array<SelectOptionType>;
    onSelect: (value: SelectOptionType) => void;
}
declare const SelectInput: React.FC<DropdownProps>;

interface MoneyInputProps {
    className?: string;
    style?: React.CSSProperties;
    decimals?: boolean;
    maxAmount?: number;
    name?: string;
    label?: string;
    value?: string | number;
    errorMessage?: string;
    onChange?: (e: {
        target: {
            value: number;
            name: string;
        };
    }) => void;
}
declare const MoneyInput: React.ForwardRefExoticComponent<MoneyInputProps & React.RefAttributes<HTMLInputElement>>;

interface Props$9 {
    className?: string;
    style?: React.CSSProperties;
    label?: string;
    value?: string;
    rows?: number;
    helperText?: string;
    errorMessage?: string;
    autoFocus?: boolean;
    autoHeight?: boolean;
    onChange?: (value: string) => void;
}
declare const Textarea: React.FC<Props$9>;

interface Props$8 {
    className?: string;
    style?: React.CSSProperties;
    checked?: boolean;
    visibleOutline?: boolean;
    onChange?: (checked: boolean) => void;
}
declare const Checkmark: React.FC<Props$8>;

interface Props$7 {
    className?: string;
    style?: React.CSSProperties;
    cancelButton?: {
        label?: string;
        onClick?: () => void;
        disabled?: boolean;
        show?: boolean;
    };
    saveButton?: {
        label?: string;
        onClick?: () => void;
        disabled?: boolean;
        show?: boolean;
    };
}
declare const ModalHeaderActions: React.FC<Props$7>;

interface Props$6 {
    className?: string;
    rightContentClassName?: string;
    middleContentClassName?: string;
    leftContentClassName?: string;
    style?: React.CSSProperties;
    topLabel?: React.ReactNode;
    titleLarge?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    divider?: boolean;
    rightContent?: React.ReactNode;
    middleContent?: React.ReactNode;
    leftContent?: React.ReactNode;
    chevron?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
declare const ListItem: React.FC<Props$6>;

interface Props$5 {
    className?: string;
    style?: React.CSSProperties;
    errorMessage?: string;
    onStartInteract?: () => void;
}
declare const SignaturePad: React.ForwardRefExoticComponent<Props$5 & React.RefAttributes<any>>;

type ItemType = {
    label: string;
    value?: string;
    icon?: IconTypes;
    paymentIcon?: PaymentLogoTypes;
};
interface Props$4 {
    className?: string;
    activeIndex?: number;
    options: Array<ItemType> | undefined;
    onChange: (option: SwitchSelectorOptionType) => void;
}
declare const SwitchSelector: React.FC<Props$4>;

interface Props$3 {
    isOpen?: boolean;
    modalTitle?: string;
    modalDescription?: string;
    value?: string;
    options: Array<{
        label: string;
        value: string;
        className?: string;
    }>;
    closeOnSelect?: boolean;
    onSelect: (value: SelectOptionType) => void;
    onCloseClick?: () => void;
}
declare const SelectModal: React.FC<Props$3>;

interface Props$2 extends React.HTMLAttributes<HTMLElement> {
    as?: 'section' | 'div' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav' | 'ul' | 'ol' | 'form' | 'label' | 'fieldset' | 'button' | 'input' | 'textarea' | 'select' | 'option' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'i' | 'blockquote' | 'code' | 'pre';
    direction?: 'row' | 'column';
    spacing?: 0 | 5 | 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | null;
    children: React.ReactNode;
}
declare const Stack: React.FC<Props$2>;

interface Props$1 {
    className?: string;
    placeholder?: string;
    value?: string;
    autoFocus?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Searchbar: React.FC<Props$1>;

interface Props {
    className?: string;
    style?: React.CSSProperties;
    backButtonClick?: () => void;
    backButtonLabel?: string;
    backButtonStartColumn?: number;
    onCloseClick?: () => void;
    logoLink?: string | null;
    hideLogo?: boolean;
    hideLogoOnMobile?: boolean;
    buttons?: Array<{
        label?: string;
        icon?: IconTypes;
        onClick?: () => void;
    }>;
}
declare const Navbar: React.FC<Props>;

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
    fontSize: 'title-xlarge' | 'title-large' | 'title-medium' | 'title-medium-adaptive' | 'title-small' | 'body-large' | 'body-large-adaptive' | 'body-main' | 'body-caption';
    lines: number;
}
interface SkeletonButtonProps extends SkeletonBoneProps {
    size?: 'default' | 'small' | 'pill';
}
declare const SkeletonBody: React.FC<SkeletonBodyProps>;
declare const SkeletonBone: React.FC<SkeletonBoneProps>;
declare const SkeletonText: React.FC<SkeletonTextProps>;
declare const SkeletonButton: React.FC<SkeletonButtonProps>;
declare const SkeletonProfilePic: React.FC<SkeletonBoneProps>;

export { Accordion, ActionMesssage, ActionSheet, ArrowButton, BackButton$1 as BackButton, Button, CSSSlider, Calendar, Checkbox, Checkmark, ChipsSelector, ChipsSlider, BackButton as CloseButton, CodeInput, CountBadge, DateInput, Divider, DotPagination, GhostInput, Icon, ImageEditor, WarnMesssage as InfoMesssage, Input, LabelTag, ListItem, Logo, Modal, ModalButtons, ModalHeaderActions, MoneyInput, Navbar, PasswordInput, PaymentLogo, PhoneInput, PillButton, PolaroidPhoto, ProfilePic, Radio, RangeInput, RecurringDatePicker, SSNInput, Searchbar, SelectInput, SelectModal, SignaturePad, SkeletonBody, SkeletonBone, SkeletonButton, SkeletonProfilePic, SkeletonText, Spinner, Stack, StateInput, SwitchSelector, Textarea, Toast, WarnMesssage$1 as WarnMesssage, ZipInput };
