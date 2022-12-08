import React from "react";
import ReactCalendar from "react-calendar";

// import calendar types
import { CalendarProps } from "react-calendar";

import Icon from "../Icon";

const Calendar: React.FC<CalendarProps> = (props) => {
  const calendarRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    // get all the calendar week days
    const calendarWeekDays = calendarRef.current?.querySelectorAll(
      ".react-calendar__month-view__weekdays__weekday abbr"
    );

    // truncate the calendar week days to 1 character
    calendarWeekDays?.forEach((day) => {
      day.textContent = day.textContent?.charAt(0);
    });
  }, []);

  return (
    <ReactCalendar
      inputRef={calendarRef}
      minDetail="month"
      prevLabel={<Icon name="chevron-left" />}
      nextLabel={<Icon name="chevron-right" />}
      {...props}
    />
  );
};

Calendar.defaultProps = {
  defaultValue: new Date(),
} as Partial<CalendarProps>;

export default Calendar;
