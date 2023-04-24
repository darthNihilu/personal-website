import React from 'react'

import { SvgProps } from '../types'
import { Svg } from 'assets/svg-icons/styled'

export const MailIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="106" height="106" viewBox="0 0 106 106" fill="none" {...props}>
      <path
        d="M52.9406 60.87L105.299 21.4617V19.1731C105.299 16.8111 103.384 14.896 101.022 14.896H4.85948C2.49754 14.896 0.582397 16.8111 0.582397 19.1731V21.4617L52.9406 60.87Z"
        fill="black"
      />
      <path
        d="M55.7389 70.4155C54.9104 71.0391 53.9249 71.3509 52.9406 71.3509C51.9563 71.3509 50.9708 71.0391 50.1423 70.4155L0.582397 33.112V86.7082C0.582397 89.0701 2.49754 90.9853 4.85948 90.9853H101.022C103.384 90.9853 105.299 89.0701 105.299 86.7082V33.112L55.7389 70.4155Z"
        fill="black"
      />
    </Svg>
  )
}
