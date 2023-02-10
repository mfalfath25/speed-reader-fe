import React from 'react'
import { useLocation } from 'react-router-dom'
import { checkCurrentPathname } from '../../logic/utils'
import { BackButton } from '../atoms'

interface TitleProps {
  pageTitle?: string
  children?: React.ReactNode
}

const hideBackButton = ['home', 'auth', 'result', 'simulate', 'comprehension']

export const Title = ({ pageTitle, children }: TitleProps) => {
  const location = useLocation()

  const renderBackButton = checkCurrentPathname(
    hideBackButton,
    location.pathname
  )

  return (
    <>
      <div className="navbar">
        {renderBackButton === false ? <BackButton /> : null}
        <span className="mx-auto text-xl font-semibold sm:text-2xl">
          {pageTitle}
        </span>
        {children}
      </div>
    </>
  )
}
