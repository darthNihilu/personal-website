import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useAnimationRemember } from 'hooks/useAnimationRemember'
import { Box } from 'components/Box'
import { BoxProps } from 'components/Box/types'

const Container = styled(Box)<{ isAnimationViewed?: any }>`
  > * {
    ${({ isAnimationViewed }) =>
      isAnimationViewed && 'animation: none !important; opacity: 1;'}
  }
`

export const AnimationWrapper: React.FC<
  { children: ReactNode } & Partial<BoxProps>
> = ({ children, ...props }) => {
  const isAnimationViewed = useAnimationRemember()
  return (
    <Container isAnimationViewed={isAnimationViewed} {...props}>
      {children}
    </Container>
  )
}
