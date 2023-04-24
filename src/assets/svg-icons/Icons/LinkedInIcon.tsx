import React from 'react'

import { SvgProps } from '../types'
import { Svg } from 'assets/svg-icons/styled'

export const LinkedInIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
      <path
        d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z"
        fill="black"
      />
      <path
        d="M4 22H1C0.4 22 0 21.6 0 21V8C0 7.4 0.4 7 1 7H4C4.6 7 5 7.4 5 8V21C5 21.6 4.6 22 4 22Z"
        fill="black"
      />
      <path
        d="M16 7C14.5 7 13.1 7.6 12 8.5V8C12 7.4 11.6 7 11 7H8C7.4 7 7 7.4 7 8V21C7 21.6 7.4 22 8 22H11C11.6 22 12 21.6 12 21V13.5C12 12.1 13.1 11 14.5 11C15.9 11 17 12.1 17 13.5V21C17 21.6 17.4 22 18 22H21C21.6 22 22 21.6 22 21V13C22 9.7 19.3 7 16 7Z"
        fill="black"
      />
    </Svg>
  )
}
