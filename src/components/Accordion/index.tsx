import AccordionItem from "./AcccordionItem";
import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  items: Array<{
    title: string;
    content: React.ReactElement;
  }>;
}

const Accordion: React.FC<Props> = (props) => {
  return (
    <div
      className={`${props.className} ${styles.wrap}
      }`}
    >
      {props.items.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
};

Accordion.defaultProps = {
  className: "",
} as Partial<Props>;

export default Accordion;
