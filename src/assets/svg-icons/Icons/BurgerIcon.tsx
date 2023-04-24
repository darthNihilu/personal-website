import React from 'react'

import { SvgProps } from '../types'
import { Svg } from 'assets/svg-icons/styled'

export const BurgerIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 50 50" width="50px" height="50px" {...props}>
      <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z" />
    </Svg>
  )
}
