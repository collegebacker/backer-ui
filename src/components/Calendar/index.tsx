import React from 'react'
import ReactCalendar from 'react-calendar'

// import calendar types
import { CalendarProps } from 'react-calendar'

import Icon from '../Icon'

// export interface NewProps {
//   hideYearArrows?: boolean; // show or hide the month arrows
// }

// type Props = NewProps & Partial<CalendarProps>;

type CalendarIProps = Omit<Partial<CalendarProps>, 'hideYearArrows'> & {
  hideYearArrows?: boolean
}

const Calendar: React.FC<CalendarIProps> = (props) => {
  const calendarRef = React.useRef<HTMLInputElement>(null)

  const trancateCalendarWeekDays = () => {
    const calendarWeekDays = calendarRef.current?.querySelectorAll(
      '.react-calendar__month-view__weekdays__weekday abbr'
    )

    // truncate the calendar week days to 1 character
    calendarWeekDays?.forEach((day) => {
      day.textContent = day.textContent?.charAt(0)
    })
  }

  React.useEffect(() => {
    trancateCalendarWeekDays()
  }, [])

  React.useEffect(() => {
    // hide the year arrows
    const yearArrows = calendarRef.current?.querySelectorAll(
      '.react-calendar__navigation__prev2-button, .react-calendar__navigation__next2-button'
    )

    if (props.hideYearArrows) {
      yearArrows?.forEach((arrow) => {
        // add style to hide the year arrows
        arrow.setAttribute('style', 'display: none !important;')
      })
    } else {
      yearArrows?.forEach((arrow) => {
        // remove style to show the year arrows
        arrow.removeAttribute('style')
      })
    }
  }, [props.hideYearArrows])

  return (
    <ReactCalendar
      inputRef={calendarRef}
      prevLabel={<Icon name='chevron-left' />}
      nextLabel={<Icon name='chevron-right' />}
      prev2Label={<Icon name='arrow-left' />}
      next2Label={<Icon name='arrow-right' />}
      onViewChange={() => {
        trancateCalendarWeekDays()
      }}
      {...props}
    />
  )
}

Calendar.defaultProps = {
  minDetail: 'month',
  hideYearArrows: true
} as CalendarIProps

export default Calendar
