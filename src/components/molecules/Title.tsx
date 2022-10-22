import React from 'react'
import { BackButton } from '../atoms'

interface TitleProps {
  pageTitle?: string
  children?: React.ReactNode
}

export const Title = ({ pageTitle, children }: TitleProps) => {
  return (
    <>
      <div className="navbar bg-base-100">
        <BackButton />
        <span className="mx-auto font-semibold text-lg">{pageTitle}</span>
        {children}
      </div>
    </>
  )
}
