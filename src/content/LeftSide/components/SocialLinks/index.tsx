import React from 'react'
import styled from 'styled-components'
import { socialLinks, SocialLinkType } from 'constants/constants'
import { DefaultText } from 'components/DefaultText'
import { SvgProps } from 'assets/svg-icons/types'
import { Flex } from 'components/Flex'

const Container = styled(Flex)`
  > *:not(:last-child) {
    margin-right: 8px;
  }
`

const SocialLink: React.FC<SocialLinkType> = ({ name, href, icon }) => {
  const Icon: any = icon
  return (
    <DefaultText as="a" href={href} target="_blank" title={name}>
      <Icon width="24px" height="24px" />
    </DefaultText>
  )
}

export const SocialLinks = () => {
  return (
    <Container>
      {socialLinks.map((item) => (
        <SocialLink {...item} />
      ))}
    </Container>
  )
}
