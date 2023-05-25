import React from 'react';
import { CleaveOptions } from 'cleave.js/options';
import { CalendarProps } from 'react-calendar';

interface ButtonIProps {
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
declare const Button: React.ForwardRefExoticComponent<ButtonIProps & React.RefAttributes<any>>;

interface PillButtonIProps {
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
declare const PillButton: React.ForwardRefExoticComponent<PillButtonIProps & React.RefAttributes<any>>;

interface IconIProps {
    className?: string;
    style?: React.CSSProperties;
    name: IconTypes;
    color?: string;
    onClick?: () => void;
}
declare const Icon: React.FC<IconIProps>;

interface PaymentLogoIProps {
    className?: string;
    style?: React.CSSProperties;
    mode?: 'light' | 'dark';
    name: PaymentLogoTypes;
}
declare const PaymentLogo: React.FC<PaymentLogoIProps>;

interface InputIProps {
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
declare const Input: React.ForwardRefExoticComponent<InputIProps & React.RefAttributes<HTMLInputElement>>;

interface GhostInputIProps {
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
declare const GhostInput: React.ForwardRefExoticComponent<GhostInputIProps & React.RefAttributes<any>>;

interface CodeInputIProps {
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
declare const CodeInput: React.ForwardRefExoticComponent<CodeInputIProps & React.RefAttributes<any>>;

interface LogoIProps {
    className?: string;
    type?: 'default' | 'foundation' | 'sign' | 'text';
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<LogoIProps & React.RefAttributes<any>>;

type ChipsSliderItemType = {
    label: string;
    value: any;
    caption?: string;
};
interface ChipsSliderIProps {
    containerClassName?: string;
    arrowsClassName?: string;
    items: Array<ChipsSliderItemType>;
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
declare const ChipsSlider: React.FC<ChipsSliderIProps>;

type ChipsSelectorItemType = {
    label: string;
    value: any;
};
interface ChipsSelectorIProps {
    className?: string;
    defaultIndex?: number;
    items: Array<ChipsSelectorItemType>;
    onChange?: (index: number) => void;
}
declare const ChipsSelector: React.FC<ChipsSelectorIProps>;

interface ArrowButtonIProps {
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
declare const ArrowButton: React.ForwardRefExoticComponent<ArrowButtonIProps & React.RefAttributes<any>>;

interface DotPaginationIProps {
    className?: string;
    style?: React.CSSProperties;
    totalAmount: number;
    activeIndex: number;
    visibleAmount?: number;
}
declare const DotPagination: React.FC<DotPaginationIProps>;

interface DividerIProps {
    className?: string;
}
declare const Divider: React.FC<DividerIProps>;

interface SpinnerIProps {
    className?: string;
    style?: React.CSSProperties;
    size?: 'small' | 'medium-small' | 'medium' | 'large';
    color?: string;
}
declare const Spinner: React.FC<SpinnerIProps>;

interface ModalIProps {
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
declare const Modal: React.ForwardRefExoticComponent<ModalIProps & React.RefAttributes<any>>;

interface ModalButtonsIProps {
    className?: string;
    textClassName?: string;
    style?: React.CSSProperties;
    items: Array<{
        label: string;
        icon?: IconTypes;
        onClick: (event: any) => void;
    }>;
}
declare const ModalButtons: React.FC<ModalButtonsIProps>;

interface AccordionIProps {
    className?: string;
    mode?: 'default' | 'app';
    items: Array<{
        title: string;
        content: React.ReactElement;
    }>;
}
declare const Accordion: React.FC<AccordionIProps>;

interface WarnMesssageIProps$1 {
    className?: string;
    type?: 'success' | 'error' | 'warning';
    outline?: boolean;
    text?: string | React.ReactNode | undefined | null;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage$1: React.FC<WarnMesssageIProps$1>;

interface LabelTagIProps {
    className?: string;
    style?: React.CSSProperties;
    icon?: IconTypes;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    color?: 'primary' | 'danger' | 'warning' | 'success' | 'peach' | 'velvet' | 'gray';
    widthLock?: boolean;
    outline?: boolean;
}
declare const LabelTag: React.FC<LabelTagIProps>;

interface WarnMesssageIProps {
    className?: string;
    orientation?: 'left' | 'right';
    mode?: 'outline' | 'grey' | 'velvet' | 'peach';
    icon?: IconTypes;
    emoji?: string;
    title?: string;
    labelTag?: LabelTagIProps;
    caption?: string | React.ReactNode;
    tabIndex?: number;
    undertitleContent?: React.ReactNode;
    undertitleContentClassName?: string;
    onClick?: () => void;
}
declare const WarnMesssage: React.FC<WarnMesssageIProps>;

interface ActionMesssageIProps {
    className?: string;
    undertitleContentClassName?: string;
    mode?: 'outline' | 'grey' | 'velvet' | 'peach';
    title?: string;
    undertitleContent?: React.ReactNode;
    caption?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const ActionMesssage: React.FC<ActionMesssageIProps>;

declare const Toast: React.ForwardRefExoticComponent<React.RefAttributes<ToastRef>>;

interface ActionSheetIProps {
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
declare const ActionSheet: React.ForwardRefExoticComponent<ActionSheetIProps & React.RefAttributes<any>>;

interface BreakpointProps {
    breakpoint?: number;
    cardsToShow?: number;
    sidePaddingOffset?: number;
    shiftHiddenCard?: number;
    disableSideFading?: boolean;
    hideArrows?: boolean;
}
interface CSSSliderIProps {
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
declare const CSSSlider: React.FC<CSSSliderIProps>;

interface CountBadgeIProps {
    className?: string;
    count?: number;
    limit?: number;
}
declare const CountBadge: React.FC<CountBadgeIProps>;

interface ProfilePicIProps {
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    imageSrc?: string;
    uploadMode?: boolean;
    onChange?: (imageFile: File) => void;
}
declare const ProfilePic: React.FC<ProfilePicIProps>;

interface CheckboxIProps {
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
declare const Checkbox: React.FC<CheckboxIProps>;

interface RadioIProps {
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
declare const Radio: React.FC<RadioIProps>;

interface CalendarIProps extends Partial<CalendarProps> {
    hideYearArrows?: boolean;
}
declare const Calendar: React.FC<CalendarIProps>;

interface RecurringDatePickerIProps {
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
declare const RecurringDatePicker: React.FC<RecurringDatePickerIProps>;

interface RangeInputIProps {
    className?: string;
    style?: React.CSSProperties;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    autofocus?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const RangeInput: React.FC<RangeInputIProps>;

interface PolaroidPhotoIProps {
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    uploadMode?: boolean;
    imageSrc?: string | undefined;
    onChange?: (imageFile: File) => void;
    onClick?: () => void;
    noHoverEffect?: boolean;
}
declare const PolaroidPhoto: React.FC<PolaroidPhotoIProps>;

interface ImageEditorIProps {
    className?: string;
    imageFile: string | File | undefined;
    isOpen?: boolean;
    onSubmit?: (imageData: string) => void;
    onClose?: () => void;
}
declare const ImageEditor: React.FC<ImageEditorIProps>;

interface BackButtonIProps {
    className?: string;
    style?: React.CSSProperties;
    label?: string;
    hasBackground?: boolean;
    onClick: () => void;
}
declare const BackButton: React.FC<BackButtonIProps>;

interface CloseButtonIProps {
    className?: string;
    style?: React.CSSProperties;
    onClick: () => void;
    hasBackground?: boolean;
}
declare const CloseButton: React.FC<CloseButtonIProps>;

interface DateInputIProps extends Omit<InputIProps, 'onChange'> {
    onChange(value: string): void;
}
declare const DateInput: React.FC<DateInputIProps>;

declare const PasswordInput: React.ForwardRefExoticComponent<InputIProps & React.RefAttributes<HTMLInputElement>>;

declare const SSNInput: React.ForwardRefExoticComponent<InputIProps & React.RefAttributes<HTMLInputElement>>;

declare const PhoneInput: React.ForwardRefExoticComponent<InputIProps & React.RefAttributes<HTMLInputElement>>;

declare const ZipInput: React.ForwardRefExoticComponent<InputIProps & React.RefAttributes<HTMLInputElement>>;

declare const StateInput: React.ForwardRefExoticComponent<InputIProps & React.RefAttributes<unknown>>;

interface DropdownIProps extends InputIProps {
    label: string;
    modalTitle?: string;
    modalDescription?: string;
    options: Array<SelectOptionType>;
    onSelect: (value: SelectOptionType) => void;
}
declare const SelectInput: React.FC<DropdownIProps>;

interface MoneyInputIProps {
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
declare const MoneyInput: React.ForwardRefExoticComponent<MoneyInputIProps & React.RefAttributes<HTMLInputElement>>;

interface TextareaIProps {
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
declare const Textarea: React.FC<TextareaIProps>;

interface CheckmarkIProps {
    className?: string;
    style?: React.CSSProperties;
    checked?: boolean;
    visibleOutline?: boolean;
    onChange?: (checked: boolean) => void;
}
declare const Checkmark: React.FC<CheckmarkIProps>;

interface ModalHeaderActionsIProps {
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
declare const ModalHeaderActions: React.FC<ModalHeaderActionsIProps>;

interface ListItemIProps {
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
    onClick?: (e?: React.MouseEvent) => void;
}
declare const ListItem: React.FC<ListItemIProps>;

interface SignaturePadIProps {
    className?: string;
    style?: React.CSSProperties;
    errorMessage?: string;
    onStartInteract?: () => void;
}
declare const SignaturePad: React.ForwardRefExoticComponent<SignaturePadIProps & React.RefAttributes<any>>;

type SwitchSelectorItemType = {
    label: string;
    value?: string;
    icon?: IconTypes;
    paymentIcon?: PaymentLogoTypes;
};
interface SwitchSelectorIProps {
    className?: string;
    activeIndex?: number;
    options: Array<SwitchSelectorItemType> | undefined;
    onChange: (option: SwitchSelectorOptionType) => void;
}
declare const SwitchSelector: React.FC<SwitchSelectorIProps>;

interface SelectModalIProps {
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
    customContent?: React.ReactElement;
}
declare const SelectModal: React.FC<SelectModalIProps>;

interface StackIProps extends React.HTMLAttributes<HTMLElement> {
    as?: 'section' | 'div' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav' | 'ul' | 'ol' | 'form' | 'label' | 'fieldset' | 'button' | 'input' | 'textarea' | 'select' | 'option' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'i' | 'blockquote' | 'code' | 'pre';
    direction?: 'row' | 'column';
    spacing?: 0 | 5 | 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | null;
    children: React.ReactNode;
}
declare const Stack: React.FC<StackIProps>;

interface SearchbarIProps {
    className?: string;
    placeholder?: string;
    value?: string;
    autoFocus?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Searchbar: React.FC<SearchbarIProps>;

interface NavbarIProps {
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
declare const Navbar: React.FC<NavbarIProps>;

interface SkeletonBodyIProps {
    className?: string;
    style?: React.CSSProperties;
    showBackground?: boolean;
    children?: React.ReactNode;
}
interface SkeletonBoneIProps {
    className?: string;
    style?: React.CSSProperties;
}
interface SkeletonTextProps extends SkeletonBoneIProps {
    fontSize: 'title-xlarge' | 'title-large' | 'title-medium' | 'title-medium-adaptive' | 'title-small' | 'body-large' | 'body-large-adaptive' | 'body-main' | 'body-caption';
    lines: number;
}
interface SkeletonButtonProps extends SkeletonBoneIProps {
    size?: 'default' | 'small' | 'pill';
}
declare const SkeletonBody: React.FC<SkeletonBodyIProps>;
declare const SkeletonBone: React.FC<SkeletonBoneIProps>;
declare const SkeletonText: React.FC<SkeletonTextProps>;
declare const SkeletonButton: React.FC<SkeletonButtonProps>;
declare const SkeletonProfilePic: React.FC<SkeletonBoneIProps>;

export { Accordion, ActionMesssage, ActionSheet, ArrowButton, BackButton, Button, CSSSlider, Calendar, Checkbox, Checkmark, ChipsSelector, ChipsSlider, CloseButton, CodeInput, CountBadge, DateInput, Divider, DotPagination, GhostInput, Icon, ImageEditor, WarnMesssage as InfoMesssage, Input, LabelTag, ListItem, Logo, Modal, ModalButtons, ModalHeaderActions, MoneyInput, Navbar, PasswordInput, PaymentLogo, PhoneInput, PillButton, PolaroidPhoto, ProfilePic, Radio, RangeInput, RecurringDatePicker, SSNInput, Searchbar, SelectInput, SelectModal, SignaturePad, SkeletonBody, SkeletonBone, SkeletonButton, SkeletonProfilePic, SkeletonText, Spinner, Stack, StateInput, SwitchSelector, Textarea, Toast, WarnMesssage$1 as WarnMesssage, ZipInput };
