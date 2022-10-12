import React, { RefObject, forwardRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../Button'
import Divider from '../../Divider'
import Text from '../../Text'
import Modal from '../../Modal'

import styles from './styles.module.scss'

const ContributionSuccessModal = forwardRef((
  {
    onCloseClick,
    contribution,
    fund,
  } : Props, ref) => {
  const history = useHistory()
  const queryParams = getQuery()
  const firstContribution = queryParams.get('type') === 'firstContribution'
  const gift = queryParams.get('type') === 'gift'

  const { amount, frequency, photoUrl, recipientName, fundName, duration, recipientParentName } = contribution || {}

  useEffect(() => {
    const html = document.querySelector("html")
    html && html.classList.add("scroll-lock")
    return () => {
      html?.classList.remove('scroll-lock')
    }
  }, [])

  return (
    <Modal
      title=""
      isOpen={firstContribution || gift}
      onCloseClick={() => {
        if (queryParams) {
          queryParams.delete('type')
          history.replace({
            search: queryParams.toString()
          })
        }
        if (onCloseClick) onCloseClick()
      }}
      ref={ref}
    >
      <Text
        tag="h1"
        context="app"
        appStyle="title-medium"
        className={styles.title}
      >
        {getTitle({ gift, firstContribution })}
      </Text>

      <Text
        tag="p"
        context="app"
        appStyle="body-main"
        className={styles.subtitle}
      >
        {getSubtitle({
          gift,
          firstContribution,
          fundName,
          recipientParentName
        })}
      </Text>

      <Text
        tag="p"
        context="app"
        appStyle="title-small"
        className={styles.frequency}
      >
        {currencyFormatter(amount)}{' '}
        {getFrequencyLabel(frequency)}{' '}
        {getDurationText(duration)}
      </Text>

      <Text
        tag="p"
        context="app"
        appStyle="body-main"
        className={styles.fundRecipient}
      >
        {getPaymentText({
          gift,
          firstContribution,
          fundName,
          recipientName
        })}
      </Text>

      {photoUrl && (
        <div className={styles.polaroidContainer}>
          <img
            src="https://storage.googleapis.com/backer_web_assets/frame.webp"
            alt=""
            className={styles.frame}
          />
          <img
            src={photoUrl}
            alt=""
            className={styles.polaroidImage}
          />
        </div>
      )}

      <Divider />

      <div className={styles.bottomText}>
        <img
          alt=""
          className={styles.img}
          src="https://storage.googleapis.com/backer_web_assets/transaction.png"
        />
        <Text
          tag="p"
          context="app"
          appStyle="body-main"
          className={styles.confirmation}
        >
          {getTransactionText({gift, firstContribution})}
        </Text>
      </div>

      <Button
        label={`View your ${fund ? 'fund' : 'gift'}`}
        onClick={() => {
          // @ts-ignore
          ref.current.close()
          document.querySelector('html')!.classList.remove('scroll-lock')
          if (onCloseClick) onCloseClick()
        }}
      />
    </Modal>
  )
})

interface Props {
  onCloseClick?: any
  contribution: any
  fund?: boolean
  ref: RefObject<any>
}

ContributionSuccessModal.displayName = "ContributionSuccessModal"

export default ContributionSuccessModal

type Duration = 
  | 'onetime'
  | '3months'
  | '6months'
  | '1year'
  | 'untilcollege'

const durationTextMapping: {
  [key in Duration]: string
} = {
  onetime: '',
  ['3months']: 'for the next 3 months',
  ['6months']: 'for the next 6 months',
  ['1year']: 'for the next year',
  untilcollege: 'until the child goes to college'
}

function getDurationText(duration: Duration) {
  if (!duration) return ''
  return durationTextMapping[duration]
}

const getFrequencyLabel = (
  frequency: 'onetime' | 'monthly' | 'semimonthly'
) => {
  if (frequency === 'monthly') return 'per month'
  else if (frequency === 'semimonthly') return 'twice a month'
  return null
}

function getTitle({
  gift,
  firstContribution
}: {
  gift?: boolean
  firstContribution?: boolean
}) {
  if (gift) return 'Thanks for being a backer!'
  if (firstContribution) return 'Your fund is growing!'
  return 'Payment successful!'
}

function getSubtitle({
  gift,
  firstContribution,
  fundName,
  recipientParentName
}: {
  gift?: boolean
  firstContribution?: boolean
  fundName: string
  recipientParentName: string
}) {
  if (gift) return `You've contributed to ${fundName}. 🎉 We'll let ${recipientParentName} know!`
  if (firstContribution) return `You've made your first contribution. 🎉`
  return 'Hooray! 🎉'
}

function getPaymentText({
  gift,
  firstContribution,
  fundName,
  recipientName
}: {
  gift?: boolean
  firstContribution?: boolean
  fundName: string
  recipientName: string
}) {
  if (gift) return `To ${fundName}`
  if (firstContribution) return `Contribution to ${recipientName || fundName}`
  return `Payment to ${recipientName || fundName}`
}

function getTransactionText ({
  gift,
  firstContribution
} : {
  gift?: boolean
  firstContribution?: boolean
}) {
  if (gift){
    return "Copy of you your payment confirmation was sent to your email"
  } else {
    return `You can view a transaction receipt in your ${firstContribution ? 'fund' : 'Payments'} history.`
  }
}

const currencyFormatter = (num: number) => {
  const nf = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  })

  return nf.format(num/100)
}

const getQuery = () => new URLSearchParams(window.location.search)