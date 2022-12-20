import React from "react";
import styles from "./styles.module.scss";

import { stringToGradient } from "../../utils";

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

export interface Props {
  className?: string;
  name: string;
  image?: string;
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
        backgroundImage: `url(${props.image}), ${stringToGradient(props.name)}`,
      }}
      onClick={props.onClick}
    >
      {!props.image && (
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
  image: "",
} as Partial<Props>;

export default ProfilePic;
