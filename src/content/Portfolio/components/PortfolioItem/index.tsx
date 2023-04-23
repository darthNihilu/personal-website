import React from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { PortfolioItemType } from 'constants/constants'
import { DefaultText } from 'components/DefaultText'
import { Flex } from 'components/Flex'
import { Link } from 'react-router-dom'

const Wrapper = styled(Box)`
  width: 410px;
  height: 250px;
  background-color: aqua;
  cursor: pointer;
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
  background-color: aqua;
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
  href
}) => {
  return (
    <Wrapper as={Link} to={href}>
      <Container backgroundImageUrl={backgroundImage} className="container" />
      <HoverContainer>
        <DefaultText fontSize="32px" fontWeight={600}>
          {title}
        </DefaultText>
        <DefaultText fontSize="26px" fontWeight={600}>
          {description}
        </DefaultText>
      </HoverContainer>
    </Wrapper>
  )
}
