import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { Flex } from 'components/Flex'
import { LeftSide } from 'content/LeftSide'
import { CenterSide } from 'content/CenterSide'
import { Portfolio } from 'content/Portfolio'
import { WorkHistory } from 'content/WorkHistory'
import { Route, Routes, useLocation } from 'react-router-dom'
import { PORTFOLIO_KEYS, portfolioItemsByKey } from 'constants/constants'
import { FrfiPortfolio } from 'content/PortfolioProjects/FrfiPortfolio'
import { GravisPortfolio } from 'content/PortfolioProjects/GravisPortfolio'
import { RightSide } from 'content/RightSide'
import { Header } from 'content/Header'
import { AnimationWrapper } from 'components/AnimationWrapper'
import { ErpPortfolio } from 'content/PortfolioProjects/ErpPortfolio'

const Container = styled(Flex)`
  @media screen and (min-width: 1315px) {
    > div:not(:last-child) {
      margin-right: 30px;
    }
  }

  @media screen and (max-width: 1315px) {
    padding-top: 80px;
  }
`

const AdditionalContainer = styled(Box)`
  width: 1250px;

  @media screen and (max-width: 1726px) {
    width: 100%;
  }
`

const RightSideWrapper = styled(Box)`
  @media screen and (max-width: 1315px) {
    display: none;
  }
`

const StyledFlex = styled(Flex)`
  @media screen and (max-width: 1315px) {
    width: 100%;
    padding: 0 40px;
  }
`

const ScrollToTop = (): null => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export const TopContent = () => {
  return (
    <>
      <Header />
      <Container justifyContent="space-between" id="home">
        <RightSideWrapper>
          <AnimationWrapper>
            <LeftSide />
          </AnimationWrapper>
        </RightSideWrapper>
        <StyledFlex
          flexDirection="column"
          alignItems="center"
          width="1250px"
          mb="60px"
        >
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AnimationWrapper>
                    <CenterSide />
                  </AnimationWrapper>
                  <Box mt="70px">
                    <AnimationWrapper>
                      <Portfolio />
                    </AnimationWrapper>
                  </Box>
                  <Box mt="70px" width="100%">
                    <WorkHistory />
                  </Box>
                </>
              }
            />
            <Route
              path={portfolioItemsByKey[PORTFOLIO_KEYS.FRFI].href}
              element={
                <AdditionalContainer>
                  <FrfiPortfolio />
                </AdditionalContainer>
              }
            />
            <Route
              path={portfolioItemsByKey[PORTFOLIO_KEYS.GRAVIS].href}
              element={
                <AdditionalContainer>
                  <GravisPortfolio />
                </AdditionalContainer>
              }
            />
            <Route
              path={portfolioItemsByKey[PORTFOLIO_KEYS.ERP].href}
              element={
                <AdditionalContainer>
                  <ErpPortfolio />
                </AdditionalContainer>
              }
            />
          </Routes>
        </StyledFlex>
        <RightSideWrapper>
          <RightSide />
        </RightSideWrapper>
      </Container>
    </>
  )
}
