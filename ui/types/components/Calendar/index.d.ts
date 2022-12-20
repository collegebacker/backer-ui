import React from "react";
import { CalendarProps } from "react-calendar";
export interface Props {
    hideYearArrows?: boolean;
}
declare const Calendar: React.FC<Props & CalendarProps>;
export default Calendar;
