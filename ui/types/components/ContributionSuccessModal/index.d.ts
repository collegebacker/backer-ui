import React from "react";
declare type durationType = "onetime" | "3months" | "6months" | "1year" | "untilcollege";
declare type frequencyType = "onetime" | "monthly" | "semimonthly";
export interface Props {
    onCloseClick?: any;
    contribution: {
        amount: number;
        duration: durationType;
        frequency: frequencyType;
        gift?: boolean;
        firstContribution?: boolean;
        fundName: string;
        recipientName?: string;
        recipientParentName?: string;
        photoUrl?: string;
    };
    fund?: boolean;
    ref: React.RefObject<any>;
}
declare const ContributionSuccessModal: React.ForwardRefExoticComponent<Pick<Props, "onCloseClick" | "contribution" | "fund"> & React.RefAttributes<any>>;
export default ContributionSuccessModal;
