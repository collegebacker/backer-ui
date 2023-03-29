import React from 'react'
import styles from './styles.module.scss'

import PillButton from '../PillButton'

type ItemType = {
  label: string
  value?: string
  icon?: IconTypes
}

export interface Props {
  className?: string
  activeIndex?: number
  options: Array<ItemType>
  onClick: (object: SwitchSelectorOptionType) => void
}

const SwitchSelector: React.FC<Props> = (props) => {
  const [selected, setSelected] = React.useState(props.activeIndex)

  const handleOnClick = (index: number, option: ItemType) => {
    setSelected(index)
    props.onClick({ index, label: option.label, value: option.value })
  }

  return (
    <section className={`${styles.wrap} ${props.className}`}>
      {props.options.map((option, index) => (
        <PillButton
          key={index}
          label={option.label}
          onClick={() => handleOnClick(index, option)}
          icon={option.icon ? option.icon : undefined}
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
