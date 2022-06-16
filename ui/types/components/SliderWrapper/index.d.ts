import React from "react";
export interface Props {
    containterClassName?: string;
    paginationClassName?: string;
    arrowsClassName?: string;
    breakpoints?: Array<{
        breakpoint: number;
        cardsToShow: number;
    }>;
    spaceBetween?: number;
    showGuidelines?: boolean;
    hideArrows?: boolean;
    children: React.ReactNode;
    onChange?: (index: number) => void;
}
declare const SliderWrapper: React.FC<Props>;
export default SliderWrapper;
