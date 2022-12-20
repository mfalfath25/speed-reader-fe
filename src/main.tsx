import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { ToastStyles } from './components/atoms'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: ToastStyles,
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
)
