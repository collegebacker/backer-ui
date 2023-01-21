import React from "react";

import Button from "../Button";
import PillButton from "../PillButton";

import styles from "./styles.module.scss";

export interface Props {
  days?: number;
  dafaultValue?: [number, number];
  semimonthly?: boolean;
  onChange?: (date: number) => void;
}

const RecurringDatePicker: React.FC<Props> = (props) => {

  const [value, setValue] = React.useState(props.dafaultValue || [1, 16]);
  const [semimonthly, setSemimonthly] = React.useState(props.semimonthly || false);

  const setDateHook = (day: number) => {
    if (props.semimonthly && day >= 15) {
      setValue([value[0], day]);
    } else {
      setValue([day, value[1]]);
    }
  };

  const handleClickDay = (day: number) => {
    setDateHook(day);
    if (props.onChange) {
      props.onChange(day);
    }
  };

  return (
    <section className={styles.wrap}>

    <section className={styles.switcher}>
      <PillButton className={styles.switcherButton} label="One a month" isActive={!semimonthly} onClick={() => {
        setSemimonthly(false);
      }}/>
      <PillButton className={styles.switcherButton} label="Split in two dates" isActive={semimonthly} onClick={() => {
        setSemimonthly(true);
      }} />
    </section>

    <p className={`typo-app-body-caption ${styles.switcherCaption}`}>Payment will be split in two payments. <br/> Set 2 payment dates</p>

    <div className="react-calendar__month-view__days" style={{
      display: "flex",
      flexWrap: "wrap",
    }}>
      {Array.from(Array(props.days).keys()).map((day) => (
        <button className={`react-calendar__tile react-calendar__month-view__days__day ${
          value[0] === day  ? "react-calendar__tile--active" : value[1] === day && semimonthly ? "react-calendar__tile--active" : ""
        }`} style={{
          flex: "0 0 14.2857%", overflow: "hidden"
        }} onClick={() => handleClickDay(day)}>
          <abbr aria-label={`${day + 1}`}>
            {day + 1}
          </abbr>
        </button>
      ))}
    </div>
    <Button label="Save" />
    </section>
  );
};

RecurringDatePicker.defaultProps = {
 days: 32,
 firstDay: 1,
 semimonthly: false,
} as Partial<Props>;

export default RecurringDatePicker;
