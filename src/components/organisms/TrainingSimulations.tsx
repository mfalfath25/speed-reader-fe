import React from 'react'
import { useLocation } from 'react-router-dom'
import { ModeBlind, ModeCustom, ModeNormal } from '../molecules'

export const TrainingSimulations = () => {
  const location = useLocation()

  const renderSimulation = () => {
    switch (location.pathname) {
      case '/training/normal/simulate':
        return <ModeNormal />
      case '/training/blind/simulate':
        return <ModeBlind />
      case '/training/custom/simulate':
        return <ModeCustom />
    }
  }

  return <>{renderSimulation()}</>
}
