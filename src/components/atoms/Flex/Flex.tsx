import styled, { css, DefaultTheme } from 'styled-components'
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps
} from 'styled-system'

export interface Props
  extends SpaceProps,
    DefaultTheme,
    LayoutProps,
    FontSizeProps,
    FontWeightProps {
  variant?: 'auto' | 'centralized' | 'fullCentralized'
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
  height?: string
  padding?: string
  backgroundColor?: string
  fullHeight?: boolean
  flex?: number
}

const flexVariations: { [index: string]: any } = {
  auto: css``,
  centralized: css`
    justify-content: center;
    align-items: center;
  `,
  fullCentralized: css`
    justify-content: center;
    align-items: center;
    height: 100vh;
  `
}

export const Flex = styled.div<Props>`
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}

  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  height: ${props => props.height};
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
  flex: ${props => props.flex};
  
  ${({ variant }) => flexVariations[variant || 'auto']}

  ${({ fullHeight }) =>
    !!fullHeight &&
    css`
      height: 100vh;
    `}
`
