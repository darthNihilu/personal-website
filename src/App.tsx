import React from 'react'
import styled from 'styled-components'
import { Box } from 'components/Box'
import { Reset } from 'styled-reset'
import { GlobalStyle } from 'GlobalStyle'
import { TopContent } from 'content/TopContent'

const Wrapper = styled(Box)``

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Wrapper>
        <TopContent />
      </Wrapper>
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default App
