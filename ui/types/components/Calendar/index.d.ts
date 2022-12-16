import React from "react";
import { CalendarProps } from "react-calendar";
export interface Props extends CalendarProps {
    hideYearArrows?: boolean;
}
declare const Calendar: React.FC<Props>;
export default Calendar;
