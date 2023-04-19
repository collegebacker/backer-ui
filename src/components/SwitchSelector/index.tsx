import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

import PillButton from '../PillButton'

type ItemType = {
  label: string
  value?: string
  icon?: IconTypes
  paymentIcon?: PaymentLogoTypes
}

export interface Props {
  className?: string
  activeIndex?: number
  options: Array<ItemType> | undefined
  onChange: (option: SwitchSelectorOptionType) => void
}

const SwitchSelector: React.FC<Props> = (props) => {
  const [selected, setSelected] = React.useState(props.activeIndex)

  const handleOnClick = (index: number, option: ItemType) => {
    setSelected(index)
    props.onChange({ index, label: option.label, value: option.value })
  }

  return (
    <section className={joinClasses([styles.wrap, props.className])}>
      {(props.options || []).map((option, index) => (
        <PillButton
          key={index}
          label={option.label}
          onClick={() => handleOnClick(index, option)}
          icon={option.icon}
          paymentIcon={option.paymentIcon}
          className={styles.button}
          isActive={selected === index}
        />
      ))}
    </section>
  )
}

SwitchSelector.defaultProps = {
  className: '',
  activeIndex: 0
} as Partial<Props>

export default SwitchSelector
