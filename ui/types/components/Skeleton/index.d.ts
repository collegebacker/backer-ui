import React from "react";
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
    fontSize: "title-xlarge" | "title-large" | "title-medium" | "title-medium-adaptive" | "title-small" | "body-large" | "body-large-adaptive" | "body-main" | "body-caption";
    lines: number;
}
export interface SkeletonButtonProps extends SkeletonBoneProps {
    size: "default" | "small" | "pill";
}
export declare type CompoundComponent = React.FC<SkeletonBodyProps> & {
    Bone?: React.FC<SkeletonBoneProps>;
    Text?: React.FC<SkeletonTextProps>;
    Button?: React.FC<SkeletonButtonProps>;
    ProfilePic?: React.FC<SkeletonBoneProps>;
};
declare const Skeleton: CompoundComponent;
export default Skeleton;
