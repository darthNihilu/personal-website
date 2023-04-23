import React from 'react'

import { SvgProps } from '../types'
import { Svg } from 'assets/svg-icons/styled'

export const LinkedInIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <rect width="18" height="18" fill="white" />
      <path
        d="M0 0V18H18V0H0ZM6 14H3.5V7H6V14ZM4.7 5.7C3.9 5.7 3.4 5.2 3.4 4.5C3.4 3.8 3.9 3.3 4.8 3.3C5.6 3.3 6.1 3.8 6.1 4.5C6.1 5.2 5.6 5.7 4.7 5.7ZM15 14H12.6V10.2C12.6 9.1 11.9 8.9 11.7 8.9C11.5 8.9 10.6 9.1 10.6 10.2C10.6 10.4 10.6 14 10.6 14H8.1V7H10.6V8C10.9 7.4 11.6 7 12.8 7C14 7 15 8 15 10.2V14Z"
        fill="black"
      />
    </Svg>
  )
}
