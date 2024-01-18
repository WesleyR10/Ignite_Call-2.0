import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Toast,
  ToastProps,
  ToastProvider,
} from '@wesley-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          <Button onClick={() => setOpen((state) => !state)}>Show Toast</Button>
          <ToastProvider>
            {Story({
              args: {
                open,
                title: 'Agendamento realizado',
                description: 'Quarta-feira, 23 de Outubro às 16h',
              },
            })}
          </ToastProvider>
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
