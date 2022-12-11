import React from 'react'
import { useLocation } from 'react-router-dom'
import { FormLogin, FormRegister } from '../molecules'

export const Authenticate = () => {
  const location = useLocation()

  const renderForm = () => {
    switch (location.pathname) {
      case '/login':
        return <FormLogin />
      case '/register':
        return <FormRegister />
    }
  }

  return <>{renderForm()}</>
}
