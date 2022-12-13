import React from "react";
import styles from "./styles.module.scss";

//////////////////////////
// TYPES AND INTERFACES //
//////////////////////////

export interface SkeletonBodyProps {
  className?: string;
  style?: React.CSSProperties;
  showBackground?: boolean;
  children?: React.ReactNode;
}

export interface SkeletonBoneProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface SkeletonTextProps extends SkeletonBoneProps {
  fontSize:
    | "title-xlarge"
    | "title-large"
    | "title-medium"
    | "title-medium-adaptive"
    | "title-small"
    | "body-large"
    | "body-large-adaptive"
    | "body-main"
    | "body-caption";
  lines: number;
}

export interface SkeletonButtonProps extends SkeletonBoneProps {
  size: "default" | "small" | "pill";
}

export type CompoundComponent = React.FC<SkeletonBodyProps> & {
  Bone?: React.FC<SkeletonBoneProps>;
  Text?: React.FC<SkeletonTextProps>;
  Button?: React.FC<SkeletonButtonProps>;
  ProfilePic?: React.FC<SkeletonBoneProps>;
};

////////////////
// COMPONENTS //
////////////////

const SkeletonBody: React.FC<SkeletonBodyProps> = (props) => {
  return (
    <div
      className={`${props.showBackground ? styles.body : ""} ${
        props.className
      }`}
      style={{ ...props.style }}
    >
      {props.children}
    </div>
  );
};

const Bone: React.FC<SkeletonBoneProps> = (props) => {
  return (
    <div
      className={`${styles.bone} ${props.className}`}
      style={{ ...props.style }}
    />
  );
};

const TextLine: React.FC<SkeletonTextProps> = (props) => {
  return (
    <div
      className={`${styles.bone} ${styles.textLine} ${styles[props.fontSize]} ${
        props.className
      }`}
      style={{ ...props.style }}
    />
  );
};

const Text: React.FC<SkeletonTextProps> = (props) => {
  return props.lines > 1 ? (
    <div
      className={`${styles.textWrap} ${props.className}`}
      style={{ ...props.style }}
    >
      {[...Array(props.lines)].map((_, i) => (
        <TextLine key={i} fontSize={props.fontSize} lines={props.lines} />
      ))}
    </div>
  ) : (
    <TextLine
      className={props.className}
      fontSize={props.fontSize}
      lines={props.lines}
    />
  );
};

const Button: React.FC<SkeletonButtonProps> = (props) => {
  return (
    <div
      className={`${styles.bone} ${styles.button} ${
        styles[`button__${props.size}`]
      } ${props.className}`}
      style={{ ...props.style }}
    />
  );
};

const ProfilePic: React.FC<SkeletonBoneProps> = (props) => {
  return (
    <div
      className={`${styles.bone} ${styles.profilePic} ${props.className}`}
      style={{ ...props.style }}
    />
  );
};

////////////////////////////////
// COMPOUND COMPONENT EXPORTS //
////////////////////////////////

Bone.defaultProps = Text.defaultProps = {
  className: "",
  style: {},
};

const Skeleton = SkeletonBody as CompoundComponent;

Skeleton.Bone = Bone;
Skeleton.Text = Text;
Skeleton.Button = Button;
Skeleton.ProfilePic = ProfilePic;

export default Skeleton;
