import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface SpinnerIProps {
  className?: string
  style?: React.CSSProperties
  size?: 'small' | 'medium-small' | 'medium' | 'large'
  color?: string
}

const Spinner: React.FC<SpinnerIProps> = (props) => {
  const getSize = (size: any) => {
    switch (size) {
      case 'small':
        return 24
      case 'medium-small':
        return 32
      case 'medium':
        return 40
      case 'large':
        return 80
    }
  }

  return (
    <div
      className={joinClasses(styles.loaderWrap, props.className)}
      style={{
        ...props.style,
        width: getSize(props.size),
        height: getSize(props.size)
      }}
    >
      <svg
        width={getSize(props.size)}
        height={getSize(props.size)}
        viewBox={`0 0 ${getSize(props.size)} ${getSize(props.size)}`}
        fill='none'
        className={joinClasses(styles.loader, styles[props.size])}
        style={props.color ? { fill: props.color } : {}}
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          className={styles.path}
          cx={getSize(props.size) / 2}
          cy={getSize(props.size) / 2}
          r={getSize(props.size) / 2 - 3}
        />
        <circle
          className={styles.backPath}
          cx={getSize(props.size) / 2}
          cy={getSize(props.size) / 2}
          r={getSize(props.size) / 2 - 3}
        />
      </svg>
    </div>
  )
}

Spinner.defaultProps = {
  className: '',
  style: {},
  size: 'small'
} as Partial<SpinnerIProps>

export default Spinner
