import React, { useContext, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from 'components/Box'
import meTransparent from 'assets/images/me-transparent.png'
import { DefaultText } from 'components/DefaultText'
import { useTranslation } from 'react-multi-lang'
import { ThemeContext } from 'App'
import { THEME_TYPES } from 'components/Theme'
import backgroundImage from 'assets/images/topBackground.png'

const show = keyframes`
  from {
    top: -20%;
  }
  to {
    top: 0;
  }
`

const Container = styled(Box)`
  width: 1250px;
  //width: 100%;
  //background-color: #fff;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
  background-position: center;

  height: 467px;
  position: relative;
  padding: 90px 60px 74px 60px;
  border-radius: 0 0 12px 12px;
  animation: ${show} 1s ease-in-out forwards;

  > div {
    background-color: white;
    :first-child {
      width: fit-content;
    }
  }

  @media screen and (max-width: 1726px) {
    width: 100%;
  }

  @media screen and (max-width: 1350px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    img {
      display: none;
    }
  }

  @media screen and (max-width: 1315px) {
    margin-top: 15px;
    border-radius: 12px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px;
    > div:first-child {
      font-size: 36px;
      @media screen and (max-width: 560px) {
        font-size: 24px;
      }
    }

    > div:not(:first-child) {
      font-size: 14px;
      width: 100%;
      @media screen and (max-width: 560px) {
        font-size: 12px;
      }
    }
  }
`

const Image = styled.img`
  position: absolute;
  right: 40px;
  bottom: 0;
  height: 90%;
  width: auto;
`

export const CenterSide = () => {
  const { switchTheme } = useContext(ThemeContext)
  useEffect(() => {
    switchTheme(THEME_TYPES.DEFAULT)
  }, [switchTheme])
  const t = useTranslation()
  return (
    <Container>
      <DefaultText fontSize="48px" fontWeight="700" lineHeight="110%">
        {t('introduction')}
        <br />
        {t('frontEndDeveloper')}
      </DefaultText>
      <DefaultText fontSize="16px" variant="secondary" width="450px" mt="18px">
        {t('descriptionAboutMe')}
      </DefaultText>
      <Image src={meTransparent} alt="" />
    </Container>
  )
}
