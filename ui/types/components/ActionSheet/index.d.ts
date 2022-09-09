import React from "react";
export interface Props {
    isOpen?: boolean;
    zIndex?: number;
    delay?: number;
    text?: string;
    actions?: Array<{
        label: string;
        onClick: () => void;
    }>;
}
declare const ActionSheet: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default ActionSheet;
