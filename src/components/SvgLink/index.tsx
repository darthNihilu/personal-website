import React from 'react'
import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import { Box } from 'components/Box'

const Container = styled(Box)`
  cursor: pointer;
  > svg * {
    transition: fill 200ms ease-in-out;
    fill: ${({ theme }) => theme.svgFillColor};
  }

  :hover {
    > svg * {
      fill: ${({ theme }) => theme.svgHoverColor};
    }
  }
`

export const SvgLink: React.FC<
  { component: any; href: string; title: string } & SpaceProps
> = ({ component, href, title, ...props }) => {
  const Icon = component
  return (
    <Container as="a" href={href} target="_blank" title={title} {...props}>
      <Icon width="20px" height="20px" />
    </Container>
  )
}
