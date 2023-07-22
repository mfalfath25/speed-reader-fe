import React from 'react'
import logo from '../../assets/logo/SpeedReader.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div className="navbar justify-center p-0">
        <Link to="/">
          <img
            src={logo}
            className="mt-0 h-7 w-full sm:mt-6 sm:h-9"
            alt="Logo"
          />
        </Link>
      </div>
    </>
  )
}
