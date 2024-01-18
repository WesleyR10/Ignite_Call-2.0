import type { StoryObj, Meta } from '@storybook/react'
import {
  Tooltip,
  TooltipProps,
  TooltipProvider,
  Text,
} from '@wesley-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    trigger: (
      <Text
        css={{
          display: 'inline-block',
          border: '1px solid $gray400',
          padding: '$2',
          borderRadius: '$2',
        }}
      >
        Hover here
      </Text>
    ),
    content: '21 de Outubro - Disponível',
  },
  decorators: [
    (Story) => {
      return <TooltipProvider>{Story()}</TooltipProvider>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
