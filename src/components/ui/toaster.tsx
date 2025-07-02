import React from "react";
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, open, ...props }) {
        return (
          <React.Fragment key={id}>
            {open && (
              <div
                className="fixed inset-0 z-[99] bg-black/40"
                onClick={() => dismiss(id)}
              />
            )}
            <Toast open={open} variant="blue" {...props}>
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              {action}
              <ToastClose />
            </Toast>
          </React.Fragment>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
