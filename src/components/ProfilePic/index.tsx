import React from "react";
import styles from "./styles.module.scss";

import { stringToGradient } from "../../utils";

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  name: string;
  imageSrc?: string;
  onClick?: () => void;
}

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////

const ProfilePic: React.FC<Props> = (props) => {
  //
  return (
    <div
      className={`${styles.pic} ${props.className ? props.className : ""}`}
      style={{
        backgroundImage: `url(${props.imageSrc}), ${stringToGradient(
          props.name
        )}`,
        ...props.style,
      }}
      onClick={props.onClick}
    >
      {!props.imageSrc && (
        <svg className={styles.letterPlaceholder} viewBox="0 0 60 60">
          <text x="50%" y="52%" textAnchor="middle" alignmentBaseline="middle">
            {Array.from(props.name)[0].toUpperCase()}
          </text>
        </svg>
      )}
    </div>
  );
};

ProfilePic.defaultProps = {
  className: "",
  imageSrc: "",
} as Partial<Props>;

export default ProfilePic;
