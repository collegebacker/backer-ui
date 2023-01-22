import React from "react";

import Button from "../Button";
import PillButton from "../PillButton";

import styles from "./styles.module.scss";

export interface Props {
  days?: number;
  dafaultValue?: number[];
  semimonthly?: boolean;
  onChange?: (date: number[]) => void;
  onSave?: () => void;
}

const RecurringDatePicker: React.FC<Props> = (props) => {

  const [value, setValue] = React.useState(props.dafaultValue || [1, 16]);
  const [semimonthly, setSemimonthly] = React.useState(props.semimonthly || false);

  const setDateHook = (day: number) => {
    if (props.semimonthly && day >= 15) {
      const newVal = [value[0], day + 1]
      setValue(newVal);
      props.onChange && props.onChange(newVal);
    } else {
      const newVal = [day + 1, value[1]]
      setValue(newVal);
      props.onChange && props.onChange(newVal);
    }
  };

  const handleClickDay = (day: number) => {
    setDateHook(day);
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
          value[0] === day + 1  ? "react-calendar__tile--active" : value[1] === day + 1 && semimonthly ? "react-calendar__tile--active" : ""
        }`} style={{
          flex: "0 0 14.2857%", overflow: "hidden"
        }} onClick={() => handleClickDay(day)}>
          <abbr aria-label={`${day + 1}`}>
            {day + 1}
          </abbr>
        </button>
      ))}
    </div>
    <Button label="Save" onClick={props.onSave} />
    </section>
  );
};

RecurringDatePicker.defaultProps = {
 days: 32,
 firstDay: 1,
 semimonthly: false,
} as Partial<Props>;

export default RecurringDatePicker;
