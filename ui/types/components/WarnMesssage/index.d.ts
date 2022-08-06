import { IconTypes, TargetTypes, AppTypographyTypes, MarketingTypographyTypes } from '../../../../lib/rollup-plugin-add-global-ts_@global'
import React from "react";
export interface Props {
    className?: string;
    type?: "success" | "error" | "warning";
    outline?: boolean;
    text?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage: React.FC<Props>;
export default WarnMesssage;
