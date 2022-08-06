import { IconTypes, TargetTypes, AppTypographyTypes, MarketingTypographyTypes } from '../../../../lib/rollup-plugin-add-global-ts_@global'
import React from "react";
export interface Props {
    className?: string;
    textClassName?: string;
    items: Array<{
        label: string;
        icon?: IconTypes;
        onClick: (event: any) => void;
    }>;
}
declare const ModalButtons: React.FC<Props>;
export default ModalButtons;
