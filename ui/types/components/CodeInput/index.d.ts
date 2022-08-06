import { IconTypes, TargetTypes, AppTypographyTypes, MarketingTypographyTypes } from '../../../../lib/rollup-plugin-add-global-ts_@global'
import React from "react";
export interface Props {
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
declare const CodeInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default CodeInput;
