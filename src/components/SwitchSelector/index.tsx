import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

import PillButton from '../PillButton'

type SwitchSelectorItemType = {
  label: string
  value?: string
  icon?: IconTypes
  paymentIcon?: PaymentLogoTypes
}

export interface SwitchSelectorIProps {
  className?: string
  activeIndex?: number
  options: Array<SwitchSelectorItemType> | undefined
  onChange: (option: SwitchSelectorOptionType) => void
}

const SwitchSelector: React.FC<SwitchSelectorIProps> = (props) => {
  const [selected, setSelected] = React.useState(props.activeIndex)

  const handleOnClick = (index: number, option: SwitchSelectorItemType) => {
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
} as Partial<SwitchSelectorIProps>

export default SwitchSelector
