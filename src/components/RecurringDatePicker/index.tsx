import React from 'react'

import Button from '../Button'
import PillButton from '../PillButton'

import styles from './styles.module.scss'

export interface Props {
  days?: number
  className?: string
  dafaultValue?: number[]
  semimonthly?: boolean
  showSwitcher?: boolean
  onChange?: (date: { value: number[]; isSemimonthly: boolean }) => void
}

const RecurringDatePicker: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState(props.dafaultValue || [1, 16])
  const [semimonthly, setSemimonthly] = React.useState(
    props.semimonthly || false
  )

  const setDateHook = (day: number) => {
    if (semimonthly && day >= 15) {
      const newVal = [value[0], day + 1]
      setValue(newVal)

      props.onChange &&
        props.onChange({
          value: newVal,
          isSemimonthly: semimonthly
        })
    } else {
      const newVal = [day + 1, value[1]]
      setValue(newVal)
      props.onChange &&
        props.onChange({
          value: newVal,
          isSemimonthly: semimonthly
        })
    }
  }

  const handleSemimonthly = (isSemimonthly: boolean) => {
    setSemimonthly(isSemimonthly)
    props.onChange &&
      props.onChange({
        value: value,
        isSemimonthly: isSemimonthly
      })
  }

  const handleClickDay = (day: number) => {
    setDateHook(day)
  }

  return (
    <section className={`${styles.wrap} ${props.className}`}>
      {props.showSwitcher && (
        <section className={styles.switcher}>
          <PillButton
            className={styles.switcherButton}
            label='One a month'
            isActive={!semimonthly}
            onClick={() => {
              handleSemimonthly(false)
            }}
          />
          <PillButton
            className={styles.switcherButton}
            label='Split in two dates'
            isActive={semimonthly}
            onClick={() => {
              handleSemimonthly(true)
            }}
          />
        </section>
      )}

      {semimonthly && (
        <p className={`typo-app-body-caption ${styles.switcherCaption}`}>
          Payment will be split in two payments. <br /> Set 2 payment dates
        </p>
      )}

      <div
        className='react-calendar__month-view__days'
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {Array.from(Array(props.days).keys()).map((day) => (
          <button
            className={`react-calendar__tile react-calendar__month-view__days__day ${
              value[0] === day + 1
                ? 'react-calendar__tile--active'
                : value[1] === day + 1 && semimonthly
                ? 'react-calendar__tile--active'
                : ''
            }`}
            style={{
              flex: '0 0 14.2857%',
              overflow: 'hidden'
            }}
            onClick={() => handleClickDay(day)}
            key={day}
          >
            <abbr aria-label={`${day + 1}`}>{day + 1}</abbr>
          </button>
        ))}
      </div>
    </section>
  )
}

RecurringDatePicker.defaultProps = {
  days: 31,
  firstDay: 1,
  className: '',
  semimonthly: false,
  showSwitcher: true
} as Partial<Props>

export default RecurringDatePicker
