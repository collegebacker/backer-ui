import React from 'react'
import Icon from '../Icon'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface SearchbarIProps {
  className?: string
  placeholder?: string
  value?: string
  autoFocus?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
}

const CrossIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.4583 7.54041L11.9993 11.0814L15.5403 7.54041L16.4596 8.45964L12.9186 12.0007L16.4583 15.5404L15.5391 16.4596L11.9993 12.9199L8.45957 16.4596L7.54033 15.5404L11.0801 12.0007L7.53906 8.45964L8.4583 7.54041Z'
      fill='var(--color-main-200)'
    />
  </svg>
)

const Searchbar: React.FC<SearchbarIProps> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [value, setValue] = React.useState(props.value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div className={joinClasses(styles.inputWrap, props.className)}>
      <Icon name='magnifier' className={styles.icon} />
      <input
        autoFocus={props.autoFocus}
        ref={inputRef}
        className={styles.input}
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
      />
      <button
        className={joinClasses(
          styles.clearButton,
          !!value ? '' : styles.hideButton
        )}
        title='clear'
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          setValue('')
          e.currentTarget.blur()

          if (inputRef.current) {
            inputRef.current.focus()
          }

          if (props.onClear) {
            props.onClear()
          }
        }}
      >
        <CrossIcon />
      </button>
    </div>
  )
}

Searchbar.defaultProps = {
  className: '',
  placeholder: 'Search',
  value: ''
} as Partial<SearchbarIProps>

export default Searchbar
