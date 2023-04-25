import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { BoxProps } from 'components/Box/types'
import { typography } from 'styled-system'

const Container = styled.button<any>`
  background-color: #ffb400;
  cursor: pointer;
  padding: 10px 40px;
  border: none;
  outline: none;
  ${({ textTransform }) =>
    textTransform &&
    `text-transform: ${textTransform};`} @media screen and(max-width: 768 px) {
    font-size: ${({ mobileSize }) => (mobileSize ? mobileSize + 'px' : '')};
  }

  transition: background-color 300ms ease-in-out;

  :hover {
    background-color: #ffc84b;
  }

  ${typography}
`

export const Button: React.FC<{ children: ReactNode } & Partial<BoxProps>> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>
}
