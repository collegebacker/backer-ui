import React from "react";
import CSSSlider from "../CSSSlider";

import styles from "./styles.module.scss";

export interface ContributionProps {
  handle: string;
  appUrl: string;
}

interface CardProps {
  planNum: number;
  heading: string;
  amt: string;
  monthly: boolean;
  description: string;
  headingSmall?: boolean;
  url: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <a
      className={`${styles.card} ${
        (props.planNum === 1 && styles.card1) ||
        (props.planNum === 2 && styles.card2) ||
        (props.planNum === 3 && styles.card3) ||
        (props.planNum === 4 && styles.card4)
      }`}
      href={props.url}
    >
      <div className={styles.cardInnerContainer}>
        <div className={styles.amtContainer}>
          <h4
            className={`${
              props.headingSmall
                ? "typo-app-title-small"
                : "typo-app-title-medium"
            }`}
          >
            {props.heading}
          </h4>

          {props.monthly && <p className="typo-app-body-caption">/month</p>}
        </div>

        <div>
          <p className={`${styles.cardDescription} typo-app-body-caption`}>
            {props.description}
          </p>

          {props.monthly ? (
            <div className={styles.customBtn}>
              <span>Select</span>
            </div>
          ) : (
            <div className={styles.customBtn}>
              <span>Customize</span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

const FundContributionSection: React.FC<ContributionProps> = (props) => {
  const planData = [
    {
      planNum: 1,
      heading: "$5",
      headingSmall: false,
      amt: "five",
      description:
        "This could grow into around $1,800 by college — enough to cover a new MacBook. 💻",
      monthly: true,
      url: `${props.appUrl}/${props.handle}/gift/amount?amount=5`,
    },
    {
      planNum: 2,
      heading: "$10",
      headingSmall: false,
      amt: "ten",
      description:
        "This could grow into around $3,000 — enough to pay for textbooks for 3 years. 📚",
      monthly: true,
      url: `${props.appUrl}/${props.handle}/gift/amount?amount=10`,
    },
    {
      planNum: 3,
      heading: "$15",
      headingSmall: false,
      amt: "fifteen",
      description:
        "This could grow into around $4,500 — enough to cover a semester of college. 🎓",
      monthly: true,
      url: `${props.appUrl}/${props.handle}/gift/amount?amount=15`,
    },
    {
      planNum: 4,
      heading: "Choose a custom amount",
      headingSmall: true,
      amt: "custom",
      description:
        "This could grow into around $4,500 — enough to cover a semester of college. 🎓",
      monthly: false,
      url: `${props.appUrl}/${props.handle}/gift/amount?amount=0`,
    },
  ];

  return (
    <section className={styles.sectionBackerContribution}>
      <div className={styles.topCopyContainer}>
        <h3 className={`${styles.contributionTitle} typo-app-title-small`}>
          Become a backer
        </h3>

        <p className={`${styles.contributionSubtitle} typo-app-body-paragraph`}>
          Show your support for a kid you love.
        </p>
      </div>

      <div className={styles.desktopContainer}>
        <div className={styles.cardsContainer}>
          {planData.slice(0, 3).map((card) => {
            const { planNum, heading, amt, monthly, description, url } = card;

            return (
              <Card
                key={planNum}
                planNum={planNum}
                heading={heading}
                amt={amt}
                monthly={monthly}
                description={description}
                url={url}
              />
            );
          })}
        </div>

        <a
          className={styles.customAmtContainer}
          href={`${props.appUrl}/${props.handle}/gift/amount?amount=0`}
        >
          <div>
            <h3 className="typo-app-title-small">Choose a custom amount</h3>

            <p className="typo-app-body-caption">
              Choose a custom amount or give a one-time gift.
            </p>
          </div>

          <div className={styles.customBtn}>
            <span>Customize</span>
          </div>
        </a>
      </div>

      <CSSSlider
        containterClassName={styles.slider}
        paginationAlignment="left"
        spaceBetween={15}
        mobileBreakpoint={{
          breakpoint: 465,
          cardsToShow: 1,
          shiftHiddenCard: 60,
          sidePaddingOffset: 20,
          disableSideFading: true,
        }}
        tabletBreakpoint={{
          breakpoint: 960,
          cardsToShow: 1,
          shiftHiddenCard: 60,
          sidePaddingOffset: 20,
          hideArrows: true,
          disableSideFading: true,
        }}
        desktopBreakpoint={{
          sidePaddingOffset: 20,
        }}
      >
        {planData.map((card) => {
          return (
            <Card
              key={card.planNum}
              planNum={card.planNum}
              heading={card.heading}
              amt={card.amt}
              monthly={card.monthly}
              description={card.description}
              headingSmall={card.headingSmall}
              url={card.url}
            />
          );
        })}
      </CSSSlider>

      <div className={styles.durationContainer}>
        <div className={styles.durationInnerContainer}>
          <img
            src="https://storage.googleapis.com/backer_web_assets/finger-up.svg"
            alt="pointing hand"
            className={styles.pointingHand}
          />

          <p className="typo-app-body-paragraph">
            You can set the duration of your contribution on the next step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundContributionSection;
