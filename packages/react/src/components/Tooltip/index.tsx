import { ComponentProps, ReactNode } from 'react'
import * as ToolTipW from '@radix-ui/react-tooltip'
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  trigger: ReactNode
  content: string
  open?: boolean
}

export function Tooltip({ trigger, open, content, ...props }: TooltipProps) {
  return (
    <TooltipRoot open={open}>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent {...props}>
          {content}
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  )
}

export function TooltipProvider({ children }: { children: ReactNode }) {
  return <ToolTipW.Provider>{children}</ToolTipW.Provider>
}

Tooltip.displayName = 'Tooltip'
