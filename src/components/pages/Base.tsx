import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../logic/utils'
import { Navbar, Title } from '../molecules'
import { Home } from './Home'

export const Base = () => {
  let location = useLocation()
  return (
    <>
      <div className="container h-screen">
        <Navbar />
        {location.pathname !== '/' && (
          <Title pageTitle={capitalizeFirstLetter(location.pathname)} />
        )}
        {location.pathname === '/' ? <Home /> : <Outlet />}
      </div>
    </>
  )
}

export default Base
