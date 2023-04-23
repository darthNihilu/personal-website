import React, { useContext, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from 'components/Box'
import meTransparent from 'assets/images/me-transparent.png'
import { DefaultText } from 'components/DefaultText'
import { useTranslation } from 'react-multi-lang'
import { ThemeContext } from 'App'
import { THEME_TYPES } from 'components/Theme'

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
  background-color: #fff;
  height: 467px;
  position: relative;
  padding: 90px 60px 74px 60px;
  border-radius: 0 0 12px 12px;

  animation: ${show} 1s ease-in-out forwards;
`

const Image = styled.img`
  position: absolute;
  right: 40px;
  bottom: 0;
  height: 90%;
  width: auto;
`

const FunnyContainer = styled(Box)`
  position: absolute;
  right: 320px;
  bottom: 300px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  border-radius: 16px;
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
