import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  display: 'flex',
  justifyContent: 'center',
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '$3 $4',
  borderRadius: '$sm',

  color: '$gray100',
  backgroundColor: '$gray900',

  fontSize: '$md',
  fontWeight: '$regular',
  fontFamily: '$default',
})

export const TooltipArrow = styled(Tooltip.Arrow, {})
