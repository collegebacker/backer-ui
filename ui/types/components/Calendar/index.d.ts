import React from "react";
import { CalendarProps } from "react-calendar";
export interface NewProps {
    hideYearArrows?: boolean;
}
declare type Props = NewProps & Partial<CalendarProps>;
declare const Calendar: React.FC<Props>;
export default Calendar;
