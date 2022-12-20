import React from 'react'
import toast from 'react-hot-toast'

export const ToastStyles = {
  background: '#333',
  color: '#fff',
}

export const ToastAlert = (message: string, type: string, duration?: number) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        duration: duration,
      })
      break
    case 'error':
      toast.error(message, {
        duration: duration,
      })
      break
    case 'loading':
      toast.loading(message, {
        duration: duration,
      })
      break
    case 'promise':
      toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
        loading: 'Loading',
        success: message,
        error: message + ' gagal',
      })
  }
}
