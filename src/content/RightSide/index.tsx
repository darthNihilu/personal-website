import {HomeIcon} from 'assets/svg-icons/Icons/HomeIcon'
import {PortfolioIcon} from 'assets/svg-icons/Icons/PortfolioIcon'
import {WorkHistoryIcon} from 'assets/svg-icons/Icons/WorkHistoryIcon'
import {AnimationWrapper} from 'components/AnimationWrapper'
import {Box} from 'components/Box'
import {Flex} from 'components/Flex'
import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import styled, {css, keyframes} from 'styled-components'

const show = keyframes`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
`

const Wrapper = styled(Box)`
  position: relative;
  height: 100%;
  min-width: 108px;

  animation: ${show} 1s ease-in-out forwards;

  @media screen and (max-width: 1315px) {
    animation: none;
  }
`

const Container = styled(Flex)`
  padding: 50px 40px;
  position: fixed;
  background-color: ${({ theme }) => theme.additionBackgroundColor};
  max-width: 108px;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  //justify-content: space-between;
  justify-content: center;

  @media screen and (min-width: 1315px) {
    > div > *:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 1315px) {
    position: relative;
    flex-direction: row;
    height: 100%;
    background-color: transparent;
    width: 100%;
    padding: 0;

    > div {
      flex-direction: row;
    }

    > div > *:not(:last-child) {
      margin-right: 32px;
    }
  }
`

const IconWrapper = styled(Flex)<{ active?: boolean }>`
  background-color: ${({ theme }) => theme.rightSideIconBackground};
  border-radius: 100%;
  padding: 10px;
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  ${({ active }) =>
    active
      ? 'background-color: #FFB400; cursor: default;'
      : css`
          :hover {
            background-color: ${({ theme }) =>
              theme.rightSideIconBackgroundHover};
          }
        `}

  > svg * {
    fill: ${({ active }) => (active ? '' : '#767676')};
  }
`

export const RightSide = () => {
  const [activeId, setActiveId] = useState('home')

  const location = useLocation()

  const checkScrollPosition = () => {
    const offset = 200
    const home = document.getElementById('home') as any
    const portfolio = document.getElementById('portfolio') as any
    const works = document.getElementById('workHistory') as any

    if (!home || !portfolio || !works) return

    const homeTop = home.getBoundingClientRect().top
    const portfolioTop = portfolio.getBoundingClientRect().top
    const worksTop = works.getBoundingClientRect().top

    if (homeTop <= offset && portfolioTop > offset) {
      setActiveId('home')
    } else if (portfolioTop <= offset && worksTop > offset) {
      setActiveId('portfolio')
    } else if (worksTop <= offset) {
      setActiveId('workHistory')
    } else {
      setActiveId('')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition)

    return () => {
      window.removeEventListener('scroll', checkScrollPosition)
    }
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') setActiveId('')
  }, [location])

  return (
    <AnimationWrapper>
      <Wrapper>
        <Container>
          {/*<LanguageSwitcher />*/}
          <Flex flexDirection="column">
            <IconWrapper active={activeId === 'home'} as="a" href="/#home">
              <HomeIcon width="24px" height="24px" />
            </IconWrapper>
            <IconWrapper
              active={activeId === 'portfolio'}
              as="a"
              href="/#portfolio"
            >
              <PortfolioIcon width="24px" height="24px" />
            </IconWrapper>
            <IconWrapper
              active={activeId === 'workHistory'}
              as="a"
              href="/#workHistory"
            >
              <WorkHistoryIcon width="24px" height="24px" />
            </IconWrapper>
          </Flex>
          {/*<div />*/}
        </Container>
      </Wrapper>
    </AnimationWrapper>
  )
}
