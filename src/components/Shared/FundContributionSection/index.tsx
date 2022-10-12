import React from 'react'
import Button from '../../Button'
import CSSSlider from '../../CSSSlider'
import Text from '../../Text'

import styles from './styles.module.scss'


const FundContributionSection = ({
  handle,
  appUrl
} : {
  handle: string
  appUrl: string
}) => {
  const planData = [
    {
      planNum: 1,
      heading: '$5',
      headingSmall: false,
      amt: 'five',
      description: "This could grow into around $1,800 by college — enough to cover a new MacBook. 💻",
      monthly: true,
      url: `${appUrl}/${handle}/gift/amount?amount=5`
    },
    {
      planNum: 2,
      heading: '$10',
      headingSmall: false,
      amt: 'ten',
      description: "This could grow into around $3,000 — enough to pay for textbooks for 3 years. 📚",
      monthly: true,
      url: `${appUrl}/${handle}/gift/amount?amount=10`
    }
    ,
    {
      planNum: 3,
      heading: '$15',
      headingSmall: false,
      amt: 'fifteen',
      description: "This could grow into around $4,500 — enough to cover a semester of college. 🎓",
      monthly: true,
      url: `${appUrl}/${handle}/gift/amount?amount=15`
    },
    {
      planNum: 4,
      heading: 'Choose a custom amount',
      headingSmall: true,
      amt: 'custom',
      description: "This could grow into around $4,500 — enough to cover a semester of college. 🎓",
      monthly: false,
      url: `${appUrl}/${handle}/gift/amount?amount=0`
    }
  ]

  return (
    <section className={styles.sectionBackerContribution}>
      <div className={styles.topCopyContainer}>
        <Text
          tag="p"
          appStyle="title-small"
          context="app"
          className={styles.contributionTitle}
        >
          Become a backer
        </Text>

        <Text
          tag="p"
          appStyle="body-paragraph"
          context="app"
          className={styles.contributionSubtitle}
        >
          Show your support for a kid you love.
        </Text>
      </div>

      <div className={styles.desktopContainer}>
        <div className={styles.cardsContainer}>
          {planData.slice(0, 3).map(card => {
            const { planNum, heading, amt, monthly, description, url } = card

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
            )
          })}
        </div>

        <a
          className={styles.customAmtContainer}
          href={`${appUrl}/${handle}/gift/amount?amount=0`}
        >
          <div>
            <Text
              tag="p"
              appStyle="title-small"
              context="app"
            >
              Choose a custom amount
            </Text>

            <Text
              tag="p"
              appStyle="body-caption"
              context="app"
            >
              Choose a custom amount or give a one-time gift.
            </Text>
          </div>

          <Button
            type="button"
            mode="primary"
            label="Customize"
            size="small"
            className={styles.customBtn}
            maxWidth={101}
          />
        </a>
      </div>

      <CSSSlider
        containterClassName={styles.slideWrapperContainer}
        paginationAlignment="left"
        spaceBetween={15}
        mobileBreakpoint={{
          breakpoint: 465,
          cardsToShow: 2,
          disableSideFading: true,
        }}
        tabletBreakpoint={{
          breakpoint: 960,
          cardsToShow: 2,
          hideArrows: true,
          disableSideFading: true
        }}
      >
        {planData.map(card => {
          const { planNum, heading, amt, monthly, description, headingSmall, url } = card

          return (
            <Card
              key={planNum}
              planNum={planNum}
              heading={heading}
              amt={amt}
              monthly={monthly}
              description={description}
              headingSmall={headingSmall}
              url={url}
            />
          )
        })}
      </CSSSlider>

      <div className={styles.durationContainer}>
        <div className={styles.durationInnerContainer}>
          <img
            src="/static/images/pointing-finger.svg"
            alt="pointing hand"
            className={styles.pointingHand}
          />

          <Text
            tag="p"
            appStyle="body-paragraph"
            context="app"
          >
            You can set the duration of your contribution on the next step. 
          </Text>
        </div>
      </div>
    </section>
  )
}

export default FundContributionSection

const Card = ({
  planNum,
  heading,
  amt,
  monthly,
  description,
  headingSmall,
  url
} : {
  planNum: number
  heading: string
  amt: string
  monthly: boolean
  description: string
  headingSmall?: boolean
  url: string
}) => {
  return (
    <a
      className={`${styles.card} ${
        (planNum === 1 && styles.card1) ||
        (planNum === 2 && styles.card2) ||
        (planNum === 3 && styles.card3) ||
        (planNum === 4 && styles.card4)
      }`}
      href={url}
    >
      <div className={styles.cardInnerContainer}>
        <div className={styles.amtContainer}>
          <Text
            tag="h4"
            appStyle={headingSmall ? "title-small" : "title-medium"}
            context="app"
          >
            {heading}
          </Text>

          {monthly && (
            <Text tag="p" appStyle="body-caption" context="app">/month</Text>
          )}
        </div>

        <div>
          <Text
            tag="p"
            appStyle="body-caption"
            context="app"
            className={styles.cardDescription}
          >
            {description}
          </Text>

          {monthly ? (
            <Button
              type="button"
              mode="primary"
              label="Select"
              size="small"
              className={styles.customBtn}
              maxWidth={77}
            />
          ) : (
            <Button
              type="button"
              mode="primary"
              label="Customize"
              size="small"
              className={styles.customBtn}
              maxWidth={77}
            />
          )}
        </div>
      </div>  
    </a>
  )
}
