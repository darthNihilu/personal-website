import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { DefaultText } from 'components/DefaultText'
import { THEME_TYPES } from 'components/Theme'
import { ThemeContext } from 'App'

const Container = styled(Box)`
  margin-top: 50px;
`

export const FrfiPortfolio = () => {
  const { switchTheme } = useContext(ThemeContext)
  useEffect(() => {
    switchTheme(THEME_TYPES.DEFAULT)
  }, [switchTheme])

  return (
    <Container>
      <DefaultText>FairFi</DefaultText>
    </Container>
  )
}
