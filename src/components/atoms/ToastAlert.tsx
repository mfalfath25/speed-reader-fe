import toast from 'react-hot-toast'

export const ToastStyles = {
  background: '#333',
  color: '#fff',
}

export const ToastAlert = (
  message: string,
  type: string,
  duration: number = 1000
) => {
  const toastFunctions = {
    success: toast.success,
    error: toast.error,
    loading: toast.loading,
    promise: () =>
      toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
        loading: 'Loading',
        success: message,
        error: message + ' gagal',
      }),
  }

  const toastFunction = toastFunctions[type as keyof typeof toastFunctions]
  toastFunction(message, { duration })
}
