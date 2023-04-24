import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { useAnimationRemember } from 'hooks/useAnimationRemember'

const Container = styled.div<{ isAnimationViewed?: any }>`
  > * {
    ${({ isAnimationViewed }) =>
      isAnimationViewed && 'animation: none !important; opacity: 1;'}
  }
`

export const AnimationWrapper: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const isAnimationViewed = useAnimationRemember()
  return <Container isAnimationViewed={isAnimationViewed}>{children}</Container>
}
