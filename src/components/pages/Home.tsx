import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../logic/utils'
import { Navbar, Title } from '../molecules'

export const Home = () => {
  let location = useLocation()
  return (
    <>
      <div className="container h-screen">
        <Navbar />
        {location.pathname !== '/' && (
          <Title pageTitle={capitalizeFirstLetter(location.pathname)} />
        )}
        <Outlet />
      </div>
    </>
  )
}

export default Home
