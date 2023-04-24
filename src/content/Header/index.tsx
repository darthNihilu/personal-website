import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/Flex'
import { RightSide } from 'content/RightSide'
import { LeftSide } from 'content/LeftSide'
import { Box } from 'components/Box'

const Container = styled(Flex)`
  @media screen and (min-width: 1315px) {
    display: none;
  }

  height: 80px;
  width: 100%;
  background-color: white;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

  #nav-icon2 {
    width: 60px;
    height: 45px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    scale: 0.7;
  }

  #nav-icon2 span {
    display: block;
    position: absolute;
    height: 5px;
    width: 50%;
    background: #343434;
    opacity: 1;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  #nav-icon2 span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  #nav-icon2 span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  #nav-icon2 span:nth-child(1),
  #nav-icon2 span:nth-child(2) {
    top: 0px;
  }

  #nav-icon2 span:nth-child(3),
  #nav-icon2 span:nth-child(4) {
    top: 18px;
  }

  #nav-icon2 span:nth-child(5),
  #nav-icon2 span:nth-child(6) {
    top: 36px;
  }

  #nav-icon2.open span:nth-child(1),
  #nav-icon2.open span:nth-child(6) {
    transform: rotate(45deg);
  }

  #nav-icon2.open span:nth-child(2),
  #nav-icon2.open span:nth-child(5) {
    transform: rotate(-45deg);
  }

  #nav-icon2.open span:nth-child(1) {
    left: 5px;
    top: 7px;
  }

  #nav-icon2.open span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }

  #nav-icon2.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  #nav-icon2.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  #nav-icon2.open span:nth-child(5) {
    left: 5px;
    top: 29px;
  }

  #nav-icon2.open span:nth-child(6) {
    left: calc(50% - 5px);
    top: 29px;
  }
`

export const Header = () => {
  const [isLeftSideActive, setLeftSideActive] = React.useState(false)

  return (
    <Container>
      <Box
        onClick={() => setLeftSideActive((prev) => !prev)}
        width="36px"
        height="36px"
        style={{ cursor: 'pointer', userSelect: 'none' }}
        id="nav-icon2"
        className={isLeftSideActive ? 'open' : ''}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {/*<BurgerIcon width="36px" height="36px" />*/}
      </Box>
      <LeftSide active={isLeftSideActive} />
      <RightSide />
      <div />
    </Container>
  )
}
