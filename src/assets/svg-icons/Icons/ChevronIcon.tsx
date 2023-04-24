import React from 'react'

import { SvgProps } from '../types'
import { Svg } from 'assets/svg-icons/styled'

export const ChevronIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M11.7573 14.2426L7.51465 10L11.7573 5.75736"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
