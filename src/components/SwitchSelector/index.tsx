import React from 'react'
import styles from './styles.module.scss'

import PillButton from '../PillButton'

type ItemType = {
  label: string
  icon?: IconTypes
  onClick: (object: { index: number; label: string }) => void
}

export interface Props {
  className?: string
  activeIndex?: number
  items: Array<ItemType>
}

const SwitchSelector: React.FC<Props> = (props) => {
  const [selected, setSelected] = React.useState(props.activeIndex)

  const handleOnClick = (index: number, item: ItemType) => {
    setSelected(index)
    item.onClick({ index, label: item.label })
  }

  return (
    <section className={`${styles.wrap} ${props.className}`}>
      {props.items.map((item, index) => (
        <PillButton
          key={index}
          label={item.label}
          onClick={() => handleOnClick(index, item)}
          icon={props.items[index].icon ? props.items[index].icon : undefined}
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
