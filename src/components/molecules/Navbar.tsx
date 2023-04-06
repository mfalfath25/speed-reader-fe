import React from 'react'
import logo from '../../assets/logo/SpeedReader.png'
import { Link } from 'react-router-dom'
// import { ThemeToggler } from '../atoms'
// import { navMenu } from '../../static/staticData'

export const Navbar = () => {
  return (
    <>
      <div className="navbar justify-center p-0">
        <Link to="/">
          <img
            src={logo}
            className="mt-0 h-7 w-auto sm:mt-6 sm:h-9"
            alt="Logo"
          />
        </Link>
        {/* <div className="navbar-end">
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} className="font-semibold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="menu menu-horizontal p-0 hidden md:flex">
            {navMenu.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="font-semibold">
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <ThemeToggler />
            </li>
          </ul>
        </div> */}
      </div>
    </>
  )
}
