import React from "react";
import styles from "./styles.module.scss";

export interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC = () => {
  return null;
};

const Body: React.FC<SkeletonProps> = (props) => {
  return <div className={`${styles.divider} ${props.className}`} />;
};

export default Skeleton;
