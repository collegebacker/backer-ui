import React from "react";

export interface Props {
  handle: string;
  appUrl: string;
}

declare const FundContributionSection: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default FundContributionSection;