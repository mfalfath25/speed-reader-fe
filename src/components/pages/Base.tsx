import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { titles } from '../../static/staticData'
import { LoaderBar } from '../atoms'
import { Navbar, Title } from '../molecules'

export const Base = () => {
  const location = useLocation()
  const [title, setTitle] = useState('')

  const matchTitle = (path: string) => {
    const match = titles.find((title) => {
      const regex = new RegExp(`^${title.path.replace(/:[^/]+/g, '([^/]+)')}$`)
      return regex.test(path)
    })
    if (match) {
      setTitle(match.title)
    }
  }

  useEffect(() => {
    matchTitle(location.pathname)
  }, [location])

  return (
    <>
      <div className="container flex h-screen flex-col">
        <LoaderBar />
        <Navbar />
        <Title pageTitle={title} />
        <div className="my-auto mt-0 flex flex-1 flex-col p-2 sm:mt-4">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Base
