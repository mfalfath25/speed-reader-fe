import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTrainingStore } from '../../store/TrainingStore'
import { checkCurrentPathname } from '../../logic/utils'
import { BackButton } from '../atoms'

interface TitleProps {
  pageTitle?: string
  children?: React.ReactNode
}

const hideBackButton = ['result', 'simulate', 'comprehension', 'settings']

export const Title = ({ pageTitle, children }: TitleProps) => {
  const location = useLocation()
  const { animationStatus } = useTrainingStore()

  const renderBackButton = checkCurrentPathname(hideBackButton, location.pathname)
  return (
    <>
      <div className="navbar bg-base-100">
        {renderBackButton === false && pageTitle !== 'Home' ? (
          <BackButton isAnimationActive={animationStatus} />
        ) : null}
        {/* {pageTitle !== 'Home' && <BackButton isAnimationActive={animationStatus} />} */}
        <span className="mx-auto font-semibold text-xl sm:text-2xl">{pageTitle}</span>
        {children}
      </div>
    </>
  )
}
