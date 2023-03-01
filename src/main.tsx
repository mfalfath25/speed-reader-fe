import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { ToastStyles } from './components/atoms'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { registerSW } from 'virtual:pwa-register'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      retry: 1,
      staleTime: 1000,
      // refetchInterval: 1000,
    },
  },
})

const updateSW = registerSW({
  onOfflineReady() {
    console.log('App is ready for offline usage.')
  },
  onNeedRefresh() {
    if (confirm('New content available. Updating SW')) {
      updateSW(true)
    }
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            style: ToastStyles,
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
