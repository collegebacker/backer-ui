import React from "react";
export interface Props {
    containterClassName?: string;
    paginationClassName?: string;
    arrowsClassName?: string;
    breakpoints?: Array<{
        breakpoint: number;
        cardsToShow: number;
        sidePaddingOffset?: number;
        hideArrows?: boolean;
        hidePagination?: boolean;
    }>;
    disableSideFading?: boolean;
    spaceBetween?: number;
    showGuidelines?: boolean;
    showHiddenCard?: number | boolean;
    paginationAlignment?: "left" | "right" | "center";
    children: React.ReactNode;
    onChange?: (index: number) => void;
}
declare const SliderWrapper: React.FC<Props>;
export default SliderWrapper;
