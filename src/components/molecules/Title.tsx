import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { checkCurrentPathname } from '../../logic/utils'
import { BackButton, HomeButton } from '../atoms'

interface TitleProps {
  pageTitle?: string
  children?: React.ReactNode
}

const hideBackButton = ['/home', '/auth', '/result', '/comprehension']
const hideHomeButton = [
  '/home',
  '/auth',
  '/login',
  '/register',
  '/guide',
  '/training',
  '/history',
  '/profile',
]

export const Title = ({ pageTitle, children }: TitleProps) => {
  const location = useLocation()
  const [renderBackButton, setRenderBackButton] = useState(false)
  const [renderHomeButton, setRenderHomeButton] = useState(false)

  useEffect(() => {
    setRenderBackButton(
      !checkCurrentPathname(hideBackButton, location.pathname)
    )
    setRenderHomeButton(
      !checkCurrentPathname(hideHomeButton, location.pathname)
    )
  }, [location.pathname])

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          {renderBackButton ? <BackButton /> : null}
        </div>
        <div className="navbar-center lg:flex">
          <span className="mx-auto text-xl font-semibold sm:text-2xl">
            {pageTitle}
          </span>
        </div>
        <div className="navbar-end">
          {renderHomeButton ? <HomeButton /> : null}
        </div>
        {children}
      </div>
    </>
  )
}
