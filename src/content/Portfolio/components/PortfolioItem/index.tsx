import React from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { PortfolioItemType } from 'constants/constants'
import { DefaultText } from 'components/DefaultText'
import { Flex } from 'components/Flex'
import { Link } from 'react-router-dom'

const Wrapper = styled(Box)<{ disabled?: boolean }>`
  width: 410px;
  height: 250px;
  background-color: white;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  overflow: hidden;
  border-radius: 12px;
  text-decoration: none;
  position: relative;

  :hover {
    .container {
      transform: scale(1.3);
    }
  }
`

const Container = styled(Box)<{ backgroundImageUrl: string }>`
  width: 410px;
  height: 250px;
  background-color: white;
  background-image: url(${({ backgroundImageUrl }) => backgroundImageUrl});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 300ms ease-in-out;
`

const HoverContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 300ms ease-in-out, background-color 300ms ease-in-out;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  > div {
    color: white;
  }

  :hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const PortfolioItem: React.FC<PortfolioItemType> = ({
  title,
  description,
  backgroundImage,
  href,
  disabled
}) => {
  return (
    <Wrapper as={disabled ? '' : Link} to={href} disabled={disabled}>
      <Container backgroundImageUrl={backgroundImage} className="container" />
      <HoverContainer>
        <DefaultText fontSize="32px" fontWeight={600}>
          {title}
        </DefaultText>
        <DefaultText fontSize="20px" fontWeight={600} p="0 20px">
          {description}
        </DefaultText>
      </HoverContainer>
    </Wrapper>
  )
}
