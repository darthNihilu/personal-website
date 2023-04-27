import React from 'react'
import styled, { css } from 'styled-components'
import { Flex } from 'components/Flex'
import { DefaultText } from 'components/DefaultText'
import { getLanguage, setLanguage } from 'react-multi-lang'

const Container = styled(Flex)``

const ItemWrapper = styled(Flex)<{ active?: boolean }>`
  background-color: ${({ theme }) => theme.rightSideIconBackground};
  border-radius: 100%;
  padding: 10px;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  max-width: 36px;
  max-height: 36px;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background-color 0.2s ease-in-out;
  margin-bottom: 0 !important;

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

export const LanguageSwitcher = () => {
  const currentLanguage = getLanguage()

  return (
    <Container>
      <ItemWrapper
        fontSize="12px"
        mr="4px"
        onClick={() => setLanguage('en')}
        active={currentLanguage === 'en'}
      >
        EN
      </ItemWrapper>
      <ItemWrapper
        fontSize="12px"
        onClick={() => setLanguage('ru')}
        active={currentLanguage === 'ru'}
      >
        RU
      </ItemWrapper>
    </Container>
  )
}
