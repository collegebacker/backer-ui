import React from "react";
import styles from "./styles.module.scss";

import { Icon, Text } from "..";

export interface Props {
  className?: string;
  items: Array<{
    label: string;
    icon?: IconTypes;
    onClick: () => void;
  }>;
}

const ModalButtons: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.wrap} ${props.className}`}>
      {props.items.map((item, index) => {
        return (
          <button className={styles.button} key={index} onClick={item.onClick}>
            <div className={styles.content}>
              {item.icon ? (
                <Icon className={styles.icon} name={item.icon} />
              ) : null}
              <Text context="app" appStyle="body-main" tag="span">
                {item.label}
              </Text>
            </div>
          </button>
        );
      })}
    </div>
  );
};

ModalButtons.defaultProps = {
  className: "",
} as Partial<Props>;

export default ModalButtons;
