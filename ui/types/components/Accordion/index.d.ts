import { IconTypes, TargetTypes, AppTypographyTypes, MarketingTypographyTypes } from '../../../../lib/rollup-plugin-add-global-ts_@global'
import React from "react";
export interface Props {
    className?: string;
    items: Array<{
        title: string;
        content: React.ReactElement;
    }>;
}
declare const Accordion: React.FC<Props>;
export default Accordion;
