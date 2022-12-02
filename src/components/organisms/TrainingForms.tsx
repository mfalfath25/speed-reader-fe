import React from 'react'
import { useLocation } from 'react-router-dom'
import { FormBlind, FormCustom, FormNormal } from '../molecules'

export const TrainingForms = () => {
  const location = useLocation()

  const renderForm = () => {
    switch (location.pathname) {
      case '/training/normal':
        return <FormNormal />
      case '/training/blind':
        return <FormBlind />
      case '/training/custom':
        return <FormCustom />
    }
  }

  return <>{renderForm()}</>
}
