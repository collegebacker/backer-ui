import { IconTypes, TargetTypes, AppTypographyTypes, MarketingTypographyTypes } from '../../../../../lib/rollup-plugin-add-global-ts_@global'
import React from "react";
interface Props {
    className?: string;
    isOpen: boolean;
    closeOutside: boolean;
    title?: string;
    smallTitle: boolean;
    children: React.ReactNode;
    isMobileBreakpoint: boolean;
    style?: React.CSSProperties;
    onCloseClick?: () => void;
    onCloseDrag?: () => void;
}
declare const BottomSheet: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default BottomSheet;
