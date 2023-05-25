import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

type ChipsSelectorItemType = {
  label: string
  value: any
}

export interface ChipsSelectorIProps {
  className?: string
  defaultIndex?: number
  items: Array<ChipsSelectorItemType>
  onChange?: (index: number) => void
}

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////

const ChipsSelector: React.FC<ChipsSelectorIProps> = (props) => {
  const [currentIndex, setCurrentIndex] = React.useState(props.defaultIndex)

  const handleSelect = (index: number) => {
    setCurrentIndex(index)
    props.onChange && props.onChange(index)
  }

  const selectOnEnter = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      handleSelect(index)
    }
  }

  //
  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <div
                tabIndex={0}
                className={joinClasses([
                  styles.chip,
                  currentIndex === index ? styles.activeChip : ''
                ])}
                onClick={() => handleSelect(index)}
                onKeyDown={(event) => selectOnEnter(event, index)}
              >
                <span>{item.label}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

ChipsSelector.defaultProps = {
  className: '',
  defaultIndex: 0
} as Partial<ChipsSelectorIProps>

export default ChipsSelector
