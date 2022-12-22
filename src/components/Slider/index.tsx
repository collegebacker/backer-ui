import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<Props> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState(props.value || 0);

  const updateInputTrack = () => {
    const input = inputRef.current;
    if (input) {
      const percentage = ((value - props.min) / (props.max - props.min)) * 100;
      input.style.setProperty("--high", `${percentage}%`);
    }
  };

  React.useEffect(() => {
    updateInputTrack();
  }, [value]);

  React.useEffect(() => {
    setValue(props.value || 0);
  }, [props.value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber;
    setValue(value);

    props.onChange && props.onChange(event);
  };

  return (
    <input
      ref={inputRef}
      type="range"
      className={`${styles.slider} ${props.className}`}
      style={props.style}
      min={props.min}
      max={props.max}
      step={props.step}
      value={value}
      onChange={handleChange}
    />
  );
};

Slider.defaultProps = {
  className: "",
  style: {},
  step: 1,
  min: 0,
  max: 100,
  value: 0,
} as Partial<Props>;

export default Slider;
