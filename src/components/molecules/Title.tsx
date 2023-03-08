import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { checkCurrentPathname } from '../../logic/utils'
import { BackButton } from '../atoms'

interface TitleProps {
  pageTitle?: string
  children?: React.ReactNode
}

const hideBackButton = ['home', 'auth', 'result', 'comprehension']

export const Title = ({ pageTitle, children }: TitleProps) => {
  const location = useLocation()
  const [renderBackButton, setRenderBackButton] = useState(false)

  useEffect(() => {
    setRenderBackButton(
      !checkCurrentPathname(hideBackButton, location.pathname)
    )
  }, [location.pathname])

  return (
    <>
      <div className="navbar">
        {renderBackButton ? <BackButton /> : null}
        <span className="mx-auto text-xl font-semibold sm:text-2xl">
          {pageTitle}
        </span>
        {children}
      </div>
    </>
  )
}
