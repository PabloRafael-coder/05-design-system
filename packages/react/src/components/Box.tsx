import { styled } from '../styles'
import { VariantProps } from '@stitches/react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends VariantProps<typeof Box> {}
