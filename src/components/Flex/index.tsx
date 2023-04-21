import styled from 'styled-components';



import { Box } from '../Box'

export const Flex = styled(Box)<{ gap?: string }>`
  display: flex;

  ${({ gap }) => (gap ? `gap: ${gap};` : '')}
`
