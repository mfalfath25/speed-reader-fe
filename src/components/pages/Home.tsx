import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Navbar, Title } from '../molecules'

export const Home = () => {
  let location = useLocation()
  console.log(location)
  return (
    <>
      <div className="container h-screen">
        <Navbar />
        {location.pathname !== '/' && <Title />}
        <Outlet />
      </div>
    </>
  )
}

export default Home
