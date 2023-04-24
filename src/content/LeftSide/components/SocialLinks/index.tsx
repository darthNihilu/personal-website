import React from 'react'
import styled from 'styled-components'
import { socialLinks, SocialLinkType } from 'constants/constants'
import { DefaultText } from 'components/DefaultText'
import { Flex } from 'components/Flex'

const Container = styled(Flex)`
  > *:not(:last-child) {
    margin-right: 8px;
  }
`

const IconWrapper = styled(DefaultText)`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  background: #ffb400;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 10px;
`

const SocialLink: React.FC<SocialLinkType> = ({
  name,
  href,
  icon,
  width,
  height,
  top,
  left
}) => {
  const Icon: any = icon
  return (
    <IconWrapper as="a" href={href} target="_blank" title={name}>
      <Icon
        width={width}
        height={height}
        style={{ top: top, left: left, position: 'relative' }}
      />
    </IconWrapper>
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
