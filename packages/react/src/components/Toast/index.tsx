import * as ToastW from '@radix-ui/react-toast'
import { ComponentProps, ReactNode } from 'react'
import { X } from 'phosphor-react'
import {
  ToastContainer,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
  ToastContent,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  open: boolean
}

export function Toast({ title, description, open, ...props }: ToastProps) {
  return (
    <>
      <ToastContainer open={open} {...props}>
        <ToastContent>
          <ToastTitle> {title} </ToastTitle>
          <ToastDescription> {description} </ToastDescription>
        </ToastContent>
        <ToastClose asChild>
          <X size={20} />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </>
  )
}

export function ToastProvider({ children }: { children: ReactNode }) {
  return <ToastW.Provider>{children}</ToastW.Provider>
}

Toast.displayName = 'Toast' // Nome que vai aparecer no storybook
