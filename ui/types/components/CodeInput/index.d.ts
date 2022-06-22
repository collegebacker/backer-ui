import React from "react";
export interface Props {
    tabIndex?: number;
    className?: string;
    style?: React.CSSProperties;
    errorMessage?: string;
    length?: number;
    resendText?: string;
    resendTimer?: number;
    onChange?: (event: any) => void;
    onResend?: (event: any) => void;
}
declare const CodeInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default CodeInput;
