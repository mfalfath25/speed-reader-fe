import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../logic/utils'
import { Navbar, Title } from '../molecules'
import { Home } from './Home'

export const Base = () => {
  const location = useLocation()
  return (
    <>
      <div className="container h-screen">
        <Navbar />
        {location.pathname !== '/' ? (
          <>
            <Title pageTitle={capitalizeFirstLetter(location.pathname)} />
            <div className="my-auto p-2 mt-0 sm:mt-20">
              <Outlet />
            </div>
          </>
        ) : (
          <>
            <div className="p-2 pt-0 mt-0">
              <Home />
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Base
